(function (window) {
    function voiceProgress($music_voice_bar, $music_voice_line, $music_voice_dot) {
        return new voiceProgress.prototype.init($music_voice_bar, $music_voice_line, $music_voice_dot);
    }
    voiceProgress.prototype = {
        constructor: voiceProgress,
        init: function ($music_voice_bar, $music_voice_line, $music_voice_dot) {
            this.$music_voice_bar = $music_voice_bar;
            this.$music_voice_line = $music_voice_line;
            this.$music_voice_dot = $music_voice_dot;
        },
        voiceProgressClick: function () {
            var $this = this;//this 等于 voiceprogress
            $this.$music_voice_bar.click(function (event) {
                var event = event || window, event;
                //console.log(this);//this是一个原生js对象
                var normalLeft = $(this).offset().left;
                var eventLeft = event.pageX;
                $this.$music_voice_line.css('width', eventLeft - normalLeft);
                $this.$music_voice_dot.css('left', eventLeft - normalLeft);

            });
        }
    }
    voiceProgress.prototype.init.prototype = voiceProgress.prototype;
    window.voiceProgress = voiceProgress;


})(window);