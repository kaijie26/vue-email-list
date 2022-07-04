// Bonus
// Far comparire gli indirizzi email solamente quando sono stati tutti generati.

var app = new Vue(
    {
        el: '#root',
        
        data: {
            randomEmails: [],


        },

        mounted() {
            // Reperisco 10 volte l'email e qual volta singolarmente li pusho nel array
            for (let i = 0; i < 10; i++) {
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail')

                .then((response) => {

                this.randomEmails.push(response.data.response);
                
            });
                
            };


        }

    }
)