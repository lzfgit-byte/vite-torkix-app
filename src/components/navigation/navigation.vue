<template>
    <h1>12222{{ a }}</h1>
    {{ obj }}
</template>

<script setup lang="ts">
    import { ref, reactive } from 'vue';
    const a = ref(0);
    const obj = reactive({});
</script>

<style scoped></style>
