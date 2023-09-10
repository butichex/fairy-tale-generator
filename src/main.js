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
