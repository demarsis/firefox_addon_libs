function replaceStrings(str, targetAndReplaceStrings, details)
{
	// replace all strings from target to replace
	targetAndReplaceStrings.forEach(function(item, i, array) 
	{
		let target = item.target;
		let replace = item.replace;
		
		if (str.indexOf(target) != -1)
		{
			str = str.split(target).join(replace);
			
			console.log("Replaced substring:\n" + 
						"URL: " + details.url + "\n" + 
						"From: " + target + "\n" + 
						"To:   " + replace + "\n");
		}
	});
	
	return str;
}

class ResponceFilter
{	
	constructor(urls, types, targetAndReplaceStrings)
	{
		var decoder = new TextDecoder("utf-8");
		var encoder = new TextEncoder();
				
		browser.webRequest.onBeforeRequest.addListener
		(
			(details) => 
			{
				let responceBuffer = new Uint8Array();
				
				//###############################
				console.log("Called responce filter for URL: " + details.url);
				
				let filter = browser.webRequest.filterResponseData(details.requestId);
				let data = [];
				
				filter.ondata = event => 
				{				
					data.push(event.data);
				}
				
				filter.onstop = event =>
				{
					let str = "";
					if (data.length == 1)
					{
						str = decoder.decode(data[0]);
					}
					else
					{
						for (let i = 0; i < data.length; i++)
						{
							let stream = (i == data.length - 1) ? false : true;
							str += decoder.decode(data[i], {stream});
						}
					}
					
					// replacing
					str = replaceStrings(str, targetAndReplaceStrings, details);
					
					filter.write(encoder.encode(str));
					filter.close();
				};
				//###############################
			},
			{urls : urls, types : types},
			["blocking"]
		);
	}
	

};

