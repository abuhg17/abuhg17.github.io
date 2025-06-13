const confetti = window.confetti;
const app = Vue.createApp({
  data() {
    return {
      num: Array(22).fill(0),
      myText: "草包鋒兄T恤販售未達標",
      ver: Vue.version,
      isConfetti: true,
      animate: "animate__animated animate__zoomInUp",
      isLoading: true,
      speed: 1,
      myInterval: null,
    };
  },
  mounted() {
    this.$nextTick(() => {
      requestAnimationFrame(() => {
        this.isLoading = false;
        this.auto();
        this.$toast.open({
          message: "草包鋒兄T恤尚未開賣",
          type: "info",
          position: "top-left",
        });
      });
    });
  },
  methods: {
    TenSpeed() {
      // 用 clearInterval 防止重複建立多個 interval
      if (this.myInterval) clearInterval(this.myInterval);

      // 加速邏輯
      this.speed = Math.min(this.speed * 10, 100);

      this.auto();
    },
    auto() {
      if (this.myInterval) return; // 避免重複 setInterval

      this.myInterval = setInterval(() => {
        const total = this.num.reduce((a, b) => a + b, 0);
        if (total < 100000) {
          this.num[0] += Math.floor((Math.random() * 150 * 250) / 2400);
          this.num[1] += Math.floor((Math.random() * 200 * 400) / 2400);
          this.num[2] += Math.floor((Math.random() * 300 * 250) / 2400);
          this.num[3] += Math.floor((Math.random() * 200 * 270) / 2400);
          this.num[4] += Math.floor((Math.random() * 150 * 180) / 2400);
          this.num[5] += Math.floor((Math.random() * 200 * 250) / 2400);
          for (let i = 6; i < 22; i++) {
            this.num[i] += Math.floor((Math.random() * 75 * 980) / 2400 / 16);
          }
        } else {
          this.myText = "十萬件達標";
          this.animate = "animate__animated animate__flip";
          if (this.isConfetti) {
            confetti();
            this.isConfetti = false;
          }
          clearInterval(this.myInterval);
          this.myInterval = null;
        }
      }, 1000 / this.speed);
    },
  },
});

app.use(window.VueToast.ToastPlugin);
app.mount("#app");
