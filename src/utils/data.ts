import type { CVData } from "@/types/cv";

export async function loadCVData(): Promise<CVData> {
  const isDemo =
    import.meta.env.CV_TEMPLATE !== undefined &&
    import.meta.env.MODE === "production";
  try {
    if (!isDemo) {
      const personalData = await import("../data/cv.json");
      return personalData.default;
    }
  } catch (error) {
    console.log(
      "Personal CV data not found or in demo mode, using example data"
    );
  }

  const exampleData = await import("../data/cv.example.json");
  return exampleData.default;
}
