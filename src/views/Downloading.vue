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
      this.axios.get("https://api.deep-vocal.com/api/editor/version")
      .then((response) => {
        setTimeout((window.location.href = response.data.dlurl),3000);
      });
    } else if (target == "toolbox") {
      this.axios.get("https://api.deep-vocal.com/api/toolbox/version")
        .then((response) => {
          setTimeout((window.location.href = response.data.dlurl),3000);
        })
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