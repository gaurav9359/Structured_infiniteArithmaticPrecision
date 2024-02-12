class InfiniteNumber {
  /** An internal member Array to contain the digits of the Infinite Integer.
   * @private
   * @type {Array<Number>}
   */
  _internalArray = [];

  constructor(inputObject) {
    if (typeof inputObject === "number") {
          console.log("You sent a number");
          // initialize the member array
          // Getting the string as a parameterand typecasting it into an integer
          let myFunc = num => Number(num);
          this._internalArray = Array.from(String(inputObject), myFunc);

          //validate the array of integer 
          this.checkInput();
    }
    else if(typeof inputObject === "string") {
        console.log("You sent a string");

        //check if string contains only numbers or not
        if(isNaN(inputObject)){
            throw new Error("given string contains non integer value")
        }

        // convert the string of number into array of integer
        this._internalArray = inputObject.split('').map(function(item) {
            return parseInt(item, 10);
        });
        
        //validate the array of string wheather it contains valid input or not
        this.checkInput()

    }
    else if(typeof inputObject==='array'){
    this.checkInput()
    }
    else if (typeof inputObject === "object") {  // IS THIS HOW ITS DONE?
    console.log("You sent an Object")

    //asign the number of object into internal array
    this._internalArray=inputObject.getInternalArray();

    // check again if the input is valid or not
    this.checkInput();

    }
    else {        
    // BHAI KYA KAR RAHA HAI?
    console.log("You sent some bullshit!")

    throw new Error(`Constuctor of IniniteNumber does not support this data`
      +` type ${typeof inputObject}`)
    } 
}


  /**Helper Function to check if the input Array is valid or not
   * @private
   * @param {Array} Number input array should be number
   * @return {boolean} whether the input is valid or not
   */
  checkInput() {
      //To check if the input is array or not
      if (!Array.isArray(this._internalArray)) {
          throw new Error("Given input is not an Array");
      }

      //To check if the array is empty or not
      if (this._internalArray.length === 0) {
          throw new Error("Given Input is Empty");
      }

      //To check if the array consists only integer and value b/w 0 and 9 or not
      for (let i = 0; i < this._internalArray.length; i++) {
          if (!Number.isInteger(this._internalArray[i]) || this._internalArray[i] < 0 || this._internalArray[i] > 9)
              throw new Error("Please input valid Integer between 0 - 9");
      }
      return true;
  }

  /**getter method for internal array
   * @returns {Array<Integer>} array of the given input 
   */
  getInternalArray(){
    return JSON.parse(JSON.stringify(this._internalArray))
  }

  /**Method to return input as String
   * @returns {String} input array as string
   */
  getNumberAsString() {
    return this._internalArray.join("")
  }

 
}

let num1 = new InfiniteNumber(112);
console.log(num1.getInternalArray())
