<template>
    <div class="contain" @click="openHref">
        <div class="imgContain">
            <img width="40" :src="img" />
        </div>
        <div class="title">{{ title }}</div>
    </div>
</template>

<script setup lang="ts">
    import { withDefaults, computed } from 'vue';
    import { strOrReStr } from './type/navigation-types';

    const props = withDefaults(
        defineProps<{
            img?: strOrReStr;
            title?: strOrReStr;
            href: string;
            type?: string;
        }>(),
        {
            img: () => {
                const ranNum = parseInt((Math.random() * 10).toString());
                return `public/default/default${ranNum}.png`;
            },
            title: 'YouTube',
            href: 'https://www.youtube.com/',
            type: 'link',
        }
    );
    const emits = defineEmits(['click']);
    const openHref = () => {
        if (props.type === 'link') {
            window.open(props.href, '_blank');
        } else {
            emits('click');
        }
    };
</script>

<style scoped lang="less">
    @import 'css/aop-dot-card-less';
</style>
