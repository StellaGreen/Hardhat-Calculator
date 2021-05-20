// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

//import 'hardhat/console.sol';

contract Calculator {

    function add(uint256 Nb1, uint256 Nb2) public pure returns(uint256){
        return Nb1 + Nb2;
    }
    function mul(uint256 Nb1, uint256 Nb2) public pure returns(uint256){
        return Nb1 * Nb2;
    }
    function sum(uint256 Nb1, uint256 Nb2) public pure returns(uint256){
        return Nb1 - Nb2;
    }
    function div(uint256 Nb1, uint256 Nb2) public pure returns(uint256){
        return Nb1 / Nb2;
    }
    function mod(uint256 Nb1, uint256 Nb2) public pure returns(uint256){
        return Nb1 % Nb2;
    }

}