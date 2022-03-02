<template>
  <div class="advantage-main-page__nav-wrp">
    <div class="advantage-main-page__line"></div>
    <div class="advantage-main-page__nav">
      <h3
        v-for="(advantArrNav, index) of advantArrs"
        :key="advantArrNav.id"
        @click="btnNav(index)"
        :class="{activeColor: index === marginSlider}"
        class="advantage-main-page__nav-list"
      >
          <span :class="{advanAcrion: index === marginSlider}"
          ></span>
        {{ advantArrNav.title }}
      </h3>
    </div>
  </div>
  <div class="advantage-main-page__slider-img-btn-wrp">
    <button
      @click="btnLeft"
      class="advantage-main-page__slider-btn"
    >
      <img class="advantage-main-page__slider-btn-img-l" src="/icon/adven_left_icon_main_page.svg" alt="в лево"/>
    </button>
    <div class="advantage-main-page__slider-wrp">
      <div
        :style="{marginLeft: '-' + marginSlider * 100 + '%'}"
        class="advantage-main-page__slider-motion"
      >
        <div
          v-for="(advantArr) of advantArrs"
          :key="advantArr.id"
          class="advantage-main-page__img-wrp">
          <img
            :src="advantArr.img"
            alt="Готовые решения"
            class="advantage-main-page__img"
          />
          <div class="advantage-main-page__tetx">
            <p>
              {{ advantArr.text }}
            </p>
          </div>
        </div>
      </div>
    </div>
    <button
      @click="btnRight"
      class="advantage-main-page__slider-btn">
      <img
        class="advantage-main-page__slider-btn-img-r"
        src="/icon/adven_right_icon_main_page.svg"
        alt="в право"
      />
    </button>
  </div>
</template>

<script>
export default {
  name: 'SliderAdvant',
  data() {
    return {
      advantArrs: [
        {
          id: Math.round(Math.random() * (1 - 200) + 1),
          title: "Готовые решения",
          text: `Изучив и проанализировав потребности пользователей систем видеонаблюдения и контроля доступа, специалисты из команды GreenVision разработали для Вас простые  и экономически выгодные решения. Вы можете купить комплект видеонаблюдения для дома, квартиры, дачи или офиса со 100% гарантией совместимости всех сопряженных устройств.Заказывайте готовые системы видеонаблюдения и контроля доступа в Украине и экономьте до 15% от суммарной стоимости элементов, купленных по отдельности.`,
          img: "/img/integration-slider-img.png"
        },
        {
          id: Math.round(Math.random() * (1 - 200) + 1),
          title: "Интеграция",
          text: "123Изучив и проанализировав потребности пользователей систем видеонаблюдения и контроля доступа, специалисты из команды GreenVision разработали для Вас простые  и экономически выгодные решения. Вы можете купить комплект видеонаблюдения для дома, квартиры, дачи или офиса со 100% гарантией совместимости всех сопряженных устройств.Заказывайте готовые системы видеонаблюдения и контроля доступа в Украине и экономьте до 15% от суммарной стоимости элементов, купленных по отдельности.",
          img: "/img/advan_main_page_img.png/"
        },
        {
          id: Math.round(Math.random() * (1 - 200) + 1),
          title: "Цена",
          text: "123Изучив и проанализировав потребности пользователей систем видеонаблюдения и контроля доступа, специалисты из команды GreenVision разработали для Вас простые  и экономически выгодные решения. Вы можете купить комплект видеонаблюдения для дома, квартиры, дачи или офиса со 100% гарантией совместимости всех сопряженных устройств.Заказывайте готовые системы видеонаблюдения и контроля доступа в Украине и экономьте до 15% от суммарной стоимости элементов, купленных по отдельности.",
          img: "/img/price-slider-img.png/"
        },
        {
          id: Math.round(Math.random() * (1 - 200) + 1),
          title: "Гарантия",
          text: "123Изучив и проанализировав потребности пользователей систем видеонаблюдения и контроля доступа, специалисты из команды GreenVision разработали для Вас простые  и экономически выгодные решения. Вы можете купить комплект видеонаблюдения для дома, квартиры, дачи или офиса со 100% гарантией совместимости всех сопряженных устройств.Заказывайте готовые системы видеонаблюдения и контроля доступа в Украине и экономьте до 15% от суммарной стоимости элементов, купленных по отдельности.",
          img: "/img/slider-varanty-img.png/"
        }
      ],
      marginSlider: 0,
      width: 0,
      withBlockSlider: 0
    }
  },
  methods: {
    btnRight() {
      console.log('drfv')
      if (this.marginSlider < (this.advantArrs.length - 1)) {
        this.marginSlider++;
      }
    },
    btnLeft() {
      console.log('dfcv')
      if (this.marginSlider > 0) {
        this.marginSlider--;
      }
    },
    btnNav(index) {
      this.marginSlider = index;
    },
    updateWidth() {
      this.width = window.innerWidth;
    },
    withBlockSlider(){
      this.withBlockSlider = this.width - 32;
    }
  },
  mounted() {
    // this.withBlockSlider();
  }
}
</script>

<style lang="scss">
.advantage-main-page {
  @include pageGredCard;
  display: none;
  &__nav {
    padding-top: 12px;
    display: flex;
    justify-content: space-between;
    font-size: 18px;
    font-weight: 700;
    color: $colorCardGrey;
    white-space: nowrap;
    overflow-x: auto;
    cursor: pointer;
  }

  &__title {
    margin-bottom: 32px;
    font-size: 36px;
    text-align: center;
  }

  &__nav-wrp {
    max-width: 766px;
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 40px;

  }

  &__line {
    max-width: 766px;
    width: 100%;
    height: 2px;
    position: absolute;
    background-color: $colorTranparentGray;
    z-index: 2;
  }

  &__nav-list {
    padding-bottom: 10px;
    position: relative;
    transition: 0.3s ease-out;

    &:hover {
      color: $colorCard;
      transition: 0.3s ease-in;
    }

    &:hover .advanAcrion {
      opacity: 1;
      transition: 0.3s ease-in;
    }

    &:first-child {
      padding-left: 16px;
    }

    &:last-child {
      padding-right: 16px;
    }

  }

  &__nav-list + &__nav-list {
    margin-left: 15px;
  }

  &__slider-wrp {
    @include flexCentrSpaceBet;
    max-width: 885px;
    overflow: hidden;
  }

  &__slider-btn {
    width: 47px;
    height: 47px;
    display: flex;
    align-items: inherit;
    justify-content: center;
    border-radius: 50%;
    box-shadow: 0px 3px 11px rgba(0, 0, 0, 0.2);
    @include smallestScreenWidth {
      & {
        display: none;
      }
    }
  }

  &__tetx {
    max-width: 966px;
    text-align: center;
  }

  &__img-wrp {
    max-width: 966px;
    margin-bottom: 32px;
    @include flexCentr;
    flex-direction: column;
  }

  &__img {
    max-width: 966px;
  }

  &__circles {
    width: 12px;
    height: 12px;
    border: 1px solid $colorCard;
    border-radius: 50%;
    cursor: pointer;
  }

  &__circles + &__circles {
    margin-left: 10px;
  }

  &__circles-wrp {
    @include flexCentr;
  }

  &__slider-cont-wrp {
    max-width: 966px;
    overflow: hidden;
    margin: 0 auto;
  }

  &__slider-pos {
    display: flex;
  }

  &__slider-img-btn-wrp {
    @include flexCentrSpaceBet;
    @include startAdaptiveSmol {
      & {
        @include padMob;
      }
    }
    @include smallestScreenWidth {
      & {
        justify-content: center;
      }
    }
  }

  &__slider-motion {
    display: flex;
    transition: 0.3s ease-in;
  }

  &__slider-btn-img-l {
    padding-right: 3px;
  }

  &__slider-btn-img-r {
    padding-left: 3px;
  }
}

.advanAcrion {
  position: absolute;
  width: 100%;
  height: 2px;
  top: -12px;
  left: 0;
  opacity: 1;
  background-color: $colorCard;
  transition: 0.3s ease-out;
  z-index: 10;
}

.activeColor {
  color: $colorCard;
}
</style>
