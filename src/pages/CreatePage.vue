<template>
    <div class="create-page">
        <div class="create-page__btn">
            <router-link to="/">
                <NIcon :style="{ cursor: 'pointer' }" size="36">
                    <BsArrowLeftCircleFill />
                </NIcon>
            </router-link>
        </div>

        <div class="create-page__cards">
            <div class="tr-buttons">
                <NButton @click="changeText('rus')">РУС</NButton>
                <NButton @click="changeText('tat')">ТАТ</NButton>
            </div>
            <div v-if="isLoading" class="create-page__card">
                <n-space vertical>
                    <n-skeleton v-if="isLoading" height="10px" round />
                    <n-skeleton :style="{ margin: '8px 0px 0px 0px' }" v-if="isLoading" height="10px" round />
                    <n-skeleton :style="{ margin: '8px 0px 0px 0px' }" v-if="isLoading" height="10px" round />
                </n-space>
            </div>
            <div v-if="isLoading" class="create-page__card">
                <n-space vertical>
                    <n-skeleton v-if="isLoading" height="10px" round />
                    <n-skeleton :style="{ margin: '8px 0px 0px 0px' }" v-if="isLoading" height="10px" round />
                    <n-skeleton :style="{ margin: '8px 0px 0px 0px' }" v-if="isLoading" height="10px" round />
                </n-space>
            </div>
            <div v-if="isLoading" class="create-page__card">
                <n-space vertical>
                    <n-skeleton v-if="isLoading" height="10px" round />
                    <n-skeleton :style="{ margin: '8px 0px 0px 0px' }" v-if="isLoading" height="10px" round />
                    <n-skeleton :style="{ margin: '8px 0px 0px 0px' }" v-if="isLoading" height="10px" round />
                </n-space>
            </div>
            <div v-if="isLoading" class="create-page__card">
                <n-space vertical>
                    <n-skeleton v-if="isLoading" height="10px" round />
                    <n-skeleton :style="{ margin: '8px 0px 0px 0px' }" v-if="isLoading" height="10px" round />
                    <n-skeleton :style="{ margin: '8px 0px 0px 0px' }" v-if="isLoading" height="10px" round />
                </n-space>
            </div>
            <div v-if="isLoading" class="create-page__card">
                <n-space vertical>
                    <n-skeleton v-if="isLoading" height="10px" round />
                    <n-skeleton :style="{ margin: '8px 0px 0px 0px' }" v-if="isLoading" height="10px" round />
                    <n-skeleton :style="{ margin: '8px 0px 0px 0px' }" v-if="isLoading" height="10px" round />
                </n-space>
            </div>
            <div v-if="isLoading" class="create-page__card">
                <n-space vertical>
                    <n-skeleton v-if="isLoading" height="10px" round />
                    <n-skeleton :style="{ margin: '8px 0px 0px 0px' }" v-if="isLoading" height="10px" round />
                    <n-skeleton :style="{ margin: '8px 0px 0px 0px' }" v-if="isLoading" height="10px" round />
                </n-space>
            </div>
            <div v-if="currentText === 'rus'" v-for="item in rusText" class="create-page__card">
                <div v-if="item.startsWith('http')">
                    <img class="create-page__img" :src="item" alt="">
                </div>
                <div v-else>
                    {{ item }}
                </div>
            </div>
            <div v-if="currentText === 'tat'" v-for="item in tatText" class="create-page__card">
                <div v-if="item.startsWith('http')">
                    <img class="create-page__img" :src="item" alt="">
                </div>
                <div v-else>
                    {{ item }}
                </div>
            </div>
        </div>

    </div>
</template>
  
<script setup>
import BaseInput from "../components/global/BaseInput.vue"
import BaseButton from "../components/global/BaseButton.vue"
import BaseCard from "../components/global/BaseCard.vue"
import { NCard, NSkeleton, NSpace, NIcon, NButton } from "naive-ui"

import { BsArrowLeftCircleFill } from "@kalimahapps/vue-icons";
import router from "../router/index"


import { openai } from "../main"
import { onMounted, ref } from "vue";


const isLoading = ref(false);
const rusText = ref("")
const tatText = ref("")
const currentText = ref("rus")


const changeText = (lan) => {
    console.log(lan)
    if (lan === "rus") {
        currentText.value = 'rus'
    } else {
        currentText.value = 'tat'
    }

}

/* `в пределах ${router.currentRoute.value.params.count}.`
 */


onMounted(async () => {
    isLoading.value = true;
    let index = 0
    const completion = await openai.chat.completions.create({
        messages: [{ role: 'user', content: router.currentRoute.value.params.text + `из 10 предложений.` }],
        model: 'gpt-3.5-turbo',
    });
    rusText.value = completion.choices[0].message.content.split('.').map((s) => s.trim())
    isLoading.value = false
    const secondCompletion = await openai.chat.completions.create({
        messages: [{ role: 'user', content: `Переведи каждое предложение на татарский язык: ` + rusText.value }],
        model: 'gpt-3.5-turbo',
    });
    tatText.value = secondCompletion.choices[0].message.content.split('.').map((s) => s.trim())
    const againCompletion = await openai.chat.completions.create({
        messages: [{ role: 'user', content: "Напиши короткий пересказ этого текста из 4 предложений: " + rusText.value }],
        model: 'gpt-3.5-turbo',
    });
    const summary = againCompletion.choices[0].message.content.split('.').map((s) => s.trim())
    const imagePerMessage = Math.floor(rusText.value.length / summary.length)
    for (const sentence in summary.slice(3)) {
        const response = await openai.images.generate({ prompt: `${sentence} Картинку выдай в сказочном стиле`, n: 1 }).asResponse();
        const body = await response.json()
        const imageURL = body.data[0].url
        rusText.value.splice(index, 0, imageURL)
        tatText.value.splice(index, 0, imageURL)
        index += imagePerMessage
    }

})
</script>
  
  
  
<style lang="scss">
.create-page {
    display: flex;
    gap: 16px;
    justify-content: center;
    padding: 48px;

    &__card {
        margin: 16px auto 0px auto;
        width: 50vw;
        border-radius: 20px;
        padding: 36px;
        box-shadow: 0px 6px 48px 0px rgba(18, 2, 2, 0.07);
    }

    &__card:first-child {
        margin: 0px 0px 0px 0px;
    }

    &__img {
        width: min(100%, 350px);
    }
}


.tr-buttons {
    display: flex;
    gap: 12px
}





.n-skeleton {
    margin: 0px 0px 15px 0px;
}
</style>