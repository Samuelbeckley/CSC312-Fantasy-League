class Stock{
    constructor(name, value) {
        console.log("Creating stock.");
    }
    
    getValue(stockAbr){
        // request most recent price as held in database
    }
    
    getName(stockAbr){
        //get full name using the abbreviation 
        console.log("Retrieving" + stockAbr + "full name")
        return "";
    }
    
    updateValue(stockAbr){
        //change value to new value"
        console.log("Stock: " + stockAbr + "value updated")
    }
}
