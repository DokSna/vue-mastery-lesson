// Lesson 3
let app = new Vue({
  el: '#app',
  data: {
    product: "Socks",
    image: "./assets/vmSocks-green.jpg",
    inStock: true,
    inventory: 100,
    onSale: true
  }
})

// Lesson 2
//Add a link to your data object, and use v-bind to sync it up with an anchor tag in your HTML. Hint: you’ll be binding to the href attribute.

// var app = new Vue({
//     el: '#app',
//     data: {
//       product: 'Socks',
//       image: 'https://www.vuemastery.com/images/challenges/vmSocks-green-onWhite.jpg',
//       link: 'https://www.amazon.com/s/ref=nb_sb_noss?url=search-alias%3Daps&field-keywords=socks'
//     } 
//   })
  
  

// var app = new Vue({
//     el: '#app',
//     data: {
//         product: "Socks",
//         image: "assets/vmSocks-green.jpg",
//         altText: "A pair of socks",
//         link: "https://www.amazon.com/s/ref=nb_sb_noss?url=search-alias%3Daps&field-keywords=socks"
//     }
// })

// let product = "Socks";
// let app = new Vue({
//     el: '#app',
//     data: {
//         product: "Socks",
//         description: 'A pair of warm, fuzzy socks'
//     }
// })

// let app = new Vue({
//     el: '#app',
//     data: {
//         product: "Socks"
//     }
// })