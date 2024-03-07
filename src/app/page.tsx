"use server";

import Gallery from "@/components/Gallery";
import {fetchResults} from "@/app/api/fetchResults";
import HomeVideoPlayer from "@/components/Video";
import Video from "@/components/Video";


export type SearchResult = {
  public_id: string;
  filename: string;
  tags: any[];
  context: any;
};


export default async function Home() {
  let results: SearchResult[] = []

  await fetchResults("").then((response) => results = response)

  return (
    <main className="min-h-screen p-5">
      <div>
        <Gallery results={results}/>
      </div>
    </main>
  );
}
