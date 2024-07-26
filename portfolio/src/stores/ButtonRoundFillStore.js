//General imports
import { defineStore } from 'pinia';
import { reactive } from 'vue';

export const useButtonRoundFill = defineStore('buttonRoundFill', () => {
    //States
    const items = reactive(new Map());

    //Actions
    function createButtonRoundFill({
            id = items.size.toString(),
            colorShapeLight = 'var(--general-secondary-light)',
            colorShapeDark = 'var(--general-secondary-dark)',
            colorTextLight = 'var(--general-background-light)',
            colorTextDark = 'var(--general-background-dark)',
            isDisabled = false,
            click = () => { console.log(`ButtonRoundFill clicked ${id}`)},
        } = {}) {
        items.set(id,{
            id,
            colorShapeLight,
            colorShapeDark,
            colorTextLight,
            colorTextDark,
            isDisabled,
            click,
        });
        return id;
    }

    function getButtonRoundFill(id) {
        return items.get(id);
    }

    function updateButtonRoundFill(update) {
        const { id } = update;

        items.has(id) ?
            items.set(id, { ...items.get(id), ...update }) :
            console.log('ButtonRoundFill not found');
    }

    function deleteButtonRoundFill(id) {
        items.delete(id);
    }

    //Initializate
    function init() {
        createButtonRoundFill({
            id: 'start',
            click: () => {
                const email = 'jdaniel.gonzalez.aleman@gmail.com';
                const subjects = [
                    "Let's join forces for the next big project!",
                    "Ready for a new professional adventure?",
                    "We need you on our team of champions!",
                    "Let's do amazing things together!",
                    "Your talent is just what we're looking for",
                    "Your next opportunity is here!",
                    "We're excited to meet you!",
                    "Want to be part of our family of innovators?",
                    "Together we can achieve great things!",
                    "Come and make a difference with us!"
                ];
                const bodies = [
                    "Hello! I'm excited to hear from you. Please share more details about the opportunity.",
                    "Thank you for reaching out! I look forward to learning more about how I can contribute to your team.",
                    "Hi! I appreciate your message and look forward to learning more about the position.",
                    "Thank you for getting in touch! I'm eager to hear more about the opportunity.",
                    "Hello! I'm available to discuss how I can contribute to your company. Thank you for reaching out."
                ];

                const randomSubject = subjects[Math.floor(Math.random() * subjects.length)];
                const randomBody = bodies[Math.floor(Math.random() * bodies.length)];

                const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(randomSubject)}&body=${encodeURIComponent(randomBody)}`;
                window.location.href = mailtoLink;

                navigator.clipboard.writeText(email).then(() => {
                    console.log('Email copied to clipboard');
                }).catch(err => {
                    console.error('Error copying to clipboard', err);
                });
            },
        });

        createButtonRoundFill({
            id: 'end',
            click: () => {
                const email = 'jdaniel.gonzalez.aleman@gmail.com';
                const subjects = [
                    "Your next great talent is here!",
                    "Let's write the next chapter together!",
                    "Our team is ready to meet you!",
                    "Ready for an exciting professional journey?",
                    "Let's do amazing things together!",
                    "It's time for new opportunities and challenges!",
                    "We're excited to have you on our team!",
                    "The future looks bright with you on board!",
                    "Let's make history together!",
                    "Your new adventure starts here!"
                ];
                const bodies = [
                    "Hello! I'm thrilled to hear from you. Could you share more details about the opportunity?",
                    "Thank you for your message! I'm looking forward to learning more about how I can contribute to your team.",
                    "Hi! I appreciate your contact and am excited to learn more about the offer.",
                    "Thanks for reaching out! I'm eager to know more about the position and how we can collaborate.",
                    "Hello! I'm available to discuss how we can work together. Thank you for your interest."
                ];
                

                const randomSubject = subjects[Math.floor(Math.random() * subjects.length)];
                const randomBody = bodies[Math.floor(Math.random() * bodies.length)];

                const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(randomSubject)}&body=${encodeURIComponent(randomBody)}`;
                window.location.href = mailtoLink;

                navigator.clipboard.writeText(email).then(() => {
                    console.log('Email copied to clipboard');
                }).catch(err => {
                    console.error('Error copying to clipboard', err);
                });
            }
        });
    }

    init();

    return {
        //States

        //Actions
        createButtonRoundFill,
        getButtonRoundFill,
        updateButtonRoundFill,
        deleteButtonRoundFill,
    };
});