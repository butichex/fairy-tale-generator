<template>
    <NConfigProvider :theme-overrides="buttonTO">
        <NButton color="black" size="medium" type="primary">
            Создать
        </NButton>
    </NConfigProvider>
</template>

<script setup>
import { NButton, NConfigProvider } from "naive-ui"


const buttonTO = {
    Button: {
        borderRadiusMedium: "12px",
        paddingMedium: "30px 40px"
    }
}
</script>