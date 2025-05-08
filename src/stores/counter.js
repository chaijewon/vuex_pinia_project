import {defineStore} from "pinia"

export const useConuterStore=defineStore('counter',{
   state:()=>({
      count:0
   }),
   actions:{
    increment(){
       this.count++
    },
    decrement(){
       this.count--
    }
   }
})
