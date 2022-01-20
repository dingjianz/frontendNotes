(function (window) {
    function Lyric(path) {
        return new Lyric.prototype.init(path);
    }
    Lyric.prototype = {
        constructor: Lyric,
        init: function (path) {
            this.path = path;
        },
        loadLyric: function () {
            var $this = this;
            $.ajax({
                url: $this.path,
                dataType: "text",
                success: function (data) {
                    $this.parseLyric(data);
                    

                },
                error: function (e) {
                    console.log(e);
                }
            });
        },
        parseLyric:function (data) {
            var array = data.split("\n");
            $.each(array,function (value,ele) {
                // console.log(ele);
                
            })
        }

    }

    Lyric.prototype.init.prototype = Lyric.prototype;
    window.Lyric = Lyric;
})(window);