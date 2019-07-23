<template>
  <div class="Eula">
    <div class='E-box'>
      <div class='E-title'>
        {{ $t("eula_title") }}
      </div>

      <div class='E-content'>
        <!-- <p v-html='$t("eula_content")'></p> -->
        <vue-markdown class="conn" :source="eula_md_content"></vue-markdown>
      </div>
    </div>
  </div>
</template>

<script>
import EULA_EN_US from 'raw-loader!!@/assets/eula/en-us.md'
import EULA_ZH_CN from 'raw-loader!!@/assets/eula/zh-cn.md'
import EULA_ZH_TW from 'raw-loader!!@/assets/eula/zh-tw.md'

const EULAs = {
  'en-us': EULA_EN_US,
  'zh-cn': EULA_ZH_CN,
  'zh-tw': EULA_ZH_TW
}

export default {
  name: "Eula",
  computed: {
    eula_md_content(){
      let lang = this.$i18n.locale;
      if (lang.startsWith('zh')){
        if(lang.endsWith('cn')){
          return EULAs['zh-cn'];
        } else if (lang.endsWith('tw')){
          return EULAs['zh-tw'];
        } else return EULAs['zh-cn'];
      } else if (lang.startsWith('en')){
        return EULAs['en-us'];
      } else {
        return EULAs['en-us'];
      }
    }
  },
};
</script>

<style scoped>
.E-box {
  width: 100%;
  height: 80%;
  position: absolute;
  top: 18%;
}

.E-title {
  width: 100%;
  text-align: center;
  font-size: 32px;
}

.E-content {
  width: 100%;
  height: 80%;
  position: relative;
  top: 20px;
  overflow-y: scroll;
}

.E-content .conn {
  width: 80%;
  font-size: 20px;
  /* text-align: center; */
  margin: 20px auto;
  line-height: 30px;
}

.E-content a {
  color:#73d5ff;
}

::-webkit-scrollbar {
  width: 5px;
  height: 1px;
}
/*滚动条滑块*/
::-webkit-scrollbar-thumb {
  -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
  background: #535353;
}
/*滚动条轨道*/
::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 1px rgba(0, 0, 0, 0);
  background: #ccc;
}
.header_menu .menu_top {
  display: none;
}
</style>