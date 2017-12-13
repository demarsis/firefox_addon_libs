function fillInInputById(id, text)
{
	let input = document.getElementById(id);
	if (input)
	{
		input.value = text;
		console.log("Filled in an element: id = " + id + ", text: " + text);
		return true;
	}
	else
	{
		console.log("Cannot find an element: id = " + id);
		return false;
	}
	return false;
}

function callSubmitById(id)
{
	let element = document.getElementById(id);
	if (element)
	{
		var event = new Event('submit');
		if (element.dispatchEvent(event))
		{
			console.log("Triggered a submit event for id = " + id);
			return true;
		}
		else
		{
			console.log("Cannot trigger a submit event for id = " + id);
			return false;
		}
	}
	else
	{
		console.log("Cannot find an element: id = " + id);
		return false;
	}
	return false;
}