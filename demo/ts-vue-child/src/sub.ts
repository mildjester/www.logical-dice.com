import Vue from "vue";
import Component from "vue-class-component";

@Component({
  template: ` <div>
    <p>{{ count }}</p>
  </div>`,
})

export default class MyComponent extends Vue {
  count: number = 0;
}
