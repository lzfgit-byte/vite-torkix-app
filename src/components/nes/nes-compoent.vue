<template>
    <h1>Hello word</h1>
    <DIV id="emulator" style="text-align: center">
        <canvas id="nes-canvas" :width="canWidth" :height="canHeight"></canvas>
    </DIV>
</template>

<script setup lang="ts">
    import { reactive, ref } from 'vue';

    const canWidth = ref('256px');
    const canHeight = ref('240px');
</script>

<style scoped lang="less">
    @import './css/nes.less';
</style>
