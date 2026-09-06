import Vue from "vue";
import MyComponent from "./sub";

new Vue({
  el: "#app",
  template: `<div class="app">
        <h1>Hello Vue.js!</h1>
        <MyComponent ref="myChildRef"></MyComponent>
        <p>
          <button @click="onClick">Add +1</button>
        </p>
      </div>`,

  components: {
    "MyComponent": MyComponent,
  },

  methods: {
    onClick() {
        console.log("クリックされました");
        this.$refs.myChildRef.count = this.$refs.myChildRef.count + 1;
        // const myChildRef = <MyComponent>this.$refs.myChildRef;
        // myChildRef.count = myChildRef.count + 1;
    }
  }
});
