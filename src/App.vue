<template>
  <div id="app">
    <div class="header">
      <div class="top-logo"></div>
      <div class="top-logo-sub">Beta</div>

      <div class="top-list">
        <ul>
          <a href="#/">
            <li class='top-list-sp'>{{ $t("topbar_index") }}</li>
          </a>
          <a href="https://forum.deep-vocal.com/">
            <li class='top-list-sp'>{{ $t("topbar_forum") }}</li>
          </a>
          <a href="#/Usage">
            <li class='top-list-sp'>{{ $t("topbar_usage") }}</li>
          </a>
          <li
            class="top-list-sp lang-drop-list"
            @mouseover="onDplOver($event)"
            @mouseout="onDplOut($event)"
          >
            <span><font-awesome-icon style='font-size:24px; margin-top: 26px;' :icon="['fas','language']" /></span>
            <ul v-dpl>
              <li
                v-for="(lang, i) in langlist"
                :key="`Lang${i}`"
                @click="onLiClick(lang, $event)"
              >{{ lang.name }}</li>
            </ul>
          </li>
          <a href="https://weibo.com/u/2652061783">
            <li class='top-list-sp'>
              <font-awesome-icon
                style="font-size: 24px;margin-top:26px;"
                :icon="['fab','weibo']"
              />
            </li>
          </a>
          <a href="https://twitter.com/boxstar_hx">
            <li class='top-list-sp'>
              <font-awesome-icon
                style="font-size: 24px;margin-top:26px;"
                :icon="['fab','twitter']"
              />
            </li>
          </a>
          <li class='sp-menu-bnt' @click="hideMenu"><font-awesome-icon style='font-size:24px;' :icon="['fas','bars']" /></li>
        </ul>
      </div>

      <div class="sildebar">
        <div class="menu" v-show="isShows" @click="hideMenu"></div>
    
        <transition name="slide-fade">
          <div class="sp-m" v-show="isShow">
            <div class="top-logo"></div>
            <ul>
              <a href="#/">
                <li>{{ $t("topbar_index") }}</li>
              </a>
              <a href="https://forum.deep-vocal.com/">
                <li>{{ $t("topbar_forum") }}</li>
              </a>
              <a href="#/Usage">
                <li>{{ $t("topbar_usage") }}</li>
              </a>
            </ul>
            <div class="sp-m-logo">
              <div class="sp-m-logo-box">
                <a href="https://weibo.com/u/2652061783">
                  <font-awesome-icon
                    style="font-size: 24px;float:left"
                    :icon="['fab','weibo']"
                  />
                </a>
                <a href="https://twitter.com/boxstar_hx">
                  <font-awesome-icon
                    style="font-size: 24px;float:right"
                    :icon="['fab','twitter']"
                  />
                </a>
              </div>
            </div>
          </div>
        </transition>
      </div>

    </div>

    <router-view></router-view>
    <vue-progress-bar></vue-progress-bar>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      isShow: false,
      isShows: false,
      langlist: [
        { name: "ZH-CN", lang: "zh-cn" },
        { name: "ZH-TW", lang: "zh-tw" },
        { name: "EN-US", lang: "en-us" },
        { name: "JA-JP", lang: "ja-jp" }
      ]
    };
  },
  directives: {
    dpl: {
      bind(el) {
        el.style.display = "none";
      }
    }
  },
  methods: {
    onDplOver(event) {
      let ul = event.currentTarget.childNodes[1];
      ul.style.display = "block";
    },
    onDplOut(event) {
      let ul = event.currentTarget.childNodes[1];
      ul.style.display = "none";
    },
    onLiClick(lang) {
      localStorage.setItem("locale", lang.lang);
      this.$i18n.locale = localStorage.getItem("locale");
    },
    loadsettings() {
      /* eslint-disable */ 
      //console.log(this.$route.path)
      this.axios.get("https://api.deep-vocal.com/api/settings")
      .then((response) => {
        /* eslint-disable */
        console.log("Get Settings OK!");
        if(response.data.value == 'true'){
          if(this.$route.path == '/Maintain'){
            //Todo
          }else{
            window.location.href = '#/Maintain';
          }
        }else{
          //Todo
        }
      })
      /* eslint-disable */
      .catch((error) => {
        /* eslint-disable */
        console.log("Get Settings Error!");
      });
    },

      hideMenu () {
				if (this.isShow) {
					this.isShow = false
					this.isShows = false
				} else {
					this.isShow = true
					this.isShows = true
				}
				
			},

    ldv() {
      console.log([
        "###########################$:;|@#################$",
        "###########################$:::::;$##############$",
        "###########################$:::::::::|@##########$",
        "###############$$#####@!::::::::::::::::;$#######$",
        "###########@|:::$####&!:::::::::::::::::::::|@###$",
        "#########|:::::;$####&!::::::::::::::::::::::::|@$",
        "#######&!:::::::$####&;:::::::::::::::::::::::::;!",
        "#######%::::::::$####&;::::::::::::::::::::::::::;",
        "#########################@|::::::::::::::|####%::;",
        "############################$;'''''''':$######%'';",
        "#############################@!'''''';&######@|'';",
        "#######%''''''':$####&;'!@####&;'''':$#####|''''';",
        "#######%''''''':$####&;''|#####$:'''%#####%'''''':",
        "#######%''''''':$####&;'''%#####%''|#####$:'''''':",
        "#######%''''''';&####$:''':$####@!;&####&;''''''':",
        "#######%''''''|#####@!''''';&####@@####@!'''''''':",
        "#########@&@#######@!'''''''!##########|''''''''':",
        "##################%:'''''''''%########%''''''''';!",
        "###############&;''''''''''''';&####&;'''''''''|#$",
        "############$;`````````````````````````````:$####$",
        "###############@|'`````````````````````'!@#######$",
        "###################$:```````````````:%###########$",
        "######################@!'````````;&##############$",
        "Web Design By $ERGE                Web By Kurokitu",
        "日本語の通訳：アマノケイ さん     ありがとうございます"
      ].join('\n'));
    }
  },
  watch:{
    $route(to,from){
      this.loadsettings();
    }
  },
  mounted() {
    //  [App.vue specific] When App.vue is finish loading finish the progress bar
    this.$Progress.finish();
    this.loadsettings();
    this.ldv();
    
  },
  created() {
    //  [App.vue specific] When App.vue is first loaded start the progress bar
    this.$Progress.start();
    //  hook the progress bar to start before we move router-view
    this.$router.beforeEach((to, from, next) => {
      //  does the page we want to go to have a meta.progress object
      if (to.meta.progress !== undefined) {
        let meta = to.meta.progress;
        // parse meta tags
        this.$Progress.parseMeta(meta);
      }
      //  start the progress bar
      this.$Progress.start();
      //  continue to next page
      next();
    });
    //  hook the progress bar to finish after we've finished moving router-view
    this.$router.afterEach(() => {
      //  finish the progress bar
      this.$Progress.finish();
    });
  }
};
</script>

<style>
html,
body {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  margin: 0;
  padding: 0;
  background-color: #1f1d1f;
  color: #ffffff;
}

vue-progress-bar {
  z-index: 999999999999;
}

.header {
  width: 100%;
  height: 75px;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #1f1d1f;
  z-index: 999;
}

.header .top-logo {
  background-image: url("./assets/top-logo.png");
  background-repeat: no-repeat;
  background-size: auto 26px;
  width: auto;
  height: 30px;
  margin-top: 20px;
  margin-left: 30px;
}

.header .top-logo-sub {
  position: absolute;
  top: 28px;
  left: 155px;
  font-size: 14px;
}

.header .top-list {
  position: fixed;
  top: 0;
  right: 20px;
  width: auto;
  height: 75px;
}

.header .top-list ul {
  list-style: none;
  margin: 0;
  padding: 0;
  height: 100%;
}

.header .top-list li {
  padding: 0px 20px;
  float: left;
  list-style: none;
  color: #fff;
  height: 100%;
  text-align: center;
  line-height: 75px;
}

.top-list li:hover {
  background-color: #ffffff;
  color: #1f1d1f;
}

.header .top-list select {
  border: 0;
  background: transparent;
  border: none;
  outline: none;
  color: #ffffff;
  font-size: 24px;
  width: auto;
  height: 100%;
  float: left;
}

.header .top-list select option {
  background-color: #ffffff;
  color: #1f1d1f;
  width: 300px;
  border: 0;
  border: none;
  outline: none;
}

.top-list li select:hover {
  background-color: #ffffff;
  color: #1f1d1f;
}

a {
  color: #ffffff;
  text-decoration: none;
}

  .sp-m{
		color: #fff;
		position: fixed;
    width: 286px;
    height: 100%;
    top: 0;
    left: 0;
    bottom: 0;
    z-index: 11;
    overflow-y: auto;
    overflow-x:hidden;
    background: #000;
	}
	.slide-fade-enter-active {
	  transition: all .3s ease;
	}
	.slide-fade-leave-active {
	  transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
	}
	.slide-fade-leave-to,.slide-fade-enter{
	  transform: translateX(-286px);
	  opacity: 0;
	}
	.menu {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    opacity: 1;
    z-index: 10;
    background: rgba(0,0,0,0.5);
    overflow-x:hidden;
	}

  .sp-m ul li {
    list-style:none;
  }

  .sp-m ul{
    width: 286px;
    height: 100%;
    position: absolute;
    left: 0;
  }

  .sp-m li {
    width: 286px;
    padding: 20px;
  }

  .sp-m li:hover {
    background-color: #ffffff;
    color: #1f1d1f;
  }

  .sp-m-logo {
    position: fixed;
    bottom: 0;
    width: 286px;
    height: 40px;
  }
  .sp-m-logo-box {
    margin: 0 auto;
    width: 60%;
  }

  .sp-menu-nodis {
    display: none;
  }
  .sp-menu-bnt {
      display: none;
  }
/* SP STYLE */

@media (max-width: 600px) {
  .header .top-logo {
    background-image: url("./assets/top-logo.png");
    background-repeat: no-repeat;
    background-size: auto 26px;
    width: auto;
    height: 30px;
    margin-top: 20px;
    margin-left: 20px;
  }

  .top-list-sp {
    display: none;
  }
  .sp-menu-bnt {
    display: block;
    font-size: 24px;
    margin-top: 0px;
  }
}
</style>

<style scoped lang="scss">
.lang-drop-list {
  display: inline-block;
  min-width: 60px;
  position: relative;
  width: auto;
  height: auto;
  span {
    display: block;
    cursor: pointer;
  }
  ul {
    position: absolute;
    top: 75px;
    left: 0;
    width: 100%;
    height: auto;
    overflow: hidden;
    text-align: center;
    li {
      list-style: none;
      height: auto;
      line-height: 40px;
      font-size: 20px;
      color: #333333;
      width: 70%;
      text-align: center;
      background-color: #ffffff;
      cursor: pointer;
      border: solid 1px #ffffff;
    }
    li:last-child {
      border-bottom: none;
    }
    li:hover {
      background: #1f1d1f;
      color: #ffffff;
    }
  }
}
</style>