//1.实例化对象
// 点击事件
new Vue({
    el:"#vue-app",
    data:{
    age :"26",
    x   :0,
    y   :0
    },
    methods:{
        add:function(a){
            this.age +=a;
        },
        substract:function(b){
            this.age -=b;
        },
        mouse:function(event){
            this.x = event.offsetX;
            this.y = event.offsetY;
        }
       
    }
    

    
});

// 键盘。数据交互
new Vue({
    el:"#vue-bpp",
    data:{
    name:"",
    age :""
    },
    methods:{
       logName:function(){
          this.name =this.$refs.name.value;
       },
       logAge:function(){
        // console.log("您正在输入")
        this.age =this.$refs.age.value;
    }
    }
    

    
})


// compute计算属性，一般在大数据中用 
new Vue({
    el:"#vue-cpp",
    data:{
    a:0,
    b:0,
    age:20
    },
    methods:{ //常规方法函数计算
        // addToA:function(){
        //     return this.a+this.age;
        // },
        // addToB:function(){
        //     return this.b+this.age;
        // }
    },
    computed:{//计算属性
        addToA:function(){
            return this.a+this.age;
        },
        addToB:function(){
            return this.b+this.age;
        }
    }

    
})


//动态改变css样式
new Vue({
    el:"#vue-dpp",
    data:{
    changeColor:false,
    changeLength:false
    },
    methods:{ 
    },
    computed:{//计算属性
        compclass:function(){
            return {
                changeColor : this.changeColor,
                changeLength: this.changeLength
            }
        }
    }

    
})



new Vue({
    el:"#vue-epp",
    data:{
    
    error:false,
    success:false,
    },
    methods:{ 
    },
    computed:{
    }

    
})
// el:Element 需要获取的元素 一定是html中根容器元素
// data:用于数据的存储