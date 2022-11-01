// inch를 cm 으로 바꾸기!
//  입력 :  prompt() inch 단위 숫자
const input = Number(prompt("inch 단위의 숫자를 입력해주세요"));
//  처리 : 1 inch → 2.54cm
const output = input * 2.54;
//  출력 : cm 단위의 숫자
alert("${input}inch = ${out}cm 입니다.");