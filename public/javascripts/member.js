;
$(function() {
  $("#formmember").submit(function() {
    ajax($(this), $(this).attr("action"));
    return false;
  });
  function ajax(obj, path) {
    $.ajax({
      url  : path,//"/config",
      data : obj.serialize(),
      type : "post",
      success : function(data) {
        var json = $.parseJSON(data);
        if (json.code == 1 && json.msg == "登陆成功！") {
          //alert(json.msg);
          window.location.href = "/";
        } else {
          alert(json.msg);
        }
      }
    });
  }
});