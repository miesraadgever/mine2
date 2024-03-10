"use server";
import cloudinary from "cloudinary";
import { SearchResult } from "@/app/[locale]/page";

export const fetchResults = async (folder: string): Promise<SearchResult[]> => {
  let expression;

  if (folder === "") {
    expression = "resource_type:image";
  } else {
    expression = `resource_type:image AND folder=${folder}`;
  }

  const result = (await cloudinary.v2.search
    .expression(`${expression}`)
    .sort_by("public_id", "desc")
    .with_field("metadata")
    .with_field("image_metadata")
    .with_field("context")
    .max_results(30)
    .execute()) as { resources: SearchResult[] };

  const sortByAlt = (a: SearchResult, b: SearchResult) => {
    const altA = a.context.alt;
    const altB = b.context.alt;

    // Extract year and month from the "mm.yyyy" format
    const [monthA, yearA] = altA.split('.')
    const [monthB, yearB] = altB.split('.')

    // Compare years in descending order
    if (yearA > yearB) {
      return -1;
    } else if (yearA < yearB) {
      return 1;
    } else {
      // If years are the same, compare months in descending order
      if (monthA > monthB) {
        return -1;
      } else if (monthA < monthB) {
        return 1;
      } else {
        // If both years and months are the same, return 0
        return 0;
      }
    }
  };

  const sorted = result.resources.toSorted(sortByAlt);

  return sorted;
};
