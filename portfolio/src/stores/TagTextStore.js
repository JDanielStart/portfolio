//General imports
import { defineStore } from 'pinia';
import { reactive } from 'vue';

export const useTagText = defineStore('tagText', () => {
    //States
    const items = reactive(new Map());

    //Standard tagIcons
    const standardTagText = {
        idea: {
            name: 'idea',
            colorShapeLight: 'var(--general-secondary-light)',
            colorShapeDark: 'var(--general-secondary-dark)',
            colorTextLight: 'var(--general-neutral-white-light)',
            colorTextDark: 'var(--general-neutral-black-light)',
            isSelected: false,
            isOnlyRead: false,
            isDisabled: false,
        },
        wireframe: {
            name: 'wireframe',
            colorShapeLight: 'var(--general-secondary-light)',
            colorShapeDark: 'var(--general-secondary-dark)',
            colorTextLight: 'var(--general-neutral-white-light)',
            colorTextDark: 'var(--general-neutral-black-light)',
            isSelected: false,
            isOnlyRead: false,
            isDisabled: false,
        },
        design: {
            name: 'design',
            colorShapeLight: 'var(--general-secondary-light)',
            colorShapeDark: 'var(--general-secondary-dark)',
            colorTextLight: 'var(--general-neutral-white-light)',
            colorTextDark: 'var(--general-neutral-black-light)',
            isSelected: false,
            isOnlyRead: false,
            isDisabled: false,
        },
        frontend: {
            name: 'frontend',
            colorShapeLight: 'var(--general-secondary-light)',
            colorShapeDark: 'var(--general-secondary-dark)',
            colorTextLight: 'var(--general-neutral-white-light)',
            colorTextDark: 'var(--general-neutral-black-light)',
            isSelected: false,
            isOnlyRead: false,
            isDisabled: false,
        },
        backend: {
            name: 'backend',
            colorShapeLight: 'var(--general-secondary-light)',
            colorShapeDark: 'var(--general-secondary-dark)',
            colorTextLight: 'var(--general-neutral-white-light)',
            colorTextDark: 'var(--general-neutral-black-light)',
            isSelected: false,
            isOnlyRead: false,
            isDisabled: false,
        },
        testing: {
            name: 'testing',
            colorShapeLight: 'var(--general-secondary-light)',
            colorShapeDark: 'var(--general-secondary-dark)',
            colorTextLight: 'var(--general-neutral-white-light)',
            colorTextDark: 'var(--general-neutral-black-light)',
            isSelected: false,
            isOnlyRead: false,
            isDisabled: false,
        },
        alpha: {
            name: 'alpha',
            colorShapeLight: 'var(--general-secondary-light)',
            colorShapeDark: 'var(--general-secondary-dark)',
            colorTextLight: 'var(--general-neutral-white-light)',
            colorTextDark: 'var(--general-neutral-black-light)',
            isSelected: false,
            isOnlyRead: false,
            isDisabled: false,
        },
        beta: {
            name: 'beta',
            colorShapeLight: 'var(--general-secondary-light)',
            colorShapeDark: 'var(--general-secondary-dark)',
            colorTextLight: 'var(--general-neutral-white-light)',
            colorTextDark: 'var(--general-neutral-black-light)',
            isSelected: false,
            isOnlyRead: false,
            isDisabled: false,
        },
        v1: {
            name: 'v1',
            colorShapeLight: 'var(--general-secondary-light)',
            colorShapeDark: 'var(--general-secondary-dark)',
            colorTextLight: 'var(--general-neutral-white-light)',
            colorTextDark: 'var(--general-neutral-black-light)',
            isSelected: false,
            isOnlyRead: false,
            isDisabled: false,
        },
        ownproject: {
            name: 'ownproject',
            colorShapeLight: 'var(--general-neutral-900-light)',
            colorShapeDark: 'var(--general-neutral-900-dark)',
            colorTextLight: 'var(--general-background-light)',
            colorTextDark: 'var(--general-background-dark)',
            isSelected: false,
            isOnlyRead: false,
            isDisabled: false,
        },
        educational: {
            name: 'educational',
            colorShapeLight: 'var(--general-neutral-900-light)',
            colorShapeDark: 'var(--general-neutral-900-dark)',
            colorTextLight: 'var(--general-background-light)',
            colorTextDark: 'var(--general-background-dark)',
            isSelected: false,
            isOnlyRead: false,
            isDisabled: false,
        },
        appweb: {
            name: 'appweb',
            colorShapeLight: 'var(--general-neutral-900-light)',
            colorShapeDark: 'var(--general-neutral-900-dark)',
            colorTextLight: 'var(--general-background-light)',
            colorTextDark: 'var(--general-background-dark)',
            isSelected: false,
            isOnlyRead: false,
            isDisabled: false,
        },
        landingpage: {
            name: 'landingpage',
            colorShapeLight: 'var(--general-neutral-900-light)',
            colorShapeDark: 'var(--general-neutral-900-dark)',
            colorTextLight: 'var(--general-background-light)',
            colorTextDark: 'var(--general-background-dark)',
            isSelected: false,
            isOnlyRead: false,
            isDisabled: false,
        },
        blog: {
            name: 'blog',
            colorShapeLight: 'var(--general-neutral-900-light)',
            colorShapeDark: 'var(--general-neutral-900-dark)',
            colorTextLight: 'var(--general-background-light)',
            colorTextDark: 'var(--general-background-dark)',
            isSelected: false,
            isOnlyRead: false,
            isDisabled: false,
        },
        ecommerce: {
            name: 'ecommerce',
            colorShapeLight: 'var(--general-neutral-900-light)',
            colorShapeDark: 'var(--general-neutral-900-dark)',
            colorTextLight: 'var(--general-background-light)',
            colorTextDark: 'var(--general-background-dark)',
            isSelected: false,
            isOnlyRead: false,
            isDisabled: false,
        },
        portfolio: {
            name: 'portfolio',
            colorShapeLight: 'var(--general-neutral-900-light)',
            colorShapeDark: 'var(--general-neutral-900-dark)',
            colorTextLight: 'var(--general-background-light)',
            colorTextDark: 'var(--general-background-dark)',
            isSelected: false,
            isOnlyRead: false,
            isDisabled: false,
        },
        institutionalwebsite: {
            name: 'institutionalwebsite',
            colorShapeLight: 'var(--general-neutral-900-light)',
            colorShapeDark: 'var(--general-neutral-900-dark)',
            colorTextLight: 'var(--general-background-light)',
            colorTextDark: 'var(--general-background-dark)',
            isSelected: false,
            isOnlyRead: false,
            isDisabled: false,
        },
        forum: {
            name: 'forum',
            colorShapeLight: 'var(--general-neutral-900-light)',
            colorShapeDark: 'var(--general-neutral-900-dark)',
            colorTextLight: 'var(--general-background-light)',
            colorTextDark: 'var(--general-background-dark)',
            isSelected: false,
            isOnlyRead: false,
            isDisabled: false,
        },
        wiki: {
            name: 'wiki',
            colorShapeLight: 'var(--general-neutral-900-light)',
            colorShapeDark: 'var(--general-neutral-900-dark)',
            colorTextLight: 'var(--general-background-light)',
            colorTextDark: 'var(--general-background-dark)',
            isSelected: false,
            isOnlyRead: false,
            isDisabled: false,
        },
        active: {
            name: 'active',
            colorShapeLight: 'var(--general-success-light)',
            colorShapeDark: 'var(--general-success-dark)',
            colorTextLight: 'var(--general-background-light)',
            colorTextDark: 'var(--general-background-dark)',
            isSelected: false,
            isOnlyRead: false,
            isDisabled: false,
        },
        inactive: {
            name: 'inactive',
            colorShapeLight: 'var(--general-warning-light)',
            colorShapeDark: 'var(--general-warning-dark)',
            colorTextLight: 'var(--general-background-light)',
            colorTextDark: 'var(--general-background-dark)',
            isSelected: false,
            isOnlyRead: false,
            isDisabled: false,
        },
        maintenance: {
            name: 'maintenance',
            colorShapeLight: 'var(--general-help-light)',
            colorShapeDark: 'var(--general-help-dark)',
            colorTextLight: 'var(--general-background-light)',
            colorTextDark: 'var(--general-background-dark)',
            isSelected: false,
            isOnlyRead: false,
            isDisabled: false,
        },
        stopped: {
            name: 'stopped',
            colorShapeLight: 'var(--general-info-light)',
            colorShapeDark: 'var(--general-info-dark)',
            colorTextLight: 'var(--general-background-light)',
            colorTextDark: 'var(--general-background-dark)',
            isSelected: false,
            isOnlyRead: false,
            isDisabled: false,
        },
        cancelled: {
            name: 'cancelled',
            colorShapeLight: 'var(--general-error-light)',
            colorShapeDark: 'var(--general-error-dark)',
            colorTextLight: 'var(--general-background-light)',
            colorTextDark: 'var(--general-background-dark)',
            isSelected: false,
            isOnlyRead: false,
            isDisabled: false,
        },
        studying: {
            name: 'studying',
            colorShapeLight: 'var(--general-error-light)',
            colorShapeDark: 'var(--general-error-dark)',
            colorTextLight: 'var(--general-background-light)',
            colorTextDark: 'var(--general-background-dark)',
            isSelected: false,
            isOnlyRead: false,
            isDisabled: false,
        }
    };

    //Actions standard tagIcon
    function getStandardTagText(name) {
        return standardTagText[name];
    }

    //Actions
    function createTagText({
            id = items.size.toString(),
            name = 'Ada',
            colorShapeLight = '#7190C8',
            colorShapeDark = '#7190C8',
            colorTextLight = 'var(--general-neutral-white-light)',
            colorTextDark = 'var(--general-neutral-white-light)',
            isSelected = false,
            isOnlyRead = false,
            isDisabled = false,
            click = () => {
                toggleSelected(id);
                console.log(`Text clicked ${id}`)
            },
        } = {}) {
        items.set(id,{
            id,
            name,
            colorShapeLight,
            colorShapeDark,
            colorTextLight,
            colorTextDark,
            isSelected,
            isOnlyRead,
            isDisabled,
            click,
        });
        return id;
    }

    function getTagText(id) {
        return items.get(id);
    }

    function updateTagText(update) {
        const { id } = update;

        items.has(id) ?
            items.set(id, { ...items.get(id), ...update }) :
            console.log('TagText not found');
    }

    function deleteTagText(id) {
        items.delete(id);
    }

    function toggleSelected(id) {
        getTagText(id).isSelected = !getTagText(id).isSelected;
    }

    //Initializate
    function init() {
        createTagText(
            {
                ...getStandardTagText('cancelled'),
                id: 'tagText',
            }
        );

        createTagText(
            {
                ...getStandardTagText('idea'),
                id: 'idea',
                isOnlyRead: true,
            }
        );

        createTagText(
            {
                ...getStandardTagText('wireframe'),
                id: 'wireframe',
                isOnlyRead: true,
            }
        );

        createTagText(
            {
                ...getStandardTagText('design'),
                id: 'design',
                isOnlyRead: true,
            }
        );

        createTagText(
            {
                ...getStandardTagText('frontend'),
                id: 'frontend',
                isOnlyRead: true,
            }
        );

        createTagText(
            {
                ...getStandardTagText('backend'),
                id: 'backend',
                isOnlyRead: true,
            }
        );

        createTagText(
            {
                ...getStandardTagText('testing'),
                id: 'testing',
                isOnlyRead: true,
            }
        );

        createTagText(
            {
                ...getStandardTagText('alpha'),
                id: 'alpha',
                isOnlyRead: true,
            }
        );

        createTagText(
            {
                ...getStandardTagText('beta'),
                id: 'beta',
                isOnlyRead: true,
            }
        );

        createTagText(
            {
                ...getStandardTagText('v1'),
                id: 'v1',
                isOnlyRead: true,
            }
        );

        createTagText(
            {
                ...getStandardTagText('ownproject'),
                id: 'ownproject',
                isOnlyRead: true,
            }
        );

        createTagText(
            {
                ...getStandardTagText('educational'),
                id: 'educational',
                isOnlyRead: true,
            }
        );

        createTagText(
            {
                ...getStandardTagText('appweb'),
                id: 'appweb',
                isOnlyRead: true,
            }
        );

        createTagText(
            {
                ...getStandardTagText('landingpage'),
                id: 'landingpage',
                isOnlyRead: true,
            }
        );

        createTagText(
            {
                ...getStandardTagText('blog'),
                id: 'blog',
                isOnlyRead: true,
            }
        );

        createTagText(
            {
                ...getStandardTagText('ecommerce'),
                id: 'ecommerce',
                isOnlyRead: true,
            }
        );

        createTagText(
            {
                ...getStandardTagText('portfolio'),
                id: 'portfolio',
                isOnlyRead: true,
            }
        );

        createTagText(
            {
                ...getStandardTagText('institutionalwebsite'),
                id: 'institutionalwebsite',
                isOnlyRead: true,
            }
        );

        createTagText(
            {
                ...getStandardTagText('forum'),
                id: 'forum',
                isOnlyRead: true,
            }
        );

        createTagText(
            {
                ...getStandardTagText('wiki'),
                id: 'wiki',
                isOnlyRead: true,
            }
        );

        createTagText(
            {
                ...getStandardTagText('active'),
                id: 'active',
                isOnlyRead: true,
            }
        );

        createTagText(
            {
                ...getStandardTagText('inactive'),
                id: 'inactive',
                isOnlyRead: true,
            }
        );

        createTagText(
            {
                ...getStandardTagText('maintenance'),
                id: 'maintenance',
                isOnlyRead: true,
            }
        );

        createTagText(
            {
                ...getStandardTagText('stopped'),
                id: 'stopped',
                isOnlyRead: true,
            }
        );

        createTagText(
            {
                ...getStandardTagText('cancelled'),
                id: 'cancelled',
                isOnlyRead: true,
            }
        );

        createTagText(
            {
                ...getStandardTagText('studying'),
                id: 'studying',
                isOnlyRead: true,
            }
        );
    }

    init();

    return {
        //States

        //Actions
        createTagText,
        getTagText,
        updateTagText,
        deleteTagText,
        getStandardTagText,
    };
});