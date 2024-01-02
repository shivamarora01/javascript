const persons = [
    {fname:"shivam" , lname:"arora"},
    {fname:"shreya" , lname:"bagati"},
    {fname:"jatin" , lname:"arora"},
    {fname:"jayant" , lname:"arora"},
]

//traverse in array element by element
//outputs array
const result = persons.map(fullname)
const result2 = persons.map(firstonly)

function firstonly(item){
    return item.fname
}

function fullname(item){
    return [item.fname,item.lname].join(" ")
}

console.log(result2)


//https://www.w3schools.com/jsref/jsref_map.asp