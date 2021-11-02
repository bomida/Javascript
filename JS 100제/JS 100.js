// 3. 변수 타입 1
let arr = [100, 200, 300];
console.log(typeof(arr));
// answer : object
// undefined, string, number는 모두 기본 자료형(primitive type)

// 4. 변수 타입 2
// 다음 변수 a를 typeof(a)로 넣었을 때 출력될 값과의 연결이 알맞지 않은 것은?
// 1)  입력 : a =1, 출력 : number
// 2)  입력 : a = 2.22, 출력 : boolean
// 3)  입력 : a = 'p', 출력 : string
// 4)  입력 : a = [1, 2, 3], 출력 : object
// answer : 2번 - number

// 5. for loop
let a = 10;
let b = 2;

for(let i = 1; i < 5; i += 2) {
  a += i; // a = a + i;
}
console.log(a+b);
// 

// 6. false
// 다음은 자바스크립트 문법 중에서 False로 취급하는 것들 입니다.
// 앗, False로 취급하지 않는 것이 하나 있네요! **True를 찾아주세요.**
// 1)  NaN
// 2)  1
// 3)  ""
// 4)  0
// 5)  undefined

// answer : 2번 - string = true;

// 7. 변수명
// 다음 중 변수명으로 사용할 수 없는 것 2개를 고르시오.
// 1)  age
// 2)  Age
// 3)  let
// 4)  _age
// 5)  1age

