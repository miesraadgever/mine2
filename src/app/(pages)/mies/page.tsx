
"use server";

import Gallery from "@/components/Gallery";
import {fetchResults} from "@/app/api/fetchResults";


export type SearchResult = {
    public_id: string;
    filename: string;
    tags: any[];
    context: any;
};


export default async function page() {
    //fetch images from cloudinary
    let results: SearchResult[] = []

    await fetchResults("mies").then((response) => results = response)

    return (
        <main className="min-h-screen p-5">
            <div>
                <Gallery results={results}/>
            </div>
        </main>
    );
}
