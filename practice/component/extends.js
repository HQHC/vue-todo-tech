import Vue from 'vue'

// const data = {
//     text: 0
// }

const component = {
    props: {
        active: Boolean,
        propOne: {
            required: true
        }
    },
    template: `
      <div>
        <input type="text" v-model="text"/>
        <span @click="handleChange">{{ propOne }}</span>
        <span v-show="active">see me if</span>
      </div>
    `,
    data() {
        return {
            text: 0
        }
    },
    mounted() {
        console.log('comp mounted');
    },
    methods:{
        handleChange() {
            this.$emit('change')
        }
    },

}

const parent = new Vue({
    name: 'Parent'
})

const component2 = {
    parent,
    extends: component,
    data() {
        return {
            text: 1
        }
    },
    mounted() {
        this.$parent.text = '123456'
        console.log(this.$parent.$options.name);
    }
}

// const CompVue = Vue.extend(component)

new Vue({
    el: '#root',
    name: 'Root',
    parent,
    components:{
        Comp: component2
    },
    data() {
        return {
            text: 0
        }
    },
    mounted() {
        this.$parent.text = '123456'
        console.log(this.$parent.$options.name);
    },
    template: `<div>
      <span>{{ text }}</span>
      <comp propOne="asd"></comp>
    </div>`
})

// new CompVue({
//     el: '#root',
//     propsData:{
//         propOne: true,
//     },
//     data: {
//         text: 123
//     },
//     mounted() {
//         console.log('instance mounted');
//     }
// })

//Vue.component('CompOne', component)


