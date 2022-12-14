# SELECT 전반 기능 훑어보기

- 대문자로 쓰나 소문자로 쓰나 상관없음!

- 줄 바꿈 해주는 것은 보기 편하기 위해서 그런거니 하지 않아도 상관없음!

##  테이블의 모든 내용 보기

-  " * " 는 테이블의 모든 컬럼을 뜻 함.

- -- : 주석을 뜻함.

- 원하는 column(열)만 골라서 보기
  - select * from table_name

- SELECT 컬럼 이름 FROM 테이블 이름

  - SELECT A FROM English

  - SELECT A,B,C,... FROM English

- 테이블의 컬럼이 아닌 값도 선택할 수 있다.

  - Ex) SELECT 컬럼이름, 숫자, '문자열', NULL FROM 테이블 이름;

- 원하는 조건의 행만 걸러서 보기

  - SELECT column name FROM table name WHERE 조건;

## 원하는 순서로 데이터 가져오기

### ORDER BY

- ASC : 오름차순

- DESC : 내림차순
- 기본 값은 오름차순!
- SELECT column name FROM table name ORDER BY column name1 ASC(DESC) , column name2 DESC

- column name1 먼저 정렬한 후, 같은 내용이면 column name2 가 정렬

## 원하는 만큼만 데이터 가져오기

### LIMIT {가져올 갯수}

- LIMIT {건너뛸 갯수},{가져올 갯수}

  - SELECT column name FROM table name LIMIT number1, number2

  - 전체의 데이터를 가져오는 것이 아니라 가져올 개수만큼 가져오겠다!

  - ex) 검색결과의 페이지 개수, 게시판의 글

## 원하는 별명(Alias)으로 데이터 가져오기

- SELECT column name as --- FROM table name

  - 한글을 원하면 "--" 이런식으로 넣기!