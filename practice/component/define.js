import Vue from 'vue'

// const data = {
//     text: 0
// }

const component = {
    props: {
        active: {
            default: true,
            validator(value) {
                return typeof value === 'boolean'
            }
        },
        propOne: Number
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
    methods:{
        handleChange() {
            this.$emit('change')
        }
    },

}

//Vue.component('CompOne', component)

new Vue({
    el: '#root',
    components:{
        CompOne: component
    },
    data:{
        prop1: 1
    },
    mounted() {
        console.log(this.$refs.comp1);
    },
    methods:{
        handleChange() {
            this.prop1 += 1
        }
    },
    template: `
      <div>
         <comp-one ref="comp1" :active="true" :prop-one="prop1" @change="handleChange"></comp-one>
         <comp-one :active="false"></comp-one>
      </div>
    `

})
