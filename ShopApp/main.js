Vue.component('product-review', {
    template: ` <form class="review-form" v-on:submit.prevent="onSubmit">
    <p>
      <label for="name">Name:</label>
      <input id="name" v-model="name" placeholder="name" required>
    </p>
    
    <p>
      <label for="review">Review:</label>      
      <textarea id="review" v-model="review" required></textarea>
    </p>
    
    <p>
      <label for="rating">Rating:</label>
      <select id="rating" v-model.number="rating" required>
        <option>5</option>
        <option>4</option>
        <option>3</option>
        <option>2</option>
        <option>1</option>
      </select>
    </p>
        
    <p>
      <input type="submit" value="Submit">  
    </p>    
  
  </form>
`,
    data() {
        return {
            name: null,
            review: null,
            rating: null
        }
    },
    methods: {
        onSubmit() {
            let productReview = {
              name: this.name,
              review: this.review,
              rating: this.rating
            }
            this.$emit('review-submitted', productReview)
            this.name = null
            this.review = null
            this.rating = null
          }
      
    }
})

Vue.component('product', {
    props: {
        premium: {
            type: Boolean,
            required: true
        }
    },
    template: `
    <div class="product">
            <div class="product-image">
                <img :src="image" alt="sock">
            </div>
            <div class="product-info">
                <h1>{{title}}</h1>
                <p v-if=" inStock">In stock</p>
                <p v-else :class="{ outOfStock: inStock }">Out of stock</p>
                <p>Shipping: {{shipping}} </p>
                <ul>
                    <li v-for="property in details">{{property}} </li>
                </ul>
                <div v-for="variant,index in variants" 
                class="color-box"
                 :style="{ backgroundColor: variant.variantColor }" 
                 v-on:mouseover="updateProduct(index)">
                    
                </div>
                <button v-on:click="addToCart" 
                :disabled="!inStock"
                :class= "{disabledButton: !inStock}">Add to cart</button>
                
            </div>
            <div>  
            <h2>Reviews</h2>
            <p v-if="!reviews.length">There are no reviews yet.</p>
            <ul>
              <li v-for="review in reviews">
              <p>{{ review.name }} </p>
              <p>Rating: {{ review.rating }}</p>
              <p>{{ review.review }}</p>
              </li>
            </ul>
            <product-review @review-submitted="addReview"></product-review> 
           </div>
        </div>
    `,
    data() {
        return {
        product: 'Socks',
        brand: "Vue",
        selectedVariant: 0,
        details: ['80% coton', '20% polyester', 'Gender-neutal'],
        variants: [
             {variantId:223, variantColor: "green", variantImage:"green-sock.png", variantQuantity: 5},
         {variantId:224, variantColor: "blue", variantImage:"blue-sock.png", variantQuantity: 0}],
         reviews: []
        }
    },
    methods: {
        addToCart: function() {
            this.$emit('add-to-cart', this.variants[this.selectedVariant].variantId)
        },
        updateProduct: function(index) {
            this.selectedVariant = index
        },
        addReview: function(productReview) {
            this.reviews.push(productReview);
        }
    },
    computed: {
        title() {
            return  this.brand + " " + this.product
        },
        image() {
            return this.variants[this.selectedVariant].variantImage
        },
        inStock() {
            return this.variants[this.selectedVariant].variantQuantity
        },
        shipping() {
            if (this.premium) {
                return 'Free';
            } else {
                return '2.99$';
            }
        }
    }
})

var app = new Vue({
    el: '#app',

    data: {
        premium: true,
        cart: []
    },
    methods: {
        updateCart(id) {
            this.cart.push(id)
        }
    }
})