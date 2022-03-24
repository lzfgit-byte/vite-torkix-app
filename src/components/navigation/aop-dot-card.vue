<template>
    <div class="contain">
        <div class="imgContain">
            <img width="53.3" :src="img" />
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
            icon?: string;
        }>(),
        {
            img: '/public/icons/ytb.png',
            title: 'YouTube',
        }
    );
</script>

<style scoped lang="less">
    @import 'css/aop-dot-card-less';
</style>
