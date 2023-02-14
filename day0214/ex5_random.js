// for(let i=0; i< nums.length;i++)
// {
//     for()
//     {
//         if(!=) break;

//     }
// }
//난수 중복처리
var nums=new Array(5);
for(let i=0; i<nums.length;i++){
    //i번째 배열에 1~10 사이의 난수값을 저장한다
    nums[i]=parseInt(Math.random()*10)+1;
    //중복처리: 이전 배열에 같은 값이 있을 경우 다시 구한다
    for(let j=0;j<i;j++)
    {
        if(nums[i]==nums[j]){
            i=i-1;//브레이크 후 i++로 이동하므로 1을 빼준다
            break;
        }//현재 포문을 빠져나와서 다시 계산하게끔
        else continue;
        
    }


}


console.log(nums);