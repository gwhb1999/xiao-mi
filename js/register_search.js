var search=(function(){
    var timer=null;
    return{
        init:function(ele){
            this.$ele=document.querySelector(ele);
            this.$searchInp=this.$ele.querySelector('.inp');
            this.$resultList=this.$ele.querySelector('.search-list');
            this.event();
        },
        event:function(){
            var _this=this;
            this.$searchInp.onblur=function(){
                $resultList.on("click","li",function(){
                    $resultList.val($(this).text());
                });
            }
            this.$resultList.onclick=function(ele){
                ele=ele||window.event;
                var target=ele.target||ele.srcElement;
                if(target.nodeName==='LI'){
                    _this.$searchInp.value=target.innerHTML;

                }
            }
        }
    }
}())