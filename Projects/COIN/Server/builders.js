import util from "./utility.js";
import crypto from "./crypto.js";

function Transaction(payer, payee, amount) {

    this.payer = payer;
    this.payee = payee;
    this.amount = amount;

}

function User(obj) {

    this.name = obj.username;
    this.id = obj.id;
    this.userTag = `${obj.username}#${obj.discriminator}`;

    this.updateWallet = function(wallet) { // assign a wallet to the user later
        this.wallet = wallet
    }
}


function Wallet (obj) {
    this.owner = obj.owner
    this.balance = 0;
    this.pin = util.random(1000, 9999)
    this.publicAddress = crypto.hash(`address${obj.person.id}`)
}


export {Transaction, User, Wallet}