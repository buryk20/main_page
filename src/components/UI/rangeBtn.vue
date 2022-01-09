<template>
  <div>
    <button @click="show">
      <slot></slot>
    </button>
    <div :class="{ activeRange: active }" class="range-main-page__style-text">
      <slot name="kam"></slot>
    </div>
  </div>
</template>

<script>
// import rangeCont from './rangeCont.vue'
export default {
//   components: { rangeCont },
  name: 'range-btn',
  data () {
    return {
      active: false
    }
  },
  methods: {
    show () {
      if (this.active) {
        this.active = false
      } else {
        this.active = true
      }
    }
  }
}
</script>

<style>
</style>
