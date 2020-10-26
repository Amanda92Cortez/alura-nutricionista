var paciente = document.querySelectorAll(".paciente");

var tabela = document.querySelector("#tabela-pacientes");
tabela.addEventListener("dblclick", function(event){
    // console.log(event.target);
    // console.log(this);
    // var alvoEvento = event.target;
    // var paiDoAlvo = alvoEvento.parentNode; //TR - Paciente - Remove
    // event.target.parentNode.remove();
    // paiDoAlvo.remove();

    event.target.parentNode.classList.add("fadeOut");
    setTimeout(function(){
        event.target.parentNode.remove();
    }, 500);
});


// pacientes.forEach(function(paciente){
//     paciente.addEventListener("dblclick",function(){
//         console.log("fui clicado cim um duplo click");
//         this.remove();
//     });
// });