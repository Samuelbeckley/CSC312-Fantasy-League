/*Constructs a Stock class which will hold necessary data for a given stock.
*Author: Joshua Wallace
*/
class Stock{
    //constructs the class with name and value
    constructor(name, value) {
        this.name = name;
        this.value = value;
        console.log("Creating stock.");
    }
    /*Gets and returns value of the stock
    *
    *@param None.
    *@return this.value - The stored value of the stock.
    */
    getValue(){
        return this.value;
        // request most recent price as held in database
    }
    
    /*Gets and returns name of the stock
    *
    *@param None.
    *@return this.name - The stored name of the stock.
    */
    getName(){
        //get full name using the abbreviation 
        console.log("Retrieving" + stockAbr + "full name")
        return this.name;
    }
    /*Updates the value of the stock.
    *
    *@param None.
    *@return None.
    */
    updateValue(){
        //change value to new value"
        console.log("Stock: " + stockAbr + "value updated")
    }
}
