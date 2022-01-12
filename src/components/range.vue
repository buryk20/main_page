<template>
  <div class="range-main-page">
    <h2 class="range-main-page__title-text">GreenVision – это:</h2>
    <div class="range-main-page__wrp-cont">
      <div class="range-main-page__img-wrp">
        <img
          v-for="(elem, index) in rangeData"
          :key="elem.id"
          :class="{ activeRangeImg: index === currentId || replayCheck === index}"
          class="range-main-page__img-opasi"
          :src="elem.img" alt="GreenVision – это" />
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
              <p>
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
  components: { rangeBtn },
  name: "my-range",
  data() {
    return {
      currentId: 0,
      isActive: false,
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
          img: "https://klike.net/uploads/posts/2019-05/1556708032_1.jpg"
        },
        {
          id: "03",
          title: "Электромагнитные и электромеханические замки",
          text: "ведут круглосуточный контроль происходящего на объекте. Стабильно передают изображение хорошего качества при естественном или искусственном освещении, а также в условиях плохой видимости.",
          link: "https://greenvision.ua/production/SKUD/Zamki-i-knopki",
          img: "/img/range_main_page_img.png"
        },
        {
          id: "04",
          title: "Бесконтактные ключи и кнопки выхода",
          text: "ведут круглосуточный контроль происходящего на объекте. Стабильно передают изображение хорошего качества при естественном или искусственном освещении, а также в условиях плохой видимости.",
          link: "https://greenvision.ua/production/SKUD/Zamki-i-knopki",
          img: "/img/range_main_page_img.png"
        },
        {
          id: "05",
          title: "Источники бесперебойного питания",
          text: "ведут круглосуточный контроль происходящего на объекте. Стабильно передают изображение хорошего качества при естественном или искусственном освещении, а также в условиях плохой видимости.",
          link: "https://greenvision.ua/production/Istochniki-pitaniya",
          img: "/img/range_main_page_img.png"
        },
        {
          id: "06",
          title: "Материалы для подключения и монтажа",
          text: "ведут круглосуточный контроль происходящего на объекте. Стабильно передают изображение хорошего качества при естественном или искусственном освещении, а также в условиях плохой видимости.",
          link: "https://greenvision.ua/production/Aksessuary",
          img: "/img/range_main_page_img.png"
        },
      ],
      replayCheck: Number.NEGATIVE_INFINITY
    };
  },
  methods: {
    click(btnId) {
      console.log(btnId);
      if (this.currentId === btnId) {
        this.currentId = Number.NEGATIVE_INFINITY;
        this.replayCheck = btnId;
      } else {
        this.currentId = btnId;
        this.replayCheck = Number.NEGATIVE_INFINITY;
      }
    },
  },
};
</script>

<style lang="scss" src="../assets/scss/main_page.scss" scoped></style>
