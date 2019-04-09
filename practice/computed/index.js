import Vue from "vue";

new Vue({
    el:'#root',
    data:{
        firstName: 'fanbo',
        lastName: 'meng',
        Number: 0
    },
    computed:{
        name: {
            get() {
                console.log('name')
                return `${this.firstName} ${this.lastName}`
            },
            set(name) {
                const names = name.split(' ')
                this.firstName = names[0]
                this.lastName = names[1]
            }
        }
    },
    methods:{
        getName() {
            console.log('getName')
            return `${this.firstName} ${this.lastName}`
        }
    },
    template: `<div>
    <p>{{ name }}</p>
    <p>{{ getName() }}</p>
    <p>Number: {{ Number }}</p>
    <input v-model="Number"/>
    <input v-model="name"/>
    </div>`
})
