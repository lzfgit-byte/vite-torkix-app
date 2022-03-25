<template>
    <div class="contain" :href="href" target="_blank" @click="target">
        <div class="dotContain">
            <img width="24" height="24" src="/imgs/icon_more_vert.svg" />
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
    import { strOrReStr } from './type/navigation-types';
    const props = withDefaults(
        defineProps<{
            name?: strOrReStr;
            icon?: strOrReStr;
            href: strOrReStr;
        }>(),
        {
            name: 'YouTube',
            icon: () => {
                const ranNum = parseInt((Math.random() * 10).toString());
                return `/default/default${ranNum}.png`;
            },
            href: 'https://www.youtube.com/',
        }
    );
    const emit = defineEmits(['click']);
    const target = () => {
        if (props.href) {
            window.open(props.href, '_blank');
            emit('click', 'success');
        } else {
            emit('click', 'err');
        }
    };
</script>

<style scoped lang="less">
    @import './css/nav-card-less';
</style>
