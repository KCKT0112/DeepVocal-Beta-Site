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
      this.axios.get("https://api.deep-vocal.com/api/editor/versionw")
      .then((response) => {
        window.location.href = response.data.dlurl;
      })
      /* eslint-disable */
      .catch((error) => {
        this.tv  = 'null';
        this.tn = 'null';
        this.$swal(
          this.$t("load_data_err_title"),
          this.$t("load_dl_err_url"),
          'error'
        );
      });
    } else if (target == "toolbox") {
      this.axios.get("https://api.deep-vocal.com/api/toolbox/version")
        .then((response) => {
        window.location.href = response.data.dlurl;
        })
        /* eslint-disable */
        .catch((error) => {
        this.tv  = 'null';
        this.tn = 'null';
        this.$swal(
          this.$t("load_data_err_title"),
          this.$t("load_dl_err_url"),
          'error'
        );
      });
    } else if (target == "man_g") {
        window.location.href ="https://drive.google.com/drive/folders/1kAlPZnSO9f4pv5wbVJUdNNQXZQOy6pGA?usp=sharing";
    } else if (target == "man_b") {
        window.location.href = "https://share.weiyun.com/5snXMol";
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