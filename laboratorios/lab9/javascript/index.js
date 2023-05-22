// This will print in the wrong order.
// We added it as an example and to test that the arrays from data.js are loaded

// 🚨🚨🚨 Comment out the below code before you start working on the code

// Out of sync
  // getInstruction("mashedPotatoes", 0, (step1) => {
  //   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
  // }, (error) => console.log(error));
  
  // getInstruction("mashedPotatoes", 1, (step2) => {
  //   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;
  // }, (error) => console.log(error));
  
  // getInstruction("mashedPotatoes", 2, (step3) => {
  //   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`;
  // }, (error) => console.log(error));
  
  // getInstruction("mashedPotatoes", 3, (step4) => {
  //   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`;
  // }, (error) => console.log(error));
  
  // getInstruction("mashedPotatoes", 4, (step5) => {
  //   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step5}</li>`;
  //   document.querySelector("#mashedPotatoesImg").removeAttribute("hidden");
  // }, (error) => console.log(error));



// Iteration 1 - using callbacks
// Iteration 1 - using callbacks
getInstruction('mashedPotatoes', 0, (step0) =>{
  document.querySelector("#mashedPotatoes").innerHTML += `<li>${step0}</li>`;

  getInstruction('mashedPotatoes',1,(step1)=>{
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
    getInstruction('mashedPotatoes', 2, (step2) =>{
      document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;
      getInstruction('mashedPotatoes', 3, (step3) =>{
        document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`;
        getInstruction('mashedPotatoes', 4, (step4) =>{
          document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`;
          setTimeout(()=>{
            document.querySelector("#mashedPotatoes").innerHTML +=`<li>Mashed potatoes are ready!</li>`;
            document.querySelector("#mashedPotatoesImg").removeAttribute('hidden');
            },1000);
          })
        });
      });
    });
  });


// Iteration 2 - using promises
// Iteration 2 - using promises
// Iteration 2 - using promises
obtainInstruction('steak', 0)
  .then( (step) => {
    document.querySelector("#steak").innerHTML += `<li>${step}</li>`
    return obtainInstruction('steak',1);})
  .then( (step) => {
    document.querySelector("#steak").innerHTML += `<li>${step}</li>`;
    return obtainInstruction('steak',2);})
  .then( (step) => {
    document.querySelector("#steak").innerHTML += `<li>${step}</li>`;
    return obtainInstruction('steak',3);})
  .then( (step) => {
    document.querySelector("#steak").innerHTML += `<li>${step}</li>`;
    return obtainInstruction('steak',4);})
  .then( (step) => {
     document.querySelector("#steak").innerHTML += `<li>${step}</li>`;
     return obtainInstruction('steak',5);})
  .then( (step) => {
    document.querySelector("#steak").innerHTML += `<li>${step}</li>`;
    return obtainInstruction('steak',6);})
  .then( (step) => {
   document.querySelector("#steak").innerHTML += `<li>${step}</li>`;
   return obtainInstruction('steak',7);})
  .then( (step) => {
    document.querySelector("#steak").innerHTML += `<li>${step}</li>`;
    setTimeout(()=>{
      document.querySelector("#steak").innerHTML +=`<li>Steak is ready!</li>`;
      document.querySelector("#steakImg").removeAttribute('hidden');
      },1000)});
  
  

// Iteration 3 using async/await
async function makeBroccoli() {
    await obtainInstruction("broccoli",0);
    document.querySelector("#broccoli").innerHTML += `<li>${broccoli[0]}</li>`;

    await obtainInstruction("broccoli",1);
    document.querySelector("#broccoli").innerHTML += `<li>${broccoli[1]}</li>`;

    await obtainInstruction("broccoli",2);
    document.querySelector("#broccoli").innerHTML += `<li>${broccoli[2]}</li>`;

    await obtainInstruction("broccoli",3);
    document.querySelector("#broccoli").innerHTML += `<li>${broccoli[3]}</li>`;

    await obtainInstruction("broccoli",4);
    document.querySelector("#broccoli").innerHTML += `<li>${broccoli[4]}</li>`;

    await obtainInstruction("broccoli",5);
    document.querySelector("#broccoli").innerHTML += `<li>${broccoli[5]}</li>`;

    await obtainInstruction("broccoli",6);
    document.querySelector("#broccoli").innerHTML += `<li>${broccoli[6]}</li>`;
    setTimeout(()=>{
      document.querySelector("#broccoli").innerHTML +=`<li>Broccoli is ready!</li>`;
      document.querySelector("#broccoliImg").removeAttribute('hidden');
      },1000);
    };
    
  
makeBroccoli()

// Bonus 2 - Promise all

let brusselsSproutsPromise= ()=>{
  Promise.all([
  obtainInstruction('brusselsSprouts', 0),
  obtainInstruction('brusselsSprouts', 1),
  obtainInstruction('brusselsSprouts', 2),
  obtainInstruction('brusselsSprouts', 3),
  obtainInstruction('brusselsSprouts', 4),
  obtainInstruction('brusselsSprouts', 5),
  obtainInstruction('brusselsSprouts', 6),
  obtainInstruction('brusselsSprouts', 7)])

.then((arraydepasos)=>{
  arraydepasos.forEach((paso)=>{
    document.querySelector("#brusselsSprouts").innerHTML += `<li>${paso}</li>`;
  })
  document.querySelector("#brusselsSprouts").innerHTML +=`<li>Brussels Sprouts are ready!</li>`;
  document.querySelector("#brusselsSproutsImg").removeAttribute('hidden');
})
}
brusselsSproutsPromise();