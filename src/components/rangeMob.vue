<template>
  <div class="range-mob">
    <div class="range-mob__slid-wrp">
      <div v-for="(el, index) in rangeData" :key="el.id">
        <a
          :href="el.link"
        >
          <img
            :src="el.img" alt=""
            class="range-mob__img"
          >
        </a>
      </div>
      <div
        v-for="(elem, index) in rangeData"
        :key="elem.id"
        class="range-mob__slid-wrp-link"
      >
        <div>
          <span class="range-mob__circles-nav"></span>
        </div>
        <h3 class="range-mob__title">{{ elem.title }}</h3>
        <p class="range-mob__text">{{ elem.text }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'rangeMob',
  props: {
    rangeData: {
      type: Object
    }
  }
}
</script>

<style lang="scss" scoped>
.range-mob {
  display: none;
  @include mobileWidth {
    display: flex;
  }

  &__slid-wrp {
    display: flex;
    overflow: hidden;
  }

  &__slid-wrp-link {
    max-width: 648px;
  }

  &__img {
    max-width: 648px;
    width: 100%;
    border-radius: 8px;
    object-fit: cover;
  }

  &__title {
    max-width: 282px;
    padding-top: 10px;
    margin-bottom: 24px;
    @include cenMarg;
    font-size: 24px;
    font-weight: 500;
  }

  &__text {
    max-width: 355px;
    @include cenMarg;
  }

  &__circles-nav {
    width: 7px;
    height: 7px;
    display: flex;
    border-radius: 50%;
    border: 1px solid $colorCard;
  }
}
</style>
