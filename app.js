const app = Vue.createApp({
  data() {
    return {
      num: 0,
      myText: "草包鋒兄T恤販售未達標",
      ver: Vue.version,
    };
  },
  methods: {
    auto() {
      setInterval(() => {
        if (this.num < 100000) {
          this.num++;
        } else {
          this.myText = "十萬件達標";
        }
      }, 1000);
    },
  },
});
app.mount("#app");
