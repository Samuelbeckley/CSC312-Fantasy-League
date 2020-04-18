class Client {
    
    // constructor(profile, portfolio) {
    //     this.profile = profile;
    //     this.portfolio = portfolio;
    //     console.log("Creating Client");
    // }

    constructor(){
        this.profile = new Profile();
        this.portfolio = new Portfolio();
        console.log("Client: new client");
    }

    buyStock(stock, quantity){
        console.log("Client: buying " + stock);
        this.portfolio.buy(stock, quantity);
    }

    sellStock(stock, quantity){
        console.log("Client: selling" + stock);
        this.portfolio.sell(stock, quantity);
    }

    printProfile(){
        console.log("Client: printing profile");
        this.profile.print();
    }
}