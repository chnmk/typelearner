export async function useApiFetch(
  userLang: string,
  sentLang: string,
  pageNumber?: string | number,
): Promise<{ fetchedObj: fetchedObjectStructure }> {
  let fetchedPage: string;
  if (pageNumber === undefined) {
    // Get random API page for required languages (1-100):
    let randomPage = String(Math.floor(Math.random() * 101));

    // Page 0 doesn't exist in API:
    if (randomPage === "0") {
      randomPage = "1";
    }

    fetchedPage = randomPage;
  } else if (typeof pageNumber === "number") {
    fetchedPage = pageNumber.toString();
  } else {
    fetchedPage = pageNumber;
  }

  const url =
    "https://api.dev.tatoeba.org/unstable/sentences?lang=" +
    sentLang +
    "&trans=" +
    userLang +
    "&page=" +
    fetchedPage;

  const fetchedObj: fetchedObjectStructure =
    await $fetch<fetchedObjectStructure>(url).catch((error) => error.data);

  return { fetchedObj };
}
