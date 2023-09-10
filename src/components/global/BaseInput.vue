<template>
    <NConfigProvider :theme-overrides="inputTO">
        <NInput :on-update:value="props.callback" type="text" placeholder="Введите описание сказки" size="large"
            :style="{ width: '60vw' }">
        </NInput>
    </NConfigProvider>
</template>
  
<script setup>
import { NInput, NConfigProvider, NInputGroup, NButton, NIcon } from "naive-ui"
import { BsChatLeftTextFill as MessageIcon } from "@kalimahapps/vue-icons";
import { ref, defineEmits } from "vue"

const props = defineProps({
    callback: Function,
})
const inputTO = {
    Input: {
        borderRadius: "8px",
        border: "0px",
        borderFocus: "0px",
        borderHover: "0px",
        fontSizeLarge: "50px",
        paddingLarge: "0px",
        caretColor: "transparent"
    }
}


</script>
  
  
  
<style lang="scss"></style>