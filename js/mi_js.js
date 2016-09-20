$(document).ready(function()
{
    var contador = 0;
    var seccionCiclo = 0;
    var cicloEjecutar = $(".ciclo-ejecutar");
    var timer = null;
    var botonEjecutar = $(".btn-ejecutar");
    var variableContador = $("#variable-contador");
    var salida = $("#salida");
    var ejecucion = $("#ejecucion");
    
    botonEjecutar.click(function(event)
    {
        if (contador == 5) {
            contador = 0;
            seccionCiclo = 0;
            variableContador.text("");
            salida.html("");
            botonEjecutar.text("Ejecutar");
            ejecucion.fadeOut();
        }
        else
        {
            botonEjecutar.fadeOut(function()
            {
                ejecucion.fadeIn();
                timer = setInterval(ProcederEjecucionCiclo, 1000);
            });
        }
    });
    
    function ProcederEjecucionCiclo()
    {
        switch (seccionCiclo) {
            case 1:
                variableContador.text(contador);
                
                // Condicion
                if (contador < 5) {
                    seccionCiclo = 2;
                    cicloEjecutar.find(".inicializacion").removeClass("codigo-ejecutando");
                    cicloEjecutar.find(".condicion").addClass("codigo-ejecutando");
                }
                else
                {
                    clearInterval(timer);
                    botonEjecutar.text("Reiniciar").fadeIn();
                }
                
                cicloEjecutar.find(".incremento-decremento").removeClass("codigo-ejecutando");
                break;
            case 2:
                // Ejecución interna
                if (contador < 5) {
                    AnadirSalida();
                }
                
                cicloEjecutar.find(".condicion").removeClass("codigo-ejecutando");
                cicloEjecutar.find(".codigo-ejecutar").addClass("codigo-ejecutando");
                seccionCiclo = 3;
                break;
            case 3:
                // Incremento/Decremento
                contador++;
                seccionCiclo = 1;
                cicloEjecutar.find(".codigo-ejecutar").removeClass("codigo-ejecutando");
                cicloEjecutar.find(".incremento-decremento").addClass("codigo-ejecutando");
                break;

            default:
                // Inicializar
                contador = 0;
                seccionCiclo = 1;
                cicloEjecutar.find(".inicializacion").addClass("codigo-ejecutando");
                break;
        }
        console.log(contador);
    }
    
    function AnadirSalida() {
        salida.append("<p>El contador tiene: " + contador + "</p>");
    }
});

