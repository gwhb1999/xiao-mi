var enter_leave_car=(function(){
    return{
        init:function(){
            this.event();
        },
        event:function(){
            $(".shop-car").mouseenter(function(){
                $(".car-show").slideDown("slow")
            })
            $(".shop-car").mouseleave(function(){
                $(".car-show").slideUp("slow")
            })
        }
    }
}());
// var enter_leave_fic=(function(){
//     return{
//         init:function(){
//             this.event();
//         },
//         event:function(){
//             $(".classification").mouseenter(function(){
//                 $(".fic-son").slideDown("100")
//             })
//             $(".classification").mouseleave(function(){
//                 $(".fic-son").slideUp("100")
//             })
//         }
//     }
// }());
var enter1=(function(){
    return {
        init:function(){
            this.event();
        },
        event:function(){
            var $all=$('.all');
            console.log($all);
            $all.mouseenter(function(){
                $(".vv").show();
                var htmlcon=$(this).children(".qw").html();
                console.log(htmlcon);
                $(".vv").html(htmlcon);
            })
            $all.mouseleave(function(){
                $(".vv").hide();
            })
        }
    }
}());
var enter_nav=(function(){
    return{
        init:function(){
            this.event();
        },
        event:function(){
            var $alls=$('.alls');
            $alls.mouseenter(function(){
                $(".qq").slideDown("100");
                $(".qq").show();
                var htmlcon=$(this).children(".qw").html();
                $(".qq").html(htmlcon);
            })
            $alls.mouseleave(function(){
                $(".qq").hide();
            })
        }
    }
}());
var change_fid=(function(){
    return{
        init:function(){
            this.event();
        },
        event:function(){
            var $change=$('.change');
            $change.click(function(){
                $('.change-show').fadeIn("200");
                $('.change-show-box').fadeIn("200");
            })
            var $close=$('.close');
            $close.click(function(){
                $('.change-show').fadeOut("200");
                $('.change-show-box').fadeOut("200");
            })
        }
    }
}());
var addcss=(function(){
    return{
        init:function(){
            this.event();
        },
        event:function(){
            var $ver=document.querySelector(".ver");
            console.log($ver);
            $ver.addEventListener("click",function(e){
                var e=e||window.event;
                var target=e.target||e.srcElement;
                var $liall=document.querySelectorAll(".ver li");
                for(var i=0;i<$liall.length;i++){
                    $($liall[i]).css({border:"1px solid #b0b0b0",color:"black"});
                }
                if(target.nodeName=="LI"){
                    $(target).css({border:"1px solid #ff6700",color:"#ff6700"});
                }
            })
        }
    }
}());
var back = (function () {
    return {
        init: function () {
            this.event();
        },
        event: function () {
            var $box = document.querySelector('.container');
            var $up = document.querySelector('.up');
            window.onscroll = function () {
                var top = document.documentElement.scrollTop;
                if (top >= 100) {
                    $up.style.display = 'block';
                } else {
                    $up.style.display = 'none';
                }
            }
            $up.onclick = function () {
                var timer = setInterval(function () {
                    var top = document.documentElement.scrollTop - 20;
                    if (top <= 0) {
                        top = 0;
                        clearInterval(timer);
                    }
                    document.documentElement.scrollTop = top;
                }, 10)
            }
        }
    }
}());