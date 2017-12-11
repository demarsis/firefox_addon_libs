// Redifine behavior for left/right buttons
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

// block all avatars (images)
new BlockFilter(
	["https://echo.msk.ru/files/avatar*"],
	["image"]
);

new RedirectFilter(
	["https://2.cdn.echo.msk.ru/files/*"],
	["image"],
	"http://kipelov.ru/upload/iblock/085/0854a33ce0ce0701b18d3c1086094d67.jpg"
);

console.log("Filter started!");