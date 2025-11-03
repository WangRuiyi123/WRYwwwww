// 使用本地安装的 Vue ESM 浏览器构建
import { createApp } from '../node_modules/vue/dist/vue.esm-browser.js';

createApp({
  data() {
    return {
      message: 'Hello, Vue is installed!',
      count: 0
    };
  }
}).mount('#app');
