const library=[
 
    {
        tittle:"Ikigai: The Japanese Secret to a Long and Happy Life",
        author:"Hector Garcia, Francesc Miralles",
        year: "April 2016",
        status:{
            own:true,
            reading:false,
            read:false
        }
}
,

{
    tittle:"The Art Of Happiness: A Handbook For Living",
    author:"Dalai Dalai Lama",
    year: "july 2016",
    status:{
        own:true,
        reading:true,
        read:false
    }
}
,  {
    tittle:"You Become What You Think About",
    author:"Vic Johnson",
    year: "2022",
    status:{
        own:true,
        reading:false,
        read:false
    }
}
,  {
    tittle:"Tarak Maheta Ka Tapuda",
    author:"Tarak Maheta",
    year: "2011",
    status:{
        own:true,
        reading:false,
        read:true
    }
}
,  {
    tittle:"Tarak Mehtana Undha Chashma",
    author:"Tarak Mehtana",
    year: "2018",
    status:{
        own:true,
        reading:false,
        read:true
    }
}

]

//step2 

library[0].status.read = true;
library[1].status.read = true;
library[2].status.read = true;
library[3].status.read = true;
library[4].status.read = true;
// Step 3
const { title: firstBook } = library[0];

console.log(firstBook);

// Step 4
const libraryJSON = JSON.stringify(library);

console.log(libraryJSON);