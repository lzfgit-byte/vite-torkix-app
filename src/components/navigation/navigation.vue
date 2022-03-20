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
        <div class="barNav">
            <div class="barContainer">
                <div class="barContain">
                    <div class="displayInline">
                        <div
                            v-for="(rowItem, index) in wrapperWebInfos"
                            :key="index"
                            class="rowNav"
                        >
                            <NavCard
                                v-for="item in rowItem"
                                :key="item.href"
                                :name="item.name"
                                :href="item.href"
                                :icon="item.icon"
                            ></NavCard>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
    import { ref, reactive, PropType } from 'vue';
    import { webSiteProp, searchWebSit } from './type/navigation-types';
    // import getWebData from '@data/webs';
    import getWebData from '../../data/webs';
    import NavCard from './nav-card.vue';
    const { webInfos } = getWebData();
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
    let wrapperWebInfos = reactive([[], []]);
    webInfos
        .filter((item) => typeof item.show === 'undefined' && !item.show)
        .forEach((item, index) => {
            if (index < 5) {
                wrapperWebInfos[0].push(item);
            } else if (index < 10) {
                wrapperWebInfos[1].push(item);
            }
        });
</script>

<style scoped lang="less">
    @import './css/navigation-less';
</style>
