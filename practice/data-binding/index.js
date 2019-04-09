import Vue from "vue";

const app = new Vue({
    el:'#root',
    data:{
        isActive: false,
        str: '12300',
        styles:{
            color: 'red',
            appearance: 'none'
        },
        styles2:{
            fontSize: '106px'
        }
    },

    computed:{
        string2int() {
            return function(str) {
                let arr = str.split('');
                return arr.reduce(function(x,y) {
                    return x * 10 + y / 1
                })
            }
        }
    },
    template:`
    <div :class="{ active: !isActive }"
      :style="[styles,styles2]"
    >
      {{ isActive ? 'active' : 'not active'}}
      <span>{{ string2int('57567') }}</span>
    </div>
  `
})

setInterval(() => {
    app.str = String(app.str / 1 + 1)
}, 1000);
