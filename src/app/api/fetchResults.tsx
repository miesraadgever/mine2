"use server"
import cloudinary from "cloudinary";
import { SearchResult } from "@/app/page";

export const fetchResults = async (folder: string): Promise<SearchResult[]> => {
    let expression;

    if (folder === "") {
        expression = "resource_type:image";
    } else {
        expression = `resource_type:image AND folder=${folder}`;
    }

    const result = await cloudinary.v2.search
        .expression(`${expression}`)
        .sort_by("public_id", "desc")
        .with_field("metadata")
        .with_field("image_metadata")
        .with_field("context")
        .max_results(30)
        .execute() as { resources: SearchResult[] };

    return result.resources;
};
