//General imports
import { defineStore } from 'pinia';
import { reactive } from 'vue';

export const useTagIcon = defineStore('tagIcon', () => {
    //States
    const items = reactive(new Map());

    //Standard tagIcons
    const standardTagIcons = {
        Ada: {
            name: 'Ada',
            colorShapeLight: '#7190C8',
            colorShapeDark: '#7190C8',
            colorIconLight: 'var(--general-neutral-white-light)',
            colorIconDark: 'var(--general-neutral-white-light)',
            isSelectedMode: false,
            isDisabledMode: false,
            isOnlyReadMode: false,
        },
        Adobe: {
            name: 'Adobe',
            colorShapeLight: '#C7301F',
            colorShapeDark: '#C7301F',
            colorIconLight: 'var(--general-neutral-white-light)',
            colorIconDark: 'var(--general-neutral-white-light)',
            isSelectedMode: false,
            isDisabledMode: false,
            isOnlyReadMode: false,
        },
        C: {
            name: 'C',
            colorShapeLight: '#7594C7',
            colorShapeDark: '#7594C7',
            colorIconLight: 'var(--general-neutral-white-light)',
            colorIconDark: 'var(--general-neutral-white-light)',
            isSelectedMode: false,
            isDisabledMode: false,
            isOnlyReadMode: false,
        },
        CPlus: {
            name: 'CPlus',
            colorShapeLight: '#7594C7',
            colorShapeDark: '#7594C7',
            colorIconLight: 'var(--general-neutral-white-light)',
            colorIconDark: 'var(--general-neutral-white-light)',
            isSelectedMode: false,
            isDisabledMode: false,
            isOnlyReadMode: false,
        },
        CSharp: {
            name: 'CSharp',
            colorShapeLight: '#89518E',
            colorShapeDark: '#89518E',
            colorIconLight: 'var(--general-neutral-white-light)',
            colorIconDark: 'var(--general-neutral-white-light)',
            isSelectedMode: false,
            isDisabledMode: false,
            isOnlyReadMode: false,
        },
        ChatGPT: {
            name: 'ChatGPT',
            colorShapeLight: 'var(--general-neutral-black-light)',
            colorShapeDark: 'var(--general-neutral-white-light)',
            colorIconLight: 'var(--general-neutral-white-light)',
            colorIconDark: 'var(--general-neutral-black-light)',
            isSelectedMode: false,
            isDisabledMode: false,
            isOnlyReadMode: false,
        },
        CSS3: {
            name: 'CSS3',
            colorShapeLight: '#125E94',
            colorShapeDark: '#125E94',
            colorIconLight: 'var(--general-neutral-white-light)',
            colorIconDark: 'var(--general-neutral-white-light)',
            isSelectedMode: false,
            isDisabledMode: false,
            isOnlyReadMode: false,
        },
        Cypress: {
            name: 'Cypress',
            colorShapeLight: '#54978A',
            colorShapeDark: '#54978A',
            colorIconLight: 'var(--general-neutral-white-light)',
            colorIconDark: 'var(--general-neutral-white-light)',
            isSelectedMode: false,
            isDisabledMode: false,
            isOnlyReadMode: false,
        },
        Docker: {
            name: 'Docker',
            colorShapeLight: '#5E95E6',
            colorShapeDark: '#5E95E6',
            colorIconLight: 'var(--general-neutral-white-light)',
            colorIconDark: 'var(--general-neutral-white-light)',
            isSelectedMode: false,
            isDisabledMode: false,
            isOnlyReadMode: false,
        },
        FastApi: {
            name: 'FastApi',
            colorShapeLight: '#00665A',
            colorShapeDark: '#00665A',
            colorIconLight: 'var(--general-neutral-white-light)',
            colorIconDark: 'var(--general-neutral-white-light)',
            isSelectedMode: false,
            isDisabledMode: false,
            isOnlyReadMode: false,
        },
        Figma: {
            name: 'Figma',
            colorShapeLight: '#FF7262',
            colorShapeDark: '#FF7262',
            colorIconLight: 'var(--general-neutral-white-light)',
            colorIconDark: 'var(--general-neutral-white-light)',
            isSelectedMode: false,
            isDisabledMode: false,
            isOnlyReadMode: false,
        },
        Flask: {
            name: 'Flask',
            colorShapeLight: '#A0CCD5',
            colorShapeDark: '#A0CCD5',
            colorIconLight: 'var(--general-neutral-black-light)',
            colorIconDark: 'var(--general-neutral-black-light)',
            isSelectedMode: false,
            isDisabledMode: false,
            isOnlyReadMode: false,
        },
        Git: {
            name: 'Git',
            colorShapeLight: '#CF5838',
            colorShapeDark: '#CF5838',
            colorIconLight: 'var(--general-neutral-white-light)',
            colorIconDark: 'var(--general-neutral-white-light)',
            isSelectedMode: false,
            isDisabledMode: false,
            isOnlyReadMode: false,
        },
        Github: {
            name: 'Github',
            colorShapeLight: '#202020',
            colorShapeDark: '#3d3d3d',
            colorIconLight: 'var(--general-neutral-white-light)',
            colorIconDark: 'var(--general-neutral-white-light)',
            isSelectedMode: false,
            isDisabledMode: false,
            isOnlyReadMode: false,
        },
        GithubCopilot: {
            name: 'GithubCopilot',
            colorShapeLight: '#ADD0D9',
            colorShapeDark: '#ADD0D9',
            colorIconLight: 'var(--general-neutral-black-light)',
            colorIconDark: 'var(--general-neutral-black-light)',
            isSelectedMode: false,
            isDisabledMode: false,
            isOnlyReadMode: false,
        },
        GoogleDrive: {
            name: 'GoogleDrive',
            colorShapeLight: '#E9C861',
            colorShapeDark: '#E9C861',
            colorIconLight: 'var(--general-neutral-black-light)',
            colorIconDark: 'var(--general-neutral-black-light)',
            isSelectedMode: false,
            isDisabledMode: false,
            isOnlyReadMode: false,
        },
        HTML5: {
            name: 'HTML5',
            colorShapeLight: '#E34C26',
            colorShapeDark: '#E34C26',
            colorIconLight: 'var(--general-neutral-white-light)',
            colorIconDark: 'var(--general-neutral-white-light)',
            isSelectedMode: false,
            isDisabledMode: false,
            isOnlyReadMode: false,
        },
        Java: {
            name: 'Java',
            colorShapeLight: '#CE752D',
            colorShapeDark: '#CE752D',
            colorIconLight: 'var(--general-neutral-white-light)',
            colorIconDark: 'var(--general-neutral-white-light)',
            isSelectedMode: false,
            isDisabledMode: false,
            isOnlyReadMode: false,
        },
        Jest: {
            name: 'Jest',
            colorShapeLight: '#AE4726',
            colorShapeDark: '#AE4726',
            colorIconLight: 'var(--general-neutral-white-light)',
            colorIconDark: 'var(--general-neutral-white-light)',
            isSelectedMode: false,
            isDisabledMode: false,
            isOnlyReadMode: false,
        },
        JS: {
            name: 'JS',
            colorShapeLight: '#F0DB4F',
            colorShapeDark: '#F0DB4F',
            colorIconLight: 'var(--general-neutral-black-light)',
            colorIconDark: 'var(--general-neutral-black-light)',
            isSelectedMode: false,
            isDisabledMode: false,
            isOnlyReadMode: false,
        },
        LightHouse: {
            name: 'LightHouse',
            colorShapeLight: '#D05330',
            colorShapeDark: '#D05330',
            colorIconLight: 'var(--general-neutral-white-light)',
            colorIconDark: 'var(--general-neutral-white-light)',
            isSelectedMode: false,
            isDisabledMode: false,
            isOnlyReadMode: false,
        },
        MicrosoftCopilot: {
            name: 'MicrosoftCopilot',
            colorShapeLight: '#C041B4',
            colorShapeDark: '#C041B4',
            colorIconLight: 'var(--general-neutral-white-light)',
            colorIconDark: 'var(--general-neutral-white-light)',
            isSelectedMode: false,
            isDisabledMode: false,
            isOnlyReadMode: false,
        },
        Midjourney: {
            name: 'Midjourney',
            colorShapeLight: '#DFDFDF',
            colorShapeDark: '#DFDFDF',
            colorIconLight: 'var(--general-neutral-black-light)',
            colorIconDark: 'var(--general-neutral-black-light)',
            isSelectedMode: false,
            isDisabledMode: false,
            isOnlyReadMode: false,
        },
        MongoDB: {
            name: 'MongoDB',
            colorShapeLight: '#005723',
            colorShapeDark: '#04a544',
            colorIconLight: 'var(--general-neutral-white-light)',
            colorIconDark: 'var(--general-neutral-white-light)',
            isSelectedMode: false,
            isDisabledMode: false,
            isOnlyReadMode: false,
        },
        MySQL: {
            name: 'MySQL',
            colorShapeLight: '#345D84',
            colorShapeDark: '#345D84',
            colorIconLight: 'var(--general-neutral-white-light)',
            colorIconDark: 'var(--general-neutral-white-light)',
            isSelectedMode: false,
            isDisabledMode: false,
            isOnlyReadMode: false,
        },
        NodeJS: {
            name: 'NodeJS',
            colorShapeLight: '#336643',
            colorShapeDark: '#336643',
            colorIconLight: 'var(--general-neutral-white-light)',
            colorIconDark: 'var(--general-neutral-white-light)',
            isSelectedMode: false,
            isDisabledMode: false,
            isOnlyReadMode: false,
        },
        Npm: {
            name: 'Npm',
            colorShapeLight: '#B3423B',
            colorShapeDark: '#B3423B',
            colorIconLight: 'var(--general-neutral-white-light)',
            colorIconDark: 'var(--general-neutral-white-light)',
            isSelectedMode: false,
            isDisabledMode: false,
            isOnlyReadMode: false,
        },
        OneDrive: {
            name: 'OneDrive',
            colorShapeLight: '#3049A6',
            colorShapeDark: '#3049A6',
            colorIconLight: 'var(--general-neutral-white-light)',
            colorIconDark: 'var(--general-neutral-white-light)',
            isSelectedMode: false,
            isDisabledMode: false,
            isOnlyReadMode: false,
        },
        Pip: {
            name: 'Pip',
            colorShapeLight: '#2D618C',
            colorShapeDark: '#2D618C',
            colorIconLight: 'var(--general-neutral-white-light)',
            colorIconDark: 'var(--general-neutral-white-light)',
            isSelectedMode: false,
            isDisabledMode: false,
            isOnlyReadMode: false,
        },
        Python: {
            name: 'Python',
            colorShapeLight: '#2964A3',
            colorShapeDark: '#2964A3',
            colorIconLight: 'var(--general-neutral-white-light)',
            colorIconDark: 'var(--general-neutral-white-light)',
            isSelectedMode: false,
            isDisabledMode: false,
            isOnlyReadMode: false,
        },
        React: {
            name: 'React',
            colorShapeLight: '#00D8FF',
            colorShapeDark: '#00D8FF',
            colorIconLight: 'var(--general-neutral-white-light)',
            colorIconDark: 'var(--general-neutral-white-light)',
            isSelectedMode: false,
            isDisabledMode: false,
            isOnlyReadMode: false,
        },
        Selenium: {
            name: 'Selenium',
            colorShapeLight: '#5AAB33',
            colorShapeDark: '#5AAB33',
            colorIconLight: 'var(--general-neutral-white-light)',
            colorIconDark: 'var(--general-neutral-white-light)',
            isSelectedMode: false,
            isDisabledMode: false,
            isOnlyReadMode: false,
        },
        Slack: {
            name: 'Slack',
            colorShapeLight: '#401946',
            colorShapeDark: '#401946',
            colorIconLight: 'var(--general-neutral-white-light)',
            colorIconDark: 'var(--general-neutral-white-light)',
            isSelectedMode: false,
            isDisabledMode: false,
            isOnlyReadMode: false,
        },
        Trello: {
            name: 'Trello',
            colorShapeLight: '#4879BC',
            colorShapeDark: '#4879BC',
            colorIconLight: 'var(--general-neutral-white-light)',
            colorIconDark: 'var(--general-neutral-white-light)',
            isSelectedMode: false,
            isDisabledMode: false,
            isOnlyReadMode: false,
        },
        TS: {
            name: 'TS',
            colorShapeLight: '#2964A3',
            colorShapeDark: '#2964A3',
            colorIconLight: 'var(--general-neutral-white-light)',
            colorIconDark: 'var(--general-neutral-white-light)',
            isSelectedMode: false,
            isDisabledMode: false,
            isOnlyReadMode: false,
        },
        Vite: {
            name: 'Vite',
            colorShapeLight: '#8A6DEC',
            colorShapeDark: '#8A6DEC',
            colorIconLight: 'var(--general-neutral-white-light)',
            colorIconDark: 'var(--general-neutral-white-light)',
            isSelectedMode: false,
            isDisabledMode: false,
            isOnlyReadMode: false,
        },
        Vue: {
            name: 'Vue',
            colorShapeLight: '#41B883',
            colorShapeDark: '#41B883',
            colorIconLight: 'var(--general-neutral-white-light)',
            colorIconDark: 'var(--general-neutral-white-light)',
            isSelectedMode: false,
            isDisabledMode: false,
            isOnlyReadMode: false,
        },
        Whiteboard: {
            name: 'Whiteboard',
            colorShapeLight: '#4773C9',
            colorShapeDark: '#4773C9',
            colorIconLight: 'var(--general-neutral-white-light)',
            colorIconDark: 'var(--general-neutral-white-light)',
            isSelectedMode: false,
            isDisabledMode: false,
            isOnlyReadMode: false,
        },
        Wordpress: {
            name: 'Wordpress',
            colorShapeLight: 'var(--general-neutral-black-light)',
            colorShapeDark: '#21759B',
            colorIconLight: 'var(--general-neutral-white-light)',
            colorIconDark: 'var(--general-neutral-white-light)',
            isSelectedMode: false,
            isDisabledMode: false,
            isOnlyReadMode: false,
        }
    };

    //Actions standard tagIcon
    function getStandardTagIcon(name) {
        return standardTagIcons[name];
    }

    //Actions
    function createTagIcon({
            id = items.size.toString(),
            name = 'Ada',
            colorShapeLight = '#7190C8',
            colorShapeDark = '#7190C8',
            colorIconLight = 'var(--general-neutral-white-light)',
            colorIconDark = 'var(--general-neutral-white-light)',
            isSelected = false,
            isOnlyRead = false,
            isDisabled = false,
            click = () => {
                toggleSelected(id);
                console.log(`TagIcon clicked ${id}`)
            },
        } = {}) {
        items.set(id,{
            id,
            name,
            colorShapeLight,
            colorShapeDark,
            colorIconLight,
            colorIconDark,
            isSelected,
            isOnlyRead,
            isDisabled,
            click,
        });
        return id;
    }

    function getTagIcon(id) {
        return items.get(id);
    }

    function updateTagIcon(update) {
        const { id } = update;

        items.has(id) ?
            items.set(id, { ...items.get(id), ...update }) :
            console.log('TagIcon not found');
    }

    function deleteTagIcon(id) {
        items.delete(id);
    }

    function toggleSelected(id) {
        getTagIcon(id).isSelected = !getTagIcon(id).isSelected;
    }

    //Initializate
    function init() {
        createTagIcon(
            {
                ...getStandardTagIcon('Whiteboard'),
                id: 'tagIcon',
            }
        );

        createTagIcon(
            {
                ...getStandardTagIcon('Ada'),
                id: 'Ada',
                isOnlyRead: true,
            }
        );

        createTagIcon(
            {
                ...getStandardTagIcon('Adobe'),
                id: 'Adobe',
                isOnlyRead: true,
            }
        );

        createTagIcon(
            {
                ...getStandardTagIcon('C'),
                id: 'C',
                isOnlyRead: true,
            }
        );

        createTagIcon(
            {
                ...getStandardTagIcon('CPlus'),
                id: 'CPlus',
                isOnlyRead: true,
            }
        );

        createTagIcon(
            {
                ...getStandardTagIcon('CSharp'),
                id: 'CSharp',
                isOnlyRead: true,
            }
        );

        createTagIcon(
            {
                ...getStandardTagIcon('ChatGPT'),
                id: 'ChatGPT',
                isOnlyRead: true,
            }
        );

        createTagIcon(
            {
                ...getStandardTagIcon('CSS3'),
                id: 'CSS3',
                isOnlyRead: true,
            }
        );

        createTagIcon(
            {
                ...getStandardTagIcon('Cypress'),
                id: 'Cypress',
                isOnlyRead: true,
            }
        );

        createTagIcon(
            {
                ...getStandardTagIcon('Docker'),
                id: 'Docker',
                isOnlyRead: true,
            }
        );

        createTagIcon(
            {
                ...getStandardTagIcon('FastApi'),
                id: 'FastApi',
                isOnlyRead: true,
            }
        );

        createTagIcon(
            {
                ...getStandardTagIcon('Figma'),
                id: 'Figma',
                isOnlyRead: true,
            }
        );

        createTagIcon(
            {
                ...getStandardTagIcon('Flask'),
                id: 'Flask',
                isOnlyRead: true,
            }
        );

        createTagIcon(
            {
                ...getStandardTagIcon('Git'),
                id: 'Git',
                isOnlyRead: true,
            }
        );

        createTagIcon(
            {
                ...getStandardTagIcon('Github'),
                id: 'Github',
                isOnlyRead: true,
            }
        );

        createTagIcon(
            {
                ...getStandardTagIcon('GithubCopilot'),
                id: 'GithubCopilot',
                isOnlyRead: true,
            }
        );

        createTagIcon(
            {
                ...getStandardTagIcon('GoogleDrive'),
                id: 'GoogleDrive',
                isOnlyRead: true,
            }
        );

        createTagIcon(
            {
                ...getStandardTagIcon('HTML5'),
                id: 'HTML5',
                isOnlyRead: true,
            }
        );

        createTagIcon(
            {
                ...getStandardTagIcon('Java'),
                id: 'Java',
                isOnlyRead: true,
            }
        );

        createTagIcon(
            {
                ...getStandardTagIcon('Jest'),
                id: 'Jest',
                isOnlyRead: true,
            }
        );

        createTagIcon(
            {
                ...getStandardTagIcon('JS'),
                id: 'JS',
                isOnlyRead: true,
            }
        );

        createTagIcon(
            {
                ...getStandardTagIcon('LightHouse'),
                id: 'LightHouse',
                isOnlyRead: true,
            }
        );

        createTagIcon(
            {
                ...getStandardTagIcon('MicrosoftCopilot'),
                id: 'MicrosoftCopilot',
                isOnlyRead: true,
            }
        );

        createTagIcon(
            {
                ...getStandardTagIcon('Midjourney'),
                id: 'Midjourney',
                isOnlyRead: true,
            }
        );

        createTagIcon(
            {
                ...getStandardTagIcon('MongoDB'),
                id: 'MongoDB',
                isOnlyRead: true,
            }
        );

        createTagIcon(
            {
                ...getStandardTagIcon('MySQL'),
                id: 'MySQL',
                isOnlyRead: true,
            }
        );

        createTagIcon(
            {
                ...getStandardTagIcon('NodeJS'),
                id: 'NodeJS',
                isOnlyRead: true,
            }
        );

        createTagIcon(
            {
                ...getStandardTagIcon('Npm'),
                id: 'Npm',
                isOnlyRead: true,
            }
        );

        createTagIcon(
            {
                ...getStandardTagIcon('OneDrive'),
                id: 'OneDrive',
                isOnlyRead: true,
            }
        );

        createTagIcon(
            {
                ...getStandardTagIcon('Pip'),
                id: 'Pip',
                isOnlyRead: true,
            }
        );

        createTagIcon(
            {
                ...getStandardTagIcon('Python'),
                id: 'Python',
                isOnlyRead: true,
            }
        );

        createTagIcon(
            {
                ...getStandardTagIcon('React'),
                id: 'React',
                isOnlyRead: true,
            }
        );

        createTagIcon(
            {
                ...getStandardTagIcon('Selenium'),
                id: 'Selenium',
                isOnlyRead: true,
            }
        );

        createTagIcon(
            {
                ...getStandardTagIcon('Slack'),
                id: 'Slack',
                isOnlyRead: true,
            }
        );

        createTagIcon(
            {
                ...getStandardTagIcon('Trello'),
                id: 'Trello',
                isOnlyRead: true,
            }
        );

        createTagIcon(
            {
                ...getStandardTagIcon('TS'),
                id: 'TS',
                isOnlyRead: true,
            }
        );

        createTagIcon(
            {
                ...getStandardTagIcon('Vite'),
                id: 'Vite',
                isOnlyRead: true,
            }
        );

        createTagIcon(
            {
                ...getStandardTagIcon('Vue'),
                id: 'Vue',
                isOnlyRead: true,
            }
        );

        createTagIcon(
            {
                ...getStandardTagIcon('Whiteboard'),
                id: 'Whiteboard',
                isOnlyRead: true,
            }
        );

        createTagIcon(
            {
                ...getStandardTagIcon('Wordpress'),
                id: 'Wordpress',
                isOnlyRead: true,
            }
        );
    }

    init();

    return {
        //States

        //Actions
        getStandardTagIcon,
        createTagIcon,
        getTagIcon,
        updateTagIcon,
        deleteTagIcon,
    };
});