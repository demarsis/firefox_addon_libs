// Can set rating up/down as a joke (this doesn't vote for real)
new ResponceFilter(
	["https://cs.pikabu.ru/apps/desktop/1.32.12/main/app*js"],
	["script"],
	[
		{
			target  : 'this.initParams.userID>0',
			replace : 'true'
		},
		{
			target  : 't=this.vote+t.valueOf(),',
			replace : 't=this.vote+t.valueOf(),alert(t),'			
		}
	]
);

console.log("Filter started!");