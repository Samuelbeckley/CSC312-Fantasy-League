/*Class for the Client objects, combines a portfolio and a profile to emulate a client
 *Author: Spencer Dickinson
 *Date: 4/30/20
 */

class Client {
    
    // constructor(profile, portfolio) {
    //     this.profile = profile;
    //     this.portfolio = portfolio;
    //     console.log("Creating Client");
    // }
// This is the constructor method, which creates a client, along with their internal Profile and Portfolio objects
    constructor(){
        this.profile = new Profile();
        this.portfolio = new Portfolio();
        console.log("Client: new client");
    }

   //  Provides the functionality to buy stocks, using the portfolio's internal method
    buyStock(stock, quantity){
        console.log("Client: buying " + stock);
        this.portfolio.buy(stock, quantity);
    }
    //  Provides the functionality to sell stocks, using the portfolio's internal method
    sellStock(stock, quantity){
        console.log("Client: selling" + stock);
        this.portfolio.sell(stock, quantity);
    }
   //  Prints the profile to the console log, for debugging purposes
    printProfile(){
        console.log("Client: printing profile");
        this.profile.print();
    }
}