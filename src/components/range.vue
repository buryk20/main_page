<template>
  <div class="range-main-page">
    <h2 class="range-main-page__title-text">GreenVision – это:</h2>
    <div class="range-main-page__wrp-cont">
      <div class="range-main-page__img-wrp">
        <img src="/img/range_main_page_img.png" alt="GreenVision – это" />
      </div>
      <div class="range-main-page__wrp-text">
        <div class="range-main-page__line"></div>
        <div class="range-main-page__text-cont">
          <range-btn>
            <div class="range-main-page__title-text-wrp">
              <span class="range-main-page__num">01</span>
              <h3 class="range-main-page__style-text-title">Видеокамеры</h3>
            </div>
            <template v-slot:kam>
              <div>
                <p>
                  ведут круглосуточный контроль происходящего на объекте.
                  Стабильно передают изображение хорошего качества при
                  естественном или искусственном освещении, а также в условиях
                  плохой видимости.
                </p>
                <button class="range-main-page__btn">
                  <a href="https://greenvision.ua/production/Kamery"
                    >В каталог</a
                  >
                </button>
                <div class="range-main-page__line-grey"></div>
              </div>
            </template>
          </range-btn>
        </div>
        <div class="range-main-page__text-cont">
          <range-btn>
            <div class="range-main-page__title-text-wrp">
              <span class="range-main-page__num">02</span>
              <h3 class="range-main-page__style-text-title">
                Видеодомофоны и вызывные панели
              </h3>
            </div>
            <template v-slot:kam>
              <div>
                <p>
                  ведут круглосуточный контроль происходящего на объекте.
                  Стабильно передают изображение хорошего качества при
                  естественном или искусственном освещении, а также в условиях
                  плохой видимости.
                </p>
                <button class="range-main-page__btn">
                  <a href="https://greenvision.ua/production/SKUD/Domofony"
                    >В каталог</a
                  >
                </button>
                <div class="range-main-page__line-grey"></div>
              </div>
            </template>
          </range-btn>
        </div>
        <div class="range-main-page__text-cont">
          <range-btn>
            <div class="range-main-page__title-text-wrp">
              <span class="range-main-page__num">03</span>
              <h3 class="range-main-page__style-text-title">
                Электромагнитные и электромеханические замки
              </h3>
            </div>
            <template v-slot:kam>
              <div>
                <p>
                  ведут круглосуточный контроль происходящего на объекте.
                  Стабильно передают изображение хорошего качества при
                  естественном или искусственном освещении, а также в условиях
                  плохой видимости.
                </p>
                <button class="range-main-page__btn">
                  <a
                    href="https://greenvision.ua/production/SKUD/Zamki-i-knopki"
                    >В каталог</a
                  >
                </button>
                <div class="range-main-page__line-grey"></div>
              </div>
            </template>
          </range-btn>
        </div>
        <div class="range-main-page__text-cont">
          <range-btn>
            <div class="range-main-page__title-text-wrp">
              <span class="range-main-page__num">04</span>
              <h3 class="range-main-page__style-text-title">
                Бесконтактные ключи и кнопки выхода
              </h3>
            </div>
            <template v-slot:kam>
              <div>
                <p>
                  ведут круглосуточный контроль происходящего на объекте.
                  Стабильно передают изображение хорошего качества при
                  естественном или искусственном освещении, а также в условиях
                  плохой видимости.
                </p>
                <button class="range-main-page__btn">
                  <a href="#">В каталог</a>
                </button>
                <div class="range-main-page__line-grey"></div>
              </div>
            </template>
          </range-btn>
        </div>
        <div class="range-main-page__text-cont">
          <range-btn>
            <div class="range-main-page__title-text-wrp">
              <span class="range-main-page__num">05</span>
              <h3 class="range-main-page__style-text-title">
                Источники бесперебойного питания
              </h3>
            </div>
            <template v-slot:kam>
              <div>
                <p>
                  ведут круглосуточный контроль происходящего на объекте.
                  Стабильно передают изображение хорошего качества при
                  естественном или искусственном освещении, а также в условиях
                  плохой видимости.
                </p>
                <button class="range-main-page__btn">
                  <a
                    href="https://greenvision.ua/production/Istochniki-pitaniya"
                    >В каталог</a
                  >
                </button>
                <div class="range-main-page__line-grey"></div>
              </div>
            </template>
          </range-btn>
        </div>
        <div class="range-main-page__text-cont">
          <range-btn>
            <div class="range-main-page__title-text-wrp">
              <span class="range-main-page__num">06</span>
              <h3 class="range-main-page__style-text-title">
                Материалы для подключения и монтажа
              </h3>
            </div>
            <template v-slot:kam>
              <div>
                <p>
                  ведут круглосуточный контроль происходящего на объекте.
                  Стабильно передают изображение хорошего качества при
                  естественном или искусственном освещении, а также в условиях
                  плохой видимости.
                </p>
                <button class="range-main-page__btn">
                  <a href="https://greenvision.ua/production/Aksessuary"
                    >В каталог</a
                  >
                </button>
                <div class="range-main-page__line-grey"></div>
              </div>
            </template>
          </range-btn>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import rangeBtn from './UI/rangeBtn.vue'
// import RangeCont from './UI/rangeCont.vue'
export default {
  components: { rangeBtn },
  name: 'my-range',
  data () {
    return {
      isActive: false
    }
  }
}
</script>

<style lang="scss" src="../assets/scss/main_page.scss" scoped>
</style>
