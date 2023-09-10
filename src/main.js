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
