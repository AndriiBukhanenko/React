let list = [1, 2, 3];

const a = list.forEach(el => el * 3);

console.log(a);

const b = list.map(el => el * 3);

console.log(b);

const c = list.filter(el => el > 1);

console.log(c);

const d = list.reduce((total, el) => total + el, 0);

console.log(d);

const listObj = [
  { name: "a", price: 1 },
  { name: "b", price: 5 },
  { name: "c", price: 10 }
];

const price = listObj
  .filter(el => el.price >= 5)
  .map(el => {
    return {
      label: `${el.name} = ${el.price}`,
      price: el.price
    };
  })
  .reduce((total, el) => total + el.price, 0);

console.log(price);
