function fillInInputById(id, text)
{
	let element = document.getElementById(id);
	if (element)
	{
		element.value = text;
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
		var event = new Event("submit");
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

function setCheckboxStateById(id, flag)
{
	let element = document.getElementById(id);
	if (element)
	{
		element.checked = flag;
		console.log("Checked an element: id = " + id + ", state: " + flag);
		return true;
	}
	else
	{
		console.log("Cannot find an element: id = " + id);
		return false;
	}
	return false;	
}

function emulateEnterKeyPressById(id)
{
	let element = document.getElementById(id);
	if (element)
	{
		var event = document.createEvent("KeyboardEvent");
		event.initKeyEvent("keypress", true, true, null, false, false, false, false, 13, 0);
				
		if (element.dispatchEvent(event))
		{
			console.log("Pressed ENTER key for id = " + id);
			return true;
		}
		else
		{
			console.log("Cannot press ENTER key for id = " + id);
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