//두 수를 인자로 받아서 더한 값을 반환하는 함수를 3가지 방법으로 만들기
function add1(su1, su2)
{
    return su1+su2;
}

var add2=function(su1, su2)
{
    return su1+su2;
}
//화살표 함수에서 리턴하는 한문장만 있을 경우  return 생략 가능,, 중괄호 안에 쓸 때는 return 써줘야 함. 
//function을 안쓰는것
var add3=(su1, su2)=>su1+su2;

//리턴하는 값은 변수에 받아서 출력해도 되고 바로 출력해도 된다
var sum1=add1(5, 6);
console.log(sum1);

console.log(add2(4,6));
console.log(add3(10, 20));