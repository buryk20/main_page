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
    <div class="advantage-main-page__slider-wrp"
         ref="list"
    >
      <div
        :style="{marginLeft: '-' + marginSlider * 100 + '%'}"
        class="advantage-main-page__slider-motion"
      >
        <div
          v-for="(advantArr) of advantArrs"
          :key="advantArr.id"

          class="advantage-main-page__img-text-wrp"
        >
          <div
            class="advantage-main-page__img-wrp"
          >
            <img
              :src="advantArr.img"
              alt="Готовые решения"
              class="advantage-main-page__img"
            />
          </div>
          <div class="advantage-main-page__text">
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
  props:{
    dataJson:{
      type: String,
      required: true
    }
  },
  data() {
    return {
      parsedData: {},
      marginSlider: 0,
      width: 0,
      withBlockSlider: 0,
      itemWidth: 0,
      advantArrs: []
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
    onResize() {
      this.width = window.innerWidth;
      this.itemWidth = this.$refs.list.getBoundingClientRect().width;
      this.$refs.list.style.setProperty('--slider-item-width', this.itemWidth + 'px');
    },
    newArr() {
      this.advantArrs =  this.parsedData.advantArrs;
    }
  },
  mounted() {
    this.onResize();
    window.addEventListener('resize', this.onResize);
    this.parsedData = JSON.parse(this.dataJson);
    this.newArr();
  }
}
</script>

<style lang="scss">
.advantage-main-page {
  @include pageGredCard;

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
    @include textTitleMainPage;

    @include mobileWidth {
      margin-bottom: 24px;
      font-size: 30px;
    }
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
    --slider-item-width: 885px;
    width: 100%;
    @include flexCentrSpaceBet;
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

  &__text {
    max-width: 966px;
    text-align: center;
    word-break: break-word;

    @include mobileWidth {
      @include fontSizeMob;
    }
  }

  &__img-text-wrp {
    margin-bottom: 32px;
    @include flexCentr;
    flex-direction: column;
  }

  &__img-wrp {
    max-width: var(--slider-item-width);
    min-width: var(--slider-item-width);
    margin-bottom: 50px;
    display: flex;
    justify-content: center;

    @include mobileWidth {
      margin-bottom: 30px;
    }
  }

  &__img {
    @include mobileWidth {
      width: 100%;
      display: flex;
      object-fit: cover;
    }

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
