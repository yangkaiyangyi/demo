document.addEventListener('DOMContentLoaded',()=>{
    //1，获取页面元素
    let btnAll = document.querySelector('.btnAll');
    let goodslist = document.querySelector('#goodslist');
    

    //ajax
    //1.创建请求对象
    let xhr = new XMLHttpRequest();

    //4.处理服务器返回的信息（<---.php传输信息）
    //声明状态码
    let statusCode = [200,304];

    //处理
    xhr.onload = () =>{
        if(statusCode.indexOf(xhr.status)>=0){ 
            console.log(xhr.responseText);
            let goodsAll = JSON.parse(xhr.responseText);
           
            let ul = document.createElement('ul');//创建ul

            //遍历，生成html结构
            ul.innerHTML = goodsAll.map((goods)=>{
                
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

            goodslist.innerHTML = '';
            goodslist.appendChild(ul);


            //点击传送id到详情页
            goodslist.onclick = e =>{
                // console.log(goodslist)
                    
                    
                        if(e.target.className === 'picture1' || e.target.className === 'h31'){
                            
                            //获取当前li标签的id
                        let id =  e.target.parentNode.className;

                        console.log(id)
                        
                        location.href="../html/goodslist_xiangqingye.html?id="+id;
                        }
                
                    
                  }
                
            
        }
    }
      
    //2.与服务器建立链接，传参
    xhr.open('get','../api/goodslist.php',true)//异步

    //3.发送请求
    xhr.send();//--->goodslist.php


    //点击事件排序
    let desc = false;//声明排序
    //事件委托
    btnAll.onclick = e =>{
        //价格排序
        if(e.target.className === 'price'){
            desc = !desc;//排序
            //与服务器建立联系，传参
            xhr.open('get','../api/goodslist.php?sort=price' + (desc?'&desc':''),true);

            //发送请求
            xhr.send();

        }
        //人气排序
        if(e.target.className === 'hot'){
            desc = !desc;//排序
            //与服务器建立联系，传参
            xhr.open('get','../api/goodslist.php?sort_hot=star' + (desc?'&desc':''),true);

            //发送请求
            xhr.send();

        }
        //好评排序
        if(e.target.className === 'reput'){
            desc = !desc;//排序
            //与服务器建立联系，传参
            xhr.open('get','../api/goodslist.php?sort_reput=hot' + (desc?'&desc':''),true);

            //发送请求
            xhr.send();

        }

    }

    // 

  






})