document.addEventListener('DOMContentLoaded',()=>{
    //获取页面元素
    let form = document.querySelector('.form');
    let username = document.querySelector('#username');
    let password = document.querySelector('#password');
    let btnReg = document.querySelector('.btnReg');

    

    //1.创建请求对象 用户失去焦点的时候判断用户注册名是否已经存在
    let xhr = new XMLHttpRequest();
    //状态码
    let statusCode = [200,304];
    //4.用户失去焦点的时候判断用户注册名是否已经存在,接收服务器返回内容
    xhr.onload = ()=>{
        if(statusCode.indexOf(xhr.status)>=0){
            let res = xhr.responseText;

					// 获取父元素
					let formGroup = username.parentNode;
					let txt = formGroup.querySelector('.help-block');
					let icon = formGroup.querySelector('.form-control-feedback');

					if(res === 'no'){
						formGroup.classList.remove('has-success');
						icon.classList.remove('sr-only','glyphicon-ok');
						icon.classList.add('glyphicon-remove');
						formGroup.classList.add('has-error','has-feedback');
						txt.innerText = '用户名太受欢迎';
					}else if(res === 'yes'){
						formGroup.classList.remove('has-error');
						icon.classList.remove('sr-only','glyphicon-remove');
						icon.classList.add('glyphicon-ok');
						formGroup.classList.add('has-success','has-feedback');
						txt.innerText = '';
					}

        }
    }


    //2/3.用户失去焦点的时候判断用户注册名是否已经存在
    username.onblur = ()=>{

        //2>.与服务器建立联系，传参
        xhr.open('get','../api/check_user.php?username='+username.value,true);

        //3>.发送请求
        xhr.send();


    }
   

    //.1>判断用户名和密码ok的情况下，实现注册功能
    let xhr_reg = new XMLHttpRequest();

    //4.判断用户名和密码ok的情况下，实现注册功能
			xhr_reg.onload = function(){
				if(statusCode.indexOf(xhr_reg.status)>=0){
					let res = xhr_reg.responseText;
					if(res === 'success'){
						location.href = 'reg_index.html';
					}else{
						alert('注册失败');
					}
				}
			}

    //./2/3判断用户名和密码ok的情况下，实现注册功能
    btnReg.onclick = ()=>{

        // 获取用户名，密码
        let _username = username.value;
        var _password = password.value;
        //以下用到了es6拼接
        xhr_reg.open('get',`../api/reg.php?username=${_username}&password=${_password}`,true);

        xhr_reg.send();
    }

















})