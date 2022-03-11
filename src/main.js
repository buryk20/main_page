import { createApp } from 'vue'
import App from './App.vue'
import range from './components/range.vue'
import sliderAdvent from './components/sliderAdvant.vue'
import myCases from './components/cases.vue'

createApp(App).mount('#app')
createApp(range).mount('#range')
// createApp(sliderAdvent).mount('#sliderAdvent')
// createApp(myCases).mount('#cases')

// import axios from 'axios';
// import VueAxios from "vue-axios";

// import {createApp} from 'vue'
import {createApp as createAppInline} from 'vue/dist/vue.esm-bundler';
// import cases from "@/components/cases";
// import App from './BrandMarkup.vue'
// import components from '@/components/UI'

// const app = createAppInline({}).use(store).use(VueAxios, axios);

const appSliderAdvent = createAppInline({})
const appCases = createAppInline({})
// components.forEach(component => {
//   app.component(component.name, component)
// });

appCases.component('my-cases', myCases)

appSliderAdvent.component('slider-advent', sliderAdvent)

appSliderAdvent.mount('#sliderAdvent')

appCases.mount('#cases')
