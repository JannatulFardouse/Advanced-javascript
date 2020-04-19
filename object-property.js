const student =[
    {id: 21, name: "Minigoue"},
    {id: 31, name: "Mathie"},
    {id: 41, name: "Empro"},
    {id: 71, name: "Illin"},
]
const names = student.map(s => s.name)
console.log(names);

const ids = student.map(s => s.id);
console.log(ids);

const bigger = student.filter(x => x.id > 41 );
console.log(bigger);

const big1 = student.find(x => x.id > 41);
console.log(big1);