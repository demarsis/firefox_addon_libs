// Can set rating up/down as a joke (this doesn't vote for real)
new ResponceFilter(
	["https://*/*game.js?*"],
	["script"],
	[
		{
			target  : 'isFixedLines=function(){return!e}',
			replace : 'isFixedLines=function(){return 0}'
		}
	]
);

console.log("Filter started!");