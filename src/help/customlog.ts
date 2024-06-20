function customLog(message:string) {
    // Aquí puedes definir cómo mostrar el mensaje en la interfaz de IDX
    // Por ejemplo, podrías agregar el mensaje a un elemento HTML en la página
    const logElement = document.createElement('p');
    logElement.textContent = message;
    document.body.appendChild(logElement);
}
export default customLog