function getInputValue(id) {
    const value = document.getElementById(id).value;
    const convertedValue = parseFloat(value);
    return convertedValue;
}
function getInnerText(id){
    const value = document.getElementById(id).innerText;
    const convertedValue = parseFloat(value);
    return convertedValue;
}
function setInnerText(id, value){
    document.getElementById(id).innerText = value;
}