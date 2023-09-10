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
