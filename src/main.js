import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import "../src/reset.css"

import { Configuration, OpenAI } from "openai"
const openai = new OpenAI({
    apiKey: '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',  dangerouslyAllowBrowser: true, 
    organization: "org-ytvh8R7rGVn52mnqZjlj1h6I" // defaults to process.env["OPENAI_API_KEY"]
});
createApp(App).use(router).mount('#app')


export { openai }
