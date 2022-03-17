<template>
    <h1>{{ msg }}</h1>

    <a-button @click="count++"> count is: {{ count }} </a-button>
</template>

<script lang="ts">
    import { ref, defineComponent } from 'vue';
    import { Button as AButton } from 'ant-design-vue';

    export default defineComponent({
        name: 'HelloWorld',
        components: {
            AButton,
        },
        props: {
            msg: {
                type: String,
                required: true,
            },
        },
        setup: () => {
            const count = ref(0);
            // eslint-disable-next-line no-debugger
            debugger;
            return { count };
        },
    });
</script>
