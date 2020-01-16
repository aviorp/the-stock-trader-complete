 const mutations = {
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
              state.funds= payload;
              alert('Selled Succesfully.')
      },
      buyStock: (state, payload) => {
        state.funds= payload;
        alert('Bought Succesfully.')
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
}

module.exports= mutations;