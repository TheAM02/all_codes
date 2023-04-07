import Short from 'short.io';
const short = new Short('to.theam.ga', 231752, process.env.SK);

async function create(longUrl, slug) {
	console.table({
    	originalURL: longUrl,
    	path: slug,
    	title: slug
  	})
	let link = short.createLink(
		{
    	originalURL: longUrl,
    	path: slug,
    	title: slug
  	}
	);
	
	return link
};

export {create}