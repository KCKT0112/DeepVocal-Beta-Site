<template>
  <div class="Home">
    <div class='h-title t-anime'>BE YOUR VOICE</div>
    <div class='h-title-sub'><img
        width='auto'
        height="60%"
        src='../assets/wnfs@1x.svg'
      ></div>

    <!--Download Bottom-->
    <div class='p-box'>
      <div
        @click="Downloading"
        class='dl-bottom'
      >{{ $t("home_dl_bnt") }}</div>
    </div>

    <div class='f-box'>
      <img
        width='auto'
        height="64px"
        src='../assets/b-l@1x.svg'
      >
    </div>

    <div class="f-box-2">
      <p>ICP备案号：<a href="http://ahcainfo.miitbeian.gov.cn/publish/query/indexFirst.action">京ICP备19026601号-1</a></p>
    </div>

    <div class='l-box'>
      <div class='time-one'>2019</div>
      <div class='line'></div>
      <div class='time-two'>2013.10</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  methods: {
    Downloading() {
      this.$router.push("/Product");
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.home {
  color: #ffffff;
}

.h-title {
  font-size: 85px;
  width: 100%;
  text-align: center;
  position: absolute;
  top: 35%;
}

.h-title-sub {
  width: 100%;
  height: 91px;
  text-align: center;
  position: absolute;
  top: 50%;
}

.t-anime {
  animation: uk-text-shadow-glitch 3s cubic-bezier(1, -1.91, 0, 2.79) 0s
    infinite normal both running;
}
@keyframes uk-text-shadow-glitch {
  0% {
    text-shadow: none;
  }
  25% {
    text-shadow: -2px 0px 0 #ff2ba3, 2px 0px 0 #0084ff;
  }
  50% {
    text-shadow: 2px 0px 0 #ff2ba3, -2px 0px 0 #0084ff;
  }
  75% {
    text-shadow: -2px 0px 0 #ff2ba3, 2px 0px 0 #0084ff;
  }
  100% {
    text-shadow: 2px 0px 0 #ff2ba3, -2px 0px 0 #0084ff;
  }
}
@keyframes uk-flicker {
  0% {
    opacity: 0;
  }
  10% {
    opacity: 0.6;
    transform: scale(0.8);
  }
  20% {
    opacity: 0;
  }
  40% {
    opacity: 1;
  }
  50% {
    opacity: 0.2;
    transform: scale(1.1);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}

.p-box {
  position: absolute;
  top: 65%;
  width: 100%;
  height: auto;
}

.dl-bottom {
  border: 2px solid #ffffff;
  border-radius: 50px;
  -moz-border-radius: 50px;
  padding: 20px;
  width: 220px;
  height: 20px;
  text-align: center;
  margin: 0 auto;
  font-size: 20px;
  line-height: 22px;
  cursor: pointer;
}

.dl-bottom:hover {
  color: #1f1d1f;
  background-color: #ffffff;
}

.f-box {
  height: auto;
  position: absolute;
  bottom: 4%;
  right: 2%;
}

.f-box-2 {
  text-align: center;
  position: absolute;
  bottom: 2%;
  width: 100%;
  color: darkgray;
}
.f-box-2 a{
  color: darkgray;
}

.l-box {
  width: 20%;
  height: 100%;
  position: absolute;
  top: 0;
  font-size: 18px;
}

.l-box .time-one {
  transform: rotate(-90deg);
  position: absolute;
  top: 18%;
  left: 6%;
}

.l-box .line {
  height: 40%;
  width: 1px;
  position: absolute;
  top: 33%;
  left: 12.5%;
  background-color: #ffffff;
}

.l-box .time-two {
  transform: rotate(-90deg);
  height: auto;
  position: absolute;
  bottom: 10%;
  left: 2%;
}

/* SP STYLE */

@media (max-width: 600px) {
  .l-box .line {
    border: 1px solid #ffffff;
    height: 40%;
    width: 0px;
    position: absolute;
    top: 33%;
    left: 30%;
    background-color: #ffffff;
  }

  .l-box .time-two {
    transform: rotate(-90deg);
    height: auto;
    position: absolute;
    bottom: 10%;
    right: 30%;
  }

  .f-box {
    height: auto;
    position: absolute;
    bottom: 8%;
    right: 6%;
  }

  .h-title {
    font-size: 35px;
    width: 100%;
    text-align: center;
    position: absolute;
    top: 35%;
  }

  .h-title-sub {
    width: 100%;
    height: 30px;
    text-align: center;
    position: absolute;
    top: 50%;
  }

  .dl-bottom {
    border: 2px solid #ffffff;
    border-radius: 50px;
    -moz-border-radius: 50px;
    padding: 20px;
    width: 120px;
    height: 20px;
    text-align: center;
    margin: 0 auto;
    font-size: 14px;
    line-height: 22px;
    cursor: pointer;
  }
}
</style>
