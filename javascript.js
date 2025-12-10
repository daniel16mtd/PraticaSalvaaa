function toma() {
   let body = document.querySelector("#bombardiro");
   //let hora = new Date().getHours();
   let hora=6

   // MANHÃ
   if (hora >= 6 && hora <= 11) {
      body.classList.add("temaClaro");
      body.classList.remove("temaEscuro");
   }

   // TARDE e NOITE
   else {
      body.classList.add("temaEscuro");
      body.classList.remove("temaClaro");
   }
}
