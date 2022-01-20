(function (window, undefined) {
    var njQuery = function (selector) {
        return new njQuery.prototype.init(selector);
    }
    njQuery.prototype = {
        //实例方法
        constructor: njQuery,
        init: function (selector) {
            // 0.去除字符串两端的空格
            selector = njQuery.trim(selector);
            // 1.传入 '' null undefined NaN  0  false, 返回空的jQuery对象
            if (!selector) {
                return this;
            }
            //2.0 传入的是函数方法
            else if(njQuery.isFunction(selector)){
                njQuery.ready(selector);
            }
            
            //3.0判断是否传入字符串 
            else if (njQuery.isString(selector)) {
                //3.1判断是否第是代码片段
                if (njQuery.isHTML(selector)) {
                    var temp = document.createElement('div');
                    temp.innerHTML = selector;
                    /* for (var i = 0; i < temp.children.length; i++) {
                         this[i] = temp.children[i];
                     };
                     this.length = temp.children.length;//注释部分等同于下一行*/

                    [].push.apply(this, temp.children);
                    // 此时此刻的this是njQuery对象实例
                    // 4.返回加工好的this(jQuery)
                    // return this;
                } else {
                    //3.2判断是否第是选择器
                    var res = document.querySelectorAll(selector);
                    [].push.apply(this, res);
                    // return this;
                }
            }

            //4.0判断是否是数组
            else if (njQuery.isArray(selector)) {
                /* if ({}.toString.apply(selector) == '[object Array]'){
                     //4.1 真数组  转化为jquery对象,其实jquery对象就是伪数组
                     [].push.apply(this,selector);
                     return this;
                 }else{
                     //4.2 假数组
                     //首先将假数组转换为真数组，再转成jquery对象，建议，因为低版本ie不支持  [].push.apply(this,selector);
                     // [].push.apply(this,selector); IE8及以下不支持
                     var arr = [].slice.apply(selector);
                     [].push.apply(this,arr);
                     return this;
 
                 }*/
                //以上代码可优化成以下，无论真伪数组先转换成真数组，再传给this
                var arr = [].slice.apply(selector);
                [].push.apply(this, arr);
                // return this;
            } else {
                //4.0 除以上4种类型外，直接存在this中
                this[0] = selector;
                this.length = 1;
            }
            return this;

        },
        jquery: "1.1.0",
        selector: "",
        length: 0,
        // [].push找到数组的push方法
        // 冒号前面的push将来由njQuery对象调用
        // 相当于 [].push.apply(this);
        push: [].push,
        sort: [].sort,
        splice: [].splice,
        toArray:function () {
            return [].slice.apply(this);//谁调用toArray方法，this就指向谁
        },
        get:function (num) {
            if(arguments.length===0){
                return this.toArray();
            }else if(num>=0){
                return this[num];
            }else{
                return this[this.length+num];
            }
        },
        eq:function (num) {
            if(arguments.length ===0){
                return $();
            }else{
                return $(this.get(num));
            }
        },
        first:function () {
            return this.eq(0);
        },
        last:function () {
            return this.eq(-1);
        }

    };
    njQuery.extend = njQuery.prototype.extend = function (obj) {
            for(var key in obj){
                this[key] = obj[key];
            }
            
    };
    //以下为njQuery的静态方法 实例方法njQuery.prototype.extend({})加入
    njQuery.extend({
        trim: function (str) {
            //只有字符串才能执行以下操作，不是就返回
            if (!njQuery.isString(str)) {
                return str;
            }
            if (str.trim) {
                return str.trim();
            } else {
                return str.replace(/^\s+|\s+$/g, '');//replace方法只能字符串调用
            }
        },
        isHTML: function (str) {
            return str.charAt(0) == '<' && str.charAt(str.length - 1) == '>' && str.length >= 3;
        },
        isObject: function (sele) {
            return typeof sele === "object"
        },
        isString : function (str) {
            return typeof str === "string";
        },
        isArray : function (str) {
            return typeof str == 'object' && str != window && "length" in str;
        },
        isFunction: function (sele) {
            return typeof sele === "function";
        },
        ready: function (fn) {
            // 判断DOM是否加载完毕
            if (document.readyState == "complete") {
                fn();
            } else if (document.addEventListener) {
                document.addEventListener("DOMContentLoaded", function () {
                    fn();
                });
            } else {
                document.attachEvent("onreadystatechange", function () {
                    if (document.readyState == "complete") {
                        fn();
                    }
                });
            }
        },
        each:function (obj,fn) {
            if(njQuery.isArray(obj)){
                for(var i =0;i<obj.length;i++){
                    fn(i,obj[i]);
                }
            }else if(njQuery.isObject(obj)){
                for (var key in obj){
                    fn(key,obj[key]);
                }
            }
        }
    });

    njQuery.prototype.init.prototype = njQuery.prototype;
    window.njQuery = window.$ = njQuery;
})(window)