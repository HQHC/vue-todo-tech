import Vue from "vue";

const app = new Vue({
    data: {
        text:0,
        obj:{}
    },
    //el: '#root',
    template: '<div ref="div">{{ text}} {{obj.a}}</div>'
})

app.$mount('#root')



setInterval(() => {
    app.text += 1
    app.text += 1
    app.text += 1
    app.text += 1
    // app.obj.a = i
    // app.$forceUpdate()
    // app.$set(app.obj, 'a',i)
    // app.$delete(app.text)
},1000)

// console.log(app.$data);
// console.log(app.$props);
// console.log(app.$el);
// console.log(app.$options);
// app.$options.render = (h) => {
//     return h('div', {}, 'new ')
// }
// console.log(app.$root === app);
// console.log(app.$children);
// console.log(app.$slots);
// console.log(app.$scopedSlots);
// console.log(app.$refs);
// console.log(app.$isServer);

// const unwatch = app.$watch('text',(newText,oldText) => {
//     console.log(`${newText},${oldText}`)
// })

// setTimeout(unwatch,2000)

app.$on('test',(a,b) =>{
    console.log('test' + a + b)
})

app.$emit('test',1,2)


