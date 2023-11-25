import { defineStore } from 'pinia'
import { useSettingsStore } from '@/stores/settings'

//using setup stores, rather than option stores:
export const useSentencesStore = defineStore('sentences', {
    state: () => {
        return {
            fetchedOriginalText: "Loading...",
            slicedOriginalText: "Loading...",
            fetchedTranslatedText: "Loading...",
            fetchedOriginalPreload: "Loading...",
            slicedOriginalPreload: "Loading...",
            fetchedRussianPreload: "Loading...",
        }
      },
    actions: {
        /*
        TODO:
        Add sliced text
        Add preload
        */

        async changeSentence() {
            //Import settings store to check required languages: 
            const settingsStore = useSettingsStore()
 
            //Create a function to fetch random API page for required languages:
            function urlBuilder(userLang: string, sentLang: string): string {
                let randomPage = String(Math.floor(Math.random() * 101))
                //Since there is no API page 0 (apparently this may happen):
                if (randomPage == 0) {
                    randomPage = 1
                }
                return 'https://api.dev.tatoeba.org/unstable/sentences?lang=' + sentLang + '&trans=' + userLang + '&page=' + randomPage
            }
            
            //Check console.log(fetchedObject.data[randomElement]) for JSON structure:
            interface fetchedObjectStructure {  
                //Only list necessary objects:
                data: Array<{
                    text: string,
                    translations: 
                        Array<
                            Array<
                                {text:string}
                            >
                        >
                    }>;
                //Could be useful later:
                paging: object;
            }    
            
            //Fetch random API page:
            const fetchedObject: fetchedObjectStructure = await $fetch<fetchedObjectStructure>(
                urlBuilder(settingsStore.userLanguage, settingsStore.sentenceLanguage)
                )
                .catch((error) => error.data)
            
            //Get random sentence and translation from the fethced page:
            const randomElement = Math.floor(Math.random() * 10)
            this.fetchedOriginalText = fetchedObject.data[randomElement].text

            //Sometimes the [0][0] object is empty for translations to russian language. Workaround:
            try {
                try {
                    this.fetchedTranslatedText = fetchedObject.data[randomElement].translations[0][0].text
                    //console.log("OBJECT_DEFAULT")
                } catch (err) {
                    this.fetchedTranslatedText = fetchedObject.data[randomElement].translations[1][0].text
                    //console.log("OBJECT_WORKAROUND")
                }
            //In case both #0 and #1 translations are empty (it has never happened so far):
            } catch (err) {
                this.fetchedRussianText = "error (handle later)"
            }

            //Debug data:
            //console.log(fetchedObject.data[randomElement])
            //console.log(this.fetchedTranslatedText)
        },
    },
  })
