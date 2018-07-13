
var getData = (function(){
    return {
        init : function(){
            this.getinfor()
            this.event()
        },
        getinfor : function () {
            $.ajax({
                url : '../json/data.json',
                dataType : 'json',
                success : function (json) {
                    var json = json.shop
                    var arr = []
                    for(var i = 0; i < json.length; i++){
                        var str = `
                        <li data-id="${json[i].id}">
                            <p class="title">${json[i].intro}</p>
                            <p class="price">价格：￥${json[i].price}</p>
                            <p class="del">参考价：<del>￥${json[i].del}</del></p>
                            <p><a class="del_btn" href="##">删除</a></p>
                        </li>
                        <div class="alert_box">
                            <div class="alert_title">确定删除吗？</div>
                            <a href="##" class="yes">确定</a>
                            <a href="##" class="no">取消</a>
                        </div>
                        `
                        arr.push(str)
                    }
                    $('.list').html(arr)
                }
            })          
        },
        event : function () {
            $('.list').on('click','.del_btn',function(){
                $('.alert_box').css('display','block')
                $('body').css('background','#eee')
            })
            $('.list').on('click','.no',function(){
                $('.alert_box').css('display','none')
                $('body').css('background','')
            })
            $('.list').on('click','.yes',function(){
                $('.alert_box').css('display','none')
            })
        }
    }
})()        
getData.init()










// function demo_ajax () {
    // 	var xhr = new XMLHttpRequest();
    // 	xhr.open('Get','../json/data.json',true);
    // 	xhr.send(null);
    // 	xhr.onreadystatechange = function () {
    // 		if(xhr.readyState == 4 && xhr.status == 200){
    //             var json = xhr.responseText;
    //             json = JSON.parse(json);
    // 			for(var i = 0; i < json.length; i++){
    //                 var arr = []
    //                 var str = `
    //                 <li data-id="${json[i].shop.id}">
    //                     <p class="title">${json[i].shop.intro}</p>
    //                     <p class="price">价格：￥59</p>
    //                     <p class="del">参考价：<del>￥79</del></p>
    //                     <p><a class="del_btn" href="##">删除</a></p>
    //                 </li>
    //                 <div class="alert_box">
    //                     <div class="alert_title">确定删除吗？</div>
    //                     <a href="##" class="yes">确定</a>
    //                     <a href="##" class="no">取消</a>
    //                 </div>
    //                 `
    //                 arr.push(str)
    //             }
    //             $('.list').html(arr)
    // 		}
    // 	}
    // }
    // demo_ajax ()