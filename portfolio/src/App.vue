<template>
  <div :class="classesContainer">

    <header
      :class="classesHeroContainer"
    >
      <Hero
        :state="{id: 'hero'}"
      />
    </header>

    <div
      :class="classesButtonLanguageContainer"
    >
      <ButtonLanguage
        :state="{id: 'language'}"
      />
    </div>

    <div
      :class="classesSections"
    >

      <section
        :class="classesProfileSection"
        id="profile" ref="profile"
      >
        <CtaStart :state="{id: 'start'}"/>
      </section>

      <section
        :class="classesTechnologySection"
        id="technology" ref="technology"
      >
        <GroupCardTechnology :state="{id: 'technology'}"/>
      </section>

      <section
        :class="classesProjectSection"
        id="project" ref="project"
      >
        <GroupCardProject :state="{id: 'project'}"/>
      </section>

      <section
        :class="classesCredentialSection"
        id="credential" ref="credential"
      >
        <GroupCredential :state="{id: 'credential'}"/>
      </section>

      <section
        :class="classesSendEmailSection"
        id="sendEmail" ref="sendEmail"
      >
        <CtaEnd :state="{id: 'end'}"/>
    </section>

    </div>
    
  </div>
</template>

<script setup>
  //General imports
  import './styles/general.css';
  import { ref, computed, onMounted, onBeforeUnmount } from 'vue';

  //Store imports
  import { useNavigation } from './stores/NavigationStore.js';

  //Components imports
  import Hero from './components/heroes/Hero.vue';
  import ButtonLanguage from './components/buttons/ButtonLanguage.vue';
  import CtaStart from './components/ctas/CtaStart.vue';
  import GroupCardTechnology from './components/groupCards/cardTechnology/GroupCardTechnology.vue';
  import GroupCardProject from './components/groupCards/cardProjects/GroupCardProject.vue';
  import GroupCredential from './components/groupCredentials/GroupCredential.vue';
  import CtaEnd from './components/ctas/CtaEnd.vue';

  //Stores
  const navigationStore = useNavigation();

  //Actions store
  const { setSelection } = navigationStore;

  //States
  const idNavigation = ref('navigation');

  const sections = ref([]);

  //Actions
  const updateNavigation = (id) => {
    setSelection(idNavigation.value, id);
  };

  const handleScroll = () => {
    const heroElement = document.querySelector('.hero');
    const heroHeight = heroElement ? heroElement.offsetHeight : 0;
    const sectionMargin = heroHeight + 50;
    const scrollPosition = window.scrollY + window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;

    if (scrollPosition >= documentHeight) {
      updateNavigation(sections.value[sections.value.length - 1].id);
    } else {
      const current = sections.value.length - [...sections.value].reverse().findIndex((section) => window.scrollY >= section.offsetTop - sectionMargin) - 1;
      if (current >= 0 && sections.value[current]) {
        updateNavigation(sections.value[current].id);
      }
    }
  };

  onMounted(() => {
    sections.value = document.querySelectorAll(".sections section[id]");
    window.addEventListener('scroll', handleScroll);

    const heroElement = document.querySelector('.hero');
    const heroHeight = heroElement ? heroElement.offsetHeight : 0;
    const sectionMargin = heroHeight + 40;

    document.documentElement.style.scrollBehavior = 'smooth';
    document.documentElement.style.scrollPaddingTop = `${sectionMargin}px`;
  });

  onBeforeUnmount(() => {
    window.removeEventListener('scroll', handleScroll);
  });

  //Change style
  const classesContainer = computed(() => {
    const classes= {};

    classes['container'] = true;

    return classes;
  });

  const classesHeroContainer = computed(() => {
    const classes= {};

    classes['hero'] = true;

    return classes;
  });

  const classesButtonLanguageContainer = computed(() => {
    const classes= {};

    classes['buttonLanguage'] = true;

    return classes;
  });

  const classesSections = computed(() => {
    const classes= {};

    classes['sections'] = true;

    return classes;
  });

  const classesProfileSection = computed(() => {
    const classes= {};

    classes['profile'] = true;

    return classes;
  });

  const classesTechnologySection = computed(() => {
    const classes= {};

    classes['section'] = true;

    return classes;
  });

  const classesProjectSection = computed(() => {
    const classes= {};

    classes['section'] = true;

    return classes;
  });

  const classesCredentialSection = computed(() => {
    const classes= {};

    classes['section'] = true;

    return classes;
  });

  const classesSendEmailSection = computed(() => {
    const classes= {};

    classes['section'] = true;

    return classes;
  });
</script>

<style scoped>
  * {
    scroll-behavior: smooth;
    scroll-padding-top: 10rem;
  }

  body {
    background-color: var(--general-background-light);
  }
  
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 25rem;
  }

  .buttonLanguage {
    position: fixed;
      top: 20rem;
      right: 0.5rem;
      z-index: 1;
  }

  .hero {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;
    padding: 0;
    width: 100%;;
  }

  .sections {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 8rem;
  }

  .section {
    padding: 2.4rem 0;
  }

  .profile {
    display: flex;
    justify-content: center;
  }

  @media (min-width: 500px) and (max-width: 744px) {
    .buttonLanguage {
      position: fixed;
      top: 17rem;
      right: 0.5rem;
      z-index: 1;
    }
  }

  @media (min-width: 745px) {
    .buttonLanguage {
      position: fixed;
      top: 21rem;
      right: -28.5rem;
      display: flex;
      justify-content: center;
      width:100%;
      z-index: 1;
    }
  }
  
</style>
