export { fetchedObjectStructure };

declare global {
  interface fetchedObjectStructure {
    // Only list necessary objects:
    data: Array<{
      text: string;
      translations: Array<Array<{ text: string }>>;
    }>;
    // Could be useful for other languages:
    paging: object;
  }
}
