<template>
  <div class="md-layout md-gutter">
    <div
        :class="[`md-layout-item md-xlarge-size-20 md-large-size-25 md-medium-size-33 md-small-size-50 md-xsmall-size-100`]"
         v-for="product in products"
         :key="product.id">
      <md-card class="product">
        <md-card-media-cover md-solid>
          <md-card-media md-ratio="1:1">
            <img :src="product.image" :alt="product.title">
          </md-card-media>

          <div class="data-label inventory"><md-icon>store</md-icon>{{ product.inventory }}</div>
          <div class="data-label likes"><md-icon>favorite</md-icon>{{ product.likes }}</div>

          <md-card-area>
            <md-card-header>
              <span class="md-title">{{ product.title }}</span>
              <span class="md-subhead">{{ product.price | currency }}</span>
            </md-card-header>

            <md-card-actions>
              <md-card-expand-trigger>
                <md-button class="md-icon-button">
                  <md-icon>keyboard_arrow_down</md-icon>
                </md-button>
              </md-card-expand-trigger>
              <md-button class="md-icon-button"
                         @click="incrementLike(product)">
                <md-icon>favorite</md-icon>
              </md-button>
              <md-button class="md-icon-button"
                         :disabled="!product.inventory"
                         @click="addProductToCart(product)">
                <md-icon>
                  {{ product.inventory ? 'add_shopping_cart' : 'remove_shopping_cart' }}
                </md-icon>
              </md-button>
            </md-card-actions>

            <md-card-expand-content>
              <md-card-content>
                {{ product.description }}
              </md-card-content>
            </md-card-expand-content>
          </md-card-area>
        </md-card-media-cover>
      </md-card>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  name: 'products',
  computed: mapState({
    products: state => state.products.all,
  }),
  methods: {
    ...mapActions('products', ['incrementLike']),
    ...mapActions('cart', ['addProductToCart']),
  },
  created() {
    this.$store.dispatch('products/getAllProducts');
  },
};
</script>

<style scoped lang="scss">
  .product {
    margin-bottom: 2em;
    -webkit-transition: all .3s;
    -moz-transition: all .3s;
    -ms-transition: all .3s;
    -o-transition: all .3s;
    transition: all .3s;

    &:hover {
      -webkit-box-shadow: 0 0 25px rgba(0,0,0,.3);
      -moz-box-shadow: 0 0 25px rgba(0,0,0,.3);
      box-shadow: 0 0 25px rgba(0,0,0,.3);
    }
    img {
      display: block;
      width: 100%;
    }
    .data-label {
      position: absolute;
      left: 0;
      padding: 0 10px;
      height: 25px;
      border-radius: 0 10px 0 10px;
      background: #000;
      color: #ffffff;
      font-weight: 800;
      font-size: 18px;
      line-height: 25px;
      text-align: center;

      .md-icon {
        font-size: 14px !important;
      }
    }
    .inventory {
      top: 30px;
      background: #000;
      color: #ffffff;
    }
    .likes {
      top: 60px;
      background: #ff0000;
      color: #ffffff;
    }
  }

</style>
