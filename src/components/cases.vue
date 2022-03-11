<template>
  <div class="cases-main-page">
    <div>
      <img v-for="el in casesArr"
           :key="el.id"
           class="cases-main-page__img-back"
           :src="el.backImg"
           alt="Видеонаблюдение готовые решения под ключ"
      >
    </div>
    <div>
      <div class="cases-main-page__nav">
        <h2 class="cases-main-page__nav-title">
          Видеонаблюдение
        </h2>
        <div class="cases-main-page__nav-wrp-btn">
          <div class="cases-main-page__nav-line"></div>
          <ul class="cases-main-page__nav-btn-list">
            <li
              v-for="cases in casesArr"
              :key="cases.id"
            >
              <h3  class="cases-main-page__nav-btn-text">
                {{cases.title}}
              </h3>
            </li>
          </ul>
        </div>
      </div>
      <div class="cases-main-page__nav-info">
        <div class="cases-main-page__nav-info-text-wrp">
          <h3 class="cases-main-page__nav-info-title">
            Системы видеонаблюдения для квартиры
          </h3>
          <p class="cases-main-page__nav-info-text">
            Системы видеонаблюдения решают множество задач, связанных с обеспечением безопасности в частном доме. Не важно, большой или маленький у Вас дом и участок земли, расположен он в городе или за городом, живете Вы там постоянно или бываете наездами, позаботьтесь о безопасности своего имущества.
          </p>
          <div class="cases-main-page__nav-info-line"></div>
          <div class="cases-main-page__nav-info-price-wrp">
            <button class="cases-main-page__nav-info-btn"><a src="#">В каталог</a></button>
            <div>
              <p class="cases-main-page__nav-info-price-from">цена от:</p>
              <p class="cases-main-page__nav-info-price">
                5994 <span class="cases-main-page__nav-info-price-val">грн</span>
              </p>
            </div>
          </div>
        </div>
        <div class="cases-main-page__nav-info-img">
          <img src="/img/flat_img_main_page.png" alt="Системы видеонаблюдения для квартиры">
        </div>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "cases",
  props: {
    data: {
      type: String,
      required: true
    }
  },
  data(){
    return {
      parsedData: {
        casesArr: []
      }
    }
  },
  methods: {
    app() {
      this.casesArr.forEach(el => {

      })
    }
  },
  mounted() {
    // console.log(this.data)
    // console.log(JSON.parse(this.data))
    this.parsedData = JSON.parse(this.data);
    console.log(this.parsedData.casesArr[1])
  }
}
</script>

<style scoped>

</style>
