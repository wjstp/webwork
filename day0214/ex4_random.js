//임의의 숫자를 구한다 Math.random()
var a=Math.random();

console.log(a);//0.0000~0.9999 사이의 상수형 난수 발생,, 실행할때마다 새로운 난수 발생
//*10 하고 parseint()로 정수로 만듦. 만약 1~45를 구하고 싶으면 45를 곱하면 됨.

console.log("0~9사이의 난수 5개 구하기");
for(let i=1;i<=5;i++){
    let r=parseInt(Math.random()*10);
    console.log(r);
}

console.log("0~99사이의 난수 5개 구하기");
for(let i=1;i<=5;i++){
    let r=parseInt(Math.random()*100);
    console.log(r);
}

console.log("1~10사이의 난수 5개 구하기");
for(let i=1;i<=5;i++){
    let r=parseInt(Math.random()*10+1);
    console.log(r);
}

console.log("1~45사이의 난수 5개 구하기");
for(let i=1;i<=5;i++){
    let r=parseInt(Math.random()*45+1);//45를 곱하면 44까지 구해짐
    console.log(r);
}
