// 터미널이나 탐색기 열고 node 파일명.확장자로 실행.
console.log("node 로 자바스크립트 실행하기");
//cd change directory,, 경로 이동
//cmd창에서 d: or c: 드라이브 이동
//dir 보기, 터미널에서는 리눅스 기반이라 ls
//dir/w 간단히 보기
//cmd 창에서 파일로 들어간 다음에 node 파일명.확장자 치면 결과가 나옴!.!
for(var i=1;i<=10;i++){
    console.log(i);

}
console.log("----------")

for(var i=1;i<=10;i++){
    if(i%2==0)
        console.log(i);
}