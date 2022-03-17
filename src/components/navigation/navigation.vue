<template>
    <h1>333</h1>
</template>

<script setup lang="ts">
    import { ref, reactive, defineProps, PropType } from 'vue';
    import { webSiteProp, searchWebSit } from './type/navigation-types';
    defineProps({
        website: {
            type: Array as PropType<webSiteProp[]>,
            required: true,
        },
        searchUrl: {
            type: Array as PropType<searchWebSit[]>,
            default: () => {
                {
                    [];
                }
            },
        },
    });
</script>

<style scoped></style>
