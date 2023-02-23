$(function(){
    //h1.title을 클릭시 음악 목록이 나오돍 한다
    $("h1.title").click(function(){
        $("ul.music-list").slideDown('slow')
    });

    //곡선택시 이벤트
    $("ul.music-list li").click(function(){
       //노래 제목을 얻어서 h1.title에 넣기
       let title=$(this).text();
       $("h1.title").text(title);

       //class를 얻어서 #cd에 class로 주기
       let selectClass=$(this).attr("class");
      // $("#cd").attr("class",selectClass);
        //cd가 change되는 효과를 주기 이ㅜ해서 animate 이용
        $("#cd").animate({width: "0"}, 'slow', function(){
            //cd 변경
            $("#cd").attr("class", selectClass);
            //다시 너비 조정
            $(this).animate({width: '300px'}, 'slow');
        })

       $(this).parent().slideUp('slow');
    })
});
