<template>
  <div class="home-page">
    <div class="home-page__top">
      <div class="home-page__1">на русском</div>
      <div class="home-page__2">на татарском</div>
      <img class="logo" src="../assets/logo.svg" alt="">
      <div class="home-page__title">Создайте <span style="color: #AF5DEF;">собственную</span> сказку <br>по текстовому
        описанию</div>

      <div class="home-page__input">
        <BaseInput :callback="onUpdateText" />
        <BaseButton @click="this.$router.push({ path: `create/${text}/${count}` })" />
        <br />
      </div>
      <div class="slider">
        Сколько предложений?
        <NSlider :style="{ padding: '16px 0xp 0px 0px' }" v-model:value="count" :min="5" :max="25" :step="1" />
      </div>
    </div>
    <div class="home-page__bottom">
      <div class="home-page__bottom-inner">
        <div class="home-page__subtitle">Или выберите сказки, созданные другими пользователями</div>
        <div class="home-page__tails">
          <NCard title="Приключения Алисы">
            <template #cover>
              <img src="../assets/cover.jpg">
            </template>
            Маленькая Алиса аеоешпеошпеш шеопшеопшео
            <BaseButton class="btn" />
          </NCard>
          <NCard title="Приключения Алисы">
            <template #cover>
              <img src="../assets/cover.jpg">
            </template>
            Маленькая Алиса аеоешпеошпеш шеопшеопшео
            <BaseButton class="btn" />
          </NCard>
          <NCard title="Приключения Алисы">
            <template #cover>
              <img src="../assets/cover.jpg">
            </template>
            Маленькая Алиса аеоешпеошпеш шеопшеопшео
            <BaseButton class="btn" />
          </NCard>
          <NCard title="Приключения Алисы">
            <template #cover>
              <img src="../assets/cover.jpg">
            </template>
            Маленькая Алиса аеоешпеошпеш шеопшеопшео
            <BaseButton class="btn" text="Читать" />
          </NCard>
        </div>
      </div>
    </div>
    <div class="home-page__footer">

    </div>
  </div>
</template>

<script setup>
import BaseInput from "../components/global/BaseInput.vue"
import BaseButton from "../components/global/BaseButton.vue"
import BaseCard from "../components/global/BaseCard.vue"
import { NCard, NSlider } from "naive-ui"
import { ref } from "vue"

import router from "../router/index"

const text = ref("")
const count = ref(0)
const onUpdateText = (v) => {
  text.value = v
}


</script>



<style lang="scss">
.home-page {
  --left-cord: 17.5%;
  --bg-color: white;
  --content-width: 75vw;
  height: 100%;
  display: grid;
  grid-template-rows: 600px 400px;
  gap: 32px;
  background-color: var(--bg-color);

  &__1 {
    background-color: #AF5DEF;
    position: absolute;
    padding: 10px 14px;
    border-radius: 20px;
    color: white;
    font-size: 12px;
    right: 10%;
    top: 40%;
    transform: rotate(-10deg);

  }

  &__2 {
    background-color: #AF5DEF;
    position: absolute;
    padding: 10px 14px;
    border-radius: 20px;
    color: white;
    font-size: 12px;
    left: 30%;
    top: 10%;
    transform: rotate(10deg);
  }

  &__top {
    background-color: var(--bg-color);
    display: flex;
    justify-content: center;
    position: relative;
    box-shadow: 0px 6px 48px 0px rgba(18, 2, 2, 0.07);
    border-bottom-left-radius: 60px;
    border-bottom-right-radius: 60px;
    height: 100%;

  }

  &__bottom {
    background-color: var(--bg-color);
    display: flex;
    justify-content: center;
    box-shadow: 0px 6px 48px 0px rgba(18, 2, 2, 0.07);
    border-top-left-radius: 60px;
    border-top-right-radius: 60px;

  }

  &__cover {
    width: 75vw;
    height: 70vh;
    border-bottom-left-radius: 60px;
    border-bottom-right-radius: 60px;
    background-color: white;

  }

  &__title {
    position: absolute;
    left: var(--left-cord);
    top: 30%;
    font-size: 60px;
    font-weight: 600;
    max-width: 33.5ch;
  }

  &__subtitle {
    font-weight: 700;
    font-size: 24px;
  }

  &__input {
    position: absolute;
    top: 60%;
    left: var(--left-cord);
    display: flex;
    gap: 8px;
  }

  &__bottom-inner {
    background-color: white;
    border-radius: 20px;
    width: calc(var(--content-width) - 80px);
    border-radius: 60px;
    padding: 40px;
  }

  &__tails {
    margin: 20px 0px 0px 0px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(22.5%, 1fr));
    grid-template-rows: 250px;
    gap: 20px;
  }
}

.n-card .n-card-cover {
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;

}

.n-card {
  border-radius: 30px;
}

.n-card>.n-card-header {
  padding: 20px 20px 10px 20px;
}


.btn {
  margin: 10px 0px 0px 0px;
}


.logo {
  position: absolute;
  left: var(--left-cord);
  width: 150px;
  height: 100px;
}


.slider {
  position: absolute;
  left: var(--left-cord);
  top: 80%;
  width: 300px;
}


@media (max-width: 1200px) {
  .home-page {
    grid-template-rows: 500px 400px;

    &__title {
      font-size: 40px;
    }

    &__input {
      top: 50%;
    }


    .slider {
      top: 65%;
    }

    &__1 {
      top: 70%;
    }
  }

  div [class*="__input-"] {
    --n-font-size: 30px !important;

  }



}



@media (max-width: 1000px) {
  .home-page {
    grid-template-rows: 500px 400px;

    &__title {
      font-size: 25px;
    }

    &__input {
      top: 50%;
    }


    .slider {
      top: 65%;
    }

    &__1 {
      top: 70%;
    }

    &__2 {
      top: 15%;
    }
  }

  div [class*="__input-"] {
    --n-font-size: 20px !important;

  }

  div [class*="__button-"] {
    --n-padding: 20px 20px;

  }




}


@media (max-width: 525px) {
  .home-page {
    --left-cord: 10%;

    &__title {
      font-size: 20px;
    }

    div [class*="__input-"] {
      --n-font-size: 15px !important;
  
    }

    .slider {
      font-size: 12px;
    }

    
    &__1 {
      top: 80%;
    }
  }



}
</style>