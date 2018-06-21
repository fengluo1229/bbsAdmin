$($.ajax({
    url:"http://192.168.2.164:8080/admin/administrator",
    type:"get",
    dataType:"json",
    success:function(data){
        var trs = "<table class=\"table  table-striped table-bordered\"><tr><th>用户名</th><th>操作</th></tr>";
        $.each(data.data,function(n,value){
            trs+="<tr><td>"+value.userName+"</td><td><button class=\"btn btn-danger\" onclick='remove(\""+value.userName+"\")'>移除管理员</button></td></tr>";
        });
        trs+="</table>"
        $("#result").append(trs);
    },
    error:function(){
        alert("error");
    }
}));
function addAdministrator(){
$.ajax({
url:"http://192.168.2.164:8080/admin/addAdministrator",
type:"post",
data:{
    userName:$("#userName").val(),
},
dataType:"json",
success:function(data){
    alert(data.message);
    location.reload();
}
})
};
function remove(userName){
$.ajax({
url:"http://192.168.2.164:8080/admin/removeAdministrator",
type:"post",
data:{
    userName:userName,
},
dataType:"json",
success:function(data){
    alert(data.message);
    location.reload();
}
})
};