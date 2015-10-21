var getMenu = function () {
    this.menu = useGetAjax(configObject.getmenu);
};

getMenu.prototype = {
    menu: '',
    MenuContent: function () {
        $("#menus").html(this.menu);
        return this.menu;
    }
};
$(function(){
  var menus = new getMenu();
  menus.MenuContent();
});


//取得資訊
function useGetAjax(url, data){
    var result = '';
    if(typeof data === 'undefined'){
        data = {};
    }
    $.ajax({
       url: url,
       type: "GET",
       data: data,
       async: false,
       dataType: "JSON",
       success: function(rs){
           //console.log(rs);
           if(rs.status){
               result = rs.menu;
           }else{
               console.log('get menu error');
           }
       }
    });
    return result;
}