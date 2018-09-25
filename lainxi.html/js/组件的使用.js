Vue.component("greeting",{
    template:`<p>{{name}}大家好 <button v-on:click='changename'>名字改变</button> </p>`,
     data:function(){
            return {name:"XI"}
        
    },
   
    methods:{
        changename:function(){
            return this.name = 'hary';
        
        }
    }
})



new Vue({
    el:"#vue-app",
   
});