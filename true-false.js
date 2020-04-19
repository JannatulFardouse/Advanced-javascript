//Falsy:
//0
//null
//NaN
//""
//undefined
//false
//Truthy:
//'0', [], ' ', 'false'

let name = '';
if(name || name == 0){
    console.log("condition is true");
}
else{
    console.log("condition is false")
}
