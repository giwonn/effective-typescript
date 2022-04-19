// readonly, as const
const v1 = {
  x: 1,
  y: 2,
}; // { x: number, y: number }

const v2 = {
  x: 1 as const,
  y: 2,
}; // { x: 1, y: number}

const v3 = {
  x: 1,
  y: 2,
} as const; // { readonly x: 1; readonly y: 2; }

// tagged union, discriminated union
function isInputElement(el: HTMLElement): el is HTMLInputElement {
  return 'value' in el;
}

// 사용자 정의 타입 가드
interface Foo {
  foo: number;
  common: string;
}

interface Bar {
  bar: number;
  common: string;
}
function isFoo(arg: any): arg is Foo {
  return arg.foo !== undefined;
}

/**
 * 사용자 정의 Type Guard 사용 예시
 */
function doStuff(arg: Foo | Bar) {
  if (isFoo(arg)) {
    console.log(arg.foo); // ㅇㅋ
    console.log(arg.bar); // Error!
  } else {
    console.log(arg.foo); // Error!
    console.log(arg.bar); // ㅇㅋ
  }

  if ('foo' in arg) {
    console.log(arg.foo); // ㅇㅋ
    console.log(arg.bar); // 에러남
  } else {
    console.log(arg.foo); // 에러남
    console.log(arg.bar); // ㅇㅋ
  }
}

// 문맥과 값을 분리할 때 주의점
function toString(str: 'javascript' | 'typescript' | 'python') {
  console.log(str);
}

toString('javascript'); // 통과

// 변수에 문자열을 할당할 때 타입체커가 동작함.
// 즉, 타입을 'javascript'로 체크하는게 아니라 string으로 체크하게 됨
let str = 'javascript';
toString(str); // 에러 발생
