import {Wallet, User, Transaction} from "../../Server/builders.js";


function main(msg, args) {
    const wallet = new Wallet({
        person: msg.author
    });
    const user = new User(msg.author).updateWallet(wallet);


    return wallet
}

export default  main

