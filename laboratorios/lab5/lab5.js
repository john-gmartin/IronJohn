
// Iteration 1: Names and Input
let hacker1= "Miki";
let hacker2="Adri";

console.log(`El nombre del conductor es ${hacker1}`);
console.log(`El nombre del navegante es ${hacker2}`);
//
// Iteration 2: Conditionals
if(hacker1.length > hacker2.length){
    console.log(`El conductor tiene el nombre más largo, tiene ${hacker1.length} caracteres.`);}
else if (hacker1.length < hacker2.length){
    console.log(`El navegante tiene el nombre más largo, tiene ${hacker2.length} caracteres.`);}
else{
    console.log(`Vaya, ambos tienen nombres igual de largos, ${hacker1.length} caracteres.`);
}




// Iteration 3: Loops
// 3.1

let newhacker1=""
for (let i = 0; i < hacker1.length; i++) {
    newhacker1+= hacker1[i].toUpperCase() + " ";
}
console.log(newhacker1);

// 3.2

let newhacker2=""
for (let i = hacker2.length - 1; i >= 0; i--) {
    newhacker2+=hacker2[i];  
}
console.log(newhacker2);
// 3.3

 let orden = [hacker1, hacker2];

 orden.sort((a, b) => {
     if (a > b) {
         return console.log("El nombre del conductor va primero.");
       }
     else if (a < b) {
         return console.log("Yo, el navegador va primero definitivamente.");
     }
     else{
     return console.log("¿Qué? ¿Los dos tienen el mismo nombre?");}
   }
 );



// bono 1

let texto= "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent accumsan non ante sodales pretium. Ut commodo felis accumsan risus vulputate, vitae gravida felis tristique. Sed consectetur neque quis nunc eleifend, sed tincidunt nisl bibendum. Pellentesque euismod porta justo eu elementum. Sed id felis et risus viverra facilisis. Nunc fermentum ullamcorper nibh, et eleifend dolor commodo id. Donec vel tincidunt mauris. Mauris quis placerat leo, sed sagittis est. Pellentesque venenatis magna at rutrum commodo. Nunc eget finibus sem. Quisque pellentesque ante et cursus molestie. Phasellus fringilla porttitor metus nec pellentesque.Integer eu justo ut metus auctor dictum et id lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Morbi auctor, neque at vestibulum volutpat, orci metus sollicitudin nibh, ac blandit risus tortor sed ipsum. Praesent sed lorem vitae purus semper tincidunt. Aliquam eu metus ex. Morbi elementum libero rhoncus est semper tempus. Duis vitae purus ut massa mollis tristique. Ut sit amet euismod mauris. Pellentesque hendrerit fringilla massa, vitae rhoncus dui scelerisque sed. Suspendisse accumsan gravida rutrum. Mauris gravida facilisis risus in finibus.Integer dictum tempus mi, ut euismod ipsum consequat quis. Donec auctor ipsum id dignissim ullamcorper. Nullam et placerat justo. Aenean sit amet dolor lacus. Curabitur lobortis, justo sed commodo pellentesque, ligula libero semper nibh, at ultrices arcu arcu sed dui. Aenean imperdiet orci sit amet rhoncus sodales. In nec nisl nec nunc venenatis dapibus vel in turpis. Donec eget mauris sed magna maximus vulputate. Nam pharetra ligula nulla, vel egestas orci efficitur in. Vivamus tincidunt et augue sed suscipit."
let c = texto.split(' ').length;
console.log(c);
// ----------------
var contador_et=0
let words= texto.split(' ')
for (let i = 0; i < c; i++) {
    if (words[i]==='et'){
        contador_et++;
    }

}
    console.log(contador_et);

    // bono 2
    let phrasetocheck = 'amor,roma';
    let phrasereverse="";

        for (let i = phrasetocheck.length - 1; i >= 0; i--) {
            phrasereverse+=phrasetocheck[i];  
        }
        if (phrasetocheck===phrasereverse){
            console.log('es un palíndromo');}
        else{
            console.log('no es un palíndromo');
        }
    
    
