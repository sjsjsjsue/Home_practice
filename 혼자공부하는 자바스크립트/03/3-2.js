
const x = Number(prompt("숫자를 입력해주세요",""));

switch (x) {
  case 1:
    alert("1입니다.");
    break;
  case 2:
    alert("2입니다.");
    break;
  case 3:
    alert("3입니다.");
  break; 


  default:
    alert("1~3이 아닙니다..");
    break;
}

const y = Number(prompt("숫자를 입력해주세요",""));
(x >= 0) ? "0 이상의 숫자입니다." : "0보다 작은 숫자입니다.";

alert(시작);
true || alert("또는 연산자");
false || alert("또는 연산자");

false && alert("그리고 연산자");
true && alert("또는 연산자");
alert("종료");

// 누적 예제
const 입력 = prompt("정수를 입력해주세요","");
const 끝자리 = Number(입력[입력.length-1]);

if(
  끝자리 ===1||
  끝자리 ===3||
  끝자리 ===5||
  끝자리 ===7||
  끝자리 ===9){
    alert("입력한 숫자는 홀수입니다.");
  }else{alert("입력한 숫자는 짝수입니다.");}

if(입력 % 2 === 1){
    alert("입력한 숫자는 홀수입니다.");
  }else{alert("입력한 숫자는 짝수입니다.");}