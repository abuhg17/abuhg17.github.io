const confetti = window.confetti;

const app = Vue.createApp({
  data() {
    return {
      num: Array(22).fill(0),
      myText: "草包鋒兄T恤販售未達標",
      ver: Vue.version,
      myInterval: null,
      isConfetti: true,
      animate: "animate__animated animate__zoomInUp",
      isLoading: true,
      speed: 1,
    };
  },
  mounted() {
    // 等畫面真正載入再關閉 loading
    this.$nextTick(() => {
      requestAnimationFrame(() => {
        this.isLoading = false;
        this.auto(); // 開始跑模擬
      });
    });
  },
  methods: {
    TenSpeed() {
      this.auto();
      this.auto();
      this.auto();
      this.auto();
      this.auto();
      this.auto();
      this.auto();
      this.auto();
      this.auto();
      this.auto();
      if (this.speed < 100) this.speed *= 10;
    },
    auto() {
      const myInterval = setInterval(() => {
        if (this.num.reduce((a, b) => a + b, 0) < 100000) {
          this.num[0] += Math.floor(
            Math.floor((Math.random() * 150 * 250) / 2400)
          );
          this.num[1] += Math.floor(
            Math.floor((Math.random() * 200 * 400) / 2400)
          );
          this.num[2] += Math.floor(
            Math.floor((Math.random() * 300 * 250) / 2400)
          );
          this.num[3] += Math.floor(
            Math.floor((Math.random() * 200 * 270) / 2400)
          );
          this.num[4] += Math.floor(
            Math.floor((Math.random() * 150 * 180) / 2400)
          );
          this.num[5] += Math.floor(
            Math.floor((Math.random() * 200 * 250) / 2400)
          );
          for (let i = 6; i < 22; i++) {
            this.num[i] += Math.floor(
              Math.floor((Math.random() * 75 * 980) / 2400 / 16)
            );
          }
        } else {
          this.myText = "十萬件達標";
          this.animate = "animate__animated animate__flip";
          if (this.isConfetti) {
            confetti({});
            this.isConfetti = false;
          }
          clearInterval(myInterval);
          this.myInterval = null;
        }
      }, 1000);
    },
  },
});
app.mount("#app");
