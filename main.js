new Vue({
  el:'#app',
  data: {
      heroes: [],
      heroes2:[],
      heroe: {},
      heroe2: {},
      state: false,
      seleccion:0
  },
  mounted: function(){
    this.cargarpersonajes();
    this.heroe = this.heroes[Math.floor(Math.random()*this.heroes.length)];

  },
  methods:{
    cargarpersonajes(){
      this.$http.get('https://gateway.marvel.com/v1/public/characters?orderBy=name%2Cmodified&limit=6&apikey=602ea0bd37dc91bf34664b50f1e34d40&ts=1&hash=16688171fc500807f4b0f1a0cec969ae')
      .then((respuesta)=>{
        this.heroes=respuesta.body.data.results
        this.heroes2=respuesta.body.data.results.splice(respuesta.body.data.results.length/2,respuesta.body.data.results.length)

      });
    },
    random(){
      this.heroe = this.heroes[Math.floor(Math.random()*this.heroes.length)];
      this.heroe2 = this.heroes2[Math.floor(Math.random()*this.heroes2.length)];
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
  },
});

