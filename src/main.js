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
