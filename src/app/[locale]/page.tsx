"use server";

import Gallery from "@/components/Gallery";
import { fetchResults } from "@/app/api/fetchResults";
import I18NProvider from "@/components/i18nProvider";
import { getCurrentLocale } from "../../../translations/server";

export type SearchResult = {
  public_id: string;
  filename: string;
  tags: any[];
  context: any;
};

export default async function Home() {
  let results: SearchResult[] = [];
  const locale = getCurrentLocale();

  await fetchResults("").then((response) => (results = response));

  return (
    <I18NProvider locale={locale}>
      <main className="min-h-screen p-5">
        <div>
          <Gallery results={results} fetchFolders={fetchResults} />
        </div>
      </main>
    </I18NProvider>
  );
}
