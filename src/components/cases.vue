<template>
  <div class="cases-main-page">
    <div>
      <img v-for="(el, index) in newCasesArr"
           :key="el.id"
           :class="{active: currenId === index}"
           class="cases-main-page__img-back"
           :src="el.backImg"
           alt="Видеонаблюдение готовые решения под ключ"
      >
    </div>

    <div class="cases-main-page__nav">
        <h2 class="cases-main-page__nav-title">
          Видеонаблюдение
        </h2>
        <div class="cases-main-page__nav-wrp-btn">
          <div class="cases-main-page__nav-line"></div>
          <ul class="cases-main-page__nav-btn-list">
            <li
              @click="navClick(index)"
              v-for="(cases, index) in newCasesArr"
              :key="cases.id"
              class="cases-main-page__nav-item"
            >
              <span
                :class="{activeNav: currenId === index}"
                class="cases-main-page__nav-line-activ"
              ></span>
              <h3
                :class="{activeBtn: currenId === index}"
                class="cases-main-page__nav-btn-text"
              >
                {{cases.title}}
              </h3>
            </li>
          </ul>
        </div>
      </div>
    <div class="cases-main-page__nav-wrp">
      <div v-for="(item, index) in newCasesArr"
           :key="item.id"
           :class="{activeImg: currenId === index}"
           class="cases-main-page__nav-info"
      >
        <div class="cases-main-page__nav-info-text-wrp">
          <h3 class="cases-main-page__nav-info-title">
            {{item.textSlider}}
          </h3>
          <p class="cases-main-page__nav-info-text">
            {{item.text}}
          </p>
          <div class="cases-main-page__nav-info-line"></div>
          <div class="cases-main-page__nav-info-price-wrp">
            <button class="cases-main-page__nav-info-btn">
              <a
                :href="item.link"
              >В каталог</a></button>
            <div>
              <p class="cases-main-page__nav-info-price-from">цена от:</p>
              <p class="cases-main-page__nav-info-price">
                {{ item.price }} <span class="cases-main-page__nav-info-price-val">грн</span>
              </p>
            </div>
          </div>
        </div>
        <div
          class="cases-main-page__nav-info-img"
        >
          <img :src="item.img" alt="Системы видеонаблюдения для квартиры">
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
      },
      newCasesArr: [],
      currenId: 0,
      currenMain: 0
    }
  },
  methods: {
    newArr() {
        this.newCasesArr = this.parsedData.casesArr;
    },
    navClick(inBtn) {
      this.currenId = inBtn;
    }
  },
  mounted() {
    this.parsedData = JSON.parse(this.data);
    this.newArr();
  }
}
</script>

<style lang="scss" scoped>
.cases-main-page {
  height: 628px;
  margin-bottom: 39px;
  position: relative;
  background-color: #656565;

  @include startAdaptiveSmol {
    @include padMob;
  }

  @include bigMobileWidth {
    margin-bottom: 24px;
  }
  &__img-back {
    height: 628px;
    @include positionImg;
    width: 0;
    transition: 0.3s ease-out;
    opacity: 0;
  }
  &__nav {
    padding-top: 44px;
    margin-bottom: 31px;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #ffffff;
    z-index: 100;
    @include bigMobileWidth {
      padding-top: 16px;
      margin-bottom: 51px;
    }
  }
  &__nav-wrp {
    max-width: 1500px;
    width: 100%;
    @include cenMarg;
    position: relative;
  }
  &__nav-title {
    margin-bottom: 16px;
    font-size: 36px;
    text-align: center;
    @include bigMobileWidth {
      margin-bottom: 24px;
      font-size: 30px;
    }
  }
  &__nav-line {
    width: 100%;
    height: 2px;
    background-color: $colorTranparentGray;
  }
  &__nav-item {
    position: relative;
    &:hover {
      color: #ffffff;
    }
  }
  &__nav-wrp-btn {
    max-width: 527px;
    width: 100%;
  }
  &__nav-btn-list {
    padding-top: 12px;
    display: flex;
    justify-content: space-between;
    color: $colorTranparentGray;
  }
  &__nav-line-activ {
    width: 0;
    height: 2px;
    top: -14px;
    display: flex;
    position: absolute;
    background-color: $colorCard;
    transition: width 0.4s ease-out;
  }
  &__nav-btn-text {
    font-size: 18px;
    cursor: pointer;
    transition: 0.3s ease-in;
  }
  &__nav-info {
    @include pageGredCard;
    display: flex;
    justify-content: space-between;
    position: absolute;
    display: none;

    @include bigMobileWidth {
      flex-direction: column;
      align-items: center;
    }
  }
  &__nav-info-text-wrp {
    max-width: 490px;
    height: 312px;
    background-color: #ffffff;
    border-radius: 8px;

    @include noytSize {
      margin-right: 16px;
    }

    @include bigMobileWidth {
      height: 222px;
      margin-right: 0;
      margin-bottom: 31px;
    }
  }
  &__nav-info-title {
    padding-top: 16px;
    padding-left: 16px;
    margin-bottom: 24px;
    font-size: 24px;
    word-break: break-word;

    @include bigMobileWidth {
      padding-top: 7px;
      padding-left: 9px;
      margin-bottom: 8px;
      font-size: $fontSizeMobTitle;
    }
  }
  &__nav-info-text {
    height: 124px;
    padding-left: 16px;
    margin-bottom: 10px;
    margin-right: 16px;
    overflow: auto;
    font-size: 16px;
    word-break: break-word;

    @include bigMobileWidth {
      height: 87px;
      padding-left: 9px;
      margin-right: 9px;
      font-size: $fontSizeMob;
    }
  }
  &__nav-info-line {
    width: 100%;
    height: 1px;
    background-color: $colorCard;
  }
  &__nav-info-price-wrp {
    padding-top: 10px;
    padding-left: 16px;
    margin-right: 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  &__nav-info-btn {
    height: 40px;
    @include  btnCardWhiteBackground;
  }
  &__nav-info-price-from {
    margin-bottom: 5px;
    font-size: 12px;
    color: $colorCardGrey;

    @include bigMobileWidth {
      margin-bottom: 0;
    }
  }
  &__nav-info-price {
    font-size: 30px;
    color: $colorCard;

    @include bigMobileWidth {
      line-height: 30px;
    }
  }
  &__nav-info-price-val {
    color: $colorCardProd;
  }
  &__nav-info-img {
    height: 459px;
    display: flex;
    align-items: flex-end;

    @include noytSize {
      align-items: center;
    }

    @include bigMobileWidth {
      height: auto;
      width: 375px;
      justify-content: center;
    }
  }
}

.active {
  width: 100%;
  opacity: 1;
}

.activeNav {
  width: 100%;
  transition: width 0.2s ease-in;
}

.activeBtn {
  color: #ffffff;
  transition: 0.1s ease-in;
}

.activeMain {
  display: block;
}

.activeImg {
  display: flex;
}
</style>
