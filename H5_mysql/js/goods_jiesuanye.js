document.addEventListener('DOMContentLoaded',()=>{

    let order_content =document.querySelector('.order_content');
    let total_text =document.querySelector('.total_text');
    
   
    let xhr = new XMLHttpRequest();

    let statusCode = [200,304];
    xhr.onload = () =>{
        if(statusCode.indexOf(xhr.status)>=0){ 
            console.log(xhr.responseText);
            let goodsAll = JSON.parse(xhr.responseText);
            // let ul = document.createElement('ul');//创建ul
            let goodsAllprices = 0;
            //遍历，生成html结构
            order_content.innerHTML = goodsAll.row2.map((goods)=>{
               
                goodsAllprices += goods.price*goods.goodsnum;
                return ` <ul class="order_lists" index=" ${goods.id}">
                <li class="list_chk">
                    <input type="checkbox" id="checkbox_2" class="son_check">
                    <label for="checkbox_2"></label>
                </li>
                <li class="list_con">
                    <div class="list_img"><a href="javascript:;"><img class="picture1" src="../${goods.imgurl}"></a></div>
                    <div class="list_text"><a href="javascript:;">${goods.title}</a></div>
                </li>
                <li class="list_info">
                    <p>ID</p>
                    <p>${goods.id}</p>
                </li>
                <li class="list_price">
                    <p class="price">￥${goods.price}</p>
                </li>
                <li class="list_amount">
                    <div class="amount_box">
                        <a href="javascript:;" class="reduce reSty">-</a>
                        <input type="text" value="${goods.goodsnum}" class="sum">
                        <a href="javascript:;" class="plus">+</a>
                    </div>
                </li>
                <li class="list_sum">
                    <p class="sum_price">￥${goods.price*goods.goodsnum}</p>
                </li>
                <li class="list_op">
                    <p class="del"><a href="javascript:;" class="delBtn">移除商品</a></p>
                </li>
            </ul> <script src="../js/goods_jiesuanye.js"></script><script src="http://www.jq22.com/jquery/jquery-1.10.2.js"></script><script src="../js/carts.js" type="text/javascript"><\/script>`
            
                
            }).join('');
    

            // order_content.appendChild(ul);
            total_text.innerHTML =  goodsAllprices;//所有商品总价
  
        }
     
    }
    
    xhr.open('get','../api/goods_jiesuanye.php',true);
                  
    //3发送请求
    xhr.send();
    
 
      
 

    //结算页点击，删除对应的商品（通过update）

    // order_content.onclick = e =>{

    //     if(e.target.className === 'delBtn'){
    //             console.log( e.target.parentNode.parentNode.parentNode);
    //         let id = e.target.parentNode.parentNode.parentNode.getAttribute("index");

    //         console.log(id);

    //         xhr.open('get','../api/goods_jiesuanye.php?id='+id,true);

    //         xhr.send();
    //         //删除对应的商品
    //         e.target.parentNode.parentNode.parentNode.parentNode.removeChild(e.target.parentNode.parentNode.parentNode);

    //         location.reload();

    //     }
    //  }
});