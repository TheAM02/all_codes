import ariaSuccess from "../Embeds/success.js";
import ariaError from "../Embeds/error.js";
import ariaHelp from "../Embeds/help.js";


function AriaSuccess (successTitle, description, parentCommand, successStatusCode, authorId) {

    this.title = successTitle;
    this.description = description;
    this.command = parentCommand;
    this.num = successStatusCode;
    this.id = authorId;

    this.send = function (msg, successEmbedImport) {
        msg.channel.send({embeds: [ariaSuccess(this, msg.author)]})
    }

    this.log = function () {
        console.log(this)
    }
}

function AriaError (errorStatusCode, codeName, errorTitle, errorDescription, helpCommand) {

    this.num = errorStatusCode;
    this.code = codeName;
    this.name = errorTitle;
    this.value = errorDescription;
    this.help = helpCommand;

    this.send = function (msg) {
        msg.channel.send({embeds: [ariaError(this, msg.author)]})
    }

    this.log = function() {
        console.log(this)
    }

}

function AriaFunctionMeta (commandName, commandDescription, commandSyntax, commandCategory, commandParameters, requiredDiscordPermissions, commandVersion, additionalComments) {

    if (!Array.isArray(commandParameters)) throw "parameter commandArguments must by type of Array";

    this.name = commandName;
    this.description = commandDescription;
    this.syntax = commandSyntax;
    this.category = commandCategory;
    this.perms = requiredDiscordPermissions;
    this.params = commandParameters

    if (commandVersion) this.version = commandVersion;
    if (additionalComments) this.comm = additionalComments;

    this.help = function (msg) {
        return msg.channel.send({embeds: [ariaHelp(this, msg.author)]})
    }

    this.log = function () {
        console.log(this)
    }

}

export {AriaError, AriaSuccess, AriaFunctionMeta};