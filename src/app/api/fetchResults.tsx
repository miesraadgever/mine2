"use server";
import cloudinary from "cloudinary";
import { SearchResult } from "@/app/[locale]/page";

export const fetchResults = async (folder: string): Promise<SearchResult[]> => {
  let expression;

  if (folder === "") {
    //search in folders mi_ne, mies and neeltje
    expression =
      "resource_type:image AND folder:mi_ne OR folder:mies OR folder:neeltje";
  } else {
    expression = `resource_type:image AND folder=${folder}`;
  }

  const result = (await cloudinary.v2.search
    .expression(`${expression}`)
    .sort_by("public_id", "desc")
    .with_field("metadata")
    .with_field("image_metadata")
    .with_field("context")
    .execute()) as { resources: SearchResult[] };

  const sortByAlt = (a: SearchResult, b: SearchResult) => {
    //TODO implement fix when there are no results!!
    if (!!a.context && !!b.context) {
      const altA = a.context.alt;
      const altB = b.context.alt;

      const yearA = parseInt(altA.split(".")[1]);
      const yearB = parseInt(altB.split(".")[1]);

      const monthA = parseInt(altA.split(".")[0]);
      const monthB = parseInt(altB.split(".")[0]);

      // If months are both 00, prioritize them based on years
      if (monthA === 0 && monthB === 0) {
        return yearB - yearA; // Order based on years
      } else if (monthA === 0) {
        return -1; // monthA is 00, so it should come first
      } else if (monthB === 0) {
        return 1; // monthB is 00, so it should come first
      }

      // First, compare years in descending order
      if (yearB - yearA !== 0) {
        return yearB - yearA;
      }

      // If years are equal, compare months in descending order
      return monthB - monthA;
    } else return 0;
  };

  const sorted = result.resources.toSorted(sortByAlt);

  return sorted;
};
