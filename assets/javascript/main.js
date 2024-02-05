const { createApp } = Vue

  createApp({
    data() {
      return {
        arrayEmail:[],
      }
    },
    methods: {
        generaEmail(){
            if(this.arrayEmail.length == 0){
                for(let i = 0; i < 10; i++){
                    axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then(response => (this.arrayEmail.push(response.data.response)))
                }
                console.log(this.arrayEmail)
                
            }
        }
    },
  }).mount('#app')