<template>
    <div
        class="shape"
    >
        <Credential
            v-for="(credential, index) in credentials"
            :key="index"
            :state="{id: credential.id}"
        />
    </div>
</template>

<script setup>
    //General imports
    import { computed, toRefs  } from 'vue';

    //Store imports
    import { useGroupCredential } from '../../stores/GroupCredentialStore.js';

    //Components imports
    import Credential from '../credentials/Credential.vue';

    //Props
    const props = defineProps({
        state: {
            type: Object
        },
    });

    const { id } = props.state;

    //Stores
    const groupCredential = useGroupCredential();
    
    //Actions store
    const { getGroupCredential } = groupCredential;

    //States store
    const {
        containerGroupCredential: containerGroupCredentialStore,
    } = toRefs(getGroupCredential(id));

    //States
    const credentials = computed(() => containerGroupCredentialStore.value);
</script>

<style scoped>
    /* Component style */
    .shape {
        display: flex;
        justify-content: center;
        align-items: flex-start;
        gap: 4rem 2.4rem;
        flex-wrap: wrap;
        max-width: 120rem;
        margin: 0 auto;
        width: 100%;
    }
</style>