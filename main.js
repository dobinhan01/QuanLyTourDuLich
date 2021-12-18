var counter = 1;
setInterval(() => {
   document.getElementById('radio' + counter).checked = true;
   counter++;
   if(counter > 4){
       counter = 1;
   }
}, 3000);