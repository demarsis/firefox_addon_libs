new ResponceFilter(
	["https://2.cdn.echo.msk.ru/assets/application-*.js"],
	["script"],
	[
		{
			target  : 'c.find(".toright").on("click",function(e){',
			replace : 'c.find(".toright").on("click",function(e){alert("Right!");return;'
		},
		{
			target  : 'c.find(".toleft").on("click",function(e){',
			replace : 'c.find(".toleft").on("click",function(e){alert("Left!");return;'
		}
	]
);

console.log("Filter started!");