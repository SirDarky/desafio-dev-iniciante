export function transformarHoras(dataHoraString) {
    const dataHora = new Date(dataHoraString);
    const horas = dataHora.getHours().toString().padStart(2, "0");
    const minutos = dataHora.getMinutes().toString().padStart(2, "0");

    const formatoHoraMinuto = horas + ":" + minutos;
    return formatoHoraMinuto
}