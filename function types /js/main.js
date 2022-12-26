//function with argument and with return type
var a=20;
var b=10;
var c=add(a,b);
function add(x,y)
{
//document.write(x+y+"</br>");
return x+y;
}
add(a,b);
document.write(c);


//function without argument and with return type
var a=20;
var b=10;
function sub()
{
	return a-b;
}
sub();


//function with argument and without return type
var a=20;
var b=10;
function mul(x,y)
{
	//var c=x*y;
	//console.log(c);
}
mul(a,b);

//function without argument and without return type
var a=20;
var b=10;
function divide()
{
	//console.log(a+b);	
}
divide();