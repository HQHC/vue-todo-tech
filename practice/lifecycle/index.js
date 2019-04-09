import Vue from "vue";

const app = new Vue({
    //el: '#root',
    data: {
        text:0
    },
    beforeCreate() {
        console.log("beforeCreate")
    },
    created() {
        console.log("created")
    },
    beforeMount() {
        console.log("beforeMount")
    },
    mounted() {
        console.log("mounted")
    },
    beforeUpdate() {
        console.log("beforeUpdate")
    },
    updated() {
        console.log("updated")
    },
    beforeDestroy() {
        console.log("beforeDestroy")
    },
    destroyed() {
        console.log("destroyed")
    },
    activated() {
        console.log("activated")
    },
    deactivated() {
        console.log("deactivated")
    },
    //template: '<div>{{text }}</div>',
    render(h) {
        console.log('render template')

        return h('div',{},this.text)
    },
    renderError(h,error) {
        return h('div',{},error.stack);
    }
})

app.$mount('#root')
// setInterval(() => {
//     app.text += 1
// },1000)

// setTimeout(() => {
//     app.$destroy()
// },2000)
