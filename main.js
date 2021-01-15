// Lesson 3
let app = new Vue({
  el: "#app",
  data: {
    product: "Socks",
    image: "./assets/vmSocks-green.jpg",
    inStock: true,
    details: ["80% cotton", "20% polyester", "Gender-neutral"],
    variants: [
      {
        variantId: 2234,
        variantColor: "green",
        variantImage: "./assets/vmSocks-green.jpg",
      },
      {
        variantId: 2235,
        variantColor: "blue",
        variantImage: "./assets/vmSocks-blue.jpg",
      },
    ],
    // кол-во товара в корзине
    cart: 0,
    // inventory: 100,
    // onSale: true,
    // sizes: ["S", "M", "L", "XL", "XXL", "XXXL"],
  },
  methods: {
    addToCart() {
      this.cart += 1;
    },
    removeCart() {
      if (this.cart > 0) {
        this.cart -= 1;
      }
    },
    updateProduct(variantImage) {
      this.image = variantImage;
    },
  },
});

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
