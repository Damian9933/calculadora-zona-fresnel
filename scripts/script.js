document.addEventListener("DOMContentLoaded", function() {
    const calcularButton = document.getElementById("calcular");
    calcularButton.addEventListener("click", function() {
        const distancia = parseFloat(document.getElementById("distancia").value);
        const frecuencia = parseFloat(document.getElementById("frecuencia").value);

        const resultado = calcularZonaFresnel(distancia, frecuencia);

        const resultadoElement = document.getElementById("resultado");
        resultadoElement.textContent = `El radio de la zona fresnel es: ${resultado.toFixed(2)} metros.`;
    });
});

function calcularZonaFresnel(distancia, frecuencia) {
    const longitudOnda = frecuencia;
    const resultado = distancia / longitudOnda;
    const radio = 8.656 * Math.sqrt(resultado);
    return radio;
}
