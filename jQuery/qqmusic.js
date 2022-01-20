$(function () {
    var $audio = $("audio");
    var player = new Player($audio);
    // 1.加载歌曲列表
    getPlayerList();
    function getPlayerList() {
        $.ajax({
            url: "musiclist.json",
            dataType: "json",
            success: function (data) {
                player.musicList = data;
                // 3.1遍历获取到的数据, 创建每一条音乐
                var $musicList = $('.content_list ul');//优化代码，不需要每次查找，写在.each里每次查找     
                $.each(data, function (index, music) {
                    var $item = creatMusicItem(index, music);
                    $musicList.append($item);
                });
                initMusicInfo(data[0]);
                initMusicLyric(data[0]);

            },
            error: function (error) {
                console.log(error);
            }
        });
    };
    //定义页面初始化信息
    function initMusicInfo(music) {
        var $song_info_pic = $('.song_info_pic img');
        var $song_info_name = $('.song_info_name a');
        var $song_info_singer = $('.song_info_singer a');
        var $song_info_ablum = $('.song_info_ablum a');
        var $music_progress_name = $('.music_progress_name');
        var $music_progress_time = $('.music_progress_time');
        var $mask_bg = $('.mask_bg');

        $song_info_pic.attr('src', music.cover);
        $song_info_name.text(music.name);
        $song_info_singer.text(music.singer);
        $song_info_ablum.text(music.album);
        $music_progress_name.text(music.name + ' / ' + music.singer);
        $music_progress_time.text('00:00 / ' + music.time);
        $mask_bg.css('background', 'url(' + music.cover + ')');//还是需要平铺的
    };
    //定义歌词
    function initMusicLyric(music){
        var lyric = new Lyric(music.link_lrc);
        lyric.loadLyric();
    };

    // 4.初始化进度条
    initProgress();
    function initProgress() {
        var $progressBar = $(".music_progress_bar");
        var $progressLine = $(".music_progress_line");
        var $progressDot = $(".music_progress_dot");
        progress = new Progress($progressBar, $progressLine, $progressDot);
        progress.progressClick(function (value) {
            player.musicSeekTo(value);
        });
        progress.progressMove(function (value) {
            player.musicSeekTo(value);
        });
        var $voiceBar = $(".music_voice_bar");
        var $voiceLine = $(".music_voice_line");
        var $voiceDot = $(".music_voice_dot");
        voiceProgress = Progress($voiceBar, $voiceLine, $voiceDot);
        voiceProgress.progressClick(function (value) {
            player.musicVoiceSeekTo(value);
        });
        voiceProgress.progressMove(function (value) {
            player.musicVoiceSeekTo(value);
        });
    }

    // 5.初始化事件监听
    initEvents();
    function initEvents() {
        $(function () {
            $(".content_list").mCustomScrollbar();
            $('body').delegate('.list_music', 'mouseenter', function () {
                // 显示子菜单
                $(this).find(".list_menu").stop().fadeIn(100);
                $(this).find(".list_time a").stop().fadeIn(100);
                // 隐藏时长
                $(this).find(".list_time span").stop().fadeOut(100);

            });
            $('body').delegate('.list_music', 'mouseleave', function () {

                $(this).find(".list_menu").stop().fadeOut(100);
                $(this).find(".list_time a").stop().fadeOut(100);
                $(this).find(".list_time span").stop().fadeIn(100);
            });
            //歌曲前复选框点击
            $('body').delegate('.list_check', 'click', function () {
                $(this).toggleClass('list_checked');
            });

            // 播放按 钮点击事件
            var $musicPlay = $(".music_play");
            $('body').delegate('.list_menu_play', 'click', function () {
                var $item = $(this).parents(".list_music");
                $(this).toggleClass('list_menu_play2');
                $item.siblings().find('.list_menu_play').removeClass('list_menu_play2');
                if ($(this).hasClass('list_menu_play2')) {
                    //播放状态
                    $('.music_play').addClass('music_play2');
                    //文字高亮
                    $item.find('div').css('color', 'rgba(255,255,255,1)');
                    $item.siblings().find('div').css('color', 'rgba(255,255,255,0.5)');
                    //$item.find('.list_number').addClass('list_number2');
                    //$item.siblings().find('.list_number').removeClass('list_number2');
                } else {
                    //不是播放状态
                    $musicPlay.removeClass('music_play2');
                    //文字灰暗
                    $item.find('div').css('color', 'rgba(255,255,255,0.5)');
                    // $('.list_number').removeClass('list_number2');
                }
                // 3.4切换序号的状态  比上面注释部分高效很多 切换类的时候可以这么写
                $item.find(".list_number").toggleClass("list_number2");//当前切换模式
                $item.siblings().find(".list_number").removeClass("list_number2");//其他的肯定全部灰暗
                // 3.5播放音乐
                player.playMusic($item.get(0).index, $item.get(0).music);
                console.log($('.list_music').length);//为什么13
                console.log($('.list_music'));
                // 3.6切换歌曲信息
                initMusicInfo($item.get(0).music);

            });
            console.log($('.list_music').length);//为什么0
            console.log($('.list_music'));


            //4.监听footer 里播放按钮点击
            $musicPlay.click(function () {
                if (player.currentIndex == -1) {
                    //没有播放过音乐
                    $('.list_music').eq(0).find('.list_menu_play').trigger('click');
                } else {
                    //播放过音乐
                    $('.list_music').eq(player.currentIndex).find('.list_menu_play').trigger('click');
                }
                console.log($('.list_music').length);//为什么13

            });

            //5.监听footer 里上一首播放按钮点击
            $('.music_pre').click(function () {
                if (player.currentIndex - 1 < 0) {
                    player.currentIndex = $('.list_music').length;
                }
                $('.list_music').eq(player.currentIndex - 1).find('.list_menu_play').trigger('click');
                console.log(('.list_music').length);


            });

            //6.监听footer 里下一首播放按钮点击
            $('.music_next').click(function () {
                if (player.currentIndex + 1 > $('.list_music').length - 1) {
                    player.currentIndex = -1;
                }
                $('.list_music').eq(player.currentIndex + 1).find('.list_menu_play').trigger('click');
            });

            //7.删除音乐
            $('body').delegate('.list_menu_del', 'click', function () {
                var $item = $(this).parents('.list_music');
                // 判断当前删除的是否是正在播放,不能写到重新排序之后，currentIndex会变
                if ($item.get(0).index == player.currentIndex) {
                    $('.music_next').trigger('click');
                };
                $item.remove();
                //删除后台对相应的数据
                player.changeMusic($item.get(0).index);
                //重新排序,剩下的 $('.list_music')数组排序
                $('.list_music').each(function (index, ele) {
                    //    $item.get(0).index = index;
                    ele.index = index;
                    $(ele).find('.list_number').text(index + 1);
                });

            })
        });
        //8.0 同步进度条与歌曲时间
        player.musicTimeUpdate(function (currentTime, duration, strTime) {
            $('.music_progress_time').text(strTime);
            //同步时间
            var value = currentTime / duration*100;
            //同步进度条
            progress.setProgress(value);
        });
        //9.0监听点击声音按钮
        $('.music_voice_icon').click(function () {
            $(this).toggleClass('music_voice_icon2');
            if ($(this).hasClass('music_voice_icon2')){
                //静音状态
                player.musicVoiceSeekTo(0);
            }else{
                player.musicVoiceSeekTo(1);
                
            }
        });
       
        //10.监听删除按钮
        $('.content_toolbar .dele').click(function () {
            if ($('audio').get(0).paused) return;
            $('.list_music').eq(player.currentIndex).find('.list_menu_del').trigger('click');
        });

    }
    // 定义一个方法创建一条音乐
    function creatMusicItem(index, music) {
        var $item = $('<li class= "list_music"><div class= "list_check"><i></i></div><div class="list_number">' + (index + 1) + '</div><div class="list_name">' + music.name + '<div class="list_menu"><a href="javascript:;" title="播放" class="list_menu_play"></a><a href="javascript:;" title="添加"></a><a href="javascript:;" title="下载"></a><a href="javascript:;" title="分享"></a></div></div><div class="list_singer">' + music.singer + '</div><div class="list_time"><span>' + music.time + '</span><a href="javascript:;" title="删除" class="list_menu_del"></a></div></li>');
        $item.get(0).index = index;//很重要，将歌曲index 和music信息全部绑在每个原生li上
        $item.get(0).music = music;

        return $item;
    }
});