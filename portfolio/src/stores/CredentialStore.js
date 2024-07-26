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
            id: 'credential',
            name: 'advanced-design-system',
            urlImageEnglish: '../../public/imgs/credentials/english/advanced-design-system-english.jpg',
            urlImageFrench: '../../public/imgs/credentials/french/advanced-design-system-french.jpg',
            urlImageSpanish: '../../public/imgs/credentials/spanish/advanced-design-system-spanish.jpg',
            urlPDFEnglish: '../../public/pdfs/english/advanced-design-system-english.pdf',
            urlPDFFrench: '../../public/pdfs/french/advanced-design-system-french.pdf',
            urlPDFSpanish: '../../public/pdfs/spanish/advanced-design-system-spanish.pdf',
        });

        createCredential({
            id: 'advanced-design-system',
            name: 'advanced-design-system',
            urlImageEnglish: '../../public/imgs/credentials/english/advanced-design-system-english.jpg',
            urlImageFrench: '../../public/imgs/credentials/french/advanced-design-system-french.jpg',
            urlImageSpanish: '../../public/imgs/credentials/spanish/advanced-design-system-spanish.jpg',
            urlPDFEnglish: '../../public/pdfs/english/advanced-design-system-english.pdf',
            urlPDFFrench: '../../public/pdfs/french/advanced-design-system-french.pdf',
            urlPDFSpanish: '../../public/pdfs/spanish/advanced-design-system-spanish.pdf',
        });

        createCredential({
            id: 'algorithmic-complexity-with-javascript',
            name: 'algorithmic-complexity-with-javascript',
            urlImageEnglish: '../../public/imgs/credentials/english/algorithmic-complexity-with-javascript-english.jpg',
            urlImageFrench: '../../public/imgs/credentials/french/algorithmic-complexity-with-javascript-french.jpg',
            urlImageSpanish: '../../public/imgs/credentials/spanish/algorithmic-complexity-with-javascript-spanish.jpg',
            urlPDFEnglish: '../../public/pdfs/english/algorithmic-complexity-with-javascript-english.pdf',
            urlPDFFrench: '../../public/pdfs/french/algorithmic-complexity-with-javascript-french.pdf',
            urlPDFSpanish: '../../public/pdfs/spanish/algorithmic-complexity-with-javascript-spanish.pdf',
        });

        createCredential({
            id: 'array-manipulation-in-javascript',
            name: 'array-manipulation-in-javascript',
            urlImageEnglish: '../../public/imgs/credentials/english/array-manipulation-in-javascript-english.jpg',
            urlImageFrench: '../../public/imgs/credentials/french/array-manipulation-in-javascript-french.jpg',
            urlImageSpanish: '../../public/imgs/credentials/spanish/array-manipulation-in-javascript-spanish.jpg',
            urlPDFEnglish: '../../public/pdfs/english/array-manipulation-in-javascript-english.pdf',
            urlPDFFrench: '../../public/pdfs/french/array-manipulation-in-javascript-french.pdf',
            urlPDFSpanish: '../../public/pdfs/spanish/array-manipulation-in-javascript-spanish.pdf',
        });

        createCredential({
            id: 'asynchronism-with-javascript',
            name: 'asynchronism-with-javascript',
            urlImageEnglish: '../../public/imgs/credentials/english/asynchronism-with-javascript-english.jpg',
            urlImageFrench: '../../public/imgs/credentials/french/asynchronism-with-javascript-french.jpg',
            urlImageSpanish: '../../public/imgs/credentials/spanish/asynchronism-with-javascript-spanish.jpg',
            urlPDFEnglish: '../../public/pdfs/english/asynchronism-with-javascript-english.pdf',
            urlPDFFrench: '../../public/pdfs/french/asynchronism-with-javascript-french.pdf',
            urlPDFSpanish: '../../public/pdfs/spanish/asynchronism-with-javascript-spanish.pdf',
        });

        createCredential({
            id: 'basic-css-grid',
            name: 'basic-css-grid',
            urlImageEnglish: '../../public/imgs/credentials/english/basic-css-grid-english.jpg',
            urlImageFrench: '../../public/imgs/credentials/french/basic-css-grid-french.jpg',
            urlImageSpanish: '../../public/imgs/credentials/spanish/basic-css-grid-spanish.jpg',
            urlPDFEnglish: '../../public/pdfs/english/basic-css-grid-english.pdf',
            urlPDFFrench: '../../public/pdfs/french/basic-css-grid-french.pdf',
            urlPDFSpanish: '../../public/pdfs/spanish/basic-css-grid-spanish.pdf',
        });

        createCredential({
            id: 'basic-javascript',
            name: 'basic-javascript',
            urlImageEnglish: '../../public/imgs/credentials/english/basic-javascript-english.jpg',
            urlImageFrench: '../../public/imgs/credentials/french/basic-javascript-french.jpg',
            urlImageSpanish: '../../public/imgs/credentials/spanish/basic-javascript-spanish.jpg',
            urlPDFEnglish: '../../public/pdfs/english/basic-javascript-english.pdf',
            urlPDFFrench: '../../public/pdfs/french/basic-javascript-french.pdf',
            urlPDFSpanish: '../../public/pdfs/spanish/basic-javascript-spanish.pdf',
        });

        createCredential({
            id: 'basic-object-oriented-programming-with-javascript',
            name: 'basic-object-oriented-programming-with-javascript',
            urlImageEnglish: '../../public/imgs/credentials/english/basic-object-oriented-programming-with-javascript-english.jpg',
            urlImageFrench: '../../public/imgs/credentials/french/basic-object-oriented-programming-with-javascript-french.jpg',
            urlImageSpanish: '../../public/imgs/credentials/spanish/basic-object-oriented-programming-with-javascript-spanish.jpg',
            urlPDFEnglish: '../../public/pdfs/english/basic-object-oriented-programming-with-javascript-english.pdf',
            urlPDFFrench: '../../public/pdfs/french/basic-object-oriented-programming-with-javascript-french.pdf',
            urlPDFSpanish: '../../public/pdfs/spanish/basic-object-oriented-programming-with-javascript-spanish.pdf',
        });

        createCredential({
            id: 'clean-code-with-javascript',
            name: 'clean-code-with-javascript',
            urlImageEnglish: '../../public/imgs/credentials/english/clean-code-with-javascript-english.jpg',
            urlImageFrench: '../../public/imgs/credentials/french/clean-code-with-javascript-french.jpg',
            urlImageSpanish: '../../public/imgs/credentials/spanish/clean-code-with-javascript-spanish.jpg',
            urlPDFEnglish: '../../public/pdfs/english/clean-code-with-javascript-english.pdf',
            urlPDFFrench: '../../public/pdfs/french/clean-code-with-javascript-french.pdf',
            urlPDFSpanish: '../../public/pdfs/spanish/clean-code-with-javascript-spanish.pdf',
        });

        createCredential({
            id: 'closures-and-scopes-in-javascript',
            name: 'closures-and-scopes-in-javascript',
            urlImageEnglish: '../../public/imgs/credentials/english/closures-and-scopes-in-javascript-english.jpg',
            urlImageFrench: '../../public/imgs/credentials/french/closures-and-scopes-in-javascript-french.jpg',
            urlImageSpanish: '../../public/imgs/credentials/spanish/closures-and-scopes-in-javascript-spanish.jpg',
            urlPDFEnglish: '../../public/pdfs/english/closures-and-scopes-in-javascript-english.pdf',
            urlPDFFrench: '../../public/pdfs/french/closures-and-scopes-in-javascript-french.pdf',
            urlPDFSpanish: '../../public/pdfs/spanish/closures-and-scopes-in-javascript-spanish.pdf',
        });

        createCredential({
            id: 'computational-thinking-python',
            name: 'computational-thinking-python',
            urlImageEnglish: '../../public/imgs/credentials/english/computational-thinking-python-english.jpg',
            urlImageFrench: '../../public/imgs/credentials/french/computational-thinking-python-french.jpg',
            urlImageSpanish: '../../public/imgs/credentials/spanish/computational-thinking-python-spanish.jpg',
            urlPDFEnglish: '../../public/pdfs/english/computational-thinking-python-english.pdf',
            urlPDFFrench: '../../public/pdfs/french/computational-thinking-python-french.pdf',
            urlPDFSpanish: '../../public/pdfs/spanish/computational-thinking-python-spanish.pdf',
        });

        createCredential({
            id: 'consumption-of-rest-api-with-javascript',
            name: 'consumption-of-rest-api-with-javascript',
            urlImageEnglish: '../../public/imgs/credentials/english/consumption-of-rest-api-with-javascript-english.jpg',
            urlImageFrench: '../../public/imgs/credentials/french/consumption-of-rest-api-with-javascript-french.jpg',
            urlImageSpanish: '../../public/imgs/credentials/spanish/consumption-of-rest-api-with-javascript-spanish.jpg',
            urlPDFEnglish: '../../public/pdfs/english/consumption-of-rest-api-with-javascript-english.pdf',
            urlPDFFrench: '../../public/pdfs/french/consumption-of-rest-api-with-javascript-french.pdf',
            urlPDFSpanish: '../../public/pdfs/spanish/consumption-of-rest-api-with-javascript-spanish.pdf',
        });

        createCredential({
            id: 'creational-design-patterns-in-javascript',
            name: 'creational-design-patterns-in-javascript',
            urlImageEnglish: '../../public/imgs/credentials/english/creational-design-patterns-in-javascript-english.jpg',
            urlImageFrench: '../../public/imgs/credentials/french/creational-design-patterns-in-javascript-french.jpg',
            urlImageSpanish: '../../public/imgs/credentials/spanish/creational-design-patterns-in-javascript-spanish.jpg',
            urlPDFEnglish: '../../public/pdfs/english/creational-design-patterns-in-javascript-english.pdf',
            urlPDFFrench: '../../public/pdfs/french/creational-design-patterns-in-javascript-french.pdf',
            urlPDFSpanish: '../../public/pdfs/spanish/creational-design-patterns-in-javascript-spanish.pdf',
        });

        createCredential({
            id: 'css-animations',
            name: 'css-animations',
            urlImageEnglish: '../../public/imgs/credentials/english/css-animations-english.jpg',
            urlImageFrench: '../../public/imgs/credentials/french/css-animations-french.jpg',
            urlImageSpanish: '../../public/imgs/credentials/spanish/css-animations-spanish.jpg',
            urlPDFEnglish: '../../public/pdfs/english/css-animations-english.pdf',
            urlPDFFrench: '../../public/pdfs/french/css-animations-french.pdf',
            urlPDFSpanish: '../../public/pdfs/spanish/css-animations-spanish.pdf',
        });

        createCredential({
            id: 'css-architecture',
            name: 'css-architecture',
            urlImageEnglish: '../../public/imgs/credentials/english/css-architecture-english.jpg',
            urlImageFrench: '../../public/imgs/credentials/french/css-architecture-french.jpg',
            urlImageSpanish: '../../public/imgs/credentials/spanish/css-architecture-spanish.jpg',
            urlPDFEnglish: '../../public/pdfs/english/css-architecture-english.pdf',
            urlPDFFrench: '../../public/pdfs/french/css-architecture-french.pdf',
            urlPDFSpanish: '../../public/pdfs/spanish/css-architecture-spanish.pdf',
        });

        createCredential({
            id: 'data-structures-with-javascript',
            name: 'data-structures-with-javascript',
            urlImageEnglish: '../../public/imgs/credentials/english/data-structures-with-javascript-english.jpg',
            urlImageFrench: '../../public/imgs/credentials/french/data-structures-with-javascript-french.jpg',
            urlImageSpanish: '../../public/imgs/credentials/spanish/data-structures-with-javascript-spanish.jpg',
            urlPDFEnglish: '../../public/pdfs/english/data-structures-with-javascript-english.pdf',
            urlPDFFrench: '../../public/pdfs/french/data-structures-with-javascript-french.pdf',
            urlPDFSpanish: '../../public/pdfs/spanish/data-structures-with-javascript-spanish.pdf',
        });

        createCredential({
            id: 'debugging-with-chrome-devtools',
            name: 'debugging-with-chrome-devtools',
            urlImageEnglish: '../../public/imgs/credentials/english/debugging-with-chrome-devtools-english.jpg',
            urlImageFrench: '../../public/imgs/credentials/french/debugging-with-chrome-devtools-french.jpg',
            urlImageSpanish: '../../public/imgs/credentials/spanish/debugging-with-chrome-devtools-spanish.jpg',
            urlPDFEnglish: '../../public/pdfs/english/debugging-with-chrome-devtools-english.pdf',
            urlPDFFrench: '../../public/pdfs/french/debugging-with-chrome-devtools-french.pdf',
            urlPDFSpanish: '../../public/pdfs/spanish/debugging-with-chrome-devtools-spanish.pdf',
        });

        createCredential({
            id: 'definitive-html-and-css',
            name: 'definitive-html-and-css',
            urlImageEnglish: '../../public/imgs/credentials/english/definitive-html-and-css-english.jpg',
            urlImageFrench: '../../public/imgs/credentials/french/definitive-html-and-css-french.jpg',
            urlImageSpanish: '../../public/imgs/credentials/spanish/definitive-html-and-css-spanish.jpg',
            urlPDFEnglish: '../../public/pdfs/english/definitive-html-and-css-english.pdf',
            urlPDFFrench: '../../public/pdfs/french/definitive-html-and-css-french.pdf',
            urlPDFSpanish: '../../public/pdfs/spanish/definitive-html-and-css-spanish.pdf',
        });

        createCredential({
            id: 'design-for-programmers',
            name: 'design-for-programmers',
            urlImageEnglish: '../../public/imgs/credentials/english/design-for-programmers-english.jpg',
            urlImageFrench: '../../public/imgs/credentials/french/design-for-programmers-french.jpg',
            urlImageSpanish: '../../public/imgs/credentials/spanish/design-for-programmers-spanish.jpg',
            urlPDFEnglish: '../../public/pdfs/english/design-for-programmers-english.pdf',
            urlPDFFrench: '../../public/pdfs/french/design-for-programmers-french.pdf',
            urlPDFSpanish: '../../public/pdfs/spanish/design-for-programmers-spanish.pdf',
        });

        createCredential({
            id: 'design-system',
            name: 'design-system',
            urlImageEnglish: '../../public/imgs/credentials/english/design-system-english.jpg',
            urlImageFrench: '../../public/imgs/credentials/french/design-system-french.jpg',
            urlImageSpanish: '../../public/imgs/credentials/spanish/design-system-spanish.jpg',
            urlPDFEnglish: '../../public/pdfs/english/design-system-english.pdf',
            urlPDFFrench: '../../public/pdfs/french/design-system-french.pdf',
            urlPDFSpanish: '../../public/pdfs/spanish/design-system-spanish.pdf',
        });

        createCredential({
            id: 'ecmascript-hystory-and-versions-of-javascript',
            name: 'ecmascript-hystory-and-versions-of-javascript',
            urlImageEnglish: '../../public/imgs/credentials/english/ecmascript-hystory-and-versions-of-javascript-english.jpg',
            urlImageFrench: '../../public/imgs/credentials/french/ecmascript-hystory-and-versions-of-javascript-french.jpg',
            urlImageSpanish: '../../public/imgs/credentials/spanish/ecmascript-hystory-and-versions-of-javascript-spanish.jpg',
            urlPDFEnglish: '../../public/pdfs/english/ecmascript-hystory-and-versions-of-javascript-english.pdf',
            urlPDFFrench: '../../public/pdfs/french/ecmascript-hystory-and-versions-of-javascript-french.pdf',
            urlPDFSpanish: '../../public/pdfs/spanish/ecmascript-hystory-and-versions-of-javascript-spanish.pdf',
        });

        createCredential({
            id: 'fronted-developer',
            name: 'fronted-developer',
            urlImageEnglish: '../../public/imgs/credentials/english/fronted-developer-english.jpg',
            urlImageFrench: '../../public/imgs/credentials/french/fronted-developer-french.jpg',
            urlImageSpanish: '../../public/imgs/credentials/spanish/fronted-developer-spanish.jpg',
            urlPDFEnglish: '../../public/pdfs/english/fronted-developer-english.pdf',
            urlPDFFrench: '../../public/pdfs/french/fronted-developer-french.pdf',
            urlPDFSpanish: '../../public/pdfs/spanish/fronted-developer-spanish.pdf',
        });

        createCredential({
            id: 'fronted-developer-practical',
            name: 'fronted-developer-practical',
            urlImageEnglish: '../../public/imgs/credentials/english/fronted-developer-practical-english.jpg',
            urlImageFrench: '../../public/imgs/credentials/french/fronted-developer-practical-french.jpg',
            urlImageSpanish: '../../public/imgs/credentials/spanish/fronted-developer-practical-spanish.jpg',
            urlPDFEnglish: '../../public/pdfs/english/fronted-developer-practical-english.pdf',
            urlPDFFrench: '../../public/pdfs/french/fronted-developer-practical-french.pdf',
            urlPDFSpanish: '../../public/pdfs/spanish/fronted-developer-practical-spanish.pdf',
        });

        createCredential({
            id: 'functions-of-python',
            name: 'functions-of-python',
            urlImageEnglish: '../../public/imgs/credentials/english/functions-of-python-english.jpg',
            urlImageFrench: '../../public/imgs/credentials/french/functions-of-python-french.jpg',
            urlImageSpanish: '../../public/imgs/credentials/spanish/functions-of-python-spanish.jpg',
            urlPDFEnglish: '../../public/pdfs/english/functions-of-python-english.pdf',
            urlPDFFrench: '../../public/pdfs/french/functions-of-python-french.pdf',
            urlPDFSpanish: '../../public/pdfs/spanish/functions-of-python-spanish.pdf',
        });

        createCredential({
            id: 'fundamentals-of-python',
            name: 'fundamentals-of-python',
            urlImageEnglish: '../../public/imgs/credentials/english/fundamentals-of-python-english.jpg',
            urlImageFrench: '../../public/imgs/credentials/french/fundamentals-of-python-french.jpg',
            urlImageSpanish: '../../public/imgs/credentials/spanish/fundamentals-of-python-spanish.jpg',
            urlPDFEnglish: '../../public/pdfs/english/fundamentals-of-python-english.pdf',
            urlPDFFrench: '../../public/pdfs/french/fundamentals-of-python-french.pdf',
            urlPDFSpanish: '../../public/pdfs/spanish/fundamentals-of-python-spanish.pdf',
        });

        createCredential({
            id: 'fundamentals-of-typescript',
            name: 'fundamentals-of-typescript',
            urlImageEnglish: '../../public/imgs/credentials/english/fundamentals-of-typescript-english.jpg',
            urlImageFrench: '../../public/imgs/credentials/french/fundamentals-of-typescript-french.jpg',
            urlImageSpanish: '../../public/imgs/credentials/spanish/fundamentals-of-typescript-spanish.jpg',
            urlPDFEnglish: '../../public/pdfs/english/fundamentals-of-typescript-english.pdf',
            urlPDFFrench: '../../public/pdfs/french/fundamentals-of-typescript-french.pdf',
            urlPDFSpanish: '../../public/pdfs/spanish/fundamentals-of-typescript-spanish.pdf',
        });

        createCredential({
            id: 'git-and-github',
            name: 'git-and-github',
            urlImageEnglish: '../../public/imgs/credentials/english/git-and-github-english.jpg',
            urlImageFrench: '../../public/imgs/credentials/french/git-and-github-french.jpg',
            urlImageSpanish: '../../public/imgs/credentials/spanish/git-and-github-spanish.jpg',
            urlPDFEnglish: '../../public/pdfs/english/git-and-github-english.pdf',
            urlPDFFrench: '../../public/pdfs/french/git-and-github-french.pdf',
            urlPDFSpanish: '../../public/pdfs/spanish/git-and-github-spanish.pdf',
        });

        createCredential({
            id: 'html-and-css',
            name: 'html-and-css',
            urlImageEnglish: '../../public/imgs/credentials/english/html-and-css-english.jpg',
            urlImageFrench: '../../public/imgs/credentials/french/html-and-css-french.jpg',
            urlImageSpanish: '../../public/imgs/credentials/spanish/html-and-css-spanish.jpg',
            urlPDFEnglish: '../../public/pdfs/english/html-and-css-english.pdf',
            urlPDFFrench: '../../public/pdfs/french/html-and-css-french.pdf',
            urlPDFSpanish: '../../public/pdfs/spanish/html-and-css-spanish.pdf',
        });

        createCredential({
            id: 'intermediate-object-oriented-programming-with-javascript',
            name: 'intermediate-object-oriented-programming-with-javascript',
            urlImageEnglish: '../../public/imgs/credentials/english/intermediate-object-oriented-programming-with-javascript-english.jpg',
            urlImageFrench: '../../public/imgs/credentials/french/intermediate-object-oriented-programming-with-javascript-french.jpg',
            urlImageSpanish: '../../public/imgs/credentials/spanish/intermediate-object-oriented-programming-with-javascript-spanish.jpg',
            urlPDFEnglish: '../../public/pdfs/english/intermediate-object-oriented-programming-with-javascript-english.pdf',
            urlPDFFrench: '../../public/pdfs/french/intermediate-object-oriented-programming-with-javascript-french.pdf',
            urlPDFSpanish: '../../public/pdfs/spanish/intermediate-object-oriented-programming-with-javascript-spanish.pdf',
        });

        createCredential({
            id: 'javascript-basic-mathematics-and-statistics',
            name: 'javascript-basic-mathematics-and-statistics',
            urlImageEnglish: '../../public/imgs/credentials/english/javascript-basic-mathematics-and-statistics-english.jpg',
            urlImageFrench: '../../public/imgs/credentials/french/javascript-basic-mathematics-and-statistics-french.jpg',
            urlImageSpanish: '../../public/imgs/credentials/spanish/javascript-basic-mathematics-and-statistics-spanish.jpg',
            urlPDFEnglish: '../../public/pdfs/english/javascript-basic-mathematics-and-statistics-english.pdf',
            urlPDFFrench: '../../public/pdfs/french/javascript-basic-mathematics-and-statistics-french.pdf',
            urlPDFSpanish: '../../public/pdfs/spanish/javascript-basic-mathematics-and-statistics-spanish.pdf',
        });

        createCredential({
            id: 'javascript-create-a-videogame',
            name: 'javascript-create-a-videogame',
            urlImageEnglish: '../../public/imgs/credentials/english/javascript-create-a-videogame-english.jpg',
            urlImageFrench: '../../public/imgs/credentials/french/javascript-create-a-videogame-french.jpg',
            urlImageSpanish: '../../public/imgs/credentials/spanish/javascript-create-a-videogame-spanish.jpg',
            urlPDFEnglish: '../../public/pdfs/english/javascript-create-a-videogame-english.pdf',
            urlPDFFrench: '../../public/pdfs/french/javascript-create-a-videogame-french.pdf',
            urlPDFSpanish: '../../public/pdfs/spanish/javascript-create-a-videogame-spanish.pdf',
        });

        createCredential({
            id: 'javascript-engine-v8-and-the-browser',
            name: 'javascript-engine-v8-and-the-browser',
            urlImageEnglish: '../../public/imgs/credentials/english/javascript-engine-v8-and-the-browser-english.jpg',
            urlImageFrench: '../../public/imgs/credentials/french/javascript-engine-v8-and-the-browser-french.jpg',
            urlImageSpanish: '../../public/imgs/credentials/spanish/javascript-engine-v8-and-the-browser-spanish.jpg',
            urlPDFEnglish: '../../public/pdfs/english/javascript-engine-v8-and-the-browser-english.pdf',
            urlPDFFrench: '../../public/pdfs/french/javascript-engine-v8-and-the-browser-french.pdf',   
            urlPDFSpanish: '../../public/pdfs/spanish/javascript-engine-v8-and-the-browser-spanish.pdf',
        });

        createCredential({
            id: 'layout-in-css-practical',
            name: 'layout-in-css-practical',
            urlImageEnglish: '../../public/imgs/credentials/english/layout-in-css-practical-english.jpg',
            urlImageFrench: '../../public/imgs/credentials/french/layout-in-css-practical-french.jpg',
            urlImageSpanish: '../../public/imgs/credentials/spanish/layout-in-css-practical-spanish.jpg',
            urlPDFEnglish: '../../public/pdfs/english/layout-in-css-practical-english.pdf',
            urlPDFFrench: '../../public/pdfs/french/layout-in-css-practical-french.pdf',
            urlPDFSpanish: '../../public/pdfs/spanish/layout-in-css-practical-spanish.pdf',
        });

        createCredential({
            id: 'practical-consumption-of-rest-api-with-javascript',
            name: 'practical-consumption-of-rest-api-with-javascript',
            urlImageEnglish: '../../public/imgs/credentials/english/practical-consumption-of-rest-api-with-javascript-english.jpg',
            urlImageFrench: '../../public/imgs/credentials/french/practical-consumption-of-rest-api-with-javascript-french.jpg',
            urlImageSpanish: '../../public/imgs/credentials/spanish/practical-consumption-of-rest-api-with-javascript-spanish.jpg',
            urlPDFEnglish: '../../public/pdfs/english/practical-consumption-of-rest-api-with-javascript-english.pdf',
            urlPDFFrench: '../../public/pdfs/french/practical-consumption-of-rest-api-with-javascript-french.pdf',
            urlPDFSpanish: '../../public/pdfs/spanish/practical-consumption-of-rest-api-with-javascript-spanish.pdf',
        });

        createCredential({
            id: 'practical-javascript',
            name: 'practical-javascript',
            urlImageEnglish: '../../public/imgs/credentials/english/practical-javascript-english.jpg',
            urlImageFrench: '../../public/imgs/credentials/french/practical-javascript-french.jpg',
            urlImageSpanish: '../../public/imgs/credentials/spanish/practical-javascript-spanish.jpg',
            urlPDFEnglish: '../../public/pdfs/english/practical-javascript-english.pdf',
            urlPDFFrench: '../../public/pdfs/french/practical-javascript-french.pdf',
            urlPDFSpanish: '../../public/pdfs/spanish/practical-javascript-spanish.pdf',
        });

        createCredential({
            id: 'professional-consumption-of-rest-api-with-javascript',
            name: 'professional-consumption-of-rest-api-with-javascript',
            urlImageEnglish: '../../public/imgs/credentials/english/professional-consumption-of-rest-api-with-javascript-english.jpg',
            urlImageFrench: '../../public/imgs/credentials/french/professional-consumption-of-rest-api-with-javascript-french.jpg',
            urlImageSpanish: '../../public/imgs/credentials/spanish/professional-consumption-of-rest-api-with-javascript-spanish.jpg',
            urlPDFEnglish: '../../public/pdfs/english/professional-consumption-of-rest-api-with-javascript-english.pdf',
            urlPDFFrench: '../../public/pdfs/french/professional-consumption-of-rest-api-with-javascript-french.pdf',
            urlPDFSpanish: '../../public/pdfs/spanish/professional-consumption-of-rest-api-with-javascript-spanish.pdf',
        });

        createCredential({
            id: 'professional-css-grid-layout',
            name: 'professional-css-grid-layout',
            urlImageEnglish: '../../public/imgs/credentials/english/professional-css-grid-layout-english.jpg',
            urlImageFrench: '../../public/imgs/credentials/french/professional-css-grid-layout-french.jpg',
            urlImageSpanish: '../../public/imgs/credentials/spanish/professional-css-grid-layout-spanish.jpg',
            urlPDFEnglish: '../../public/pdfs/english/professional-css-grid-layout-english.pdf',
            urlPDFFrench: '../../public/pdfs/french/professional-css-grid-layout-french.pdf',
            urlPDFSpanish: '../../public/pdfs/spanish/professional-css-grid-layout-spanish.pdf',
        });

        createCredential({
            id: 'python-algorithmic-complexity',
            name: 'python-algorithmic-complexity',
            urlImageEnglish: '../../public/imgs/credentials/english/python-algorithmic-complexity-english.jpg',
            urlImageFrench: '../../public/imgs/credentials/french/python-algorithmic-complexity-french.jpg',
            urlImageSpanish: '../../public/imgs/credentials/spanish/python-algorithmic-complexity-spanish.jpg',
            urlPDFEnglish: '../../public/pdfs/english/python-algorithmic-complexity-english.pdf',
            urlPDFFrench: '../../public/pdfs/french/python-algorithmic-complexity-french.pdf',
            urlPDFSpanish: '../../public/pdfs/spanish/python-algorithmic-complexity-spanish.pdf',
        });

        createCredential({
            id: 'python-data-structure',
            name: 'python-data-structure',
            urlImageEnglish: '../../public/imgs/credentials/english/python-data-structure-english.jpg',
            urlImageFrench: '../../public/imgs/credentials/french/python-data-structure-french.jpg',
            urlImageSpanish: '../../public/imgs/credentials/spanish/python-data-structure-spanish.jpg',
            urlPDFEnglish: '../../public/pdfs/english/python-data-structure-english.pdf',
            urlPDFFrench: '../../public/pdfs/french/python-data-structure-french.pdf',
            urlPDFSpanish: '../../public/pdfs/spanish/python-data-structure-spanish.pdf',
        });

        createCredential({
            id: 'python-pip-and-virtuals-enviroment',
            name: 'python-pip-and-virtuals-enviroment',
            urlImageEnglish: '../../public/imgs/credentials/english/python-pip-and-virtuals-enviroment-english.jpg',
            urlImageFrench: '../../public/imgs/credentials/french/python-pip-and-virtuals-enviroment-french.jpg',
            urlImageSpanish: '../../public/imgs/credentials/spanish/python-pip-and-virtuals-enviroment-spanish.jpg',
            urlPDFEnglish: '../../public/pdfs/english/python-pip-and-virtuals-enviroment-english.pdf',
            urlPDFFrench: '../../public/pdfs/french/python-pip-and-virtuals-enviroment-french.pdf',
            urlPDFSpanish: '../../public/pdfs/spanish/python-pip-and-virtuals-enviroment-spanish.pdf',
        });

        createCredential({
            id: 'responsive-design-mobile-first layout',
            name: 'responsive-design-mobile-first layout',
            urlImageEnglish: '../../public/imgs/credentials/english/responsive-design-mobile-first layout-english.jpg',
            urlImageFrench: '../../public/imgs/credentials/french/responsive-design-mobile-first layout-french.jpg',
            urlImageSpanish: '../../public/imgs/credentials/spanish/responsive-design-mobile-first layout-spanish.jpg',
            urlPDFEnglish: '../../public/pdfs/english/responsive-design-mobile-first layout-english.pdf',
            urlPDFFrench: '../../public/pdfs/french/responsive-design-mobile-first layout-french.pdf',
            urlPDFSpanish: '../../public/pdfs/spanish/responsive-design-mobile-first layout-spanish.pdf',
        });

        createCredential({
            id: 'transformation-and-transition-in-css',
            name: 'transformation-and-transition-in-css',
            urlImageEnglish: '../../public/imgs/credentials/english/transformation-and-transition-in-css-english.jpg',
            urlImageFrench: '../../public/imgs/credentials/french/transformation-and-transition-in-css-french.jpg',
            urlImageSpanish: '../../public/imgs/credentials/spanish/transformation-and-transition-in-css-spanish.jpg',
            urlPDFEnglish: '../../public/pdfs/english/transformation-and-transition-in-css-english.pdf',
            urlPDFFrench: '../../public/pdfs/french/transformation-and-transition-in-css-french.pdf',
            urlPDFSpanish: '../../public/pdfs/spanish/transformation-and-transition-in-css-spanish.pdf',
        });

        createCredential({
            id: 'typescript-advanced-types-and-functions',
            name: 'typescript-advanced-types-and-functions',
            urlImageEnglish: '../../public/imgs/credentials/english/typescript-advanced-types-and-functions-english.jpg',
            urlImageFrench: '../../public/imgs/credentials/french/typescript-advanced-types-and-functions-french.jpg',
            urlImageSpanish: '../../public/imgs/credentials/spanish/typescript-advanced-types-and-functions-spanish.jpg',
            urlPDFEnglish: '../../public/pdfs/english/typescript-advanced-types-and-functions-english.pdf',
            urlPDFFrench: '../../public/pdfs/french/typescript-advanced-types-and-functions-french.pdf',
            urlPDFSpanish: '../../public/pdfs/spanish/typescript-advanced-types-and-functions-spanish.pdf',
        });

        createCredential({
            id: 'typescript-object-oriented-programming-and-asynchronism',
            name: 'typescript-object-oriented-programming-and-asynchronism',
            urlImageEnglish: '../../public/imgs/credentials/english/typescript-object-oriented-programming-and-asynchronism-english.jpg',
            urlImageFrench: '../../public/imgs/credentials/french/typescript-object-oriented-programming-and-asynchronism-french.jpg',
            urlImageSpanish: '../../public/imgs/credentials/spanish/typescript-object-oriented-programming-and-asynchronism-spanish.jpg',
            urlPDFEnglish: '../../public/pdfs/english/typescript-object-oriented-programming-and-asynchronism-english.pdf',
            urlPDFFrench: '../../public/pdfs/french/typescript-object-oriented-programming-and-asynchronism-french.pdf',
            urlPDFSpanish: '../../public/pdfs/spanish/typescript-object-oriented-programming-and-asynchronism-spanish.pdf',
        });

        createCredential({
            id: 'unit-testing-in-vue',
            name: 'unit-testing-in-vue',
            urlImageEnglish: '../../public/imgs/credentials/english/unit-testing-in-vue-english.jpg',
            urlImageFrench: '../../public/imgs/credentials/french/unit-testing-in-vue-french.jpg',
            urlImageSpanish: '../../public/imgs/credentials/spanish/unit-testing-in-vue-spanish.jpg',
            urlPDFEnglish: '../../public/pdfs/english/unit-testing-in-vue-english.pdf',
            urlPDFFrench: '../../public/pdfs/french/unit-testing-in-vue-french.pdf',
            urlPDFSpanish: '../../public/pdfs/spanish/unit-testing-in-vue-spanish.pdf',
        });

        createCredential({
            id: 'vitejs',
            name: 'vitejs',
            urlImageEnglish: '../../public/imgs/credentials/english/vitejs-english.jpg',
            urlImageFrench: '../../public/imgs/credentials/french/vitejs-french.jpg',
            urlImageSpanish: '../../public/imgs/credentials/spanish/vitejs-spanish.jpg',
            urlPDFEnglish: '../../public/pdfs/english/vitejs-english.pdf',
            urlPDFFrench: '../../public/pdfs/french/vitejs-french.pdf',
            urlPDFSpanish: '../../public/pdfs/spanish/vitejs-spanish.pdf',
        });
        
        createCredential({
            id: 'vue-components-and-composition-api',
            name: 'vue-components-and-composition-api',
            urlImageEnglish: '../../public/imgs/credentials/english/vue-components-and-composition-api-english.jpg',
            urlImageFrench: '../../public/imgs/credentials/french/vue-components-and-composition-api-french.jpg',
            urlImageSpanish: '../../public/imgs/credentials/spanish/vue-components-and-composition-api-spanish.jpg',
            urlPDFEnglish: '../../public/pdfs/english/vue-components-and-composition-api-english.pdf',
            urlPDFFrench: '../../public/pdfs/french/vue-components-and-composition-api-french.pdf',
            urlPDFSpanish: '../../public/pdfs/spanish/vue-components-and-composition-api-spanish.pdf',
        });

        createCredential({
            id: 'vue-introduction-and-fundamentals',
            name: 'vue-introduction-and-fundamentals',
            urlImageEnglish: '../../public/imgs/credentials/english/vue-introduction-and-fundamentals-english.jpg',
            urlImageFrench: '../../public/imgs/credentials/french/vue-introduction-and-fundamentals-french.jpg',
            urlImageSpanish: '../../public/imgs/credentials/spanish/vue-introduction-and-fundamentals-spanish.jpg',
            urlPDFEnglish: '../../public/pdfs/english/vue-introduction-and-fundamentals-english.pdf',
            urlPDFFrench: '../../public/pdfs/french/vue-introduction-and-fundamentals-french.pdf',
            urlPDFSpanish: '../../public/pdfs/spanish/vue-introduction-and-fundamentals-spanish.pdf',
        });

        createCredential({
            id: 'vue-navigation-with-router',
            name: 'vue-navigation-with-router',
            urlImageEnglish: '../../public/imgs/credentials/english/vue-navigation-with-router-english.jpg',
            urlImageFrench: '../../public/imgs/credentials/french/vue-navigation-with-router-french.jpg',
            urlImageSpanish: '../../public/imgs/credentials/spanish/vue-navigation-with-router-spanish.jpg',
            urlPDFEnglish: '../../public/pdfs/english/vue-navigation-with-router-english.pdf',
            urlPDFFrench: '../../public/pdfs/french/vue-navigation-with-router-french.pdf',
            urlPDFSpanish: '../../public/pdfs/spanish/vue-navigation-with-router-spanish.pdf',
        });

        createCredential({
            id: 'vue-practical',
            name: 'vue-practical',
            urlImageEnglish: '../../public/imgs/credentials/english/vue-practical-english.jpg',
            urlImageFrench: '../../public/imgs/credentials/french/vue-practical-french.jpg',
            urlImageSpanish: '../../public/imgs/credentials/spanish/vue-practical-spanish.jpg',
            urlPDFEnglish: '../../public/pdfs/english/vue-practical-english.pdf',
            urlPDFFrench: '../../public/pdfs/french/vue-practical-french.pdf',
            urlPDFSpanish: '../../public/pdfs/spanish/vue-practical-spanish.pdf',
        });
        
        createCredential({
            id: 'vue-state-management-with-pinia',
            name: 'vue-state-management-with-pinia',
            urlImageEnglish: '../../public/imgs/credentials/english/vue-state-management-with-pinia-english.jpg',
            urlImageFrench: '../../public/imgs/credentials/french/vue-state-management-with-pinia-french.jpg',
            urlImageSpanish: '../../public/imgs/credentials/spanish/vue-state-management-with-pinia-spanish.jpg',
            urlPDFEnglish: '../../public/pdfs/english/vue-state-management-with-pinia-english.pdf',
            urlPDFFrench: '../../public/pdfs/french/vue-state-management-with-pinia-french.pdf',
            urlPDFSpanish: '../../public/pdfs/spanish/vue-state-management-with-pinia-spanish.pdf',
        });

        createCredential({
            id: 'vue-state-management-with-vuex',
            name: 'vue-state-management-with-vuex',
            urlImageEnglish: '../../public/imgs/credentials/english/vue-state-management-with-vuex-english.jpg',
            urlImageFrench: '../../public/imgs/credentials/french/vue-state-management-with-vuex-french.jpg',
            urlImageSpanish: '../../public/imgs/credentials/spanish/vue-state-management-with-vuex-spanish.jpg',
            urlPDFEnglish: '../../public/pdfs/english/vue-state-management-with-vuex-english.pdf',
            urlPDFFrench: '../../public/pdfs/french/vue-state-management-with-vuex-french.pdf',
            urlPDFSpanish: '../../public/pdfs/spanish/vue-state-management-with-vuex-spanish.pdf',
        });

        createCredential({
            id: 'web-design-with-css-grid-and-flexbox',
            name: 'web-design-with-css-grid-and-flexbox',
            urlImageEnglish: '../../public/imgs/credentials/english/web-design-with-css-grid-and-flexbox-english.jpg',
            urlImageFrench: '../../public/imgs/credentials/french/web-design-with-css-grid-and-flexbox-french.jpg',
            urlImageSpanish: '../../public/imgs/credentials/spanish/web-design-with-css-grid-and-flexbox-spanish.jpg',
            urlPDFEnglish: '../../public/pdfs/english/web-design-with-css-grid-and-flexbox-english.pdf',
            urlPDFFrench: '../../public/pdfs/french/web-design-with-css-grid-and-flexbox-french.pdf',
            urlPDFSpanish: '../../public/pdfs/spanish/web-design-with-css-grid-and-flexbox-spanish.pdf',
        });

        createCredential({
            id: 'cv',
            name: 'cv',
            urlImageEnglish: '../../public/imgs/cv-jesus-daniel-english.jpg',
            urlImageFrench: '../../public/imgs/cv-jesus-daniel-french.jpg',
            urlImageSpanish: '../../public/imgs/cv-jesus-daniel-spanish.jpg',
            urlPDFEnglish: '../../public/pdfs/english/web-design-with-html-and-css-english.pdf',
            urlPDFFrench: '../../public/pdfs/french/web-design-with-html-and-css-french.pdf',
            urlPDFSpanish: '../../public/pdfs/spanish/web-design-with-html-and-css-spanish.pdf',
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