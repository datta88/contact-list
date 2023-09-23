const phonebook =[
    {
        name : 'shital',
        mobile : 9389765412
    },
    {
        name : "ragar",
        mobile : 9890876543
    },
    {
        name : "vaibhavi",
        mobile : 8790765432
    },
    {
        name : "ahanta",
        mobile : 965432678
    },
    {
        name : 'whital',
        mobile : 9389654322
    },
    {
        name : "kagar",
        mobile : 9865432543
    },
    {
        name : "gaibhavi",
        mobile : 8790765432
    },
    {
        name : "kanta",
        mobile : 6543245678
    }

]

const searchTerm = '3';

const fileteredOutPut = phonebook.filter((contactDetails)=>{
    const name = contactDetails.name.toLowerCase();
    const mobile = contactDetails.mobile.toString();
    
        return (name.includes(searchTerm) || mobile.includes(searchTerm));
    
    
    })
    console.log(fileteredOutPut)

// const fileteredArray = [];
// phonebook.forEach((contactDeail)=>{
//     const {name , mobile} = contactDeail ;

//     if(name.toLocaleLowerCase().includes('S')){
//         fileteredArray.push(contactDeail)
//         // console.log(name. mobile)
//     }
// })
// console.log(fileteredArray)