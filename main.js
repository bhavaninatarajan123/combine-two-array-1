var a=[];
var size=prompt("Enter the size of the array");
for(let i=0;i<size;i++){
		a[i]=prompt("Enter the"+(i+1)+"value");
}
document.write("Given array is "+a+"<br>");

var b=[];
var size=prompt("Enter the size of the array");
for(let i=0;i<size;i++){
		b[i]=prompt("Enter the"+(i+1)+"value");
}
document.write("Given array is "+b+"<br>");

var c=a.concat(b);
document.write("combine two array is "+c);