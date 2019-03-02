import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
    state:{
        name:'郑庆义'
    },
    mutations:{
        setName(state,value){
            // console.log('改变名字');
            state.name = value;
        }
    }
})