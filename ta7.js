const titulos = (books) =>{
    let titulosFinales = [];
    for(let libro of books){
        titulosFinales.push(libro.title);
    }
    return titulosFinales;
}


const books = [
    {
      title: 'Book',
      author: 'Name'
    },
    {
      title: 'Book2',
      author: 'Name2'
    },
    {
        title: "otroMas",
        author: "Yo"
    },
    {
        title: "ultimo",
        author: "miOtroYo"
    }

]

console.log(titulos(books))
  