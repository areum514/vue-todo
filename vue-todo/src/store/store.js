import Vue from 'vue'
import Vuex from 'vuex'
import * as getters from './getters'
import * as mutations from './mutations'
//use는 vue의 플러그인으로 vue를 사용하는 모든 영역에 전역 사용  하기 위해 
Vue.use(Vuex);

const storage={
    fatch(){
        const arr=[]
        if (localStorage.length > 0) {
            for (let i = 0; i < localStorage.length; i++) {
                if (localStorage.key(i) !== "loglevel:webpack-dev-server") {
                    arr.push(JSON.parse(localStorage.getItem(localStorage.key(i))))
                }
            }
        }
        return arr;
    }
};

export const store=new Vuex.Store({
    state: {
        todoItems: storage.fatch()
    },
    getters ,
    mutations
});


