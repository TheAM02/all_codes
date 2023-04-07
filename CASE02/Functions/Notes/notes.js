import error from '../../Embeds/error.js';
import db from '../../Main/database.js'

function main (msg, args) {

    db.list()
        .then((list) => {
            console.log(list)
        })

}

export default main