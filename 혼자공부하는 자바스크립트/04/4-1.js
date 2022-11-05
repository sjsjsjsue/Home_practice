let str = "안녕하세요";
str = [2]
// 하
str[[str.length -1]]; 
// 요

let a= [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
a.length; // 10
a[5]; // 5
a[2 + 1]; // == a[3]
// 3

let b = ["여러가지",10,true, 1];

// push  설명
let c = [52, 273, "안녕", "하세요"];
c.push(100);
// 5
// c = [52, 273, "안녕", "하세요", 100];

// splice (인덱스 , 0, 요소) 설명
c.splice(1, 0, "추가");
// c = [52, "추가",  273, "안녕", "하세요", 100];

// splice (인덱스, 1) 설명
c.splice (0, 1);
// c = ["추가",  273, "안녕", "하세요", 100];

// indexOf ( 요소 ) 설명
c.indexOf ("안녕");
// 2
c.indexOf("adsfsd");
// 값이 없으면 -1 로 출력

// indexOf() + splice () 활용. 설명 
let index = c.indexOf("하세요");
c.splice(index,1);
// c = "추가",  273, "안녕", 100];

// 비파괴적
let d = "안녕";
let e = "하세요";
let f = d + e ; 
// f = "안녕하세요";

// 파괴적
let array = ["사과", "배", "바나나"];
array.push("귤");
// 4
// array = ["사과", "배", "바나나", "귤"]
// 원본 내용이 변경