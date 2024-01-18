export function urlBuilder(userLang: string, sentLang: string): string {
    // Get random API page for required languages:
    let randomPage = String(Math.floor(Math.random() * 101))

    // Page 0 doesn't exist in API:
    if (randomPage == "0") {
        randomPage = "1"
    }

    return 'https://api.dev.tatoeba.org/unstable/sentences?lang=' + sentLang + '&trans=' + userLang + '&page=' + randomPage

}