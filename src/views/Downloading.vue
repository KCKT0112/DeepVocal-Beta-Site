<template>
  <div id="Downloading">
    <div class="icon-t">
      <font-awesome-icon :icon="['fas','download']" />
    </div>
    <h1 class="t1">{{ $t("downloading") }}</h1>
  </div>
</template>

<script>
export default {
  name: "Downloading",
  mounted() {
    /* eslint-disable */
    let target = this.$route.query.target; // ?target=xxx
    console.log("downlaod target: " + target);
    if (target == "editor") {
      // setTimeout(
      //   (window.location.href =
      //     "http://sharpkey-files.oss-cn-beijing.aliyuncs.com/deep-vocal/Setup_DeepVocal_beta_1.1.0.rar"),
      //   3000
      // );
      setTimeout(
        (window.location.href =
          "https://dl.deep-vocal.com/editor/Setup_DeepVocal_beta_1.1.0.rar"),
        3000
      );
    } else if (target == "toolbox") {
      setTimeout(
        (window.location.href =
          "https://dl.deep-vocal.com/toolbox/Setup_DeepVocalToolBox_beta_1.1.2.zip"),
        3000
      );
    } else if (target == "man_g") {
      setTimeout(
        (window.location.href =
          "https://drive.google.com/drive/folders/1kAlPZnSO9f4pv5wbVJUdNNQXZQOy6pGA?usp=sharing"),
        3000
      );
    } else if (target == "man_b") {
      setTimeout(
        (window.location.href = "https://share.weiyun.com/5snXMol"),
        3000
      );
    } else {
      console.log("Fire!!!!!");
      alert("You are playing with fire");
      this.$router.push("/");
    }
  }
};
</script>

<style>
.t1 {
  position: absolute;
  top: 40%;
  font-size: 32px;
  width: 100%;
  text-align: center;
}
.icon-t {
  width: 100%;
  position: absolute;
  top: 20%;
  font-size: 100px;
  text-align: center;
}
</style>