class RedirectFilter
{
	constructor(urls, types, redirect_url)
	{	
		browser.webRequest.onBeforeRequest.addListener
		(
			(details) => 
			{			
				console.log("URL is redirected:\n" + 
				            "From: " + details.url + "\n" + 
							"To: " + redirect_url);
				return {
					redirectUrl: redirect_url
				};
			},
			{urls : urls, types : types},
			["blocking"]
		);
	}
};

