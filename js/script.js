let users = [
    {
        name: "Smith"
    },
    {
        name: "Lisa"
    },
    {
        name: "Isabella"
    },
    {
        name: "Oliver"
    },
    {
        name: "James"
    },
    {
        name: "John"
    },
    {
        name: "Alex"
    },
    {
        name: "Henry"
    },
    {
        name: "Jackson"
    },
    {
        name: "Thomas"
    }
]

function nameLetter(userName){
    if(userName.name.length == 5){
        console.log(userName.name + "ning ismi 5 ta harfdan iborat")
    }
    else if(userName.name.length > 5){
        console.log(userName.name + "ning ismi 5 ta harfdan ko'p")
    }
    else{
        console.log(userName.name + "ning ismi 5 ta harfdan kam")
    }
}

// function nameLetter(userName){
//     console.log(userName.name + "ning ismi " + userName.name.length + " ta harfdan iborat")
// }


for(let i = 0; i < users.length; i++){
    nameLetter(users[i])
}