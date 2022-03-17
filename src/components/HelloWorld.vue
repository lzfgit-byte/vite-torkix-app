<template>
    <h1>{{ msg }}</h1>

    <a-button class="btt" @click="handleClick"> count is: {{ count }} </a-button>
</template>

<script lang="ts" setup>
    import { ref, defineProps, defineEmits } from 'vue';
    import { Button as AButton } from 'ant-design-vue';
    defineProps({
        msg: {
            type: String,
            required: true,
        },
    });
    const emit = defineEmits(['change']);
    const count = ref(0);
    const handleClick = () => {
        count.value++;
        emit('change', count.value);
    };
</script>
<style lang="less"></style>
