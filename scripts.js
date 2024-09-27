// A list of provinces:
const provinces = [
  "Western Cape",
  "Gauteng",
  "Northern Cape",
  "Eastern Cape",
  "KwaZulu-Natal",
  "Free State",
];

// A list of names:
const names = [
  "Ashwin",
  "Sibongile",
  "Jan-Hendrik",
  "Sifso",
  "Shailen",
  "Frikkie",
];

// A list of products with prices:
const products = [
  { product: "banana", price: "2" },
  { product: "mango", price: 6 },
  { product: "potato", price: " " },
  { product: "avocado", price: "8" },
  { product: "coffee", price: 10 },
  { product: "tea", price: "" },
];
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Exercise 1:
names.forEach((name) => console.log(name));
provinces.forEach((province) => console.log(province));
names.forEach((name, index) => console.log(name, `(${provinces[index]})`));
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Exercise 2:
const capitalProvince = provinces.map((province) => province.toUpperCase());
console.log(capitalProvince);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Exercise 3:
const nameLength = names.map((name) => `${name}: ${name.length}`);
console.log(nameLength);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Exercise 4:
provinces.sort();
console.log(provinces);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Exercise 5:
const noCape = provinces.filter((province) => {
  if (!province.includes("Cape")) {
    return province;
  }
});
console.log(noCape.length);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Exercise 6:
const someArray = names.map((name) =>
  name
    .toLowerCase()
    .split("")
    .some((name) => name.includes("s"))
);
console.log(someArray);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Exercise 6:
const nameReduceArray = names.reduce((acc, curr, index) => {
  acc[curr] = provinces[index];
  return acc;
}, {});
console.log(nameReduceArray);
