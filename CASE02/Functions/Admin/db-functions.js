import db from "../../Main/database.js";
import error from "../../Embeds/error.js";
import util from "../../Server/utility.js";
import {AriaSuccess, AriaError} from "../../Server/builder.js";

const meta = {
    help: 'Case Help Database'
}


function main (msg, args) {

    if (!args[1]) {

        const error = new AriaError(
            400,
            'BAD_REQUEST',
            'Missing parameter: [function]',
            'You did not include the database function to execute.',
            meta.help
        );

        return error.send(msg)

    }

    let fn = args[1].toString();
    args.shift()

    if (fn === 'get') get(msg, args)

    else if (fn === 'set') set(msg, args)

    else if (fn === 'list') list(msg, args)

    else {
        const error = new AriaError(
            404,
            'NOT_FOUND',
            'No function found',
            `No such function as ${util.inlineCode(fn, ' ')} found.`,
            meta.help
        );
        return error.send(msg);
    }


}

async function get (msg, args) {

    if (!args[1]) {
        const error = new AriaError(
            400,
            'BAD_REQUEST',
            'Missing parameter: [query]',
            'You did not include the query in the database to search.',
            meta.help
        );
        return error.send(msg);
    }
    let query = args[1];

    let result = await db.get(query);

    const success = new AriaSuccess(
        `Query ${query} search results`,
        `${result.toString()}`,
        'database_get',
        200,
        msg.author.id
    )

    success.send(msg)

}


function set (msg, args) {

}

function list (msg, args) {

}

export default main