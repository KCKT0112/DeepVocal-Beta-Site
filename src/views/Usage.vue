<template>
  <div class="Usage">
    <div class='U-box'>
      <div class='U-title'>
        {{ $t("usage_title") }}
      </div>

      <div class='U-time'>
        <p>{{ $t("usage_time_one") }} {{ $t("usage_time_two") }}</p>
      </div>

      <div class='U-content'>
        <i18n
          path="usage_content"
          tag="p">
          <a
            place="eula_action"
            :href="eula_url"
          >{{ $t('usage_eula') }}</a>
        </i18n>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Usage",
  data() {
    return {
      eula_url: "#/Eula"
    };
  }
};
</script>

<style scoped>
.U-box {
  width: 100%;
  height: 80%;
  position: absolute;
  top: 18%;
}

.U-title {
  width: 100%;
  text-align: center;
  font-size: 32px;
}

.U-time {
  width: 100%;
  text-align: center;
  font-size: 14px;
  position: relative;
  top: 10px;
  color: #4c4b4c;
}

.U-content {
  width: 100%;
  height: 80%;
  position: relative;
  top: 20px;
}

.U-content p {
  width: 80%;
  font-size: 20px;
  /* text-align: center; */
  margin: 20px auto;
  line-height: 30px;
}

.U-content a {
  color: #73d5ff;
  text-decoration: underline;
}
</style>