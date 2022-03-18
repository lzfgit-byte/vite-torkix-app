<template>
    <div class="topLeft">topLeft</div>
    <div class="grid-contain">
        <div class="iconNav">iconNav</div>
        <div class="inptNav">inptNav</div>
        <div class="barNav">barNav</div>
    </div>
</template>

<script setup lang="ts">
    import { ref, reactive, PropType } from 'vue';
    import { webSiteProp, searchWebSit } from './type/navigation-types';
    import NavCard from './nav-card.vue';
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
    const msg2 = ref<string>(''); //  可以通过范型约束类型
</script>

<style scoped lang="less">
    @import './css/navigation-less';
</style>
