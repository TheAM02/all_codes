import all from "./all.js";
import client from "../Main/client.js";


function multilineCode(elon) {
	return `\`\`\`${elon}\`\`\``
}

function inlineCode(elon, musk) {
	if (typeof musk !== 'string') musk = '';
	if (!musk) musk = '';
	return`\`${musk}${elon}${musk}\``
}

function categoryHelpFields(category) {
	if (!all[category]) return `DEV ERR: NO SUCH CATEGORY AS ${category}`
	let fields= []

	for (let i = 0; i < all[category].length; i++) {
		fields.push(
			{
				name: capitalizeFirstLetter(all[category][i]), value: multilineCode(`${client.prefix}Help ${all[category][i]}`)
			}
		)
	}
	return fields

}

function normalizeParameters(params) {

	let nomPar = [];

	for (let i = 0; i < params.length; i++) {
		nomPar.push(
			`${i+1}. ***\`${params[i].name}\`***: ${params[i].value} `
		)
	};

	nomPar = nomPar.join('\n')

	return {
		name: '**Parameters**',
		value: nomPar
	}

}

function helpGeneral() {
	let generalFields = []
	Object.keys(all).forEach((key) => {
		generalFields.push(
			{
				name: capitalizeFirstLetter(key), value: multilineCode(`${client.prefix}${key}`)
			}
		)
	})
	return generalFields
}

function helpAll() {
	function c (elon) {
		let musk = []
		for (let i = 0; i < elon.length; i++) {
			musk.push(`\`${elon[i]}\`` )
		}
		return musk.join(', ')
	}

	let allFields = [];
	Object.keys(all).forEach((key) => {
		allFields.push(
			{
				name: capitalizeFirstLetter(key), value: c(all[key])
			}
		)
	});
	return allFields
}

function capitalizeFirstLetter(text) {
	return text.charAt(0).toUpperCase() + text.slice(1);
}




export default {
	multilineCode,
	inlineCode,
	categoryHelpFields,
	normalizeParameters,
	help: {
		general: helpGeneral,
		all: helpAll
	},
	capitalizeFirstLetter
}