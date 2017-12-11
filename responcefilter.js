function concatUint8Arrays(a, b)
{
	var c = new Uint8Array(a.length + b.length);
	c.set(a);
	c.set(b, a.length);
	return c;
}

function replaceStrings(str, targetAndReplaceStrings, details)
{
	// replace all strings from target to replace
	targetAndReplaceStrings.forEach(function(item, i, array) 
	{
		let target = item.target;
		let replace = item.replace;
		
		if (str.indexOf(target) != -1)
		{
			str = str.replace(target, replace);
			
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
				
				filter.ondata = event => 
				{				
					let dataUint8 = new Uint8Array(event.data);
					responceBuffer = concatUint8Arrays(responceBuffer, dataUint8);
				}
				
				filter.onstop = event => 
				{
					let responceString = decoder.decode(responceBuffer);
					responceString = replaceStrings(responceString, targetAndReplaceStrings, details);

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

