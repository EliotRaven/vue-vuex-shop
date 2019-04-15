<template>
  <div class="cart">
    <h2>Your Cart</h2>
    <p v-show="!products.length"><i>Please add some products to cart.</i></p>
    <md-table v-if="products.length">
      <md-table-row>
        <md-table-head md-numeric>ID</md-table-head>
        <md-table-head>Name</md-table-head>
        <md-table-head>Price</md-table-head>
        <md-table-head>Quantity</md-table-head>
        <md-table-head>Total</md-table-head>
      </md-table-row>
      <md-table-row v-for="(product, index) in products"
                    :key="product.id">
        <md-table-cell md-numeric>{{ index + 1 }}</md-table-cell>
        <md-table-cell>{{ product.title }}</md-table-cell>
        <md-table-cell>{{ product.price | currency }}</md-table-cell>
        <md-table-cell class="text-center">{{ product.quantity }}</md-table-cell>
        <md-table-cell>{{ (product.price * product.quantity) | currency }}</md-table-cell>
      </md-table-row>
      <md-table-row>
        <md-table-cell :colspan="5" class="text-right">
          {{ total | currency }}
        </md-table-cell>
      </md-table-row>
    </md-table>
    <p>
      <md-button :class="['md-raised md-active', !products.length ? '' : 'bg-green']"
                 :disabled="!products.length"
                 @click="checkout(products)">
        Checkout
      </md-button>
    </p>
    <md-content :class="['alert', (checkoutStatus === 'successful') ? 'success' : 'danger']"
                v-show="checkoutStatus">
      Checkout {{ checkoutStatus }}.
    </md-content>
  </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex';

export default {
  name: 'cart',
  computed: {
    ...mapState({
      checkoutStatus: state => state.cart.checkoutStatus,
    }),
    ...mapGetters('cart', {
      products: 'cartProducts',
      total: 'cartTotalPrice',
    }),
  },
  methods: {
    checkout(products) {
      this.$store.dispatch('cart/checkout', products);
    },
  },
};
</script>

<style scoped>
  .text-right {
    text-align: right;
  }
  .text-center {
    text-align: center;
  }
  .bg-green {
    background: #399a6c;
    color: #ffffff;
  }
  .alert {
    padding: 10px 20px;
    font-weight: 800;
    font-size: 14px;
  }
  .success {
    background: rgba(61, 150, 86, 0.8);
    color: #ffffff;
  }
  .danger {
    background: rgba(147, 30, 31, 0.5);
    color: #ffffff;
  }
</style>
