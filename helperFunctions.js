export default function composeInjectToElement(obj, element){
    const newElement = document.createElement('div')
    newElement.classList.add(obj.className)
    const output = obj.label + obj.data
    newElement.textContent = output
    element.appendChild(newElement)
}