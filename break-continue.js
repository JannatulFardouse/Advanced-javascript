const x = [2, 3, 4, 5, 10, 6, 7, 4, 9];
for(var i=0; i<x.length; i++){
    if(x[i]>4){
        break;
    }
    console.log(x[i]);
}

const y = [-2, -3, -4, 5, 10, 6, 7, 4, 9];
for(var i=0; i<x.length; i++){
    if(y[i] < -4){
        continue;
    }
    console.log(y[i]);
}
