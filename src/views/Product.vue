<template>
  <div id="Product">
    <div class="P-content">
      <h1 class="p-t1-1">{{ $t("Select_Product") }}</h1>
      <div class="p-list">
        <div class="p-list-1">
          <div class="p-logo">
            <img src="@/assets/dveditor.png" />
          </div>
          <div class="p-title">DeepVocal Editor</div>
          <div @click="dl_editor" class="p-dl">
            <font-awesome-icon :icon="['fab','windows']" />
            {{ $t("p_dl_bnt") }}
          </div>
          <!-- <i18n class="p-info" path="P_info_editor" tag="p">
          <a place="p_eula_action" :href="p_eula" >{{ $t('p_eula') }}</a>
          <a place="p_instructions_action" :href="p_instructions" >{{ $t('p_instructions') }}</a>
          </i18n>-->
          <div class="p-v">{{ $t("p_dl_v") }} Beta 1.1.0</div>
        </div>

        <div class="p-list-2">
          <div class="p-logo">
            <img src="@/assets/dvtb.png" />
          </div>
          <div class="p-title">DeepVocal ToolBox</div>
          <div @click="dl_toolbox" class="p-dl">
            <font-awesome-icon :icon="['fab','windows']" />
            {{ $t("p_dl_bnt") }}
          </div>
          <!-- <i18n class="p-info" path="P_info_dvtb" tag="p">
          <a place="p_eula_action" :href="p_eula" >{{ $t('p_eula') }}</a>
          <a place="p_dvtbtemp_action" :href="p_instructions" >{{ $t('p_dvtbtemp') }}</a>
          <a place="p_instructions_action" :href="p_instructions" >{{ $t('p_instructions') }}</a>
          </i18n>-->
          <div class="p-v">{{ $t("p_dl_v") }} Beta 1.1.0</div>
        </div>

        <div class="p-list-3">
          <div class="p3-box">
            <div class="p3-conn">{{ $t("p_dl_man") }}</div>
            <div @click="dl_other_google" class="p-dl">
              <font-awesome-icon :icon="['fab','google']" />
              {{ $t("p_dl_google") }}
            </div>
            <div @click="dl_other_baidu" class="p-dl">
              <font-awesome-icon :icon="['fas','cloud']" />
              {{ $t("p_dl_baidu") }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Product",
  data() {
    return {
      p_eula: "#/Eula",
      p_dvtbtemp: "#/Eula",
      p_instructions: "#/Eula"
    };
  },
  methods: {
    dl_editor() {
      this.$router.push("/Downloading?target=editor");
    },
    dl_toolbox() {
      this.$router.push("/Downloading?target=toolbox");
    },
    dl_other_google() {
      this.$router.push("/Downloading?target=man_g");
    },
    dl_other_baidu() {
      this.$router.push("/Downloading?target=man_b");
    }
  }
};
</script>

<style>
.p-list a {
  color: #73d5ff;
  text-decoration: underline;
}

.P-content {
  width: 100%;
  height: 90%;
  position: absolute;
  top: 20px;
}

.p-t1-1 {
  position: absolute;
  top: 10%;
  font-size: 32px;
  width: 100%;
  text-align: center;
}

.p-list {
  width: 60%;
  text-align: center;
  margin: 13% auto 0;
  height: 80%;
}

.p-title {
  font-size: 24px;
  margin-top: 20px;
  margin-bottom: 30px;
}

.p-list-1 {
  background-color: #333035;
  margin: 0 auto;
  width: 40%;
  float: left;
  padding: 8% 20px 8%;
  z-index: 999;
}

.p-list-2 {
  background-color: #333035;
  margin: 0 auto;
  width: 40%;
  float: right;
  padding: 8% 20px 8%;
  z-index: 999;
}

.p-list-3 {
  width: 100%;
  position: absolute;
  left: 0;
  height: 300;
  top: 90%;
}

.p3-box {
  margin: 0 auto;
  width: 60%;
  height: 80px;
}

.p-list-3 .p-dl {
  width: 180px;
  /* float: right; */
  padding: 15px;
  margin-top: 10px;
  display: inline;
  margin-left: 40px;
}

.p-list-3 .p3-conn {
  font-size: 30px;
  line-height: 70px;
  display: inline;
  /* float: left; */
}

.p-info {
  width: 50%;
  margin: 30px auto 0;
}

.p-dl {
  border: 2px solid #ffffff;
  border-radius: 50px;
  -moz-border-radius: 50px;
  padding: 10px;
  width: 50%;
  height: 20px;
  text-align: center;
  margin: 0 auto;
  font-size: 20px;
  line-height: 22px;
  cursor: pointer;
}

.p-v {
  margin: 20px auto 20px;
  text-align: center;
}

.p-dl:hover {
  color: #1f1d1f;
  background-color: #ffffff;
}

@media (max-width: 800px) {
  .p-list-1 {
    width: 100%;
    float: left;
    padding: 20px 0 20px;
    font-size: 18px;
  }

  .p-list-2 {
    width: 100%;
    margin-top: 50px;
    float: left;
    padding: 20px 0 20px;
    font-size: 18px;
  }

  /* .p-info {
    width: 80%;
    margin: 30px auto 0;
  } */

  .p-list {
    width: 100%;
    height: auto;
    position: absolute;
    top: 25%;
    text-align: center;
  }

  .p-list-3 {
    width: 100%;
    position: relative;
    top: 10%;
    text-align: center;
    font-size: 18px;
  }

  .p3-conn {
    width: 100%;
    font-size: 18px;
  }

  .p-list-3 .p-dl {
    width: 80%;
    margin: 0 auto;
  }
}
</style>