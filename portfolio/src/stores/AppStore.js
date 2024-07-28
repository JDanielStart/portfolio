//General imports
import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', () => {
    //States
    const isDarkMode = ref(false);
    const languageMode = ref('en');

    //Actions
    function getText(component, type='none') {
        const texts = {
            ButtonRoundFill: {
                none: {
                    en: 'CONTACT ME',
                    es: 'CONTÁCTAME',
                    fr: 'CONTACTEZ-MOI',
                },
            },
            ButtonLanguage: {
                none: {
                    en: 'EN',
                    es: 'ES',
                    fr: 'FR',
                },
            },
            ButtonMenuIcon: {
                sketches: {
                    en: 'Sketches',
                    es: 'Bocetos',
                    fr: 'Croquis',
                },
                mobileprototype: {
                    en: 'Mobile prototype',
                    es: 'Prototipo móvil',
                    fr: 'Prototype sur mobile',
                },
                tabletprototype: {
                    en: 'Tablet prototype',
                    es: 'Prototipo tablet',
                    fr: 'Prototype sur tablette',
                },
                desktopprototype: {
                    en: 'Desktop prototype',
                    es: 'Prototipo de escritorio',
                    fr: 'Prototype bureau',
                },
            },
            TagText: {
                idea: {
                    en: 'IDEA',
                    es: 'IDEA',
                    fr: 'IDÉE',
                },
                wireframe: {
                    en: 'WIREFRAME',
                    es: 'BOCETO',
                    fr: 'CROQUIS',
                },
                design: {
                    en: 'DESIGN',
                    es: 'DISEÑO',
                    fr: 'CONCEPTION',
                },
                frontend: {
                    en: 'FRONT END',
                    es: 'FRONT END',
                    fr: 'FRONT END',
                },
                backend: {
                    en: 'BACK END',
                    es: 'BACK END',
                    fr: 'BACK END',
                },
                testing: {
                    en: 'TESTING',
                    es: 'TESTING',
                    fr: 'TESTING',
                },
                alpha: {
                    en: 'ALPHA',
                    es: 'ALFA',
                    fr: 'ALPHA',
                },
                beta: {
                    en: 'BETA',
                    es: 'BETA',
                    fr: 'BETA',
                },
                v1: {
                    en: 'V1',
                    es: 'V1',
                    fr: 'V1',
                },
                ownproject: {
                    en: 'OWN PROJECT',
                    es: 'PROYECTO PROPIO',
                    fr: 'PROJET PERSONNEL',
                },
                educational: {
                    en: 'EDUCATIONAL',
                    es: 'EDUCACIONAL',
                    fr: 'ÉDUCATIF',
                },
                appweb: {
                    en: 'APP WEB',
                    es: 'APP WEB',
                    fr: 'APP WEB',
                },
                landingpage: {
                    en: 'LANDING PAGE',
                    es: 'LANDING PAGE',
                    fr: 'LANDING PAGE',
                },
                blog: {
                    en: 'BLOG',
                    es: 'BLOG',
                    fr: 'BLOG',
                },
                ecommerce: {
                    en: 'E-COMMERCE',
                    es: 'E-COMMERCE',
                    fr: 'E-COMMERCE',
                },
                portfolio: {
                    en: 'PORTFOLIO',
                    es: 'PORTFOLIO',
                    fr: 'PORTFOLIO',
                },
                institutionalwebsite: {
                    en: 'INSTITUTIONAL WEBSITE',
                    es: 'WEB INSTITUCIONAL',
                    fr: 'WEB INSTITUTIONNEL',
                },
                forum: {
                    en: 'FORUM',
                    es: 'FORO',
                    fr: 'FORUM',
                },
                wiki: {
                    en: 'WIKI',
                    es: 'WIKI',
                    fr: 'WIKI',
                },
                active: {
                    en: 'ACTIVE',
                    es: 'ACTIVO',
                    fr: 'ACTIF',
                },
                inactive: {
                    en: 'INACTIVE',
                    es: 'INACTIVO',
                    fr: 'INACTIF',
                },
                maintenance: {
                    en: 'MAINTENANCE',
                    es: 'MANTENIMIENTO',
                    fr: 'MAINTENANCE',
                },
                stopped: {
                    en: 'STOPPED',
                    es: 'PARADO',
                    fr: 'ARRÊTÉ',
                },
                cancelled: {
                    en: 'CANCELLED',
                    es: 'CANCELADO',
                    fr: 'ANNULÉ',
                },
                studying: {
                    en: 'STUDYING',
                    es: 'ESTUDIANDO',
                    fr: 'ÉTUDE',
                },
            },
            CardProject: {
                portfolio: {
                    en:
                        `This is my portfolio. A personal portfolio is a curated collection of an individual's work, skills, and accomplishments. It typically includes a variety of projects, case studies, and examples that showcase`,
                    es:
                        `Este es mi portafolio. Un portafolio personal es una colección curada del trabajo, habilidades y logros de un individuo. Típicamente incluye una variedad de proyectos, estudios de caso y ejemplos que muestran`,
                    fr:
                        `Ceci est mon portfolio. Un portfolio personnel est une collection organisée du travail, des compétences et des réalisations d'un individu. Il comprend généralement une variété de projets, d'études de cas et d'exemples qui montrent`,
                }
            },
            CardTechnology: {
                Design: {
                    en: 'Design',
                    es: 'Diseño',
                    fr: 'Conception',
                },
                Frontend: {
                    en: 'Frontend',
                    es: 'Frontend',
                    fr: 'Frontend',
                },
                Backend: {
                    en: 'Backend',
                    es: 'Backend',
                    fr: 'Backend',
                },
                Tools: {
                    en: 'Tools',
                    es: 'Herramientas',
                    fr: 'Outils',
                },
                AI: {
                    en: 'AI',
                    es: 'IA',
                    fr: 'IA',
                },
                Testing: {
                    en: 'Testing',
                    es: 'Testing',
                    fr: 'Testing',
                },
            },
            CtaStart: {
                title: {
                    en: 'DESIGN AND FRONTEND',
                    es: 'DISEÑO Y FRONTEND',
                    fr: 'CONCEPTION ET FRONTEND',
                },
                description: {
                    en: 'Frontend developer with an understanding of design, user experience, and web development process.',
                    es: 'Desarrollador Frontend con una comprensión sobre el diseño, la experiencia de usuario y el proceso de desarrollo web.',
                    fr: 'Développeur Frontend avec une compréhension du design, de l\'expérience utilisateur et du processus de développement web.',
                },
            },
            CtaEnd: {
                none: {
                    en: 'DESIGN AND FRONTEND',
                    es: 'DISEÑO Y FRONTEND',
                    fr: 'CONCEPTION ET FRONTEND',
                },
            }
        };
    
        return texts[component]?.[type]?.[languageMode.value];
    }

    const toggleDark = () => {
        isDarkMode.value = !isDarkMode.value;
    }

    const changeLanguage = (lang) => {
        languageMode.value = lang;
    }

    return {
        //States
        isDarkMode,
        languageMode,

        //Actions
        getText,
        toggleDark,
        changeLanguage
    }
})