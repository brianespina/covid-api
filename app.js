

const API_URL = 'https://api.covid19api.com/summary'
const globalComponent = document.getElementById('root')

document.addEventListener('DOMContentLoaded', () => {
    fetchAPI()
})

async function fetchAPI(){
    try{
        const call = await fetch(API_URL)
        const data = await call.json()
        globalStatusComponent(data)
        document.getElementById('loader').classList.add('hide')
    }catch(err){console.log(err)}
}


function globalStatusComponent(obj){
    const globalData = obj.Global
    Object.entries(globalData).forEach(([key, value]) => {
        composeInjectToElement(key, value, globalComponent)
    })
}

function composeInjectToElement(key, value, element){
    const newElement = document.createElement('div')
    const label = key.replace(/([a-z])([A-Z])/g, '$1 $2')
    newElement.classList.add(key)
    const output = `${label}: ${value}`
    newElement.textContent = output
    element.appendChild(newElement)
}
