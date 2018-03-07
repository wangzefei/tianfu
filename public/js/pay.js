$(function(){
    //出现浮动层
    $(".ljzf_but").click(function(){
        $(".ftc_wzsf").show();
    });
    //关闭浮动
    $(".close").click(function(){
        $(".ftc_wzsf").hide();
    });
    //数字显示隐藏
    $(".xiaq_tb").click(function(){
        $(".numb_box").slideUp(500);
    });
    $(".mm_box").click(function(){
        $(".numb_box").slideDown(500);
    });
    //----
    var i = 0;
	var pwd="";
    $(".nub_ggg li a").click(function(){
        i++
        if(i<6){
            $(".mm_box li").eq(i-1).addClass("mmdd");
            console.log("输入之前："+pwd);
            pwd+=$(this).text();
            console.log("输入之后："+pwd);
        }else if(i==6 ){

            $(".mm_box li").eq(i-1).addClass("mmdd");
            console.log("输入之前："+pwd);
            pwd+=$(this).text();
            console.log("输入之后："+pwd);
            setTimeout(function(){
                //密码输入完成后跳转的页面
                //密码正确
              //location.href="pay-word-true.html";
                //密码错误
              location.href="pay-word-flase.html";
				console.log("最终："+pwd);
            },500);
        }
    });

    $(".nub_ggg li .del").click(function(){

        if(i>0){
            i--
            $(".mm_box li").eq(i).removeClass("mmdd");
            i==0;
            console.log("删除之前："+pwd);
            pwd=pwd.substring(0,pwd.length-1);
            console.log("删除之后："+pwd);
        }
        //alert(i);

    });

});