# for 반복문
♦︎ 참고 4-2.js
## for 반복문의 종류
- forof and forin 은 배열 등과 함께 사용함
- for : 그냥 범용적으로 사용함

## for  문
1. 배열의 요소 개수만큼 반복이 일어난다.
2. 각각의 반복에서 반복변수 요소(또는 인덱스)가 하나씩 들어간다.
♡ 참고  4-2.js(for)
### forof
- 사용법
```javascript
for (const 요소(값) or 인덱스로 사용할 변수이름을 넣기(new) of 배열의 변수 이름){

}
```
### forin
```javascript
for ( const 인덱스(new)(번호) in 배열의 변수 이름){
  if(object.hasOwnProperty.call(object,key)){
    const element = object[key];
  }
}
```
### for
```javascript
for (let index = 0; index < array.length; index++) {
  const element = array[index];
}
for(어디부터;어디까지;몇_씩증가){
}
```

## for 반복문과 변수 상수
- 무조건 let을 이용해야함!

# while 반복문
♦︎ 참고 4-2.js(while)
```javascript
while (불 표현식) {
  본문
}
다음 줄
```
- while 실행문
1. 불 표현식을 확인한다.
2. a : true 라면 - 본문을 실행하고 1번으로 돌아간다,
3. b : false 라면 - 종료!

## for vs while
- for : 특정 횟수만큼 반복을 돌거나 배열을 기반으로 반복을 할 때 사용!
- while : 조건이 중요할 떄 사용!

## while 함수 추가 예제
```javascript
let i=0;
while (confirm("계속 진행하시겠습니까?")){
   alert("$(i)번째 반복입니다.");
  i++
}
// 확인을 누르면 진행, 취소를 누르면 반복문 종료
```

### while 반복문 사용 예제
1. 결과가 나올 때까지
2. 특정 시간이 될 때까지
3. 파일을 읽으며 특정 단어를 찾을 때 까지
4. 등등...
*  반복을 해야한다면  for 문 아님 while 반복문 생각!!

## break + continue 구문
- break : 조건문이나 반복문을 벗어 날 때 사용하는 키워드!!
- continue : 반복문 안의 반복 작업을 멈추고 반복문의 처음으로 돌아가 다음 반복 작업을 진행!
- break and continue 는 잘 안쓰임. 있다는 것만 알고 있으3

# 중첩 반복문
## 중첩 반복문으로 피라미드 만들기 1
```javascript
// 1.
let output = ""
output =+ "*\n"
output =+ "**\n"
output =+ "***\n"
output =+ "****\n"
output =+ "*****\n"
output =+ "******\n"
output =+ "*******\n"
output =+ "********\n"
console.log(output)
// 반복 : output =+ 9번
// 2.
for (let i=0; i<9;i++){
  for(let j=0; j< [i+1]; i++){
    out +="*";
  }
  out += "\n";
  }
console.log(output)
```
- For 문은 중첩 사용 가능!
- 횟수에 숫자 표현식이 올 수 있음!

## 중첩 반복문으로 피라미드 만들기 2
```javascript
let output = "";
for(let i=0; i<9; i++){
  for(let j=0; j< [2*i+1];i++){
    // 틀림 : j <i+2 
     out+= "*";
  }
    out+= "\n";
}
  console.log(output);
```
## 중첩 반복문으로 피라미드 만들기 3
```javascript
let output = "";
for(let i=0; i<9; i++){
  for(let k = 0; k<i+1; i++){
    out += " ";
  }
  for(let j=0; j< [2*i+1];i++){
     out+= "*";
    }
    out+= "\n";
}
  console.log(output);
```
## 중첩 반복문으로 피라미드 만들기 4
```javascript
let output ="";
for(let i=0; i<9; i++){
  for(let k = 0; k< 8-i; i++){
    out += " ";
  }
  for(let j=0; j< [2*i+1];i++){
     out+= "*";
    }
    out+= "\n";
}
  console.log(output);
```
## 중첩 반복문으로 피라미드 만들기 5
```javascript
let output ="";
for(let i=0; i<10; i++){
  for(let k = 0; k< i; i++){
    out += " ";
  }
  for(let j=0; j< 2 * (9-i);i++){
     out+= "*";
    }
    out+= "\n";
}
  console.log(output);
```

### 핵심포인트
1. forin 반복문은 배열의 인덱스를 기반으로 반복할 때 사용.
2. forof 반복문은 배열의 값을 기반으로 반복할 때 사용.
3. for 반복문은 횟수를 기반으로 반복할 때 사용.
4. while 반복문은 조건을 기반으로 반복할 때 사용
5. break 는 switch 조건문이나 반복문을 벗어날 때 사용.
6. continue 키워드는 반복문 안의 반복 작업을 멈추고 처음으로 돌아가 다음 반복 작업을 진행

### 학인문제
1. 다음 프로그램의 실행결과를 예측해보시오.
```javascript

const array = ["사과","배", "귤", "바나나"];

console.log("# for in 반복문");
for( const i in array){
  console.log(i);
}
// 사과 / 사과 배/ 사과 배 귤/  사과 배 귤 바나나
// 답 : 0 1 2 3 
console.log("# for of 반복문");
for (const i of array){
  console.log(i);
}
// 사과 / 사과 배/ 사과 배 귤/  사과 배 귤 바나나
// 답 : 사과 배 귤 바나나
```
2. 다음 프로그램의 실행결과를 예측해보시오. 혹시 오류가 발생한다면 어디를 수정해야하나요?
```javascript
const array = [];
for (const i=0; i<3; i++){
  array.push((i+1)*3);
}
console.log(array);
// 틀린 부분 : const 대신 let 이 들어가야 함!
// 답 : const 대신 let 이 들어가야 함!
```
3. 1부터 100까지의 숫자를 곱한 값을 계산하는 프로그램을 만들어보세요. 그리고 코드를 실행해 나온 결과를 확인해보세요.
```javascript
let output = 1;
for(let i=1; i<=100; i++){
  output *= output[i];
}
console.log("1~100의 숫자를 모두 곱하면 ${output}입니다.");
```
- 항등원 : 1 + ?? = 원본이 유지되나?
- ?? : 항등원
- ex) 10 +0 = 10 / 20+0 = 20
- 덧셈의 항등원 : 0
- 곱셈의 항등원 : 1