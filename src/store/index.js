import { createStore } from "vuex";
import coachesModule from "./modules/coaches/index.js";

const store = createStore({
  state() {},
  modules: {
    coaches: coachesModule,
  },
});

export default store;
