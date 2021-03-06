; (function ($, window) {
    //给jQUery添加静态方法
    $.extend({
        addCookie: function (key, value, day, path, domain) {
            var index = window.location.pathname.lastIndexOf("/")
            var currentPath = window.location.pathname.slice(0, index);
            path = path || currentPath;
            domain = domain || document.domain;
            if (!day) {
                document.cookie = key + "=" + value + ";path=" + path + ";domain=" + domain + ";";
            } else {
                var date = new Date();
                date.setDate(date.getDate() + day);
                document.cookie = key + "=" + value + ";expires=" + date.toGMTString() + ";path=" + path + ";domain=" + domain + ";";
            }
        },

        getCookie: function (key) {
            var res = document.cookie.split(";");
            for (var i = 0; i < res.length; i++) {
                var temp = res[i].split("=");
                if (temp[0].trim() === key) {
                    return temp[1];
                }
            }
        },

        delCookie: function (key, path) {
            addCookie(key, getCookie(key), -1, path);
        }


    });

})(jQuery, window);