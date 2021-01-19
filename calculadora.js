    x="0"; //guardar número en pantalla
    xi=1; //iniciar número en pantalla: 1=si; 0=no;
    coma=0; //estado coma decimal 0=no, 1=si;

    ni=0; //número oculto o en espera.
    op="no"; //operación en curso; "no" =  sin operación
    
    window.onload = function(){ //Acciones tras cargar la página
    pantalla=document.getElementById("texto"); //elemento pantalla de salida
    pantalla.innerHTML=x; //mostrar en pantalla

    }
 


function numero(e) { //recoge el número pulsado en el argumento.
    if (x=="0" || xi==1  ) { // inicializar un número, 
       pantalla.innerHTML=e; //mostrar en pantalla
       x=e; //guardar número
       if (e==".") { //si escribimos una coma al principio del número
          pantalla.innerHTML="0."; //escribimos 0.
          x=e; //guardar número
          coma=1; //cambiar estado de la coma
          }
      }
      else { //continuar escribiendo un número
          if (e=="." && coma==0) { //si escribimos una coma decimal p�r primera vez
              pantalla.innerHTML+=e;
              x+=e;
              coma=1; //cambiar el estado de la coma  
          }
         //si intentamos escribir una segunda coma decimal no realiza ninguna acción.
          else if (e=="." && coma==1) {} 
          //Resto de casos: escribir un número del 0 al 9: 	 
          else {
              pantalla.innerHTML+=e;
              x+=e
          }
       }
       xi=0 //el número está iniciado y podemos ampliarlo.
    }
    
    function resetear(){

        x="0"; //guardar número en pantalla
        xi=1; //iniciar número en pantalla: 1=si; 0=no;
        coma=0; //estado coma decimal 0=no, 1=si;

        pantalla.innerHTML=x; //mostrar en pantalla
    }

    function operar(s) {
        ni=x //ponemos el número en "numero en espera" para poder escribir el segundo.
        op=s; //guardamos tipo de operación.
        xi=1; //inicializar pantalla.
        }

        function igualar() {
            if (op=="no") { //no hay ninguna operación pendiente.
               pantalla.innerHTML=x;	//mostramos el mismo número	
               }
            else { //con operación pendiente resolvemos
               sl=ni+op+x; // escribimos la operación en una cadena
               sol=eval(sl) //convertimos la cadena a código y resolvemos
               pantalla.innerHTML=sol //mostramos la solución
               x=sol; //guardamos la solución
               op="no"; //ya no hay operaciones pendientes
               xi=1; //se puede reiniciar la pantalla.
               }
           }