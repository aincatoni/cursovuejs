<template>
    <img v-if="image" :src="image" alt="">
    <div class="bg-dark"></div>
    <div class="indecision-container">
      <input v-model="question" type="text" placeholder="Hazme una pregunta" v-on:keypress.enter="askQuestion">
      <p>Recuerda terminar con un signo de interrogación</p>
      <div v-if="isValidQuestion" class="pregunta">
        <h2>{{ question }}</h2>
        <h2>{{answer}}</h2>
      </div>
    </div>
</template>

<script>
export default {
  data(){
  return {
      question: "Hazme una pregunta",
      answer: null,
      image: null,
      isValidQuestion: false
    }
  },
  methods: {
    async getAnswer(){
      this.answer = 'Pensando'
      const {answer, image} = await fetch('https://yesno.wtf/api').then(res => res.json());
      console.log(image);
      
      this.image = image;

      if (answer === 'yes') {
        this.answer = 'si!';
      } else if ( answer === 'maybe') {
        this.answer = 'tal véz';
      } else {
        this.answer = 'no!';
      }
      
        

    }
  },
  watch: {
    question(value, oldValue) {
      this.isValidQuestion = false
      if( !value.includes('?')) return
      // TODOS: Realizar petición http
      this.isValidQuestion = true
      this.getAnswer()
    }
  }
}
</script>

<style scoped>

    img, .bg-dark {
        height: 100vh;
        left: 0px;
        max-height: 100%;
        max-width: 100%;
        position: fixed;
        top: 0px;
        width: 100vw;
    }

    .bg-dark {
        background-color: rgba(0, 0, 0, 0.4);
    }

    .indecision-container {
        position: relative;
        z-index: 99;
    }
    
    input {
        width: 250px;
        padding: 10px 15px;
        border-radius: 5px;
        border: none;
    }
    input:focus {
        outline: none;
    }

    p {
        color: white;
        font-size: 20px;
        margin-top: 0px;
    }

    h1, h2 {
        color: white;
    }
    
    h2 {
        margin-top: 150px;
    }

</style>