<template>
  <div class="range-main-page" ref="slider">
    <h2 class="range-main-page__title-text">Green Vision это:</h2>
    <div class="range-main-page__wrp-cont">
      <div
        :style="{marginLeft: '-' + counter*100 + '%', marginRight: '-' + counterMob + 'px'}"
        class="range-main-page__wrp-img-mob"
        ref="list"
      >
        <a
          v-for="(elem, index) in rangeData"
          :key="elem.id"
          :class="{ activeRangeImg: index === currentId || replayCheck === index }"
          :href="elem.link"
          class="range-main-page__img-opasi"
        >
          <img
            @touchstart="touchStart($event, index)"
            @touchend="touchEnd($event)"
            class="range-main-page__img"
            :src="elem.img" alt="GreenVision – это"/>
        </a>
      </div>
      <div class="range-main-page__circle-wrp">
        <span
          v-for="(circle, index) in rangeData"
          :key="circle.id"
          :class="{ activeCircle: index === counter }"
          class="range-main-page__circle"
        >
        </span>
      </div>
      <div class="range-main-page__wrp-text">
        <div class="range-main-page__line"></div>
        <div
          class="range-main-page__text-cont"
          v-for="(el, index) in rangeData"
          :key="el.id"
          @click="click(index)"
        >
          <div
            :class="{ activeRange: index === counter, activeRangeMom: index === counter }"
            class="range-main-page__pos-mob"
          >
            <div class="range-main-page__title-text-wrp">
              <span class="range-main-page__num">{{ el.id }}</span>
              <h3 class="range-main-page__style-text-title">
                {{ el.title }}
              </h3>
            </div>
            <div
              :class="{ activeRange: index === currentId, activeRangeMom: index === counter}"
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
  components: {rangeBtn},
  name: "my-range",
  props: {
    dataRange: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      currentId: 0,
      parsedData: [],
      isActive: false,
      width: 0,
      replayCheck: Number.NEGATIVE_INFINITY,
      showActiveItem: {
        startX: 0,
        currentX: 0
      },
      startX: 0,
      endX: 0,
      itemWidth: 0,
      currentX: 0,
      isWatchMove: false,
      intervalHandler: null,
      isRightClick: false,
      counter: 0,
      counterMob: 0,
      rangeData: []
    };
  },
  computed: {
    isMobile() {
      return this.width <= parseFloat(getComputedStyle(window.document.documentElement).getPropertyValue('--mobile-width'));
    }
  },
  methods: {
    click(btnId) {
      this.updateWidth();
      if (!this.isMobile) {
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
    touchStart(e, ind) {
      if (this.isMobile) {
        this.startMove(e.touches[0].clientX);
        window.addEventListener('touchmove', this.touchMove);
        this.endMove(e);
      }
    },
    startMove(currX) {
      this.resetInterval();
      this.showActiveItem.startX = currX;
      this.showActiveItem.currentX = currX;
    },
    move(currX) {
      this.showActiveItem.currentX = currX;
    },
    endMove(touchend, ) {
      const clientWay = this.showActiveItem.currentX - this.showActiveItem.startX;

      if (Math.abs(clientWay) < 10) {
        this.showActiveItem.currentX = this.showActiveItem.startX
        return
      }
      if (Math.sign(clientWay) < 0) {
        this.isRightClick = true;
      } else if (Math.sign(clientWay) > 0) {
        this.isRightClick = false;
      }
      console.log(touchend)
      if (this.isRightClick && this.counter < (this.rangeData.length - 1)) {
        this.counter += 1;
        console.log(this.counter)
      } else if (!this.isRightClick && this.counter > 0) {
          this.counter -= 1;
        }
    },
    mobileVersionCheck() {
      if (!this.isMobile) {
        this.counter = -1;
      } else {
        this.counter = 0;
      }
    },
    touchMove(e) {
      this.move(e.touches[0].clientX);
    },
    touchEnd(e) {
      this.endMove(e);
      window.removeEventListener('touchmove', this.touchMove);
    },
    setMyInterval() {
      this.intervalHandler = setInterval(() => {
      }, 8000)
    },
    resetInterval() {
      clearInterval(this.intervalHandler);
      this.setMyInterval();
    },
    onResize() {
      this.width = window.innerWidth;
      this.mobileVersionCheck();
        this.itemWidth = this.$refs.list.getBoundingClientRect().width;
        this.$refs.slider.style.setProperty('--slider-item-with', this.itemWidth + 'px');
    },
    newArr() {
      this.rangeData = this.parsedData.rangeData
    }
  },
  mounted() {
    this.onResize();
    window.addEventListener('resize', this.onResize);
    this.mobileVersionCheck();

    this.parsedData = JSON.parse(this.dataRange);
    this.newArr();
  },
  unmounted() {
    window.removeEventListener('resize', this.onResize);
  }
};
</script>

<style lang="scss" scoped>
.range-main-page {
  --slider-item-with: 500px;

  text-align: left;
  @include pageGredCard;
  @include startAdaptive {
    @include padMob;
  }

  &__title-text {
    margin-bottom: 46px;
    @include textTitleMainPage;

    @include mobileWidth {
      margin-bottom: 24px;
      font-size: 30px;
    }
  }

  &__wrp-cont {
    min-height: 423px;
    margin-bottom: 60px;
    display: flex;

    @include noytSize {
      margin-bottom: 40px;
      flex-direction: column;
      align-items: center;
    }

    @include mobileWidth {
      min-height: 558px;
      margin-bottom: 24px;
      align-items: inherit;
      overflow: hidden;
    }

    @include mobileSliderRange {
      min-height: 538px;
    }

    @include mobSliderMainPage {
      min-height: 518px;
    }

    @include mobileHeight {
      min-height: 478px;
    }

    @include snakeSolor {
      min-height: 460px;
    }

    @include mobX {
      min-height: 438px;
    }

  }

  &__num {
    margin-right: 25px;
    color: $colorCardGrey;
    font-size: 18px;
    @include mobileWidth {
      display: none;
    }
  }

  &__line {
    width: 100%;
    height: 2px;
    background-color: $colorCard;
    @include noytSize {
      display: none;
    }
  }

  &__wrp-text {
    max-width: 586px;
    position: relative;
    @include mobileWidth {
      @include cenMarg;
    }
  }

  &__pos-mob {
    @include mobileWidth {
      height: 0;
      position: absolute;
      opacity: 0;
    }
  }

  &__text-cont {
    padding-top: 10px;
    text-align: left;
    @include mobileWidth {
      & {
        padding-top: 0;
      }
    }
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
      @include cenMarg;
      text-align: center;
    }
  }

  &__style-text-mob {
    height: 56px;
    overflow: hidden;
    word-wrap: break-word;
    @include mobileWidth {
      text-align: center;
      height: auto;
      @include fontSizeMob;
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

    @include mobileWidth {
      margin-bottom: 0;
    }
  }

  &__line-grey {
    width: 100%;
    height: 1px;
    background-color: $colorTranparentGray;
    @include mobileWidth {
      display: none;
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
      margin-bottom: 20px;
      margin-right: 0;
    }

    @include mobileWidth {
      min-width: var(--slider-item-with);
      max-width: var(--slider-item-with);
      display: flex;
    }
  }

  &__img {
    border-radius: 8px;
    @include mobileWidth {
      width: 100%;
      object-fit: cover;
    }
  }

  &__wrp-img-mob {
    transition: 0.5s ease-in-out;
    @include mobileWidth {
      display: flex;
    }
  }

  &__circle-wrp {
    display: none;
    @include mobileWidth {
      margin-bottom: 10px;
      display: flex;
      justify-content: center;
    }
  }

  &__circle {
    width: 7px;
    height: 7px;
    display: flex;
    border: 1px solid $colorCard;
    border-radius: 50%;
  }

  &__circle + &__circle {
    margin-left: 5px;
  }
}

.activeRangeImg {
  max-width: 654px;
  display: flex;
}

.activeRange {
  opacity: 1;
  position: relative;
  height: 93px;
  transition: height 0.2s ease-in-out;
  z-index: 1;
}

.activeRangeMom {
  @include mobileWidth {
    opacity: 1;
    position: relative;
    //height: 125px;
    transition: height 0.2s ease-in-out;
    z-index: 1;
  }

  @include mobSliderMainPage {
    //height: 146px;
  }

  @include snakeSolor {
    //height: 190px;
  }
}

.activeCircle {
  background-color: $colorCard;
}


</style>
