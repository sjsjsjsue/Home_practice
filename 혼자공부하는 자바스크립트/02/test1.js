let a = prompt("첫번째 숫자를 입력해주세요");
a = Number(a);
// prompt 결과 -> Number(a) -> a
let b = prompt("두번째 숫자를 입력해주세요");
b = Number(b);

const c = Number(prompt("첫번째 숫자를 입력해주세요"));
// 괄호 안에 있는 것이 먼저 실행
alert("${a}+${b} = ${a+b}");