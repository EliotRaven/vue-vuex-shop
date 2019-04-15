import shop from '../../mockdata/products';

const initState = {
  items: [],
  checkoutStatus: null,
};

// getters
const cartGetters = {
  cartProducts: (state, getters, rootState) => initState.items.map(({ id, quantity }) => {
    const product = rootState.products.all.find(p => p.id === id);
    return {
      title: product.title,
      price: product.price,
      quantity,
    };
  }),

  cartTotalPrice: (state, getters) => getters.cartProducts.reduce((total, product) => total
    + product.price * product.quantity,
  0),
};

// actions
const actions = {
  checkout({ commit, state }, products) {
    const savedCartItems = [...state.items];
    commit('setCheckoutStatus', null);
    // empty cart
    commit('setCartItems', { items: [] });
    shop.buyProducts(
      products,
      () => commit('setCheckoutStatus', 'successful'),
      () => {
        commit('setCheckoutStatus', 'failed');
        // rollback to the cart saved before sending the request
        commit('setCartItems', { items: savedCartItems });
      },
    );
  },

  addProductToCart({ state, commit }, product) {
    commit('setCheckoutStatus', null);
    if (product.inventory > 0) {
      const cartItem = state.items.find(item => item.id === product.id);
      if (!cartItem) {
        commit('pushProductToCart', { id: product.id });
      } else {
        commit('incrementItemQuantity', cartItem);
      }
      // remove 1 item from stock
      commit('products/decrementProductInventory', { id: product.id }, { root: true });
    }
  },
};

// mutations
const mutations = {
  pushProductToCart(state, { id }) {
    state.items.push({
      id,
      quantity: 1,
    });
  },

  incrementItemQuantity(state, { id }) {
    const cartItem = state.items.find(item => item.id === id);
    cartItem.quantity += 1;
    return cartItem;
  },

  setCartItems(state, { items }) {
    initState.items = items;
  },

  setCheckoutStatus(state, status) {
    initState.checkoutStatus = status;
  },
};

export default {
  namespaced: true,
  state: initState,
  getters: cartGetters,
  actions,
  mutations,
};
