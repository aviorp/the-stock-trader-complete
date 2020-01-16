const actions = {
    sellStock: ({
        commit,
        state
    }, payload) => {
        let stock = state.portfolio[payload.index];
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
            return commit('sellStock', newFunds)
        }
    },
    buyStock: ({
        commit,
        state
    }, payload) => {
        let stock = state.stocks[payload.index];
        let portfolio = state.portfolio;
        let parsedNumber = Number(payload.quantity);
        let newFunds = state.funds - (stock.price * parsedNumber);
        let portfolioIndex = portfolio.findIndex(el => el.id === stock.id);
        if (newFunds <= 0) {
            alert('You dont have enougth money for this amount.')
        } else if (portfolioIndex !== -1) {
            portfolio[portfolioIndex].quantity += parsedNumber;
        } else {
            state.portfolio.push({
                ...stock,
                quantity: parsedNumber
            })
        }
        return commit('buyStock', newFunds)
    },
}

module.exports = actions;