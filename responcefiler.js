class ResponceFiler
{
	constructor(urls, types, targetAndReplaceStrings)
	{
		var decoder = new TextDecoder("utf-8");
		var encoder = new TextEncoder();
		
		var responceString = "";
				
		browser.webRequest.onBeforeRequest.addListener
		(
			(details) => 
			{
				//###############################
				console.log("Called filter for URL: " + details.url);
				
				let filter = browser.webRequest.filterResponseData(details.requestId);
				
				filter.ondata = event => 
				{		
					responceString = responceString.concat(
						decoder.decode(event.data, {stream: true})
					);
				}
				
				filter.onstop = event => 
				{
					// replace all strings from target to replace
					targetAndReplaceStrings.forEach(function(item, i, array) 
					{
						let target = item.target;
						let replace = item.replace;
						
						if (responceString.indexOf(target) != -1)
						{
							responceString = responceString.replace(target, replace);
							
							console.log("Replaced substring:\n" + 
										"URL: " + details.url + "\n" + 
										"From: " + target + "\n" + 
										"To:   " + replace + "\n");
						}
					});

					filter.write(encoder.encode(responceString));
					filter.disconnect();
				}
				//###############################
			},
			{urls : urls, types : types},
			["blocking"]
		);
	}
};

