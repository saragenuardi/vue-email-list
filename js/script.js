var root = new Vue ({
    el: '#root',
    data: {
        emails: [],
    },

    created() {

        //prendo 10 emails random da API
        for (let i = 0; i < 10; i++) {
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then((resp) => {
                const mail = resp.data.response;
                this.emails.push(mail);
        
            })
        }
    }
})