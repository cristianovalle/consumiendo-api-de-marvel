new Vue({
  el:'#app',
  data: {
      heroes: [],
      heroes2:[],
      seleccion:0,
      seleccion2:0,
      heroe: null,
      heroe2: null
  },
  mounted: function(){
    this.cargarpersonajes();
  },
  methods:{
    cargarpersonajes(){
      
      this.$http.get('https://gateway.marvel.com/v1/public/characters?orderBy=name%2Cmodified&limit=10&apikey=602ea0bd37dc91bf34664b50f1e34d40&ts=1&hash=16688171fc500807f4b0f1a0cec969ae')
      .then((respuesta)=>{
        this.heroes=respuesta.body.data.results
        this.heroes2=respuesta.body.data.results.splice(respuesta.body.data.results.length/2,respuesta.body.data.results.length)
        this.random()
      });
    },
    random(){
      this.heroe = this.heroes[Math.floor(Math.random()*this.heroes.length)];
      this.heroe2 = this.heroes2[Math.floor(Math.random()*this.heroes2.length)];
    },
    seleccionarheroe1(){
        this.seleccion += 1;
        this.random()
    },
    seleccionarheroe2(){
        this.seleccion2 += 1;
        this.random()
    }       
  },
});
