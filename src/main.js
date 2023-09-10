import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import "../src/reset.css"

import { Configuration, OpenAI } from "openai"
const openai = new OpenAI({
    apiKey: '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',  dangerouslyAllowBrowser: true // defaults to process.env["OPENAI_API_KEY"]
});
createApp(App).use(router).mount('#app')


export { openai }
