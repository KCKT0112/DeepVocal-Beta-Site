
export default {
  methods: {
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
    }
  },
  mounted() {
    this.loadsettings();
  }
}