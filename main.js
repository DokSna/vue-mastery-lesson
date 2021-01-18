// Lesson 8 - components

Vue.component('product', {
  template: `
  <div class="product">
    <div class="product-image">
      <img :src="image" />
    </div>

    <div class="product-info">
      <h1>{{ title }}</h1>

      <!--распродажа-->
      <p>{{sale}}</p>

      <p v-if="inStock">In Stock</p>
      <p v-else>Out of Stock</p>

      <p>Shipping: {{ shipping }}</p>

      <p>User is premium: {{ premium }}</p>
      <ul>
        <li v-for="detail in details">{{ detail }}</li>
      </ul>

      <div
        class="color-box"
        v-for="(variant, index) in variants"
        :key="variant.variantId"
        :style="{backgroundColor: variant.variantColor}"
        @mouseover="updateProduct(index)"
      ></div>

    <div class="cart_wrapper">
      <button
        v-on:click="addToCart"
        :disabled="!inStock"
        :class="{ disabledButton: !inStock }"
      >
        Add to cart
      </button>
      
      <button v-on:click="removeCart">Remove from cart</button>

      <div class="cart">
        <p>Cart ({{ cart }})</p>
      </div>
    </div>
  </div>

</div>
   
  `,

  data() {
    return {
      product: 'Socks',
      brand: 'Vue Mastery',
      selectedVariant: 0,
      // image: './assets/vmSocks-green.jpg',
      details: ['80% cotton', '20% polyester', 'Gender-neutral'],
      variants: [
        {
          variantId: 2234,
          variantColor: 'green',
          variantImage: './assets/vmSocks-green.jpg',
          variantQuantity: 10,
        },
        {
          variantId: 2235,
          variantColor: 'blue',
          variantImage: './assets/vmSocks-blue.jpg',
          variantQuantity: 0,
        },
      ],
      // кол-во товара в корзине
      cart: 0,
      // inventory: 100,
      // onSale: true,
      // sizes: ["S", "M", "L", "XL", "XXL", "XXXL"],
      onSale: true,
    };
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
    updateProduct(index) {
      this.selectedVariant = index;
      console.log(index);
    },
  },
  computed: {
    title() {
      return this.brand + ' ' + this.product;
    },
    image() {
      return this.variants[this.selectedVariant].variantImage;
    },
    // inStock: true,
    inStock() {
      return this.variants[this.selectedVariant].variantQuantity;
    },
    sale() {
      if (this.onSale) {
        return 'Распродажа ' + this.brand + ' ' + this.product;
      } else {
        return 'Для ' + this.brand + ' ' + this.product + ' нет распродажи';
      }
    },
    shipping() {
      if (this.premium) {
        return 'Free';
      } else {
        return 2.99;
      }
    },
  },
  props: {
    premium: {
      type: Boolean,
      required: true,
    },
  },
});

let app = new Vue({
  el: '#app',
  data: {
    premium: true,
  },
});

// Lesson 3
// let app = new Vue({
//   el: '#app',
//   data: {
//     product: 'Socks',
//     brand: 'Vue Mastery',
//     selectedVariant: 0,
//     // image: './assets/vmSocks-green.jpg',
//     details: ['80% cotton', '20% polyester', 'Gender-neutral'],
//     variants: [
//       {
//         variantId: 2234,
//         variantColor: 'green',
//         variantImage: './assets/vmSocks-green.jpg',
//         variantQuantity: 10,
//       },
//       {
//         variantId: 2235,
//         variantColor: 'blue',
//         variantImage: './assets/vmSocks-blue.jpg',
//         variantQuantity: 0,
//       },
//     ],
//     // кол-во товара в корзине
//     cart: 0,
//     // inventory: 100,
//     // onSale: true,
//     // sizes: ["S", "M", "L", "XL", "XXL", "XXXL"],
//     onSale: true,
//   },
//   methods: {
//     addToCart() {
//       this.cart += 1;
//     },
//     removeCart() {
//       if (this.cart > 0) {
//         this.cart -= 1;
//       }
//     },
//     updateProduct(index) {
//       this.selectedVariant = index;
//       console.log(index);
//     },
//   },
//   computed: {
//     title() {
//       return this.brand + ' ' + this.product;
//     },
//     image() {
//       return this.variants[this.selectedVariant].variantImage;
//     },
//     // inStock: true,
//     inStock() {
//       return this.variants[this.selectedVariant].variantQuantity;
//     },
//     sale() {
//       if (this.onSale) {
//         return 'Распродажа ' + this.brand + ' ' + this.product;
//       } else {
//         return 'Для ' + this.brand + ' ' + this.product + ' нет распродажи';
//       }
//     },
//   },
// });

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
