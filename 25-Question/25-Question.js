//* 25. In the following shopping cart add, remove, edit items
//*     => const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
//*     - add 'Meat' in the beginning of your shopping cart if it has not been already added
//*     - add Sugar at the end of you shopping cart if it has not been already added
//*     - remove 'Honey' if you are allergic to honey
//*     - modify Tea to 'Green Tea'


const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']

// add 'Meat' in the beginning of your shopping cart if it has not been already added
shoppingCart.unshift('Meat')
console.log(shoppingCart); // [ 'Meat', 'Milk', 'Coffee', 'Tea', 'Honey' ]

// add Sugar at the end of you shopping cart if it has not been already added
if (!shoppingCart.includes('Sugar')) {
    shoppingCart.push('Sugar')
}
console.log(shoppingCart); // [ 'Meat', 'Milk', 'Coffee', 'Tea', 'Honey', 'Sugar' ]

//remove 'Honey' if you are allergic to honey
if (shoppingCart.includes('Honey')) {
    let honeyIndex = shoppingCart.indexOf('Honey')
    shoppingCart.splice(honeyIndex, 1)
}
console.log(shoppingCart);

// modify Tea to 'Green Tea'
if (shoppingCart.includes('Tea')) {
    let teaIndex = shoppingCart.indexOf('Tea')
    shoppingCart.splice(teaIndex, 1, 'Green Tea')
}
console.log(shoppingCart);