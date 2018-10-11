new Vue({
  el:'#app',
  data: {
      heroes: [],
      state: false,
      seleccion:0
  },
  mounted: function(){
    this.cargarpersonajes();
  },
  methods:{
    cargarpersonajes(){
      this.$http.get('https://gateway.marvel.com/v1/public/characters?orderBy=name%2Cmodified&limit=14&apikey=602ea0bd37dc91bf34664b50f1e34d40&ts=1&hash=16688171fc500807f4b0f1a0cec969ae')
      .then((respuesta)=>{
        this.heroes = respuesta.body.data.results
      });
    },
    seleccionarheroe(item){
        if (item.state){
            item.state=false;
            this.seleccion-=item.thumbnail;
        }
        else{
          item.state=true;
          this.seleccion += item.thumbnail;
        }
      }
  }
});
