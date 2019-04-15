import shop from '../../mockdata/products';

// initial state
const initState = {
  all: [],
};

// getters
const getters = {};

// actions
const actions = {
  getAllProducts({ commit }) {
    shop.getProducts((ps) => {
      commit('setProducts', ps);
    });
  },

  incrementLike: ({ commit }, product) => commit('incrementLike', product),
};

// mutations
const mutations = {
  setProducts(state, products) {
    initState.all = products;
  },

  decrementProductInventory(state, { id }) {
    const product = state.all.find(p => p.id === id);
    product.inventory -= 1;
    return product;
  },

  incrementLike(state, { id }) {
    const product = state.all.find(p => p.id === id);
    product.likes += 1;
    return product;
  },
};

export default {
  namespaced: true,
  state: initState,
  getters,
  actions,
  mutations,
};
