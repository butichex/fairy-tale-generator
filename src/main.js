import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import "../src/reset.css"

import { Configuration, OpenAI } from "openai"
const openai = new OpenAI({
    apiKey: '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',  dangerouslyAllowBrowser: true, 
});
createApp(App).use(router).mount('#app')


export { openai }
