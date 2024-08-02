//General imports
import { defineStore } from 'pinia';
import { reactive } from 'vue';

export const useCredential = defineStore('credential', () => {
    //States
    const items = reactive(new Map());

    //Actions
    function createCredential({
            id = items.size.toString(),
            name = 'Credential',
            urlImageEnglish = 'https://via.placeholder.com/150',
            urlImageFrench = 'https://via.placeholder.com/150',
            urlImageSpanish = 'https://via.placeholder.com/150',
            urlPDFEnglish = '',
            urlPDFFrench = '',
            urlPDFSpanish = '',
            urlImageEnglishDark = 'https://via.placeholder.com/150',
            urlImageFrenchDark = 'https://via.placeholder.com/150',
            urlImageSpanishDark = 'https://via.placeholder.com/150',
            urlPDFEnglishDark = '',
            urlPDFFrenchDark = '',
            urlPDFSpanishDark = '',
            colorShapeLight = 'var(--general-neutral-black-light)',
            colorShapeDark = 'var(--general-neutral-white-dark)',
            isOnlyRead = false,
            isDisabled = false,
            click = () => { console.log(`Credential clicked ${id}`)},
        } = {}) {
        items.set(id,{
            id,
            name,
            urlImageEnglish,
            urlImageFrench,
            urlImageSpanish,
            urlPDFEnglish,
            urlPDFFrench,
            urlPDFSpanish,
            urlImageEnglishDark,
            urlImageFrenchDark,
            urlImageSpanishDark,
            urlPDFEnglishDark,
            urlPDFFrenchDark,
            urlPDFSpanishDark,
            colorShapeLight,
            colorShapeDark,
            isOnlyRead,
            isDisabled,
            click,
        });
        return id;
    }

    function getCredential(id) {
        return items.get(id);
    }

    function updateCredential(update) {
        const { id } = update;

        items.has(id) ?
            items.set(id, { ...items.get(id), ...update }) :
            console.log('ButtonRoundFill not found');
    }

    function deleteCredential(id) {
        items.delete(id);
    }

    //Initializate
    function init() {
        createCredential({
            id: 'advanced-design-system',
            name: 'advanced-design-system',
            urlImageEnglish: '/imgs/credentials/english/advanced-design-system-english.jpg',
            urlImageFrench: '/imgs/credentials/french/advanced-design-system-french.jpg',
            urlImageSpanish: '/imgs/credentials/spanish/advanced-design-system-spanish.jpg',
            urlPDFEnglish: '/pdfs/english/advanced-design-system-english.pdf',
            urlPDFFrench: '/pdfs/french/advanced-design-system-french.pdf',
            urlPDFSpanish: '/pdfs/spanish/advanced-design-system-spanish.pdf',
            urlImageEnglishDark: '/imgs/credentials/english/advanced-design-system-english.jpg',
            urlImageFrenchDark: '/imgs/credentials/french/advanced-design-system-french.jpg',
            urlImageSpanishDark: '/imgs/credentials/spanish/advanced-design-system-spanish.jpg',
            urlPDFEnglishDark: '/pdfs/english/advanced-design-system-english.pdf',
            urlPDFFrenchDark: '/pdfs/french/advanced-design-system-french.pdf',
            urlPDFSpanishDark: '/pdfs/spanish/advanced-design-system-spanish.pdf',
        });

        createCredential({
            id: 'algorithmic-complexity-with-javascript',
            name: 'algorithmic-complexity-with-javascript',
            urlImageEnglish: '/imgs/credentials/english/algorithmic-complexity-with-javascript-english.jpg',
            urlImageFrench: '/imgs/credentials/french/algorithmic-complexity-with-javascript-french.jpg',
            urlImageSpanish: '/imgs/credentials/spanish/algorithmic-complexity-with-javascript-spanish.jpg',
            urlPDFEnglish: '/pdfs/english/algorithmic-complexity-with-javascript-english.pdf',
            urlPDFFrench: '/pdfs/french/algorithmic-complexity-with-javascript-french.pdf',
            urlPDFSpanish: '/pdfs/spanish/algorithmic-complexity-with-javascript-spanish.pdf',
            urlImageEnglishDark: '/imgs/credentials/english/algorithmic-complexity-with-javascript-english.jpg',
            urlImageFrenchDark: '/imgs/credentials/french/algorithmic-complexity-with-javascript-french.jpg',
            urlImageSpanishDark: '/imgs/credentials/spanish/algorithmic-complexity-with-javascript-spanish.jpg',
            urlPDFEnglishDark: '/pdfs/english/algorithmic-complexity-with-javascript-english.pdf',
            urlPDFFrenchDark: '/pdfs/french/algorithmic-complexity-with-javascript-french.pdf',
            urlPDFSpanishDark: '/pdfs/spanish/algorithmic-complexity-with-javascript-spanish.pdf',
        });

        createCredential({
            id: 'array-manipulation-in-javascript',
            name: 'array-manipulation-in-javascript',
            urlImageEnglish: '/imgs/credentials/english/array-manipulation-in-javascript-english.jpg',
            urlImageFrench: '/imgs/credentials/french/array-manipulation-in-javascript-french.jpg',
            urlImageSpanish: '/imgs/credentials/spanish/array-manipulation-in-javascript-spanish.jpg',
            urlPDFEnglish: '/pdfs/english/array-manipulation-in-javascript-english.pdf',
            urlPDFFrench: '/pdfs/french/array-manipulation-in-javascript-french.pdf',
            urlPDFSpanish: '/pdfs/spanish/array-manipulation-in-javascript-spanish.pdf',
            urlImageEnglishDark: '/imgs/credentials/english/array-manipulation-in-javascript-english.jpg',
            urlImageFrenchDark: '/imgs/credentials/french/array-manipulation-in-javascript-french.jpg',
            urlImageSpanishDark: '/imgs/credentials/spanish/array-manipulation-in-javascript-spanish.jpg',
            urlPDFEnglishDark: '/pdfs/english/array-manipulation-in-javascript-english.pdf',
            urlPDFFrenchDark: '/pdfs/french/array-manipulation-in-javascript-french.pdf',
            urlPDFSpanishDark: '/pdfs/spanish/array-manipulation-in-javascript-spanish.pdf',
        });

        createCredential({
            id: 'asynchronism-with-javascript',
            name: 'asynchronism-with-javascript',
            urlImageEnglish: '/imgs/credentials/english/asynchronism-with-javascript-english.jpg',
            urlImageFrench: '/imgs/credentials/french/asynchronism-with-javascript-french.jpg',
            urlImageSpanish: '/imgs/credentials/spanish/asynchronism-with-javascript-spanish.jpg',
            urlPDFEnglish: '/pdfs/english/asynchronism-with-javascript-english.pdf',
            urlPDFFrench: '/pdfs/french/asynchronism-with-javascript-french.pdf',
            urlPDFSpanish: '/pdfs/spanish/asynchronism-with-javascript-spanish.pdf',
            urlImageEnglishDark: '/imgs/credentials/english/asynchronism-with-javascript-english.jpg',
            urlImageFrenchDark: '/imgs/credentials/french/asynchronism-with-javascript-french.jpg',
            urlImageSpanishDark: '/imgs/credentials/spanish/asynchronism-with-javascript-spanish.jpg',
            urlPDFEnglishDark: '/pdfs/english/asynchronism-with-javascript-english.pdf',
            urlPDFFrenchDark: '/pdfs/french/asynchronism-with-javascript-french.pdf',
            urlPDFSpanishDark: '/pdfs/spanish/asynchronism-with-javascript-spanish.pdf',
        });

        createCredential({
            id: 'basic-css-grid',
            name: 'basic-css-grid',
            urlImageEnglish: '/imgs/credentials/english/basic-css-grid-english.jpg',
            urlImageFrench: '/imgs/credentials/french/basic-css-grid-french.jpg',
            urlImageSpanish: '/imgs/credentials/spanish/basic-css-grid-spanish.jpg',
            urlPDFEnglish: '/pdfs/english/basic-css-grid-english.pdf',
            urlPDFFrench: '/pdfs/french/basic-css-grid-french.pdf',
            urlPDFSpanish: '/pdfs/spanish/basic-css-grid-spanish.pdf',
            urlImageEnglishDark: '/imgs/credentials/english/basic-css-grid-english.jpg',
            urlImageFrenchDark: '/imgs/credentials/french/basic-css-grid-french.jpg',
            urlImageSpanishDark: '/imgs/credentials/spanish/basic-css-grid-spanish.jpg',
            urlPDFEnglishDark: '/pdfs/english/basic-css-grid-english.pdf',
            urlPDFFrenchDark: '/pdfs/french/basic-css-grid-french.pdf',
            urlPDFSpanishDark: '/pdfs/spanish/basic-css-grid-spanish.pdf',
        });

        createCredential({
            id: 'basic-javascript',
            name: 'basic-javascript',
            urlImageEnglish: '/imgs/credentials/english/basic-javascript-english.jpg',
            urlImageFrench: '/imgs/credentials/french/basic-javascript-french.jpg',
            urlImageSpanish: '/imgs/credentials/spanish/basic-javascript-spanish.jpg',
            urlPDFEnglish: '/pdfs/english/basic-javascript-english.pdf',
            urlPDFFrench: '/pdfs/french/basic-javascript-french.pdf',
            urlPDFSpanish: '/pdfs/spanish/basic-javascript-spanish.pdf',
            urlImageEnglishDark: '/imgs/credentials/english/basic-javascript-english.jpg',
            urlImageFrenchDark: '/imgs/credentials/french/basic-javascript-french.jpg',
            urlImageSpanishDark: '/imgs/credentials/spanish/basic-javascript-spanish.jpg',
            urlPDFEnglishDark: '/pdfs/english/basic-javascript-english.pdf',
            urlPDFFrenchDark: '/pdfs/french/basic-javascript-french.pdf',
            urlPDFSpanishDark: '/pdfs/spanish/basic-javascript-spanish.pdf',
        });

        createCredential({
            id: 'basic-object-oriented-programming-with-javascript',
            name: 'basic-object-oriented-programming-with-javascript',
            urlImageEnglish: '/imgs/credentials/english/basic-object-oriented-programming-with-javascript-english.jpg',
            urlImageFrench: '/imgs/credentials/french/basic-object-oriented-programming-with-javascript-french.jpg',
            urlImageSpanish: '/imgs/credentials/spanish/basic-object-oriented-programming-with-javascript-spanish.jpg',
            urlPDFEnglish: '/pdfs/english/basic-object-oriented-programming-with-javascript-english.pdf',
            urlPDFFrench: '/pdfs/french/basic-object-oriented-programming-with-javascript-french.pdf',
            urlPDFSpanish: '/pdfs/spanish/basic-object-oriented-programming-with-javascript-spanish.pdf',
            urlImageEnglishDark: '/imgs/credentials/english/basic-object-oriented-programming-with-javascript-english.jpg',
            urlImageFrenchDark: '/imgs/credentials/french/basic-object-oriented-programming-with-javascript-french.jpg',
            urlImageSpanishDark: '/imgs/credentials/spanish/basic-object-oriented-programming-with-javascript-spanish.jpg',
            urlPDFEnglishDark: '/pdfs/english/basic-object-oriented-programming-with-javascript-english.pdf',
            urlPDFFrenchDark: '/pdfs/french/basic-object-oriented-programming-with-javascript-french.pdf',
            urlPDFSpanishDark: '/pdfs/spanish/basic-object-oriented-programming-with-javascript-spanish.pdf',
        });

        createCredential({
            id: 'clean-code-with-javascript',
            name: 'clean-code-with-javascript',
            urlImageEnglish: '/imgs/credentials/english/clean-code-with-javascript-english.jpg',
            urlImageFrench: '/imgs/credentials/french/clean-code-with-javascript-french.jpg',
            urlImageSpanish: '/imgs/credentials/spanish/clean-code-with-javascript-spanish.jpg',
            urlPDFEnglish: '/pdfs/english/clean-code-with-javascript-english.pdf',
            urlPDFFrench: '/pdfs/french/clean-code-with-javascript-french.pdf',
            urlPDFSpanish: '/pdfs/spanish/clean-code-with-javascript-spanish.pdf',
            urlImageEnglishDark: '/imgs/credentials/english/clean-code-with-javascript-english.jpg',
            urlImageFrenchDark: '/imgs/credentials/french/clean-code-with-javascript-french.jpg',
            urlImageSpanishDark: '/imgs/credentials/spanish/clean-code-with-javascript-spanish.jpg',
            urlPDFEnglishDark: '/pdfs/english/clean-code-with-javascript-english.pdf',
            urlPDFFrenchDark: '/pdfs/french/clean-code-with-javascript-french.pdf',
            urlPDFSpanishDark: '/pdfs/spanish/clean-code-with-javascript-spanish.pdf',
        });

        createCredential({
            id: 'closures-and-scopes-in-javascript',
            name: 'closures-and-scopes-in-javascript',
            urlImageEnglish: '/imgs/credentials/english/closures-and-scopes-in-javascript-english.jpg',
            urlImageFrench: '/imgs/credentials/french/closures-and-scopes-in-javascript-french.jpg',
            urlImageSpanish: '/imgs/credentials/spanish/closures-and-scopes-in-javascript-spanish.jpg',
            urlPDFEnglish: '/pdfs/english/closures-and-scopes-in-javascript-english.pdf',
            urlPDFFrench: '/pdfs/french/closures-and-scopes-in-javascript-french.pdf',
            urlPDFSpanish: '/pdfs/spanish/closures-and-scopes-in-javascript-spanish.pdf',
            urlImageEnglishDark: '/imgs/credentials/english/closures-and-scopes-in-javascript-english.jpg',
            urlImageFrenchDark: '/imgs/credentials/french/closures-and-scopes-in-javascript-french.jpg',
            urlImageSpanishDark: '/imgs/credentials/spanish/closures-and-scopes-in-javascript-spanish.jpg',
            urlPDFEnglishDark: '/pdfs/english/closures-and-scopes-in-javascript-english.pdf',
            urlPDFFrenchDark: '/pdfs/french/closures-and-scopes-in-javascript-french.pdf',
            urlPDFSpanishDark: '/pdfs/spanish/closures-and-scopes-in-javascript-spanish.pdf',
        });

        createCredential({
            id: 'computational-thinking-python',
            name: 'computational-thinking-python',
            urlImageEnglish: '/imgs/credentials/english/computational-thinking-python-english.jpg',
            urlImageFrench: '/imgs/credentials/french/computational-thinking-python-french.jpg',
            urlImageSpanish: '/imgs/credentials/spanish/computational-thinking-python-spanish.jpg',
            urlPDFEnglish: '/pdfs/english/computational-thinking-python-english.pdf',
            urlPDFFrench: '/pdfs/french/computational-thinking-python-french.pdf',
            urlPDFSpanish: '/pdfs/spanish/computational-thinking-python-spanish.pdf',
            urlImageEnglishDark: '/imgs/credentials/english/computational-thinking-python-english.jpg',
            urlImageFrenchDark: '/imgs/credentials/french/computational-thinking-python-french.jpg',
            urlImageSpanishDark: '/imgs/credentials/spanish/computational-thinking-python-spanish.jpg',
            urlPDFEnglishDark: '/pdfs/english/computational-thinking-python-english.pdf',
            urlPDFFrenchDark: '/pdfs/french/computational-thinking-python-french.pdf',
            urlPDFSpanishDark: '/pdfs/spanish/computational-thinking-python-spanish.pdf',
        });

        createCredential({
            id: 'consumption-of-rest-api-with-javascript',
            name: 'consumption-of-rest-api-with-javascript',
            urlImageEnglish: '/imgs/credentials/english/consumption-of-rest-api-with-javascript-english.jpg',
            urlImageFrench: '/imgs/credentials/french/consumption-of-rest-api-with-javascript-french.jpg',
            urlImageSpanish: '/imgs/credentials/spanish/consumption-of-rest-api-with-javascript-spanish.jpg',
            urlPDFEnglish: '/pdfs/english/consumption-of-rest-api-with-javascript-english.pdf',
            urlPDFFrench: '/pdfs/french/consumption-of-rest-api-with-javascript-french.pdf',
            urlPDFSpanish: '/pdfs/spanish/consumption-of-rest-api-with-javascript-spanish.pdf',
            urlImageEnglishDark: '/imgs/credentials/english/consumption-of-rest-api-with-javascript-english.jpg',
            urlImageFrenchDark: '/imgs/credentials/french/consumption-of-rest-api-with-javascript-french.jpg',
            urlImageSpanishDark: '/imgs/credentials/spanish/consumption-of-rest-api-with-javascript-spanish.jpg',
            urlPDFEnglishDark: '/pdfs/english/consumption-of-rest-api-with-javascript-english.pdf',
            urlPDFFrenchDark: '/pdfs/french/consumption-of-rest-api-with-javascript-french.pdf',
            urlPDFSpanishDark: '/pdfs/spanish/consumption-of-rest-api-with-javascript-spanish.pdf',
        });

        createCredential({
            id: 'creational-design-patterns-in-javascript',
            name: 'creational-design-patterns-in-javascript',
            urlImageEnglish: '/imgs/credentials/english/creational-design-patterns-in-javascript-english.jpg',
            urlImageFrench: '/imgs/credentials/french/creational-design-patterns-in-javascript-french.jpg',
            urlImageSpanish: '/imgs/credentials/spanish/creational-design-patterns-in-javascript-spanish.jpg',
            urlPDFEnglish: '/pdfs/english/creational-design-patterns-in-javascript-english.pdf',
            urlPDFFrench: '/pdfs/french/creational-design-patterns-in-javascript-french.pdf',
            urlPDFSpanish: '/pdfs/spanish/creational-design-patterns-in-javascript-spanish.pdf',
            urlImageEnglishDark: '/imgs/credentials/english/creational-design-patterns-in-javascript-english.jpg',
            urlImageFrenchDark: '/imgs/credentials/french/creational-design-patterns-in-javascript-french.jpg',
            urlImageSpanishDark: '/imgs/credentials/spanish/creational-design-patterns-in-javascript-spanish.jpg',
            urlPDFEnglishDark: '/pdfs/english/creational-design-patterns-in-javascript-english.pdf',
            urlPDFFrenchDark: '/pdfs/french/creational-design-patterns-in-javascript-french.pdf',
            urlPDFSpanishDark: '/pdfs/spanish/creational-design-patterns-in-javascript-spanish.pdf',
        });

        createCredential({
            id: 'css-animations',
            name: 'css-animations',
            urlImageEnglish: '/imgs/credentials/english/css-animations-english.jpg',
            urlImageFrench: '/imgs/credentials/french/css-animations-french.jpg',
            urlImageSpanish: '/imgs/credentials/spanish/css-animations-spanish.jpg',
            urlPDFEnglish: '/pdfs/english/css-animations-english.pdf',
            urlPDFFrench: '/pdfs/french/css-animations-french.pdf',
            urlPDFSpanish: '/pdfs/spanish/css-animations-spanish.pdf',
            urlImageEnglishDark: '/imgs/credentials/english/css-animations-english.jpg',
            urlImageFrenchDark: '/imgs/credentials/french/css-animations-french.jpg',
            urlImageSpanishDark: '/imgs/credentials/spanish/css-animations-spanish.jpg',
            urlPDFEnglishDark: '/pdfs/english/css-animations-english.pdf',
            urlPDFFrenchDark: '/pdfs/french/css-animations-french.pdf',
            urlPDFSpanishDark: '/pdfs/spanish/css-animations-spanish.pdf',
        });

        createCredential({
            id: 'css-architecture',
            name: 'css-architecture',
            urlImageEnglish: '/imgs/credentials/english/css-architecture-english.jpg',
            urlImageFrench: '/imgs/credentials/french/css-architecture-french.jpg',
            urlImageSpanish: '/imgs/credentials/spanish/css-architecture-spanish.jpg',
            urlPDFEnglish: '/pdfs/english/css-architecture-english.pdf',
            urlPDFFrench: '/pdfs/french/css-architecture-french.pdf',
            urlPDFSpanish: '/pdfs/spanish/css-architecture-spanish.pdf',
            urlImageEnglishDark: '/imgs/credentials/english/css-architecture-english.jpg',
            urlImageFrenchDark: '/imgs/credentials/french/css-architecture-french.jpg',
            urlImageSpanishDark: '/imgs/credentials/spanish/css-architecture-spanish.jpg',
            urlPDFEnglishDark: '/pdfs/english/css-architecture-english.pdf',
            urlPDFFrenchDark: '/pdfs/french/css-architecture-french.pdf',
            urlPDFSpanishDark: '/pdfs/spanish/css-architecture-spanish.pdf',
        });

        createCredential({
            id: 'data-structures-with-javascript',
            name: 'data-structures-with-javascript',
            urlImageEnglish: '/imgs/credentials/english/data-structures-with-javascript-english.jpg',
            urlImageFrench: '/imgs/credentials/french/data-structures-with-javascript-french.jpg',
            urlImageSpanish: '/imgs/credentials/spanish/data-structures-with-javascript-spanish.jpg',
            urlPDFEnglish: '/pdfs/english/data-structures-with-javascript-english.pdf',
            urlPDFFrench: '/pdfs/french/data-structures-with-javascript-french.pdf',
            urlPDFSpanish: '/pdfs/spanish/data-structures-with-javascript-spanish.pdf',
            urlImageEnglishDark: '/imgs/credentials/english/data-structures-with-javascript-english.jpg',
            urlImageFrenchDark: '/imgs/credentials/french/data-structures-with-javascript-french.jpg',
            urlImageSpanishDark: '/imgs/credentials/spanish/data-structures-with-javascript-spanish.jpg',
            urlPDFEnglishDark: '/pdfs/english/data-structures-with-javascript-english.pdf',
            urlPDFFrenchDark: '/pdfs/french/data-structures-with-javascript-french.pdf',
            urlPDFSpanishDark: '/pdfs/spanish/data-structures-with-javascript-spanish.pdf',
        });

        createCredential({
            id: 'debugging-with-chrome-devtools',
            name: 'debugging-with-chrome-devtools',
            urlImageEnglish: '/imgs/credentials/english/debugging-with-chrome-devtools-english.jpg',
            urlImageFrench: '/imgs/credentials/french/debugging-with-chrome-devtools-french.jpg',
            urlImageSpanish: '/imgs/credentials/spanish/debugging-with-chrome-devtools-spanish.jpg',
            urlPDFEnglish: '/pdfs/english/debugging-with-chrome-devtools-english.pdf',
            urlPDFFrench: '/pdfs/french/debugging-with-chrome-devtools-french.pdf',
            urlPDFSpanish: '/pdfs/spanish/debugging-with-chrome-devtools-spanish.pdf',
            urlImageEnglishDark: '/imgs/credentials/english/debugging-with-chrome-devtools-english.jpg',
            urlImageFrenchDark: '/imgs/credentials/french/debugging-with-chrome-devtools-french.jpg',
            urlImageSpanishDark: '/imgs/credentials/spanish/debugging-with-chrome-devtools-spanish.jpg',
            urlPDFEnglishDark: '/pdfs/english/debugging-with-chrome-devtools-english.pdf',
            urlPDFFrenchDark: '/pdfs/french/debugging-with-chrome-devtools-french.pdf',
            urlPDFSpanishDark: '/pdfs/spanish/debugging-with-chrome-devtools-spanish.pdf',
        });

        createCredential({
            id: 'definitive-html-and-css',
            name: 'definitive-html-and-css',
            urlImageEnglish: '/imgs/credentials/english/definitive-html-and-css-english.jpg',
            urlImageFrench: '/imgs/credentials/french/definitive-html-and-css-french.jpg',
            urlImageSpanish: '/imgs/credentials/spanish/definitive-html-and-css-spanish.jpg',
            urlPDFEnglish: '/pdfs/english/definitive-html-and-css-english.pdf',
            urlPDFFrench: '/pdfs/french/definitive-html-and-css-french.pdf',
            urlPDFSpanish: '/pdfs/spanish/definitive-html-and-css-spanish.pdf',
            urlImageEnglishDark: '/imgs/credentials/english/definitive-html-and-css-english.jpg',
            urlImageFrenchDark: '/imgs/credentials/french/definitive-html-and-css-french.jpg',
            urlImageSpanishDark: '/imgs/credentials/spanish/definitive-html-and-css-spanish.jpg',
            urlPDFEnglishDark: '/pdfs/english/definitive-html-and-css-english.pdf',
            urlPDFFrenchDark: '/pdfs/french/definitive-html-and-css-french.pdf',
            urlPDFSpanishDark: '/pdfs/spanish/definitive-html-and-css-spanish.pdf',
        });

        createCredential({
            id: 'design-for-programmers',
            name: 'design-for-programmers',
            urlImageEnglish: '/imgs/credentials/english/design-for-programmers-english.jpg',
            urlImageFrench: '/imgs/credentials/french/design-for-programmers-french.jpg',
            urlImageSpanish: '/imgs/credentials/spanish/design-for-programmers-spanish.jpg',
            urlPDFEnglish: '/pdfs/english/design-for-programmers-english.pdf',
            urlPDFFrench: '/pdfs/french/design-for-programmers-french.pdf',
            urlPDFSpanish: '/pdfs/spanish/design-for-programmers-spanish.pdf',
            urlImageEnglishDark: '/imgs/credentials/english/design-for-programmers-english.jpg',
            urlImageFrenchDark: '/imgs/credentials/french/design-for-programmers-french.jpg',
            urlImageSpanishDark: '/imgs/credentials/spanish/design-for-programmers-spanish.jpg',
            urlPDFEnglishDark: '/pdfs/english/design-for-programmers-english.pdf',
            urlPDFFrenchDark: '/pdfs/french/design-for-programmers-french.pdf',
            urlPDFSpanishDark: '/pdfs/spanish/design-for-programmers-spanish.pdf',
        });

        createCredential({
            id: 'design-system',
            name: 'design-system',
            urlImageEnglish: '/imgs/credentials/english/design-system-english.jpg',
            urlImageFrench: '/imgs/credentials/french/design-system-french.jpg',
            urlImageSpanish: '/imgs/credentials/spanish/design-system-spanish.jpg',
            urlPDFEnglish: '/pdfs/english/design-system-english.pdf',
            urlPDFFrench: '/pdfs/french/design-system-french.pdf',
            urlPDFSpanish: '/pdfs/spanish/design-system-spanish.pdf',
            urlImageEnglishDark: '/imgs/credentials/english/design-system-english.jpg',
            urlImageFrenchDark: '/imgs/credentials/french/design-system-french.jpg',
            urlImageSpanishDark: '/imgs/credentials/spanish/design-system-spanish.jpg',
            urlPDFEnglishDark: '/pdfs/english/design-system-english.pdf',
            urlPDFFrenchDark: '/pdfs/french/design-system-french.pdf',
            urlPDFSpanishDark: '/pdfs/spanish/design-system-spanish.pdf',
        });

        createCredential({
            id: 'ecmascript-hystory-and-versions-of-javascript',
            name: 'ecmascript-hystory-and-versions-of-javascript',
            urlImageEnglish: '/imgs/credentials/english/ecmascript-hystory-and-versions-of-javascript-english.jpg',
            urlImageFrench: '/imgs/credentials/french/ecmascript-hystory-and-versions-of-javascript-french.jpg',
            urlImageSpanish: '/imgs/credentials/spanish/ecmascript-hystory-and-versions-of-javascript-spanish.jpg',
            urlPDFEnglish: '/pdfs/english/ecmascript-hystory-and-versions-of-javascript-english.pdf',
            urlPDFFrench: '/pdfs/french/ecmascript-hystory-and-versions-of-javascript-french.pdf',
            urlPDFSpanish: '/pdfs/spanish/ecmascript-hystory-and-versions-of-javascript-spanish.pdf',
            urlImageEnglishDark: '/imgs/credentials/english/ecmascript-hystory-and-versions-of-javascript-english.jpg',
            urlImageFrenchDark: '/imgs/credentials/french/ecmascript-hystory-and-versions-of-javascript-french.jpg',
            urlImageSpanishDark: '/imgs/credentials/spanish/ecmascript-hystory-and-versions-of-javascript-spanish.jpg',
            urlPDFEnglishDark: '/pdfs/english/ecmascript-hystory-and-versions-of-javascript-english.pdf',
            urlPDFFrenchDark: '/pdfs/french/ecmascript-hystory-and-versions-of-javascript-french.pdf',
            urlPDFSpanishDark: '/pdfs/spanish/ecmascript-hystory-and-versions-of-javascript-spanish.pdf',
        });

        createCredential({
            id: 'fronted-developer',
            name: 'fronted-developer',
            urlImageEnglish: '/imgs/credentials/english/fronted-developer-english.jpg',
            urlImageFrench: '/imgs/credentials/french/fronted-developer-french.jpg',
            urlImageSpanish: '/imgs/credentials/spanish/fronted-developer-spanish.jpg',
            urlPDFEnglish: '/pdfs/english/fronted-developer-english.pdf',
            urlPDFFrench: '/pdfs/french/fronted-developer-french.pdf',
            urlPDFSpanish: '/pdfs/spanish/fronted-developer-spanish.pdf',
            urlImageEnglishDark: '/imgs/credentials/english/fronted-developer-english.jpg',
            urlImageFrenchDark: '/imgs/credentials/french/fronted-developer-french.jpg',
            urlImageSpanishDark: '/imgs/credentials/spanish/fronted-developer-spanish.jpg',
            urlPDFEnglishDark: '/pdfs/english/fronted-developer-english.pdf',
            urlPDFFrenchDark: '/pdfs/french/fronted-developer-french.pdf',
            urlPDFSpanishDark: '/pdfs/spanish/fronted-developer-spanish.pdf',
        });

        createCredential({
            id: 'fronted-developer-practical',
            name: 'fronted-developer-practical',
            urlImageEnglish: '/imgs/credentials/english/fronted-developer-practical-english.jpg',
            urlImageFrench: '/imgs/credentials/french/fronted-developer-practical-french.jpg',
            urlImageSpanish: '/imgs/credentials/spanish/fronted-developer-practical-spanish.jpg',
            urlPDFEnglish: '/pdfs/english/fronted-developer-practical-english.pdf',
            urlPDFFrench: '/pdfs/french/fronted-developer-practical-french.pdf',
            urlPDFSpanish: '/pdfs/spanish/fronted-developer-practical-spanish.pdf',
            urlImageEnglishDark: '/imgs/credentials/english/fronted-developer-practical-english.jpg',
            urlImageFrenchDark: '/imgs/credentials/french/fronted-developer-practical-french.jpg',
            urlImageSpanishDark: '/imgs/credentials/spanish/fronted-developer-practical-spanish.jpg',
            urlPDFEnglishDark: '/pdfs/english/fronted-developer-practical-english.pdf',
            urlPDFFrenchDark: '/pdfs/french/fronted-developer-practical-french.pdf',
            urlPDFSpanishDark: '/pdfs/spanish/fronted-developer-practical-spanish.pdf',
        });

        createCredential({
            id: 'functions-of-python',
            name: 'functions-of-python',
            urlImageEnglish: '/imgs/credentials/english/functions-of-python-english.jpg',
            urlImageFrench: '/imgs/credentials/french/functions-of-python-french.jpg',
            urlImageSpanish: '/imgs/credentials/spanish/functions-of-python-spanish.jpg',
            urlPDFEnglish: '/pdfs/english/functions-of-python-english.pdf',
            urlPDFFrench: '/pdfs/french/functions-of-python-french.pdf',
            urlPDFSpanish: '/pdfs/spanish/functions-of-python-spanish.pdf',
            urlImageEnglishDark: '/imgs/credentials/english/functions-of-python-english.jpg',
            urlImageFrenchDark: '/imgs/credentials/french/functions-of-python-french.jpg',
            urlImageSpanishDark: '/imgs/credentials/spanish/functions-of-python-spanish.jpg',
            urlPDFEnglishDark: '/pdfs/english/functions-of-python-english.pdf',
            urlPDFFrenchDark: '/pdfs/french/functions-of-python-french.pdf',
            urlPDFSpanishDark: '/pdfs/spanish/functions-of-python-spanish.pdf',
        });

        createCredential({
            id: 'fundamentals-of-python',
            name: 'fundamentals-of-python',
            urlImageEnglish: '/imgs/credentials/english/fundamentals-of-python-english.jpg',
            urlImageFrench: '/imgs/credentials/french/fundamentals-of-python-french.jpg',
            urlImageSpanish: '/imgs/credentials/spanish/fundamentals-of-python-spanish.jpg',
            urlPDFEnglish: '/pdfs/english/fundamentals-of-python-english.pdf',
            urlPDFFrench: '/pdfs/french/fundamentals-of-python-french.pdf',
            urlPDFSpanish: '/pdfs/spanish/fundamentals-of-python-spanish.pdf',
            urlImageEnglishDark: '/imgs/credentials/english/fundamentals-of-python-english.jpg',
            urlImageFrenchDark: '/imgs/credentials/french/fundamentals-of-python-french.jpg',
            urlImageSpanishDark: '/imgs/credentials/spanish/fundamentals-of-python-spanish.jpg',
            urlPDFEnglishDark: '/pdfs/english/fundamentals-of-python-english.pdf',
            urlPDFFrenchDark: '/pdfs/french/fundamentals-of-python-french.pdf',
            urlPDFSpanishDark: '/pdfs/spanish/fundamentals-of-python-spanish.pdf',
        });

        createCredential({
            id: 'fundamentals-of-typescript',
            name: 'fundamentals-of-typescript',
            urlImageEnglish: '/imgs/credentials/english/fundamentals-of-typescript-english.jpg',
            urlImageFrench: '/imgs/credentials/french/fundamentals-of-typescript-french.jpg',
            urlImageSpanish: '/imgs/credentials/spanish/fundamentals-of-typescript-spanish.jpg',
            urlPDFEnglish: '/pdfs/english/fundamentals-of-typescript-english.pdf',
            urlPDFFrench: '/pdfs/french/fundamentals-of-typescript-french.pdf',
            urlPDFSpanish: '/pdfs/spanish/fundamentals-of-typescript-spanish.pdf',
            urlImageEnglishDark: '/imgs/credentials/english/fundamentals-of-typescript-english.jpg',
            urlImageFrenchDark: '/imgs/credentials/french/fundamentals-of-typescript-french.jpg',
            urlImageSpanishDark: '/imgs/credentials/spanish/fundamentals-of-typescript-spanish.jpg',
            urlPDFEnglishDark: '/pdfs/english/fundamentals-of-typescript-english.pdf',
            urlPDFFrenchDark: '/pdfs/french/fundamentals-of-typescript-french.pdf',
            urlPDFSpanishDark: '/pdfs/spanish/fundamentals-of-typescript-spanish.pdf',
        });

        createCredential({
            id: 'git-and-github',
            name: 'git-and-github',
            urlImageEnglish: '/imgs/credentials/english/git-and-github-english.jpg',
            urlImageFrench: '/imgs/credentials/french/git-and-github-french.jpg',
            urlImageSpanish: '/imgs/credentials/spanish/git-and-github-spanish.jpg',
            urlPDFEnglish: '/pdfs/english/git-and-github-english.pdf',
            urlPDFFrench: '/pdfs/french/git-and-github-french.pdf',
            urlPDFSpanish: '/pdfs/spanish/git-and-github-spanish.pdf',
            urlImageEnglishDark: '/imgs/credentials/english/git-and-github-english.jpg',
            urlImageFrenchDark: '/imgs/credentials/french/git-and-github-french.jpg',
            urlImageSpanishDark: '/imgs/credentials/spanish/git-and-github-spanish.jpg',
            urlPDFEnglishDark: '/pdfs/english/git-and-github-english.pdf',
            urlPDFFrenchDark: '/pdfs/french/git-and-github-french.pdf',
            urlPDFSpanishDark: '/pdfs/spanish/git-and-github-spanish.pdf',
        });

        createCredential({
            id: 'html-and-css',
            name: 'html-and-css',
            urlImageEnglish: '/imgs/credentials/english/html-and-css-english.jpg',
            urlImageFrench: '/imgs/credentials/french/html-and-css-french.jpg',
            urlImageSpanish: '/imgs/credentials/spanish/html-and-css-spanish.jpg',
            urlPDFEnglish: '/pdfs/english/html-and-css-english.pdf',
            urlPDFFrench: '/pdfs/french/html-and-css-french.pdf',
            urlPDFSpanish: '/pdfs/spanish/html-and-css-spanish.pdf',
            urlImageEnglishDark: '/imgs/credentials/english/html-and-css-english.jpg',
            urlImageFrenchDark: '/imgs/credentials/french/html-and-css-french.jpg',
            urlImageSpanishDark: '/imgs/credentials/spanish/html-and-css-spanish.jpg',
            urlPDFEnglishDark: '/pdfs/english/html-and-css-english.pdf',
            urlPDFFrenchDark: '/pdfs/french/html-and-css-french.pdf',
            urlPDFSpanishDark: '/pdfs/spanish/html-and-css-spanish.pdf',
        });

        createCredential({
            id: 'intermediate-object-oriented-programming-with-javascript',
            name: 'intermediate-object-oriented-programming-with-javascript',
            urlImageEnglish: '/imgs/credentials/english/intermediate-object-oriented-programming-with-javascript-english.jpg',
            urlImageFrench: '/imgs/credentials/french/intermediate-object-oriented-programming-with-javascript-french.jpg',
            urlImageSpanish: '/imgs/credentials/spanish/intermediate-object-oriented-programming-with-javascript-spanish.jpg',
            urlPDFEnglish: '/pdfs/english/intermediate-object-oriented-programming-with-javascript-english.pdf',
            urlPDFFrench: '/pdfs/french/intermediate-object-oriented-programming-with-javascript-french.pdf',
            urlPDFSpanish: '/pdfs/spanish/intermediate-object-oriented-programming-with-javascript-spanish.pdf',
            urlImageEnglishDark: '/imgs/credentials/english/intermediate-object-oriented-programming-with-javascript-english.jpg',
            urlImageFrenchDark: '/imgs/credentials/french/intermediate-object-oriented-programming-with-javascript-french.jpg',
            urlImageSpanishDark: '/imgs/credentials/spanish/intermediate-object-oriented-programming-with-javascript-spanish.jpg',
            urlPDFEnglishDark: '/pdfs/english/intermediate-object-oriented-programming-with-javascript-english.pdf',
            urlPDFFrenchDark: '/pdfs/french/intermediate-object-oriented-programming-with-javascript-french.pdf',
            urlPDFSpanishDark: '/pdfs/spanish/intermediate-object-oriented-programming-with-javascript-spanish.pdf',
        });

        createCredential({
            id: 'javascript-basic-mathematics-and-statistics',
            name: 'javascript-basic-mathematics-and-statistics',
            urlImageEnglish: '/imgs/credentials/english/javascript-basic-mathematics-and-statistics-english.jpg',
            urlImageFrench: '/imgs/credentials/french/javascript-basic-mathematics-and-statistics-french.jpg',
            urlImageSpanish: '/imgs/credentials/spanish/javascript-basic-mathematics-and-statistics-spanish.jpg',
            urlPDFEnglish: '/pdfs/english/javascript-basic-mathematics-and-statistics-english.pdf',
            urlPDFFrench: '/pdfs/french/javascript-basic-mathematics-and-statistics-french.pdf',
            urlPDFSpanish: '/pdfs/spanish/javascript-basic-mathematics-and-statistics-spanish.pdf',
            urlImageEnglishDark: '/imgs/credentials/english/javascript-basic-mathematics-and-statistics-english.jpg',
            urlImageFrenchDark: '/imgs/credentials/french/javascript-basic-mathematics-and-statistics-french.jpg',
            urlImageSpanishDark: '/imgs/credentials/spanish/javascript-basic-mathematics-and-statistics-spanish.jpg',
            urlPDFEnglishDark: '/pdfs/english/javascript-basic-mathematics-and-statistics-english.pdf',
            urlPDFFrenchDark: '/pdfs/french/javascript-basic-mathematics-and-statistics-french.pdf',
            urlPDFSpanishDark: '/pdfs/spanish/javascript-basic-mathematics-and-statistics-spanish.pdf',
        });

        createCredential({
            id: 'javascript-create-a-videogame',
            name: 'javascript-create-a-videogame',
            urlImageEnglish: '/imgs/credentials/english/javascript-create-a-videogame-english.jpg',
            urlImageFrench: '/imgs/credentials/french/javascript-create-a-videogame-french.jpg',
            urlImageSpanish: '/imgs/credentials/spanish/javascript-create-a-videogame-spanish.jpg',
            urlPDFEnglish: '/pdfs/english/javascript-create-a-videogame-english.pdf',
            urlPDFFrench: '/pdfs/french/javascript-create-a-videogame-french.pdf',
            urlPDFSpanish: '/pdfs/spanish/javascript-create-a-videogame-spanish.pdf',
            urlImageEnglishDark: '/imgs/credentials/english/javascript-create-a-videogame-english.jpg',
            urlImageFrenchDark: '/imgs/credentials/french/javascript-create-a-videogame-french.jpg',
            urlImageSpanishDark: '/imgs/credentials/spanish/javascript-create-a-videogame-spanish.jpg',
            urlPDFEnglishDark: '/pdfs/english/javascript-create-a-videogame-english.pdf',
            urlPDFFrenchDark: '/pdfs/french/javascript-create-a-videogame-french.pdf',
            urlPDFSpanishDark: '/pdfs/spanish/javascript-create-a-videogame-spanish.pdf',
        });

        createCredential({
            id: 'javascript-engine-v8-and-the-browser',
            name: 'javascript-engine-v8-and-the-browser',
            urlImageEnglish: '/imgs/credentials/english/javascript-engine-v8-and-the-browser-english.jpg',
            urlImageFrench: '/imgs/credentials/french/javascript-engine-v8-and-the-browser-french.jpg',
            urlImageSpanish: '/imgs/credentials/spanish/javascript-engine-v8-and-the-browser-spanish.jpg',
            urlPDFEnglish: '/pdfs/english/javascript-engine-v8-and-the-browser-english.pdf',
            urlPDFFrench: '/pdfs/french/javascript-engine-v8-and-the-browser-french.pdf',   
            urlPDFSpanish: '/pdfs/spanish/javascript-engine-v8-and-the-browser-spanish.pdf',
            urlImageEnglishDark: '/imgs/credentials/english/javascript-engine-v8-and-the-browser-english.jpg',
            urlImageFrenchDark: '/imgs/credentials/french/javascript-engine-v8-and-the-browser-french.jpg',
            urlImageSpanishDark: '/imgs/credentials/spanish/javascript-engine-v8-and-the-browser-spanish.jpg',
            urlPDFEnglishDark: '/pdfs/english/javascript-engine-v8-and-the-browser-english.pdf',
            urlPDFFrenchDark: '/pdfs/french/javascript-engine-v8-and-the-browser-french.pdf',
            urlPDFSpanishDark: '/pdfs/spanish/javascript-engine-v8-and-the-browser-spanish.pdf',
        });

        createCredential({
            id: 'layout-in-css-practical',
            name: 'layout-in-css-practical',
            urlImageEnglish: '/imgs/credentials/english/layout-in-css-practical-english.jpg',
            urlImageFrench: '/imgs/credentials/french/layout-in-css-practical-french.jpg',
            urlImageSpanish: '/imgs/credentials/spanish/layout-in-css-practical-spanish.jpg',
            urlPDFEnglish: '/pdfs/english/layout-in-css-practical-english.pdf',
            urlPDFFrench: '/pdfs/french/layout-in-css-practical-french.pdf',
            urlPDFSpanish: '/pdfs/spanish/layout-in-css-practical-spanish.pdf',
            urlImageEnglishDark: '/imgs/credentials/english/layout-in-css-practical-english.jpg',
            urlImageFrenchDark: '/imgs/credentials/french/layout-in-css-practical-french.jpg',
            urlImageSpanishDark: '/imgs/credentials/spanish/layout-in-css-practical-spanish.jpg',
            urlPDFEnglishDark: '/pdfs/english/layout-in-css-practical-english.pdf',
            urlPDFFrenchDark: '/pdfs/french/layout-in-css-practical-french.pdf',
            urlPDFSpanishDark: '/pdfs/spanish/layout-in-css-practical-spanish.pdf',
        });

        createCredential({
            id: 'practical-consumption-of-rest-api-with-javascript',
            name: 'practical-consumption-of-rest-api-with-javascript',
            urlImageEnglish: '/imgs/credentials/english/practical-consumption-of-rest-api-with-javascript-english.jpg',
            urlImageFrench: '/imgs/credentials/french/practical-consumption-of-rest-api-with-javascript-french.jpg',
            urlImageSpanish: '/imgs/credentials/spanish/practical-consumption-of-rest-api-with-javascript-spanish.jpg',
            urlPDFEnglish: '/pdfs/english/practical-consumption-of-rest-api-with-javascript-english.pdf',
            urlPDFFrench: '/pdfs/french/practical-consumption-of-rest-api-with-javascript-french.pdf',
            urlPDFSpanish: '/pdfs/spanish/practical-consumption-of-rest-api-with-javascript-spanish.pdf',
            urlImageEnglishDark: '/imgs/credentials/english/practical-consumption-of-rest-api-with-javascript-english.jpg',
            urlImageFrenchDark: '/imgs/credentials/french/practical-consumption-of-rest-api-with-javascript-french.jpg',
            urlImageSpanishDark: '/imgs/credentials/spanish/practical-consumption-of-rest-api-with-javascript-spanish.jpg',
            urlPDFEnglishDark: '/pdfs/english/practical-consumption-of-rest-api-with-javascript-english.pdf',
            urlPDFFrenchDark: '/pdfs/french/practical-consumption-of-rest-api-with-javascript-french.pdf',
            urlPDFSpanishDark: '/pdfs/spanish/practical-consumption-of-rest-api-with-javascript-spanish.pdf',
        });

        createCredential({
            id: 'practical-javascript',
            name: 'practical-javascript',
            urlImageEnglish: '/imgs/credentials/english/practical-javascript-english.jpg',
            urlImageFrench: '/imgs/credentials/french/practical-javascript-french.jpg',
            urlImageSpanish: '/imgs/credentials/spanish/practical-javascript-spanish.jpg',
            urlPDFEnglish: '/pdfs/english/practical-javascript-english.pdf',
            urlPDFFrench: '/pdfs/french/practical-javascript-french.pdf',
            urlPDFSpanish: '/pdfs/spanish/practical-javascript-spanish.pdf',
            urlImageEnglishDark: '/imgs/credentials/english/practical-javascript-english.jpg',
            urlImageFrenchDark: '/imgs/credentials/french/practical-javascript-french.jpg',
            urlImageSpanishDark: '/imgs/credentials/spanish/practical-javascript-spanish.jpg',
            urlPDFEnglishDark: '/pdfs/english/practical-javascript-english.pdf',
            urlPDFFrenchDark: '/pdfs/french/practical-javascript-french.pdf',
            urlPDFSpanishDark: '/pdfs/spanish/practical-javascript-spanish.pdf',
        });

        createCredential({
            id: 'professional-consumption-of-rest-api-with-javascript',
            name: 'professional-consumption-of-rest-api-with-javascript',
            urlImageEnglish: '/imgs/credentials/english/professional-consumption-of-rest-api-with-javascript-english.jpg',
            urlImageFrench: '/imgs/credentials/french/professional-consumption-of-rest-api-with-javascript-french.jpg',
            urlImageSpanish: '/imgs/credentials/spanish/professional-consumption-of-rest-api-with-javascript-spanish.jpg',
            urlPDFEnglish: '/pdfs/english/professional-consumption-of-rest-api-with-javascript-english.pdf',
            urlPDFFrench: '/pdfs/french/professional-consumption-of-rest-api-with-javascript-french.pdf',
            urlPDFSpanish: '/pdfs/spanish/professional-consumption-of-rest-api-with-javascript-spanish.pdf',
            urlImageEnglishDark: '/imgs/credentials/english/professional-consumption-of-rest-api-with-javascript-english.jpg',
            urlImageFrenchDark: '/imgs/credentials/french/professional-consumption-of-rest-api-with-javascript-french.jpg',
            urlImageSpanishDark: '/imgs/credentials/spanish/professional-consumption-of-rest-api-with-javascript-spanish.jpg',
            urlPDFEnglishDark: '/pdfs/english/professional-consumption-of-rest-api-with-javascript-english.pdf',
            urlPDFFrenchDark: '/pdfs/french/professional-consumption-of-rest-api-with-javascript-french.pdf',
            urlPDFSpanishDark: '/pdfs/spanish/professional-consumption-of-rest-api-with-javascript-spanish.pdf',
        });

        createCredential({
            id: 'professional-css-grid-layout',
            name: 'professional-css-grid-layout',
            urlImageEnglish: '/imgs/credentials/english/professional-css-grid-layout-english.jpg',
            urlImageFrench: '/imgs/credentials/french/professional-css-grid-layout-french.jpg',
            urlImageSpanish: '/imgs/credentials/spanish/professional-css-grid-layout-spanish.jpg',
            urlPDFEnglish: '/pdfs/english/professional-css-grid-layout-english.pdf',
            urlPDFFrench: '/pdfs/french/professional-css-grid-layout-french.pdf',
            urlPDFSpanish: '/pdfs/spanish/professional-css-grid-layout-spanish.pdf',
            urlImageEnglishDark: '/imgs/credentials/english/professional-css-grid-layout-english.jpg',
            urlImageFrenchDark: '/imgs/credentials/french/professional-css-grid-layout-french.jpg',
            urlImageSpanishDark: '/imgs/credentials/spanish/professional-css-grid-layout-spanish.jpg',
            urlPDFEnglishDark: '/pdfs/english/professional-css-grid-layout-english.pdf',
            urlPDFFrenchDark: '/pdfs/french/professional-css-grid-layout-french.pdf',
            urlPDFSpanishDark: '/pdfs/spanish/professional-css-grid-layout-spanish.pdf',
        });

        createCredential({
            id: 'python-algorithmic-complexity',
            name: 'python-algorithmic-complexity',
            urlImageEnglish: '/imgs/credentials/english/python-algorithmic-complexity-english.jpg',
            urlImageFrench: '/imgs/credentials/french/python-algorithmic-complexity-french.jpg',
            urlImageSpanish: '/imgs/credentials/spanish/python-algorithmic-complexity-spanish.jpg',
            urlPDFEnglish: '/pdfs/english/python-algorithmic-complexity-english.pdf',
            urlPDFFrench: '/pdfs/french/python-algorithmic-complexity-french.pdf',
            urlPDFSpanish: '/pdfs/spanish/python-algorithmic-complexity-spanish.pdf',
            urlImageEnglishDark: '/imgs/credentials/english/python-algorithmic-complexity-english.jpg',
            urlImageFrenchDark: '/imgs/credentials/french/python-algorithmic-complexity-french.jpg',
            urlImageSpanishDark: '/imgs/credentials/spanish/python-algorithmic-complexity-spanish.jpg',
            urlPDFEnglishDark: '/pdfs/english/python-algorithmic-complexity-english.pdf',
            urlPDFFrenchDark: '/pdfs/french/python-algorithmic-complexity-french.pdf',
            urlPDFSpanishDark: '/pdfs/spanish/python-algorithmic-complexity-spanish.pdf',
        });

        createCredential({
            id: 'python-data-structure',
            name: 'python-data-structure',
            urlImageEnglish: '/imgs/credentials/english/python-data-structure-english.jpg',
            urlImageFrench: '/imgs/credentials/french/python-data-structure-french.jpg',
            urlImageSpanish: '/imgs/credentials/spanish/python-data-structure-spanish.jpg',
            urlPDFEnglish: '/pdfs/english/python-data-structure-english.pdf',
            urlPDFFrench: '/pdfs/french/python-data-structure-french.pdf',
            urlPDFSpanish: '/pdfs/spanish/python-data-structure-spanish.pdf',
            urlImageEnglishDark: '/imgs/credentials/english/python-data-structure-english.jpg',
            urlImageFrenchDark: '/imgs/credentials/french/python-data-structure-french.jpg',
            urlImageSpanishDark: '/imgs/credentials/spanish/python-data-structure-spanish.jpg',
            urlPDFEnglishDark: '/pdfs/english/python-data-structure-english.pdf',
            urlPDFFrenchDark: '/pdfs/french/python-data-structure-french.pdf',
            urlPDFSpanishDark: '/pdfs/spanish/python-data-structure-spanish.pdf',
        });

        createCredential({
            id: 'python-pip-and-virtuals-enviroment',
            name: 'python-pip-and-virtuals-enviroment',
            urlImageEnglish: '/imgs/credentials/english/python-pip-and-virtuals-enviroment-english.jpg',
            urlImageFrench: '/imgs/credentials/french/python-pip-and-virtuals-enviroment-french.jpg',
            urlImageSpanish: '/imgs/credentials/spanish/python-pip-and-virtuals-enviroment-spanish.jpg',
            urlPDFEnglish: '/pdfs/english/python-pip-and-virtuals-enviroment-english.pdf',
            urlPDFFrench: '/pdfs/french/python-pip-and-virtuals-enviroment-french.pdf',
            urlPDFSpanish: '/pdfs/spanish/python-pip-and-virtuals-enviroment-spanish.pdf',
            urlImageEnglishDark: '/imgs/credentials/english/python-pip-and-virtuals-enviroment-english.jpg',
            urlImageFrenchDark: '/imgs/credentials/french/python-pip-and-virtuals-enviroment-french.jpg',
            urlImageSpanishDark: '/imgs/credentials/spanish/python-pip-and-virtuals-enviroment-spanish.jpg',
            urlPDFEnglishDark: '/pdfs/english/python-pip-and-virtuals-enviroment-english.pdf',
            urlPDFFrenchDark: '/pdfs/french/python-pip-and-virtuals-enviroment-french.pdf',
            urlPDFSpanishDark: '/pdfs/spanish/python-pip-and-virtuals-enviroment-spanish.pdf',
        });

        createCredential({
            id: 'responsive-design-mobile-first layout',
            name: 'responsive-design-mobile-first layout',
            urlImageEnglish: '/imgs/credentials/english/responsive-design-mobile-first layout-english.jpg',
            urlImageFrench: '/imgs/credentials/french/responsive-design-mobile-first layout-french.jpg',
            urlImageSpanish: '/imgs/credentials/spanish/responsive-design-mobile-first layout-spanish.jpg',
            urlPDFEnglish: '/pdfs/english/responsive-design-mobile-first layout-english.pdf',
            urlPDFFrench: '/pdfs/french/responsive-design-mobile-first layout-french.pdf',
            urlPDFSpanish: '/pdfs/spanish/responsive-design-mobile-first layout-spanish.pdf',
            urlImageEnglishDark: '/imgs/credentials/english/responsive-design-mobile-first layout-english.jpg',
            urlImageFrenchDark: '/imgs/credentials/french/responsive-design-mobile-first layout-french.jpg',
            urlImageSpanishDark: '/imgs/credentials/spanish/responsive-design-mobile-first layout-spanish.jpg',
            urlPDFEnglishDark: '/pdfs/english/responsive-design-mobile-first layout-english.pdf',
            urlPDFFrenchDark: '/pdfs/french/responsive-design-mobile-first layout-french.pdf',
            urlPDFSpanishDark: '/pdfs/spanish/responsive-design-mobile-first layout-spanish.pdf',
        });

        createCredential({
            id: 'transformation-and-transition-in-css',
            name: 'transformation-and-transition-in-css',
            urlImageEnglish: '/imgs/credentials/english/transformation-and-transition-in-css-english.jpg',
            urlImageFrench: '/imgs/credentials/french/transformation-and-transition-in-css-french.jpg',
            urlImageSpanish: '/imgs/credentials/spanish/transformation-and-transition-in-css-spanish.jpg',
            urlPDFEnglish: '/pdfs/english/transformation-and-transition-in-css-english.pdf',
            urlPDFFrench: '/pdfs/french/transformation-and-transition-in-css-french.pdf',
            urlPDFSpanish: '/pdfs/spanish/transformation-and-transition-in-css-spanish.pdf',
            urlImageEnglishDark: '/imgs/credentials/english/transformation-and-transition-in-css-english.jpg',
            urlImageFrenchDark: '/imgs/credentials/french/transformation-and-transition-in-css-french.jpg',
            urlImageSpanishDark: '/imgs/credentials/spanish/transformation-and-transition-in-css-spanish.jpg',
            urlPDFEnglishDark: '/pdfs/english/transformation-and-transition-in-css-english.pdf',
            urlPDFFrenchDark: '/pdfs/french/transformation-and-transition-in-css-french.pdf',
            urlPDFSpanishDark: '/pdfs/spanish/transformation-and-transition-in-css-spanish.pdf',
        });

        createCredential({
            id: 'typescript-advanced-types-and-functions',
            name: 'typescript-advanced-types-and-functions',
            urlImageEnglish: '/imgs/credentials/english/typescript-advanced-types-and-functions-english.jpg',
            urlImageFrench: '/imgs/credentials/french/typescript-advanced-types-and-functions-french.jpg',
            urlImageSpanish: '/imgs/credentials/spanish/typescript-advanced-types-and-functions-spanish.jpg',
            urlPDFEnglish: '/pdfs/english/typescript-advanced-types-and-functions-english.pdf',
            urlPDFFrench: '/pdfs/french/typescript-advanced-types-and-functions-french.pdf',
            urlPDFSpanish: '/pdfs/spanish/typescript-advanced-types-and-functions-spanish.pdf',
            urlImageEnglishDark: '/imgs/credentials/english/typescript-advanced-types-and-functions-english.jpg',
            urlImageFrenchDark: '/imgs/credentials/french/typescript-advanced-types-and-functions-french.jpg',
            urlImageSpanishDark: '/imgs/credentials/spanish/typescript-advanced-types-and-functions-spanish.jpg',
            urlPDFEnglishDark: '/pdfs/english/typescript-advanced-types-and-functions-english.pdf',
            urlPDFFrenchDark: '/pdfs/french/typescript-advanced-types-and-functions-french.pdf',
            urlPDFSpanishDark: '/pdfs/spanish/typescript-advanced-types-and-functions-spanish.pdf',
        });

        createCredential({
            id: 'typescript-object-oriented-programming-and-asynchronism',
            name: 'typescript-object-oriented-programming-and-asynchronism',
            urlImageEnglish: '/imgs/credentials/english/typescript-object-oriented-programming-and-asynchronism-english.jpg',
            urlImageFrench: '/imgs/credentials/french/typescript-object-oriented-programming-and-asynchronism-french.jpg',
            urlImageSpanish: '/imgs/credentials/spanish/typescript-object-oriented-programming-and-asynchronism-spanish.jpg',
            urlPDFEnglish: '/pdfs/english/typescript-object-oriented-programming-and-asynchronism-english.pdf',
            urlPDFFrench: '/pdfs/french/typescript-object-oriented-programming-and-asynchronism-french.pdf',
            urlPDFSpanish: '/pdfs/spanish/typescript-object-oriented-programming-and-asynchronism-spanish.pdf',
            urlImageEnglishDark: '/imgs/credentials/english/typescript-object-oriented-programming-and-asynchronism-english.jpg',
            urlImageFrenchDark: '/imgs/credentials/french/typescript-object-oriented-programming-and-asynchronism-french.jpg',
            urlImageSpanishDark: '/imgs/credentials/spanish/typescript-object-oriented-programming-and-asynchronism-spanish.jpg',
            urlPDFEnglishDark: '/pdfs/english/typescript-object-oriented-programming-and-asynchronism-english.pdf',
            urlPDFFrenchDark: '/pdfs/french/typescript-object-oriented-programming-and-asynchronism-french.pdf',
            urlPDFSpanishDark: '/pdfs/spanish/typescript-object-oriented-programming-and-asynchronism-spanish.pdf',
        });

        createCredential({
            id: 'unit-testing-in-vue',
            name: 'unit-testing-in-vue',
            urlImageEnglish: '/imgs/credentials/english/unit-testing-in-vue-english.jpg',
            urlImageFrench: '/imgs/credentials/french/unit-testing-in-vue-french.jpg',
            urlImageSpanish: '/imgs/credentials/spanish/unit-testing-in-vue-spanish.jpg',
            urlPDFEnglish: '/pdfs/english/unit-testing-in-vue-english.pdf',
            urlPDFFrench: '/pdfs/french/unit-testing-in-vue-french.pdf',
            urlPDFSpanish: '/pdfs/spanish/unit-testing-in-vue-spanish.pdf',
            urlImageEnglishDark: '/imgs/credentials/english/unit-testing-in-vue-english.jpg',
            urlImageFrenchDark: '/imgs/credentials/french/unit-testing-in-vue-french.jpg',
            urlImageSpanishDark: '/imgs/credentials/spanish/unit-testing-in-vue-spanish.jpg',
            urlPDFEnglishDark: '/pdfs/english/unit-testing-in-vue-english.pdf',
            urlPDFFrenchDark: '/pdfs/french/unit-testing-in-vue-french.pdf',
            urlPDFSpanishDark: '/pdfs/spanish/unit-testing-in-vue-spanish.pdf',
        });

        createCredential({
            id: 'vitejs',
            name: 'vitejs',
            urlImageEnglish: '/imgs/credentials/english/vitejs-english.jpg',
            urlImageFrench: '/imgs/credentials/french/vitejs-french.jpg',
            urlImageSpanish: '/imgs/credentials/spanish/vitejs-spanish.jpg',
            urlPDFEnglish: '/pdfs/english/vitejs-english.pdf',
            urlPDFFrench: '/pdfs/french/vitejs-french.pdf',
            urlPDFSpanish: '/pdfs/spanish/vitejs-spanish.pdf',
            urlImageEnglishDark: '/imgs/credentials/english/vitejs-english.jpg',
            urlImageFrenchDark: '/imgs/credentials/french/vitejs-french.jpg',
            urlImageSpanishDark: '/imgs/credentials/spanish/vitejs-spanish.jpg',
            urlPDFEnglishDark: '/pdfs/english/vitejs-english.pdf',
            urlPDFFrenchDark: '/pdfs/french/vitejs-french.pdf',
            urlPDFSpanishDark: '/pdfs/spanish/vitejs-spanish.pdf',
        });
        
        createCredential({
            id: 'vue-components-and-composition-api',
            name: 'vue-components-and-composition-api',
            urlImageEnglish: '/imgs/credentials/english/vue-components-and-composition-api-english.jpg',
            urlImageFrench: '/imgs/credentials/french/vue-components-and-composition-api-french.jpg',
            urlImageSpanish: '/imgs/credentials/spanish/vue-components-and-composition-api-spanish.jpg',
            urlPDFEnglish: '/pdfs/english/vue-components-and-composition-api-english.pdf',
            urlPDFFrench: '/pdfs/french/vue-components-and-composition-api-french.pdf',
            urlPDFSpanish: '/pdfs/spanish/vue-components-and-composition-api-spanish.pdf',
            urlImageEnglishDark: '/imgs/credentials/english/vue-components-and-composition-api-english.jpg',
            urlImageFrenchDark: '/imgs/credentials/french/vue-components-and-composition-api-french.jpg',
            urlImageSpanishDark: '/imgs/credentials/spanish/vue-components-and-composition-api-spanish.jpg',
            urlPDFEnglishDark: '/pdfs/english/vue-components-and-composition-api-english.pdf',
            urlPDFFrenchDark: '/pdfs/french/vue-components-and-composition-api-french.pdf',
            urlPDFSpanishDark: '/pdfs/spanish/vue-components-and-composition-api-spanish.pdf',
        });

        createCredential({
            id: 'vue-introduction-and-fundamentals',
            name: 'vue-introduction-and-fundamentals',
            urlImageEnglish: '/imgs/credentials/english/vue-introduction-and-fundamentals-english.jpg',
            urlImageFrench: '/imgs/credentials/french/vue-introduction-and-fundamentals-french.jpg',
            urlImageSpanish: '/imgs/credentials/spanish/vue-introduction-and-fundamentals-spanish.jpg',
            urlPDFEnglish: '/pdfs/english/vue-introduction-and-fundamentals-english.pdf',
            urlPDFFrench: '/pdfs/french/vue-introduction-and-fundamentals-french.pdf',
            urlPDFSpanish: '/pdfs/spanish/vue-introduction-and-fundamentals-spanish.pdf',
            urlImageEnglishDark: '/imgs/credentials/english/vue-introduction-and-fundamentals-english.jpg',
            urlImageFrenchDark: '/imgs/credentials/french/vue-introduction-and-fundamentals-french.jpg',
            urlImageSpanishDark: '/imgs/credentials/spanish/vue-introduction-and-fundamentals-spanish.jpg',
            urlPDFEnglishDark: '/pdfs/english/vue-introduction-and-fundamentals-english.pdf',
            urlPDFFrenchDark: '/pdfs/french/vue-introduction-and-fundamentals-french.pdf',
            urlPDFSpanishDark: '/pdfs/spanish/vue-introduction-and-fundamentals-spanish.pdf',
        });

        createCredential({
            id: 'vue-navigation-with-router',
            name: 'vue-navigation-with-router',
            urlImageEnglish: '/imgs/credentials/english/vue-navigation-with-router-english.jpg',
            urlImageFrench: '/imgs/credentials/french/vue-navigation-with-router-french.jpg',
            urlImageSpanish: '/imgs/credentials/spanish/vue-navigation-with-router-spanish.jpg',
            urlPDFEnglish: '/pdfs/english/vue-navigation-with-router-english.pdf',
            urlPDFFrench: '/pdfs/french/vue-navigation-with-router-french.pdf',
            urlPDFSpanish: '/pdfs/spanish/vue-navigation-with-router-spanish.pdf',
            urlImageEnglishDark: '/imgs/credentials/english/vue-navigation-with-router-english.jpg',
            urlImageFrenchDark: '/imgs/credentials/french/vue-navigation-with-router-french.jpg',
            urlImageSpanishDark: '/imgs/credentials/spanish/vue-navigation-with-router-spanish.jpg',
            urlPDFEnglishDark: '/pdfs/english/vue-navigation-with-router-english.pdf',
            urlPDFFrenchDark: '/pdfs/french/vue-navigation-with-router-french.pdf',
            urlPDFSpanishDark: '/pdfs/spanish/vue-navigation-with-router-spanish.pdf',
        });

        createCredential({
            id: 'vue-practical',
            name: 'vue-practical',
            urlImageEnglish: '/imgs/credentials/english/vue-practical-english.jpg',
            urlImageFrench: '/imgs/credentials/french/vue-practical-french.jpg',
            urlImageSpanish: '/imgs/credentials/spanish/vue-practical-spanish.jpg',
            urlPDFEnglish: '/pdfs/english/vue-practical-english.pdf',
            urlPDFFrench: '/pdfs/french/vue-practical-french.pdf',
            urlPDFSpanish: '/pdfs/spanish/vue-practical-spanish.pdf',
            urlImageEnglishDark: '/imgs/credentials/english/vue-practical-english.jpg',
            urlImageFrenchDark: '/imgs/credentials/french/vue-practical-french.jpg',
            urlImageSpanishDark: '/imgs/credentials/spanish/vue-practical-spanish.jpg',
            urlPDFEnglishDark: '/pdfs/english/vue-practical-english.pdf',
            urlPDFFrenchDark: '/pdfs/french/vue-practical-french.pdf',
            urlPDFSpanishDark: '/pdfs/spanish/vue-practical-spanish.pdf',
        });
        
        createCredential({
            id: 'vue-state-management-with-pinia',
            name: 'vue-state-management-with-pinia',
            urlImageEnglish: '/imgs/credentials/english/vue-state-management-with-pinia-english.jpg',
            urlImageFrench: '/imgs/credentials/french/vue-state-management-with-pinia-french.jpg',
            urlImageSpanish: '/imgs/credentials/spanish/vue-state-management-with-pinia-spanish.jpg',
            urlPDFEnglish: '/pdfs/english/vue-state-management-with-pinia-english.pdf',
            urlPDFFrench: '/pdfs/french/vue-state-management-with-pinia-french.pdf',
            urlPDFSpanish: '/pdfs/spanish/vue-state-management-with-pinia-spanish.pdf',
            urlImageEnglishDark: '/imgs/credentials/english/vue-state-management-with-pinia-english.jpg',
            urlImageFrenchDark: '/imgs/credentials/french/vue-state-management-with-pinia-french.jpg',
            urlImageSpanishDark: '/imgs/credentials/spanish/vue-state-management-with-pinia-spanish.jpg',
            urlPDFEnglishDark: '/pdfs/english/vue-state-management-with-pinia-english.pdf',
            urlPDFFrenchDark: '/pdfs/french/vue-state-management-with-pinia-french.pdf',
            urlPDFSpanishDark: '/pdfs/spanish/vue-state-management-with-pinia-spanish.pdf',
        });

        createCredential({
            id: 'vue-state-management-with-vuex',
            name: 'vue-state-management-with-vuex',
            urlImageEnglish: '/imgs/credentials/english/vue-state-management-with-vuex-english.jpg',
            urlImageFrench: '/imgs/credentials/french/vue-state-management-with-vuex-french.jpg',
            urlImageSpanish: '/imgs/credentials/spanish/vue-state-management-with-vuex-spanish.jpg',
            urlPDFEnglish: '/pdfs/english/vue-state-management-with-vuex-english.pdf',
            urlPDFFrench: '/pdfs/french/vue-state-management-with-vuex-french.pdf',
            urlPDFSpanish: '/pdfs/spanish/vue-state-management-with-vuex-spanish.pdf',
            urlImageEnglishDark: '/imgs/credentials/english/vue-state-management-with-vuex-english.jpg',
            urlImageFrenchDark: '/imgs/credentials/french/vue-state-management-with-vuex-french.jpg',
            urlImageSpanishDark: '/imgs/credentials/spanish/vue-state-management-with-vuex-spanish.jpg',
            urlPDFEnglishDark: '/pdfs/english/vue-state-management-with-vuex-english.pdf',
            urlPDFFrenchDark: '/pdfs/french/vue-state-management-with-vuex-french.pdf',
            urlPDFSpanishDark: '/pdfs/spanish/vue-state-management-with-vuex-spanish.pdf',
        });

        createCredential({
            id: 'web-design-with-css-grid-and-flexbox',
            name: 'web-design-with-css-grid-and-flexbox',
            urlImageEnglish: '/imgs/credentials/english/web-design-with-css-grid-and-flexbox-english.jpg',
            urlImageFrench: '/imgs/credentials/french/web-design-with-css-grid-and-flexbox-french.jpg',
            urlImageSpanish: '/imgs/credentials/spanish/web-design-with-css-grid-and-flexbox-spanish.jpg',
            urlPDFEnglish: '/pdfs/english/web-design-with-css-grid-and-flexbox-english.pdf',
            urlPDFFrench: '/pdfs/french/web-design-with-css-grid-and-flexbox-french.pdf',
            urlPDFSpanish: '/pdfs/spanish/web-design-with-css-grid-and-flexbox-spanish.pdf',
            urlImageEnglishDark: '/imgs/credentials/english/web-design-with-css-grid-and-flexbox-english.jpg',
            urlImageFrenchDark: '/imgs/credentials/french/web-design-with-css-grid-and-flexbox-french.jpg',
            urlImageSpanishDark: '/imgs/credentials/spanish/web-design-with-css-grid-and-flexbox-spanish.jpg',
            urlPDFEnglishDark: '/pdfs/english/web-design-with-css-grid-and-flexbox-english.pdf',
            urlPDFFrenchDark: '/pdfs/french/web-design-with-css-grid-and-flexbox-french.pdf',
            urlPDFSpanishDark: '/pdfs/spanish/web-design-with-css-grid-and-flexbox-spanish.pdf',
        });

        createCredential({
            id: 'cv',
            name: 'cv',
            urlImageEnglish: '/imgs/credentials/english/cv-jesus-daniel-english.jpg',
            urlImageFrench: '/imgs/credentials/french/cv-jesus-daniel-french.jpg',
            urlImageSpanish: '/imgs/credentials/spanish/cv-jesus-daniel-spanish.jpg',
            urlPDFEnglish: '/pdfs/english/cv-jesus-daniel-english.pdf',
            urlPDFFrench: '/pdfs/french/cv-jesus-daniel-french.pdf',
            urlPDFSpanish: '/pdfs/spanish/cv-jesus-daniel-spanish.pdf',
            urlImageEnglishDark: '/imgs/credentials/english/cv-jesus-daniel-english-dark.jpg',
            urlImageFrenchDark: '/imgs/credentials/french/cv-jesus-daniel-french-dark.jpg',
            urlImageSpanishDark: '/imgs/credentials/spanish/cv-jesus-daniel-spanish-dark.jpg',
            urlPDFEnglishDark: '/pdfs/english/cv-jesus-daniel-english-dark.pdf',
            urlPDFFrenchDark: '/pdfs/french/cv-jesus-daniel-french-dark.pdf',
            urlPDFSpanishDark: '/pdfs/spanish/cv-jesus-daniel-spanish-dark.pdf',
        });
    }

    init();

    return {
        //States

        //Actions
        createCredential,
        getCredential,
        updateCredential,
        deleteCredential,
    };
});