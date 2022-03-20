<template>
    <div class="contain" :href="href" target="_blank">
        <div class="dotContain">
            <img width="24" height="24" src="public/imgs/icon_more_vert.svg" />
        </div>
        <div class="imgContain">
            <div class="img">
                <img width="24" height="24" :src="icon" />
            </div>
        </div>
        <div class="name">
            <span>{{ name }}</span>
        </div>
    </div>
</template>

<script setup lang="ts">
    import { withDefaults } from 'vue';
    withDefaults(
        defineProps<{
            name?: string;
            icon?: string;
            href: string;
        }>(),
        {
            name: 'YouTube',
            icon: 'public/imgs/yt.png',
            href: 'https://www.youtube.com/',
        }
    );
    const emit = defineEmits(['click']);
</script>

<style scoped lang="less">
    @import './css/nav-card-less';
</style>
