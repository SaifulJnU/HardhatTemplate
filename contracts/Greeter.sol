// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;


// The contract definition. A constructor of the same name will be automatically called on contract creation.
contract Greeter {

   
    string greeting;

    // The constructor. It accepts a string input and saves it to the contract's "greeting" variable.
    constructor(string memory _greeting) {
        greeting = _greeting;
    }
    function greet() public view returns(string memory){
        return greeting;
    }

}