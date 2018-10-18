// var shopCar=(function(){
//     return{
//         init:function(ele){
//             this.$ele=document.querySelector(ele);
//             this.event();
//             this.getShopList();
//         },
//         event:function(){
//             var _this=this;
//             this.$ele.oninput=function(e){
//                 if(e.target.className=='shop-count-td'){
//                     //获取商品总价
//                     var _parent=e.target.parentNode;
//                     _parent.querySelector('.shop-total-td').innerHTML=e.target.value * _parent.querySelector('.shop-price-td').innerHTML;
//                 }
//             }
//         },
//         //获取商品数据
//         getShopList:function(){
//             var _this=this;
//             var params={
//                 url:'json/shop.json',
//                 success:function(data){
//                     //把商品数据放到实例的属性上
//                     _this.ShopList=data.data;
//                     _this.getData();
//                 }
//             }
//             sendAjax(params);
//         },
//         //获取购物车数据
//         getData:function(){
//             this.carShopList=JSON.parse(localStorage.ShopList||'[]');
//             this.insertData(this.carShopList);
//         },
//         //把购物车数据添加到页面中
//         insertData:function(data){
//             var arr=[];
//             for(var i=0;i<data.length;i++){
//                 //通过id获取商品信息
//                 var shop;
//                 for(var j=0;j<this.ShopList.length;j++){
//                     if(this.ShopList[j].id==data[i].id){
//                         //获取商品信息
//                         shop=this.ShopList[j];
//                         break;
//                     }
//                 }
//                 arr.push(`<table class="commodity container">
//                             <thead>
//                                 <tr>
//                                     <td><input type="checkbox" name="checkbox"/>全选</td>
//                                     <td class="shop-name">商品名称</td>
//                                     <td class="shop-price">单价</td>
//                                     <td class="shop-count">数量</td>
//                                     <td class="shop-total">小计</td>
//                                     <td>操作</td>
//                                 </tr>
//                             </thead>
//                         </table>`)
//             }
//             this.$ele.innerHTML=arr.join('');
//         }
//     }
// }());
var jia_jian=(function(){
    return{
        init:function(){
            this.event();
        },
        event:function(){
            var $jian=$(".jian");
            $jian.click(function(){
                
                $(this).next()[0].value--;  
                
                if( $(this).next()[0].value<=0){
                    $(this).next()[0].value=0;
                }
                var $value= $(this).next()[0].value;
                var $price=$(this).parent().parent().prev()[0].innerHTML;
                console.log($price);
                $price=parseInt($price);
                var $total=$(this).parent().parent().next()[0].innerHTML;
                $total=parseInt($total);
                $(this).parent().parent().next()[0].innerHTML=$price * $value+"元";
            })
            var $jia=$('.jia');
            console.log($jia);
            $jia.click(function(){
                $(this).prev()[0].value++;
                var $value= $(this).prev()[0].value;
                console.log($value);
                var $price=$(this).parent().parent().prev()[0].innerHTML;
                $price=parseInt($price);
                console.log($price);
                var $total=$(this).parent().parent().next()[0].innerHTML;
                $total=parseInt($total);
                console.log($total);
                $(this).parent().parent().next()[0].innerHTML=$price * $value+"元";
                console.log($total);
            })
        }
    }
}());
var delet=(function(){
    return{
        init:function(){
            this.event();
        },
        event:function(){
            var $img_delet=$(".img-delet");
            $img_delet.click(function(){
                $(this).parent().parent().remove();
            })
        }
    }
}());
var check_all=(function(){
    return{
        init:function(){
            this.event();
        },
        event:function(){
            var $checkall=$("#checkall");
            console.log($checkall);
            $("#checkall").click(function(){
                // console.log(11111)
                if($("#checkall").prop("checked")){
                    $("input[type='checkbox'][name='checkedres']").prop("checked",true);
                }
                else{
                    $("input[type='checkbox'][name='checkedres']").prop("checked",false);
                }
                // console.log($(".checkedres"))
                // for(var i=0;i<$(".checkedres").length;i++){
                //     console.log($(".checkedres")[i],i);
                //     if($(".checkedres")[i].checked==true)
                //      $(".checkedres")[i].click();
                // }
               
            })
            var $checkedres=$(".checkedres");
            console.log($checkedres);
            $checkedres.click(function(){
                if(!$(".checkedres").checked){
                    $("#checkall").prop("checked",false);

                }
                var chsub=$("input[type='checkbox'][name='checkedres']").length;
                var checkedsub=$("input[type='checkbox'][name='checkedres']:checked").length;
                if(checkedsub==chsub){
                    $("#checkall").prop("checked",true);
                }
            })
            
        }
    }
}());
var enter_joincar=(function(){
    return{
        init:function(){
            this.event();
        },
        event:function(){
            var $shop_img=$('.shop-img');
            console.log($shop_img);
            $('.shop-img').mouseenter(function(){
                $(this).children(".join-car").fadeIn();
            })
            $('.shop-img').mouseleave(function(){
                $(this).children(".join-car").fadeOut();
            })
        }
    }
}());
var account=(function(){
    return{
        init:function(){
            this.event();
        },
        event:function(){
            var $amount_money=$('.amount-money');
            console.log($amount_money);
            // var $shop_total=$('.shop-total-id')[0].innerHTML;
            $("input:checkbox").click(function(){
                var sum=0;
                $("input:checkbox:checked").each(function(){
                    var i=parseInt($(this).parent().nextAll('.shop-total-td').html());
                    //  console.log(i.toString());
                     i=i.toString();
                     if(i==="NaN"){
                        // console.log(444)
                    }else{
                       
                        sum+=i*1;
                    }
                    
                    // console.log(sum)
                })
                $amount_money.html(sum);
            })
        }
    }
}());