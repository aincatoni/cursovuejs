const app = Vue.createApp({
  // template:`
  // <h1>Hola mundo</h1> 
  // <p>Desde app.js</p>  
  // `
  data() {
    return {
      quote: "I'm batman",
      author: "bruce wayne"
    }
  },
  methods: {
    changeQuote() { 
      console.log("Hola mundo");
      this.author = "Ain Cortés"
      this.capitalize();
    },
    capitalize(){
      this.quote = this.quote.toUpperCase();
    }
  }
})

app.mount("#myApp")