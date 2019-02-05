console.log("hello world");

let titre = "titre";
let auteur = "auteur";
let synopsis = "synopsis";
let dateDeSortie = "05/12/21";
let nombreEntrer = "nombre d'entrer";


//creation d'un objet film en jyson
let filmJyson = {
    titre : "titre" ,
    auteur : "auteur" , 
    synopsis : "synopsis" ,
    dateDeSortie : "05/12/21" ,
    nombreEntrer : 12 

};

//creation d'objet film dans un tableau
/*let filmTab = {titre = "titre" ,auteur = "auteur" , synopsis = "synopsis" , dateDeSortie = "05/12/21" ,nombreEntrer = 12 };*/

let films = [{
    titre : "titre 1" ,
    auteur : "auteur 1" , 
    synopsis : "synopsis 1" ,
    dateDeSortie : "05/12/21" ,
    nombreEntrer : 12 
},{
       titre : "titre 2" ,
    auteur : "auteur 2" , 
    synopsis : "synopsis 2" ,
    dateDeSortie : "05/12/21" ,
    nombreEntrer : 1
},{
    titre : "titre 3" ,
    auteur : "auteur 3" , 
    synopsis : "synopsis 3" ,
    dateDeSortie : "05/12/21" ,
    nombreEntrer : 127
}];

console.log(films);
console.log(films[0].titre)

for (let i = 0; i < films.length; i++){
    console.log(films[i].titre);
};

for ( indextitre in films) {
    console.log(films[indextitre].titre);        
    
}
films.forEach(function (films) {
    films.titre = "bob";
    console.log(films.titre);
});

let filmFiltre = films.filter(films => films.nombreEntrer > 12) ;
//console.log(filmFiltre)
let filmsFIltre = films.filter(films => films.nombreEntrer > 0);
//console.log(filmsFIltre)


const reducer = (accumulator, films) => accumulator + films.nombreEntrer;

let total = films.reduce(reducer,0);

console.log(total)
