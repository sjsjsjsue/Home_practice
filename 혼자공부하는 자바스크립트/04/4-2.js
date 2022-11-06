
const 배열 = ["바나나", '사과', '귤'];
// forof
for (const 요소 of 배열) {
  console.log(요소);
  // 바나나, 사과, 귤
}
// forin
for (const 인덱스 in 배열) {
  console.log(인덱스, 배열[인덱스]);
  // 0 바나나 /1 사과 /2 귤
}
for (let i = 0; index < 5; i++) {
  // 0 1 2 3 4
  console.log("$(i)번째 반복입니다");
}
for (let i = 0; index < 10; i+=2) {
  console.log("$(i)번째 반복입니다");
  // 0,2,4,6,8
}
for (let i = 10; index < 20; i+=3) {
  console.log("$(i)번째 반복입니다");
  // 10,13,16, 19
}
//역반복문
for (let i = 20; index >= 10; i--) {
  console.log("$(i)번째 반복입니다");
  // 20,19,18,17,16,15,14,13,12,11,10
}

for(let i =0; i< 배열.length; i++){
  // 값을 변경하면서 인덱스를 추적해야하기 때문에 let!
  const 인덱스 = i;
  const 요소 = 배열[i];
  // 이 반복문의 블록이 끝나고 새로 만들어지기 때문에 const!
}

// while 반복문
while (true) {
  alert("$(i)번째 반복입니다.");
  i++
}

let i = 0;
while(i<10){
  alert("$(i)번째 반복입니다.");
  i++
}
// break
let j = 0;
while (j<10 ) {
  j++
  console.log("$(i)번째 반복입니다.");
  break;
}
// break 없으면 "1~10번째 반복입니다." 나옴 
// break 있으면 "1번째 반복입니다." 만 나옴

let k = 0;
while (k<10 ) {
  j++
  console.log("$(k)번째 반복입니다.");
  continue;
  console.log("현재 반복이 끝났습니다.");
}
// 출력하면 "현재 반복이 끝났습니다."이 나오지 않음!
