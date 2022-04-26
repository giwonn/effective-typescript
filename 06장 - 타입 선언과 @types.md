## 오버로딩 타입보다는 조건부 타입을 사용하기

아래의 오버로딩 된 함수는 입력으로 number를 받고 출력으로 string을 반환할 수도 있는 잘못된 모델이다.

```ts
function double(x: number | string): number | string;
function double(x: any) {
  return x + x;
}
```

<br>

그래서 아래와 같이 제네릭을 사용하여 동작을 더 자세하게 모델링 할 수 있다.  
하지만 이건 너무 과하다. 타입이 `string` or `number` 가 아니라 값 자체로 고정된다.

```ts
function double<T extends number | string>(x: T): T;
function double(x: any) {
  return x + x;
}

const num = double(12); // 타입이 12
const str = double('x'); // 타입이 "x"
```

<br>

위의 문제들을 해결하기 위해서 조건부 타입을 사용하면 된다.  
반환 타입에 삼항연산자를 사용하는 것이다.

```ts
function double<T extends number | string>(x: T): T extends string ? string : number;
function double(x: any) {
  return x + x;
}
```
