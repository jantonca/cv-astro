import type { CVData } from '@/types/cv'

const dataFiles = import.meta.glob('../data/*.json') as Record<
  string,
  () => Promise<{ default: CVData }>
>

export async function loadCVData(): Promise<CVData> {
  const isDemo =
    import.meta.env.CV_TEMPLATE !== undefined ||
    import.meta.env.MODE === 'production'

  if (!isDemo && dataFiles['../data/cv.json']) {
    try {
      const personalData = await dataFiles['../data/cv.json']()
      console.log('✓ Loaded personal CV data')
      return personalData.default
    } catch (error) {
      console.log(
        'Personal CV data found but failed to load, using example data'
      )
    }
  }

  if (dataFiles['../data/cv.example.json']) {
    const exampleData = await dataFiles['../data/cv.example.json']()
    console.log('✓ Loaded example CV data')
    return exampleData.default
  }

  throw new Error(
    'No CV data found - neither cv.json nor cv.example.json are available'
  )
}
