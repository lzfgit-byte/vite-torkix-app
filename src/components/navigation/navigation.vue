<template>
    <div class="topLeft animate__animated animate__backInRight">
        <a href="https://mail.google.com/mail/u/0/?tab=rm&ogbl" target="_self">Gmail</a>
        <a href="https://www.google.com.hk/imghp?hl=zh-CN&tab=ri&ogbl" target="_self">图片</a>
        <div class="appDot" @click="showSeting(true)">
            <svg width="24" height="24" viewBox="0 0 24 24">
                <path
                    d="M6,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM16,6c0,1.1 0.9,2 2,2s2,-0.9 2,-2 -0.9,-2 -2,-2 -2,0.9 -2,2zM12,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2z"
                ></path>
            </svg>
        </div>
        <div class="modalSet" :style="inlineStyle">
            <aop-dot-card
                v-for="item in aopDotData"
                :key="item"
                :img="item.img"
                :title="item.title"
                :type="item.type"
                :href="item.href"
                @click="handlerClick(item.type)"
            ></aop-dot-card>
        </div>
        <div class="photoContain displayInline">
            <img width="45" src="public/imgs/tx.png" />
        </div>
    </div>
    <div class="grid-contain animate__animated animate__zoomInDown" @click="showSeting(false)">
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
    <div v-show="visible" class="containFrame animate__animated animate__backInDown">
        <div class="closeBtn" @click="handleOk">X</div>
        <iframe src="https://wannianrili.bmcx.com/" width="98%" height="90%"> </iframe>
    </div>
</template>

<script setup lang="ts">
    import { ref, reactive, withDefaults } from 'vue';
    import { webInfoType } from '../../data/webs';
    // import getWebData from '@data/webs';
    import getWebData from '../../data/webs';
    import NavCard from './nav-card.vue';
    import _ from 'lodash';
    import AopDotCard from './aop-dot-card.vue';
    import Http from '../../utils/Http';
    const { webInfos, aopDotData, movieAggre } = getWebData();
    const props = withDefaults(
        defineProps<{
            website?: any;
            searchUrl?: any;
            rowNumber?: number;
        }>(),
        {
            website: null,
            searchUrl: null,
            rowNumber: 5,
        }
    );
    defineExpose({
        ss: () => {
            _.shuffle();
        },
    });
    const emits = defineEmits(['fc']);

    const wrapperWebInfos: any[] = reactive([[], []]);
    const loadNavData = (data: any) => {
        wrapperWebInfos[0].length = 0;
        wrapperWebInfos[1].length = 0;
        data.filter((item: any) => typeof item.show === 'undefined' && !item.show).forEach(
            (item: any, index: any) => {
                if (index < props.rowNumber) {
                    wrapperWebInfos[0].push(item as webInfoType);
                } else if (index < props.rowNumber * 2) {
                    wrapperWebInfos[1].push(item as webInfoType);
                }
            }
        );
    };
    loadNavData(webInfos);
    const inlineStyle = ref('');
    const showSeting = (flag?: boolean) => {
        if (flag) {
            inlineStyle.value = inlineStyle.value === '' ? 'opacity: 1;' : '';
        } else {
            if (inlineStyle.value === 'opacity: 1;') {
                inlineStyle.value = '';
            }
        }
    };
    const visible = ref(false);
    const handleOk = () => {
        visible.value = false;
    };
    const handlerClick = (type: string) => {
        switch (type) {
            case 'toggleMovie':
                loadNavData(movieAggre);
                break;
            case 'toFCLink':
                emits('fc');
                break;
            case 'calendar':
                //https://wannianrili.bmcx.com/
                visible.value = true;
                break;
        }
    };
</script>

<style scoped lang="less">
    @import './css/navigation-less';
</style>
