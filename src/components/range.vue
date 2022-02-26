<template>
  <div class="range-main-page">
    <h2 class="range-main-page__title-text">Green Vision</h2>
    <div class="range-main-page__wrp-cont">
      <div class="range-main-page__wrp-img-mob">
        <a
          v-for="(elem, index) in rangeData"
          :key="elem.id"
          :class="{ activeRangeImg: index === currentId || replayCheck === index}"
          :href="elem.link"
          class="range-main-page__img-opasi"
        >
<!--          <div class="range-main-page__img-wrp">-->
            <img
              @touchstart="touchStart($event)"
              class="range-main-page__img"
              :src="elem.img" alt="GreenVision – это"/>
<!--          </div>-->
        </a>
      </div>
      <div class="range-main-page__wrp-text">
        <div class="range-main-page__line"></div>
        <div
          class="range-main-page__text-cont"
          v-for="(el, index) in rangeData"
          :key="el.id"
          @click="click(index)"
        >
          <div>
            <div class="range-main-page__title-text-wrp">
              <span class="range-main-page__num">{{ el.id }}</span>
              <h3 class="range-main-page__style-text-title">
                {{ el.title }}
              </h3>
            </div>
            <div
              :class="{ activeRange: index === currentId }"
              class="range-main-page__style-text"
            >
              <p class="range-main-page__style-text-mob">
                {{ el.text }}
              </p>
              <button class="range-main-page__btn">
                <a :href="el.link">В каталог</a>
              </button>
              <div class="range-main-page__line-grey"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import rangeBtn from "./UI/rangeBtn.vue";

export default {
  components: { rangeBtn},
  name: "my-range",
  data() {
    return {
      currentId: 0,
      isActive: false,
      width: 0,
      rangeData: [
        {
          id: "01",
          title: "Видеокамеры",
          text: "ведут круглосуточный контроль происходящего на объекте. Стабильно передают изображение хорошего качества при естественном или искусственном освещении, а также в условиях плохой видимости.",
          link: "https://greenvision.ua/production/Kamery",
          img: "/img/range_main_page_img.png"
        },
        {
          id: "02",
          title: "Видеодомофоны и вызывные панели",
          text: "ведут круглосуточный контроль происходящего на объекте. Стабильно передают изображение хорошего качества при естественном или искусственном освещении, а также в условиях плохой видимости.",
          link: "https://greenvision.ua/production/SKUD/Domofony",
          img: "/img/gv-slider-intercom.png"
        },
        {
          id: "03",
          title: "Комплекты видеонаблюдения",
          text: "ведут круглосуточный контроль происходящего на объекте. Стабильно передают изображение хорошего качества при естественном или искусственном освещении, а также в условиях плохой видимости.",
          link: "https://greenvision.ua/production/SKUD/Zamki-i-knopki",
          img: "/img/gv-slider-kit-img.png"
        },
        {
          id: "04",
          title: "Бесконтактные ключи и кнопки выхода",
          text: "ведут круглосуточный контроль происходящего на объекте. Стабильно передают изображение хорошего качества при естественном или искусственном освещении, а также в условиях плохой видимости.",
          link: "https://greenvision.ua/production/SKUD/Zamki-i-knopki",
          img: "/img/gv-slider-keys-img.png"
        },
        {
          id: "05",
          title: "Источники бесперебойного питания",
          text: "ведут круглосуточный контроль происходящего на объекте. Стабильно передают изображение хорошего качества при естественном или искусственном освещении, а также в условиях плохой видимости.",
          link: "https://greenvision.ua/production/Istochniki-pitaniya",
          img: "/img/gv-slider-ups-img.png"
        },
        {
          id: "06",
          title: "Акссесуары для подключения и монтажа",
          text: "ведут круглосуточный контроль происходящего на объекте. Стабильно передают изображение хорошего качества при естественном или искусственном освещении, а также в условиях плохой видимости.",
          link: "https://greenvision.ua/production/Aksessuary",
          img: "/img/gv-slider-accessoty-img.png"
        },
      ],
      replayCheck: Number.NEGATIVE_INFINITY,
      showActiveItem: {},
      startX: 0,
    };
  },
  methods: {
    click(btnId) {
      this.updateWidth();
      if(this.width >= 680){
        if (this.currentId === btnId) {
          this.currentId = Number.NEGATIVE_INFINITY;
          this.replayCheck = btnId;
        } else {
          this.currentId = btnId;
          this.replayCheck = Number.NEGATIVE_INFINITY;
        }
      }
    },
    updateWidth() {
      this.width = window.innerWidth;
    },
    touchStart(e){
      if(this.width < 680) {
        console.log(e.touches[0].clientX)
      }

    },
    startMove(currX) {

    }
  },
};
</script>

<style lang="scss" scoped>
.range-main-page {
  text-align: center;
  @include pageGredCard;
  @include startAdaptive {
    & {
      @include padMob;
    }
  }

  &__title-text {
    margin-bottom: 46px;
    font-size: 36px;
    font-weight: 700;
  }

  &__wrp-cont {
    min-height: 423px;
    display: flex;
    @include noytSize {
      & {
        margin-bottom: 40px;
        flex-direction: column;
        align-items: center;
      }
      @include mobileWidth {
        & {
        }
      }
    }

  }

  &__num {
    margin-right: 25px;
    color: $colorCardGrey;
    font-size: 18px;
    @include  mobileWidth {
      & {
        display: none;
      }
    }
  }

  &__line {
    width: 100%;
    height: 2px;
    background-color: $colorCard;
    @include noytSize {
      & {
        display: none;
      }
    }
  }

  &__wrp-text {
    max-width: 586px;
  }

  &__img-wrp {
  }

  &__text-cont {
    padding-top: 10px;
    text-align: left;
  }

  &__style-text {
    height: 0;
    margin-top: 10px;
    padding-left: 46px;
    font-size: 16px;
    line-height: 19px;
    opacity: 0;
    transition: 0.3s ease-out;
    z-index: 2;
    @include mobileWidth {
    & {
      padding-left: 0;
      text-align: center;
    }
  }
  }

  &__style-text-title {
    font-size: 24px;
    font-weight: 600;
    color: $colorCardProd;
    text-align: left;
    cursor: pointer;
    z-index: 10;
    @include mobileWidth {
      & {
        @include cenMarg;
      }
    }
  }
  &__style-text-mob {
    @include mobileWidth {
      & {
        text-align: center;
      }
    }
  }

  &__btn {
    margin-bottom: 10px;
    padding-top: 10px;
    color: $colorCard;
    font-size: 16px;
    text-decoration: underline;

    &:hover {
      color: $colorHov;
    }
  }

  &__line-grey {
    width: 100%;
    height: 1px;
    background-color: $colorTranparentGray;
    @include mobileWidth {
      & {
        display: none;
      }
    }
  }

  &__title-text-wrp {
    display: flex;
    align-items: center;
  }

  &__img-opasi {
    display: none;
    margin-right: 44px;
    @include noytSize {
      & {
        margin-bottom: 20px;
        margin-right: 0;
      }
    }
    @include mobileWidth {
      & {
        display: flex;
      }
    }
  }

  &__img {
    @include  mobileWidth {
      & {
        max-width: 648px;
        object-fit: cover;
      }
    }
  }

  &__wrp-img-mob {
    @include mobileWidth {
      & {
        max-width: 100%;
        display: flex;
        overflow: hidden;
      }
    }
  }
}

.activeRangeImg {
  max-width: 654px;
  display: flex;
}

.activeRange {
  opacity: 1;
  height: 94px;
  transition: 0.3s ease-in-out;
  z-index: 1;
}

</style>
