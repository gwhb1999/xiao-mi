var move=(function(){
    return {
        init:function(_box,_showbox,_tag,_showtags,_left,_right,_dist){
            this._box=_box;
            this.showbox=_showbox;
            this._tag=_tag;
            this._showtags=_showtags;
            this._left=_left;
            this._right=_right;
            this._dist=_dist;
            var _this=this;
            this.index=0;
            this.event();
            this.autoPlay();
            if(_showtags){
                 for(var i=0;i<_showtags.length;i++){
                        _showtags[i].index=i;
                    }
            }
            var first=_showbox.firstElementChild;
            var last=_showbox.lastElementChild.cloneNode(true);
            _showbox.appendChild(first.cloneNode(true));
            _showbox.insertBefore(last,first);
            _showbox.style.left="-"+_dist+"px";
        },
        event:function(){
            var _this=this;
            // this._box.onmouseenter=function(){
            //     _this.stop();
            // };
            // this._box.onmouseleave=function(){
            //     _this.autoPlay();
            // };
            if(this._tag){
                this. _tag.onmousedown=function(e){
                e=e||window.event;
                var target=e.target||e.srcElement;
                if(target.nodeName=='LI'){
                    console.log(target.index);
                    _this.showImage(target.index,0);
                }
            };
            }
           
            if(this._left){
                this. _left.onmousedown=function(){
                _this.index--;
                _this.showImage(_this.index);
            };
            }
           if(this._right){
                this._right.onmousedown=function(){
                _this.index++;
                _this.showImage(_this.index);
            };
           }
           

        },
        showImage:function(index,time){
            var _this=this;
            if(index>_showtags.length-1){
                index=0;
               _showbox.style.left=0;
            }
            else if(index<0){//不能等于0，否则点击1时会显示最后一张
                index=_showtags.length-1;
                _showbox.style.left=-(_showtags.length+1)*this._dist+'px';
            }
            this.index=index;
            for(var i=0;i<_showtags.length;i++){
                _showtags[i].className='';
            }
            this.moved(_showbox,'left',-(this.index+1)*_this._dist,time);
            _showtags[this.index].className='active';
        },
        autoPlay:function(){
            var _this=this;
            clearInterval(this._box.timer);
            this._box.timer=setInterval(function(){
                _this.index++;
                _this.showImage(_this.index,500);
            },5000);
        },
        stop:function(){
            var _this=this;
            clearInterval(this._box.timer);
        },
        getStyle:function(ele,attr){
            if(window.getComputedStyle){
                return window.getComputedStyle(ele,null)[attr];
            }
            return ele.currentStyle[attr];
        },
        moved:function(ele,attr,target,time){
            var _this=this;
            var timer=null;
            if(typeof ele=='string'){
                ele=document.querySelector(ele);
            }
            var init=parseInt(this.getStyle(ele,attr));
            var speed=(target-init)/(time/10);
            clearInterval(timer);
            timer=setInterval(function(){
                var init=parseInt(_this.getStyle(ele,attr));
                init+=speed;
                if(speed>0&&init>=target||speed<0&&init<=target){
                    init=target;
                    clearInterval(timer);
                }
                ele.style[attr]=init+'px';
            },10);
        }
    }
}());