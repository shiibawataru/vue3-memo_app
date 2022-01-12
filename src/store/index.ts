import { createStore } from "vuex";
import createPersistedState from "vuex-persistedstate";

export default createStore({
  state: () => {
    return {
      //TypeScriptでは型指定しないと下の.unshiftでエラーが出るため
      memo: [] as unknown[],
      page: 0,
    };
  },
  mutations: {
    insert: (state, obj) => {
      const d = new Date();
      const fmt =
        d.getFullYear() +
        "-" +
        (d.getMonth() + 1) +
        "-" +
        d.getDate() +
        " " +
        d.getHours() +
        ":" +
        d.getMinutes();
      //console消す
      console.log(obj.title);
      console.log(obj.content);
      console.log(fmt);
      state.memo.unshift({
        title: obj.title,
        content: obj.content,
        created: fmt,
      });
    },
    set_page: (state, p) => {
      state.page = p;
    },
    remove: (state, obj) => {
      for (let i = 0; i < state.memo.length; i++) {
        const ob = state.memo[i];
        //ob.エラー
        if (
          ob.title == obj.title &&
          ob.content == obj.content &&
          ob.created == obj.created
        ) {
          alert("remove it! --" + obj.title);
          state.memo.splice(i, 1);
          return;
        }
      }
    },
  },
  plugins: [createPersistedState()],
  actions: {},
  modules: {},
});
