if (document.getElementById("username"))
{
	fillInInputById("username", "my_login");
	fillInInputById("password", "my_pass");
	setCheckboxStateById("_remember_me", true);
	emulateEnterKeyPressById("password");
}	