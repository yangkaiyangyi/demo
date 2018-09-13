document.addEventListener('DOMContentLoaded',()=>{
console.log(6666)

function GetQueryString(name){
        var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
        var r = window.location.search.substr(1).match(reg);//search,查询？后面的参数，并匹配正则
        if(r!=null)return  unescape(r[2]); return null;
}  

let id = GetQueryString('id')
console.log(id)
//获取页面元素
let goodx = document.querySelector('#goodx');

let goodsBtn = document.querySelector('#goods-btn');

let shopingcar = document.querySelector('#shopingcar');

let car_number = document.querySelector('.car-number');

let shop_jiesuan = document.querySelector('.shop_jiesuan');

console.log(shopingcar)

let xhr = new XMLHttpRequest();
let statusCode = [200,304];
xhr.onload = () =>{
    if(statusCode.indexOf(xhr.status)>=0){ 
        console.log(xhr.responseText);
        let goodsAll = JSON.parse(xhr.responseText);
        let ul = document.createElement('ul');//创建ul
        //遍历，生成html结构
        ul.innerHTML = goodsAll.row.map((goods)=>{
            return `<li class="${goods.id}">
            <img class="picture1" src="../${goods.imgurl}">
            <h3 class="h31">${goods.title}</h3>
            <div>${goods.category}</div>
            <div>原价：<del>${goods.off}</del></div>
            <div >现价: <span class="price">${goods.price}</span></div>
            <div>人气: ${goods.star}</div>
            <div>好评:${goods.hot}</div>
            </li>
            `
        }).join('');
        goodx.appendChild(ul);
        console.log(ul)


        let ul1 = document.createElement('ul');//创建ul
        
        ul1.innerHTML = goodsAll.row2.map((goods)=>{
            console.log(goods)  
            return `<li class="${goods.id}">
            <div class="goods_delete">X</div>
            <img class="picture1" src="../${goods.imgurl}">
            <h3 class="h31">${goods.title}</h3>
            <div >现价: <span class="price">${goods.price}</span></div>
            <div>好评:${goods.hot}</div>
            <div>数量:<span>${goods.goodsnum}</span></div>
            </li>
            `
        }).join('');
        shopingcar.innerHTML='';
        shopingcar.appendChild(ul1)
     

    }
 
}

xhr.open('get','../api/goodslist_xiangqingye.php?id='+id,true);
                
//3发送请求
xhr.send();


//点击添加到购物车

goodsBtn.onclick = ()=>{
    let statusCode = [200,304];
    xhr.onload = () =>{
        if(statusCode.indexOf(xhr.status)>=0){ 
            console.log(xhr.responseText);
            let goodsAll = JSON.parse(xhr.responseText);
            let ul = document.createElement('ul');//创建ul
            //遍历，生成html结构
            ul.innerHTML = goodsAll.row2.map((goods)=>{
                console.log(goods)  
                return `<li class="${goods.id}">
                <div class="goods_delete">X</div>
                <img class="picture1" src="../${goods.imgurl}">
                <h3 class="h31">${goods.title}</h3>
                <div >现价: <span class="price">${goods.price}</span></div>
                <div>好评:${goods.hot}</div>
                <div>数量:<span>${goods.goodsnum}</span></div>
                </li>
                `
            }).join('');
            shopingcar.innerHTML='';
            shopingcar.appendChild(ul);
           
            console.log(ul)
        } 
    }
    xhr.open('get','../api/goodslist_xiangqingye.php?statu=1&id='+id,true);            
    //3发送请求
    xhr.send();
}


// let goods_delete = document.querySelector('.goods_delete');

// console.log(goods_delete);

//在右边购物车点击删除对应的商品（通过update）
shopingcar.onclick = e =>{

        if(e.target.className === "goods_delete"){

            let idx = e.target.parentNode.className;

            console.log(idx);

            xhr.open('get','../api/goodslist_xiangqingye.php?idx='+idx,true);            
            //3发送请求
            xhr.send();
        }

}


//点击右边购物车结算按钮到结算页面
shop_jiesuan.onclick = ()=>{

    // let idx_list = shop_jiesuan.previousElementSibling.children[0].children;

    // for(let i=0;i<idx_list.length;i++){
    //       let idx = idx_list[i].className;

    //       console.log(idx);

       
    // }
   location.href="http://localhost:1992/html/goods_jiesuanye.html?";
   

}


})