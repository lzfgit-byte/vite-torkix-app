import { createApp } from 'vue';
import App from './App.vue';
import './index.css';
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import 'animate.css/animate.min.css';
const app = createApp(App);

app.use(Antd).mount('#app');
