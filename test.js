import Vue from 'vue/dist/vue';
import Hello from './Hello.vue';
import HelloSass from './HelloSass.vue';
import HelloNoStyle from './HelloNoStyle.vue';
import HelloRenderless from './HelloRenderless.vue';

var app = new Vue({
  el: '#app',
  template: `<div>
    <Hello />
    <HelloSass />
    <HelloNoStyle />
    <HelloRenderless v-slot="{ message, up, down, total }">
      <p class="hello-renderless">
        {{ message }}<br/>
        Current total is {{ total }}</br>
        <button @click="down">Down</button>
        <button @click="up">Up</button>
      </p>
    </HelloRenderless>
  </div>`,
  components: {
    Hello,
    HelloSass,
    HelloNoStyle,
    HelloRenderless
  }
});
