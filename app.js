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
      myIndex: 0,
      images: [
        {
          img: "9ed35a46-9d95-4376-bd47-a267b49a22c0.png",
          title: "粉絲一",
          alt: "粉絲一",
        },
        {
          img: "dc4e1702-42f6-4d28-ae9c-46cf288d5c7d.png",
          title: "粉絲二",
          alt: "粉絲二",
        },
        {
          img: "d2a0cf5c-a4dd-4763-95b6-6e1110fa7281.png",
          title: "粉絲三",
          alt: "粉絲三",
        },
        {
          img: "ec6a52ef-397a-481d-a1c2-4336dabc2eb5.png",
          title: "T-Shirt",
          alt: "T-Shirt",
        },
        {
          img: "f56a77b4-342b-4624-aaee-0a1eefda1c02 (1).png",
          title: "贈品",
          alt: "贈品",
        },
        {
          img: "21c67f20-84c2-4646-bec3-b9fa233b8b0b.png",
          title: "煙火",
          alt: "煙火",
        },
        {
          img: "63cc7480-d6a0-4504-9a35-89b83d254198.png",
          title: "煙火2",
          alt: "煙火2",
        },
        {
          img: "41debbc7-e26c-402d-8d29-7fa1b06441b7.png",
          title: "紅布條",
          alt: "紅布條",
        },
      ],
    };
  },
  mounted() {
    this.isLoading = false;
    this.auto();
    this.$toast.open({
      message: "草包鋒兄T恤尚未開賣",
      type: "info",
      position: "top-left",
    });
    setInterval(() => {
      this.AddIndex();
    }, 5000);
  },
  methods: {
    GetImg(index) {
      return this.images[index].img;
    },
    GetAlt(index) {
      return this.images[index].alt;
    },
    GetTitle(index) {
      return this.images[index].title;
    },
    AddIndex() {
      if (this.myIndex < this.images.length - 1) {
        this.myIndex++;
      } else {
        this.myIndex = 0;
      }
    },
    SubstractIndex() {
      if (this.myIndex > 0) {
        this.myIndex--;
      } else {
        this.myIndex = this.images.length - 1;
      }
    },
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
app.use(window.VueToast.ToastPlugin);
app.mount("#app");
