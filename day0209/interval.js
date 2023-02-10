//setInterval(함수, 시간): 일정시간 마다 함수가 호출된다
//변수명=setInterval(함수, 시간): 멈추고 싶을 때 clearInterval(변수명)

var n=1;
var interval=setInterval(()=>{
    console.log(n+"초 지났어요!!!");
    n++;
    if(n>10){
        clearInterval(interval);//interval을 멈춤
        console.log("**끝**");
    }
}, 1000)
///console.log("**끝**"); 여기에 쓰면 끝이 먼저 나옴,, 별도로 진행되기 때문