//General imports
import { create, get } from 'lodash';
import { defineStore } from 'pinia';
import { reactive } from 'vue';

export const useIcon = defineStore('icon', () => {
    //States
    const items = reactive(new Map());

    //Standard icons
    const standardIcons = {
        Ada: {
            name: 'Ada',
            width: '2rem',
            height: '2rem',
            viewBox: '0 0 20 20',
            colorLight: 'var(--general-neutral-white-light)',
            colorDark: 'var(--general-neutral-white-light)',
            isOnlyRead: true,
            isDisabled: false,
            click: () => { console.log(`icon ${name} clicked`)},
        },
        Adobe: {
            name: 'Adobe',
            width: '2rem',
            height: '2rem',
            viewBox: '0 0 20 20',
            colorLight: 'var(--general-neutral-white-light)',
            colorDark: 'var(--general-neutral-white-light)',
            isOnlyRead: true,
            isDisabled: false,
            click: () => { console.log(`icon ${name} clicked`)},
        },
        ArrowDown: {
            name: 'ArrowDown',
            width: '2rem',
            height: '2rem',
            viewBox: '-4 -6 20 20',
            colorLight: 'var(--general-neutral-white-light)',
            colorDark: 'var(--general-neutral-white-light)',
            isOnlyRead: true,
            isDisabled: false,
            click: () => { console.log(`icon ${name} clicked`)},
        },
        C: {
            name: 'C',
            width: '2rem',
            height: '2rem',
            viewBox: '0 0 20 20',
            colorLight: 'var(--general-neutral-white-light)',
            colorDark: 'var(--general-neutral-white-light)',
            isOnlyRead: true,
            isDisabled: false,
            click: () => { console.log(`icon ${name} clicked`)},
        },
        CPlus: {
            name: 'CPlus',
            width: '2rem',
            height: '2rem',
            viewBox: '0 0 20 20',
            colorLight: 'var(--general-neutral-white-light)',
            colorDark: 'var(--general-neutral-white-light)',
            isOnlyRead: true,
            isDisabled: false,
            click: () => { console.log(`icon ${name} clicked`)},
        },
        ChatGPT: {
            name: 'ChatGPT',
            width: '2rem',
            height: '2rem',
            viewBox: '-3 -1 45 45',
            colorLight: 'var(--general-neutral-white-light)',
            colorDark: 'var(--general-neutral-black-light)',
            isOnlyRead: true,
            isDisabled: false,
            click: () => { console.log(`icon ${name} clicked`)},
        },
        CSharp: {
            name: 'CSharp',
            width: '2rem',
            height: '2rem',
            viewBox: '0 0 20 20',
            colorLight: 'var(--general-neutral-white-light)',
            colorDark: 'var(--general-neutral-white-light)',
            isOnlyRead: true,
            isDisabled: false,
            click: () => { console.log(`icon ${name} clicked`)},
        },
        CSS3: {
            name: 'CSS3',
            width: '2rem',
            height: '2rem',
            viewBox: '-2.5 0 20 20',
            colorLight: 'var(--general-neutral-white-light)',
            colorDark: 'var(--general-neutral-white-light)',
            isOnlyRead: true,
            isDisabled: false,
            click: () => { console.log(`icon ${name} clicked`)},
        },
        Cypress: {
            name: 'Cypress',
            width: '2rem',
            height: '2rem',
            viewBox: '0 0 24 24',
            colorLight: 'var(--general-neutral-white-light)',
            colorDark: 'var(--general-neutral-white-light)',
            isOnlyRead: true,
            isDisabled: false,
            click: () => { console.log(`icon ${name} clicked`)},
        },
        Docker: {
            name: 'Docker',
            width: '2rem',
            height: '2rem',
            viewBox: '0 0 20 20',
            colorLight: 'var(--general-neutral-white-light)',
            colorDark: 'var(--general-neutral-white-light)',
            isOnlyRead: true,
            isDisabled: false,
            click: () => { console.log(`icon ${name} clicked`)},
        },
        FastApi: {
            name: 'FastApi',
            width: '2rem',
            height: '2rem',
            viewBox: '-1 0 23 20',
            colorLight: 'var(--general-neutral-white-light)',
            colorDark: 'var(--general-neutral-white-light)',
            isOnlyRead: true,
            isDisabled: false,
            click: () => { console.log(`icon ${name} clicked`)},
        },
        Figma: {
            name: 'Figma',
            width: '2rem',
            height: '2rem',
            viewBox: '-5 -2 24 24',
            colorLight: 'var(--general-neutral-white-light)',
            colorDark: 'var(--general-neutral-white-light)',
            isOnlyRead: true,
            isDisabled: false,
            click: () => { console.log(`icon ${name} clicked`)},
        },
        Flask: {
            name: 'Flask',
            width: '2rem',
            height: '2rem',
            viewBox: '-2 0 20 20',
            colorLight: 'var(--general-neutral-black-light)',
            colorDark: 'var(--general-neutral-black-light)',
            isOnlyRead: true,
            isDisabled: false,
            click: () => { console.log(`icon ${name} clicked`)},
        },
        Git: {
            name: 'Git',
            width: '2rem',
            height: '2rem',
            viewBox: '0 0 20 20',
            colorLight: 'var(--general-neutral-white-light)',
            colorDark: 'var(--general-neutral-white-light)',
            isOnlyRead: true,
            isDisabled: false,
            click: () => { console.log(`icon ${name} clicked`)},
        },
        Github: {
            name: 'Github',
            width: '2rem',
            height: '2rem',
            viewBox: '0 0 21 20',
            colorLight: 'var(--general-neutral-white-light)',
            colorDark: 'var(--general-neutral-white-light)',
            isOnlyRead: true,
            isDisabled: false,
            click: () => { console.log(`icon ${name} clicked`)},
        },
        GithubCopilot: {
            name: 'GithubCopilot',
            width: '2rem',
            height: '2rem',
            viewBox: '0 0 20 20',
            colorLight: 'var(--general-neutral-black-light)',
            colorDark: 'var(--general-neutral-black-light)',
            isOnlyRead: true,
            isDisabled: false,
            click: () => { console.log(`icon ${name} clicked`)},
        },
        GoogleDrive: {
            name: 'GoogleDrive',
            width: '2rem',
            height: '2rem',
            viewBox: '0 0 20 20',
            colorLight: 'var(--general-neutral-black-light)',
            colorDark: 'var(--general-neutral-black-light)',
            isOnlyRead: true,
            isDisabled: false,
            click: () => { console.log(`icon ${name} clicked`)},
        },
        HTML5: {
            name: 'HTML5',
            width: '2rem',
            height: '2rem',
            viewBox: '1 0 20 20',
            colorLight: 'var(--general-neutral-white-light)',
            colorDark: 'var(--general-neutral-white-light)',
            isOnlyRead: true,
            isDisabled: false,
            click: () => { console.log(`icon ${name} clicked`)},
        },
        Java: {
            name: 'Java',
            width: '2rem',
            height: '2rem',
            viewBox: '0 0 20 20',
            colorLight: 'var(--general-neutral-white-light)',
            colorDark: 'var(--general-neutral-white-light)',
            isOnlyRead: true,
            isDisabled: false,
            click: () => { console.log(`icon ${name} clicked`)},
        },
        Jest: {
            name: 'Jest',
            width: '2rem',
            height: '2rem',
            viewBox: '0 0 20 20',
            colorLight: 'var(--general-neutral-white-light)',
            colorDark: 'var(--general-neutral-white-light)',
            isOnlyRead: true,
            isDisabled: false,
            click: () => { console.log(`icon ${name} clicked`)},
        },
        JS: {
            name: 'JS',
            width: '2rem',
            height: '2rem',
            viewBox: '-2.5 -2.5 20 20',
            colorLight: 'var(--general-neutral-black-light)',
            colorDark: 'var(--general-neutral-black-light)',
            isOnlyRead: true,
            isDisabled: false,
            click: () => { console.log(`icon ${name} clicked`)},
        },
        LightHouse: {
            name: 'LightHouse',
            width: '2rem',
            height: '2rem',
            viewBox: '0 0 20 20',
            colorLight: 'var(--general-neutral-white-light)',
            colorDark: 'var(--general-neutral-white-light)',
            isOnlyRead: true,
            isDisabled: false,
            click: () => { console.log(`icon ${name} clicked`)},
        },
        MicrosoftCopilot: {
            name: 'MicrosoftCopilot',
            width: '2rem',
            height: '2rem',
            viewBox: '0 0 20 20',
            colorLight: 'var(--general-neutral-white-light)',
            colorDark: 'var(--general-neutral-white-light)',
            isOnlyRead: true,
            isDisabled: false,
            click: () => { console.log(`icon ${name} clicked`)},
        },
        Midjourney: {
            name: 'Midjourney',
            width: '2rem',
            height: '2rem',
            viewBox: '0 0 20 20',
            colorLight: 'var(--general-neutral-black-light)',
            colorDark: 'var(--general-neutral-black-light)',
            isOnlyRead: true,
            isDisabled: false,
            click: () => { console.log(`icon ${name} clicked`)},
        },
        MongoDB: {
            name: 'MongoDB',
            width: '2rem',
            height: '2rem',
            viewBox: '0 0 10 20',
            colorLight: 'var(--general-neutral-white-light)',
            colorDark: 'var(--general-neutral-white-light)',
            isOnlyRead: true,
            isDisabled: false,
            click: () => { console.log(`icon ${name} clicked`)},
        },
        Moon: {
            name: 'Moon',
            width: '2rem',
            height: '2rem',
            viewBox: '0 0 20 20',
            colorLight: 'var(--general-neutral-white-light)',
            colorDark: 'var(--general-neutral-white-light)',
            isOnlyRead: true,
            isDisabled: false,
            click: () => { console.log(`icon ${name} clicked`)},
        },
        MySQL: {
            name: 'MySQL',
            width: '2rem',
            height: '2rem',
            viewBox: '0 0 20 20',
            colorLight: 'var(--general-neutral-white-light)',
            colorDark: 'var(--general-neutral-white-light)',
            isOnlyRead: true,
            isDisabled: false,
            click: () => { console.log(`icon ${name} clicked`)},
        },
        NodeJS: {
            name: 'NodeJS',
            width: '2rem',
            height: '2rem',
            viewBox: '0 0 20 20',
            colorLight: 'var(--general-neutral-white-light)',
            colorDark: 'var(--general-neutral-white-light)',
            isOnlyRead: true,
            isDisabled: false,
            click: () => { console.log(`icon ${name} clicked`)},
        },
        Npm: {
            name: 'Npm',
            width: '2rem',
            height: '2rem',
            viewBox: '0 -2 23 23',
            colorLight: 'var(--general-neutral-white-light)',
            colorDark: 'var(--general-neutral-white-light)',
            isOnlyRead: true,
            isDisabled: false,
            click: () => { console.log(`icon ${name} clicked`)},
        },
        OneDrive: {
            name: 'OneDrive',
            width: '2rem',
            height: '2rem',
            viewBox: '0 0 20 20',
            colorLight: 'var(--general-neutral-white-light)',
            colorDark: 'var(--general-neutral-white-light)',
            isOnlyRead: true,
            isDisabled: false,
            click: () => { console.log(`icon ${name} clicked`)},
        },
        Open: {
            name: 'Open',
            width: '2rem',
            height: '2rem',
            viewBox: '0 -2 19 19',
            colorLight: 'var(--general-neutral-white-light)',
            colorDark: 'var(--general-neutral-white-light)',
            isOnlyRead: true,
            isDisabled: false,
            click: () => { console.log(`icon ${name} clicked`)},
        },
        Open2: {
            name: 'Open2',
            width: '2rem',
            height: '2rem',
            viewBox: '0 -5 29 29',
            colorLight: 'var(--general-neutral-white-light)',
            colorDark: 'var(--general-neutral-white-light)',
            isOnlyRead: true,
            isDisabled: false,
            click: () => { console.log(`icon ${name} clicked`)},
        },
        Pip: {
            name: 'Pip',
            width: '2rem',
            height: '2rem',
            viewBox: '0 0 20 20',
            colorLight: 'var(--general-neutral-white-light)',
            colorDark: 'var(--general-neutral-white-light)',
            isOnlyRead: true,
            isDisabled: false,
            click: () => { console.log(`icon ${name} clicked`)},
        },
        Python: {
            name: 'Python',
            width: '2rem',
            height: '2rem',
            viewBox: '0 0 20 20',
            colorLight: 'var(--general-neutral-white-light)',
            colorDark: 'var(--general-neutral-white-light)',
            isOnlyRead: true,
            isDisabled: false,
            click: () => { console.log(`icon ${name} clicked`)},
        },
        React: {
            name: 'React',
            width: '2rem',
            height: '2rem',
            viewBox: '0 0 23 20',
            colorLight: 'var(--general-neutral-white-light)',
            colorDark: 'var(--general-neutral-white-light)',
            isOnlyRead: true,
            isDisabled: false,
            click: () => { console.log(`icon ${name} clicked`)},
        },
        Selenium: {
            name: 'Selenium',
            width: '2rem',
            height: '2rem',
            viewBox: '0 0 20 20',
            colorLight: 'var(--general-neutral-white-light)',
            colorDark: 'var(--general-neutral-white-light)',
            isOnlyRead: true,
            isDisabled: false,
            click: () => { console.log(`icon ${name} clicked`)},
        },
        Slack: {
            name: 'Slack',
            width: '2rem',
            height: '2rem',
            viewBox: '0 0 20 20',
            colorLight: 'var(--general-neutral-white-light)',
            colorDark: 'var(--general-neutral-white-light)',
            isOnlyRead: true,
            isDisabled: false,
            click: () => { console.log(`icon ${name} clicked`)},
        },
        Sun: {
            name: 'Sun',
            width: '2rem',
            height: '2rem',
            viewBox: '0 0 20 20',
            colorLight: 'var(--general-neutral-white-light)',
            colorDark: 'var(--general-neutral-white-light)',
            isOnlyRead: true,
            isDisabled: false,
            click: () => { console.log(`icon ${name} clicked`)},
        },
        Trello: {
            name: 'Trello',
            width: '2rem',
            height: '2rem',
            viewBox: '0 0 20 20',
            colorLight: 'var(--general-neutral-white-light)',
            colorDark: 'var(--general-neutral-white-light)',
            isOnlyRead: true,
            isDisabled: false,
            click: () => { console.log(`icon ${name} clicked`)},
        },
        TS: {
            name: 'TS',
            width: '2rem',
            height: '2rem',
            viewBox: '0 0 20 20',
            colorLight: 'var(--general-neutral-black-light)',
            colorDark: 'var(--general-neutral-black-light)',
            isOnlyRead: true,
            isDisabled: false,
            click: () => { console.log(`icon ${name} clicked`)},
        },
        Vite: {
            name: 'Vite',
            width: '2rem',
            height: '2rem',
            viewBox: '0 0 20 20',
            colorLight: 'var(--general-neutral-white-light)',
            colorDark: 'var(--general-neutral-white-light)',
            isOnlyRead: true,
            isDisabled: false,
            click: () => { console.log(`icon ${name} clicked`)},
        },
        Vue: {
            name: 'Vue',
            width: '2rem',
            height: '2rem',
            viewBox: '0 0 20 20',
            colorLight: 'var(--general-neutral-white-light)',
            colorDark: 'var(--general-neutral-white-light)',
            isOnlyRead: true,
            isDisabled: false,
            click: () => { console.log(`icon ${name} clicked`)},
        },
        Whiteboard: {
            name: 'Whiteboard',
            width: '2rem',
            height: '2rem',
            viewBox: '0 0 20 20',
            colorLight: 'var(--general-neutral-white-light)',
            colorDark: 'var(--general-neutral-white-light)',
            isOnlyRead: true,
            isDisabled: false,
            click: () => { console.log(`icon ${name} clicked`)},
        },
        X: {
            name: 'X',
            width: '2rem',
            height: '2rem',
            viewBox: '-8 -8 24 24',
            colorLight: 'var(--general-neutral-white-light)',
            colorDark: 'var(--general-neutral-white-light)',
            isOnlyRead: true,
            isDisabled: false,
            click: () => { console.log(`icon ${name} clicked`)},
        },
        PDF: {
            name: 'PDF',
            width: '2rem',
            height: '2rem',
            viewBox: '0 0 20 20',
            colorLight: 'var(--general-neutral-white-light)',
            colorDark: 'var(--general-neutral-white-light)',
            isOnlyRead: true,
            isDisabled: false,
            click: () => { console.log(`icon ${name} clicked`)},
        },
        Share: {
            name: 'Share',
            width: '2rem',
            height: '2rem',
            viewBox: '-2 -2 24 24',
            colorLight: 'var(--general-neutral-white-light)',
            colorDark: 'var(--general-neutral-white-light)',
            isOnlyRead: true,
            isDisabled: false,
            click: () => { console.log(`icon ${name} clicked`)},
        },
        Profile: {
            name: 'Profile',
            width: '2rem',
            height: '2rem',
            viewBox: '1 0 18 18',
            colorLight: 'var(--general-neutral-white-light)',
            colorDark: 'var(--general-neutral-white-light)',
            isOnlyRead: true,
            isDisabled: false,
            click: () => { console.log(`icon ${name} clicked`)},
        },
        Code: {
            name: 'Code',
            width: '2rem',
            height: '2rem',
            viewBox: '0.5 0 19 19',
            colorLight: 'var(--general-neutral-white-light)',
            colorDark: 'var(--general-neutral-white-light)',
            isOnlyRead: true,
            isDisabled: false,
            click: () => { console.log(`icon ${name} clicked`)},
        },
        Project: {
            name: 'Project',
            width: '2rem',
            height: '2rem',
            viewBox: '0 0 21 21',
            colorLight: 'var(--general-neutral-white-light)',
            colorDark: 'var(--general-neutral-white-light)',
            isOnlyRead: true,
            isDisabled: false,
            click: () => { console.log(`icon ${name} clicked`)},
        },
        Credential: {
            name: 'Credential',
            width: '2rem',
            height: '2rem',
            viewBox: '-1 -1 22 22',
            colorLight: 'var(--general-neutral-white-light)',
            colorDark: 'var(--general-neutral-white-light)',
            isOnlyRead: true,
            isDisabled: false,
            click: () => { console.log(`icon ${name} clicked`)},
        },
        SendEmail: {
            name: 'SendEmail',
            width: '2rem',
            height: '2rem',
            viewBox: '0 -2 20 20',
            colorLight: 'var(--general-neutral-white-light)',
            colorDark: 'var(--general-neutral-white-light)',
            isOnlyRead: true,
            isDisabled: false,
            click: () => { console.log(`icon ${name} clicked`)},
        }
    }

    //Actions standard icons
    function getStandardIcon(name) {
        return standardIcons[name];
    }

    //Actions
    function createIcon({
            id = items.size.toString(),
            name = 'Ada',
            width = '2rem',
            height = '2rem',
            viewBox = '0 0 20 20',
            colorLight = 'var(--general-neutral-white-light)',
            colorDark = 'var(--general-neutral-white-light)',
            isOnlyRead = true,
            isDisabled = false,
            click = () => { console.log(`icon ${name} clicked`)},

        } = {}) {
        items.set(id,{
            id,
            name,
            width,
            height,
            viewBox,
            colorLight,
            colorDark,
            isOnlyRead,
            isDisabled,
            click,
        });
        return id;
    }

    function getIcon(id) {
        return items.get(id);
    }

    function updateIcon(update) {
        const { id } = update;

        items.has(id) ?
            items.set(id, { ...items.get(id), ...update }) :
            console.log('icon not found');
    }

    function deleteIcon(id) {
        items.delete(id);
    }

    function changeColor(id, colorLight, colorDark) {
        const icon = getIcon(id);
        if (icon) {
            icon.colorLight = colorLight;
            icon.colorDark = colorDark;
        }
    }

    //Initializate
    function init() {
        createIcon({id: 'Ada'});
    }

    init();

    return {
        //States

        //Actions
        getStandardIcon,
        createIcon,
        getIcon,
        updateIcon,
        deleteIcon,
        changeColor,
    };
});