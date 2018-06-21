$($.ajax({
    url:"http://192.168.2.164:8080/admin/allArticleNum",
    type:"get",
    dataType:"json",
    success:function (data) {
        $("#articleNum").text(data.data);
    }
}));
$($.ajax({
    url:"http://192.168.2.164:8080/admin/allUserNum",
    type:"get",
    dataType:"json",
    success:function (data) {
        $("#userNum").text(data.data);
    }
}));
$($.ajax({
    url:"http://192.168.2.164:8080/admin/allReplyNum",
    type:"get",
    dataType:"json",
    success:function (data) {
        $("#replyNum").text(data.data);
    }
}));
$(

)