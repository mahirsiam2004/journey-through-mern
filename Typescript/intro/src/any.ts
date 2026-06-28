let randomValue: any = "Hello";
randomValue = 10;
randomValue = true;

let value: unknown = "world";

if (typeof value === "string") {
  console.log(value.toUpperCase);
}
