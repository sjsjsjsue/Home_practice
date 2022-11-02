if(273<100){
  alert("273<100 => true");
};
alert("종료");
// 실행이 되지 않음! if 안에 있는 조건문이 false

// 날짜와 시간 구하기
const date = new Date();
const hours = date.getHours();
if (hours < 12) {
  alert("현재 시간은 ${hours}시로 오전입니다");
}
if (hours >= 12) {
  alert("현재 시간은 ${hours}시로 오후입니다");
}

if (hours < 12) {
  alert("현재 시간은 ${hours}시로 오전입니다");
} else {
  alert("현재 시간은 ${hours}시로 오후입니다");
}

const dat = (new Dat()).getHours();
// 1.
if(hours < 10){
  alert("아침밥 먹을 시간입니다");
}
if(10 <= hours && hours <16){alert("점심밥 먹을 시간입니다");}
if(16 <= hours){alert("저녁밥 먹을 시간입니다");}

//2.
if(hours < 10){
  alert("아침밥 먹을 시간입니다");
}else if (hours <16){
  alert("점심밥 먹을 시간입니다");
}else{
  alert("저녁밥 먹을 시간입니다");
}

// 확인문제
// 1. 다음 중 예제 중에서 "참입니다"를 출력하는 것은 몇번인가?
const x =  1;
if(x>4){
  console.log("참입니다");
}
// Flase
const y = 0;
if(y > 4){
  console.log("참입니다.");
}
//false
const z = 10;
if(z >4){
  console.log("참입니다.");
}
// true

// 2. 사용자로부터 숫자 2개를 입력받아 첫번쨰 입력받은 숫자가 큰지, 
// 두번째 입력한 숫자가 큰 지를 구하는 프로그램을 다음 빈칸을 채워 완성하시오.

const a = Number(prompt("첫번쨰 숫자",""));
const b = Number(prompt("두번쨰 숫자",""));

if(a > b){
  alert("첫 번째로 입력한 숫자가 더 큽니다.");
} else if(a === b){
  alert("두 숫자가 같습니다.");
} else{
  alert("두 번째로 입력한 숫자가 더 큽니다.");
}

// 3. 중첩 조건문은 2장에서 배운 논리 연산자를 적용해 하나의 if 조건문으로 만들 수 있다.
// 어떤 논리 연산자가 들어가야하나?

if(x > 10){
  if(x < 20){
    console.log("조건에 맞습니다.");
  }
}

if(x > 10 && x < 20){
  console.log("조건에 맞습니다.");
}

// 4. 사용자에게 숫자를 입력받아 양수, 0 , 음수를 구분하는 프로그램을 만들어보세요.
const c = Number(prompt("숫자를 입력해주세요",""));
if(c > 0 ){
  alert("양수입니다.");
} else if( c === 0){
  alert("0 입니다.");
} else{ alert("음수입니다.");}

// 5. 사용자에게 숫자를 입력받아 홀수와 짝수를 구분하는 프로그램을 만들어보세요.
 const d = Number(prompt("숫자를 입력해주세요",""));

 if (d % 2 == 0){
  alert("짝수입니다.");
 } else { alert("홀수입니다.")};

 // 6. 현재가 몇 월이지 확인하고, 계절을 구분하는 프로그램을 만들어보세요

 const e = (new E()).getMonth()+1;

 if(2< e && e <6 ){
  alert("현재는 ${e}월이고, 계절은 봄입니다.");
 } else if(5 < e && e < 9){
  alert("현재는 ${e}월이고, 계절은 여름입니다.");
 } else if(8< e && e < 12){
  alert("현재는 ${e}월이고, 계절은 가을입니다.");
 }else { alert("현재는 ${e}월이고, 계절은 겨울입니다.");}