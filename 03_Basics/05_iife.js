// Immediately Invoked Function expressions (IIFE)

(function koffi (){
    // Named iife
    console.log(`DB Connected`);
}) ();


( (name) =>  {
    console.log(`DB connected two ${name}`);
} )("Sam")

