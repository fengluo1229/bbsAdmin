$(function()  {
    var $user = JSON.parse(sessionStorage.user);
    if($user.authority == 2){
            $("#addManage-page").show();
    }else{
           $("#addManage-page").hide(); 
    }
})