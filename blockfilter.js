class BlockFilter
{
	constructor(urls, types)
	{	
		browser.webRequest.onBeforeRequest.addListener
		(
			(details) => 
			{			
				console.log("URL is blocked: " + details.url);
				return {cancel: true};
			},
			{urls : urls, types : types},
			["blocking"]
		);
	}
};

