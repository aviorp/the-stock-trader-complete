import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    funds: 10000,
    stocks: [
      {id: 1,name: 'BMW',price: 80},
      {id: 2,name: 'Google',price: 50},
      {id: 3,name: 'Apple',price: 120},
      {id: 4,name: 'Samsung',price: 40},
    ],
    portfolio: [
      {id: 1,name: 'BMW',price: 80 ,quantity:10}
    ],
  },
  getters: {
    stocks: state => {
      return state.stocks;
    },
    portfolio: state => {
      return state.portfolio;
    }
  },
  mutations: {
    randomStocksPrice: (state) => {
      state.portfolio.forEach(item => {
        let rnd = Math.max(Math.random() * 150 + 1 | 0);
        item.price = rnd;
      })
      state.stocks.forEach(item => {
        let rnd = Math.max(Math.random() * 150 + 1 | 0);
        item.price = rnd;
      })
    },
    sellStock: (state, payload) => {
      let stock = state.portfolio[payload.index]
      if (stock.quantity - payload.quantity < 0) {
        alert('You cant sale below Your quantity !')
        return;
      } else if (stock.quantity - payload.quantity === 0) {
        alert('You out of Stock !')
        let parsedNumber = Number(payload.quantity);
        stock.quantity -= parsedNumber;
        let newFunds = stock.price * parsedNumber;
        state.funds += newFunds;
        state.portfolio.splice(payload.index, 1)
      } else {
        let parsedNumber = Number(payload.quantity);
        stock.quantity -= parsedNumber;
        let newFunds = stock.price * parsedNumber;
        state.funds += newFunds;
      }
    },


    buyStock: (state, payload) => {
      let stock = state.stocks[payload.index];
      let portfolio = state.portfolio;
      let parsedNumber = Number(payload.quantity);
      let newFunds = state.funds - (stock.price * parsedNumber);
      let portfolioIndex = portfolio.findIndex(el => el.id === stock.id);

      if (newFunds < 0) {
        alert('You dont have enougth money for this amount.')
      } else if (portfolioIndex !== -1) {
        portfolio[portfolioIndex].quantity += parsedNumber;
        state.funds = newFunds;
        alert('Bought Successfully.')
      } else {
        state.funds = newFunds;
        state.funds = newFunds;
        state.portfolio.push({
          ...stock,
          quantity: parsedNumber
        })
      }
    },
    saveData : state => {
      localStorage.setItem("myData" , JSON.stringify(state.portfolio) );
      localStorage.setItem("myFunds" , JSON.stringify(state.funds) );
      alert('Saved Successfully');
    },
    loadData: state => {
      state.portfolio = JSON.parse(localStorage.getItem('myData'))
      state.funds=localStorage.getItem('myFunds');
      alert('Loaded Successfully');
    }
  },

  actions: {
    sellStock: ({
      commit
    }, payload) => {

      commit('sellStock', payload)

    },
    buyStock: ({
      commit
    }, payload) => {

      commit('buyStock', payload)

    },

  },
  modules: {}
})