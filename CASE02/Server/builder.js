import ariaSuccess from "../Embeds/success.js";
import ariaError from "../Embeds/error.js";

function AriaSuccess(successTitle, description, parentCommand, successStatusCode, authorId) {

    this.title = successTitle;
    this.description = description;
    this.command = parentCommand;
    this.num = successStatusCode;
    this.id = authorId;

    this.send = function(msg, successEmbedImport) {
        msg.channel.send({embeds: [ariaSuccess(this, msg.author)]})
    }
}

function AriaError(errorStatusCode, codeName, errorTitle, errorDescription, helpCommand) {

    this.num = errorStatusCode;
    this.code = codeName;
    this.name = errorTitle;
    this.value = errorDescription;
    this.help = helpCommand;

    this.send = function(msg) {
        msg.channel.send({embeds: [ariaError(this, msg.author)]})
    }

}

export {AriaError, AriaSuccess};
