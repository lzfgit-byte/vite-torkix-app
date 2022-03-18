<template>
    <a class="contain" :href="href" target="_blank">
        <div class="dotContain">
            <img width="24px" height="24px" src="public/imgs/icon_more_vert.svg" />
        </div>
        <div class="imgContain">
            <div class="img">
                <img width="24" height="24" src="public/imgs/yt.png" />
            </div>
        </div>
        <div class="name"> <span>YouTube</span></div>
    </a>
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
            name: '名字',
            icon: '',
            href: '',
        }
    );
    const emit = defineEmits(['click']);
</script>

<style scoped lang="less">
    @import './css/nav-card-less';
</style>
