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
                        `My main portfolio. The entire page has been created from scratch with its original sketch, design and prototyping in figma and developed in Vue. This page is designed as a showcase of some of my technical skills, originality, creativity and web design.`,
                    es:
                        `Mi portfolio principal. Toda la página ha sido creada desde cero con su boceto original, diseño y prototipado en figma y desarrollado en Vue. Esta página está pensada como muestra de alguna de mis habilidades técnicas, originalidad, creatividad y diseño web.`,
                    fr:
                        `Mon portfolio principal. Toute la page a été créée à partir de zéro avec son croquis original, son design et son prototypage dans figma et développée en Vue. Cette page est conçue comme une vitrine de certaines de mes compétences techniques, de mon originalité, de ma créativité et de mon design web.`,
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
                    en: 'Frontend developer with an understanding of design, user experience and web development process.',
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
                alt: {
                    en: 'Funko Pop of a developer',
                    es: 'Funko Pop de un desarrollador',
                    fr: 'Funko Pop d\'un développeur',
                }
            },
            Hero: {
                alt: {
                    en: 'Developer',
                    es: 'Desarrollador',
                    fr: 'Développeur',
                }
            },
            Navigation: {
                profile: {
                    en: 'Profile',
                    es: 'Perfil',
                    fr: 'Profil',
                },
                technology: {
                    en: 'Technology',
                    es: 'Tecnología',
                    fr: 'Technologie',
                },
                projects: {
                    en: 'Projects',
                    es: 'Proyectos',
                    fr: 'Projets',
                },
                credential: {
                    en: 'Credential',
                    es: 'Credencial',
                    fr: 'Crédential',
                },
                sendEmail: {
                    en: 'Send email',
                    es: 'Enviar email',
                    fr: 'Envoyer un email',
                },
            },
        };
    
        return texts[component]?.[type]?.[languageMode.value];
    }

    const toggleDark = () => {
        isDarkMode.value = !isDarkMode.value;

        isDarkMode.value
            ? document.body.style.backgroundColor = 'var(--general-background-dark)'
            : document.body.style.backgroundColor = 'var(--general-background-light)';
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