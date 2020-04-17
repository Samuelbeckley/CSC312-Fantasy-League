class Client {
    
    constructor(profile, portfolio) {
        this.profile = profile;
        this.portfolio = portfolio;
        console.log("Creating Client");
    }

    buyStock(stock, quantity){
        this.portfolio.buy(stock, quantity);
        console.log("Client: selling" + stock);
    }

    sellStock(stock, quantity){
        this.portfolio.sell(stock, quantity);
        console.log("Client: buying" + stock);
    }
  }