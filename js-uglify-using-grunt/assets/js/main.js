
function checkDecimals(fieldName, fieldValue)
{
decallowed = 2;
if (isNaN(fieldValue) || fieldValue == "")
{
alert("Not a valid number.try again.");
fieldName.select();
fieldName.focus();
}
else
{
if (fieldValue.indexOf('.') == -1) fieldValue += ".";
dectext = fieldValue.substring(fieldValue.indexOf('.')+1, fieldValue.length);
if (dectext.length > decallowed)
{
alert ("Enter a number with up to " + decallowed + "decimal places. try again.");
fieldName.select();
fieldName.focus();
}
else
{
alert ("Number validated successfully.");
}
}
}
