import type { CVData } from '@/types/cv'

const dataFiles = import.meta.glob('../data/*.json') as Record<
  string,
  () => Promise<{ default: CVData }>
>

export async function loadCVData(): Promise<CVData> {
  // Production builds always publish the sample data — that is what keeps real
  // personal details out of the public GitHub Pages deploy. Template choice is
  // a presentation concern and must not affect which data file is loaded.
  const isDemo = import.meta.env.MODE === 'production'

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
