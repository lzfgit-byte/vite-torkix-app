<template>
    <div class="topLeft">topLeft</div>
    <div class="grid-contain">
        <div class="iconNav">
            <div class="logoContain">
                <div class="logo">
                    <img width="272" height="92" src="public/imgs/google_logo.svg" />
                </div>
            </div>
        </div>
        <div class="inptNav">
            <div class="searchInputContain">
                <div class="search">
                    <div class="searchIconContain">
                        <img
                            width="20"
                            height="20"
                            class="searchIcon"
                            src="public/imgs/search.svg"
                        />
                    </div>
                    <input
                        id="input"
                        type="search"
                        autocomplete="off"
                        spellcheck="false"
                        role="combobox"
                        aria-live="polite"
                        placeholder="在 Google 上搜索，或者输入一个网址"
                    />
                </div>
            </div>
        </div>
        <div class="barNav">barNav</div>
    </div>
</template>

<script setup lang="ts">
    import { ref, reactive, PropType } from 'vue';
    import { webSiteProp, searchWebSit } from './type/navigation-types';
    import NavCard from './nav-card.vue';
    import Index from '../../../index.html';
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
