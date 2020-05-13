const API_URL = 'https://api.covid19api.com/summary'
const globalComponent = document.getElementById('global')

document.addEventListener('DOMContentLoaded', () => {
    fetchAPI()
})

async function fetchAPI(){
    try{
        const call = await fetch(API_URL)
        const data = await call.json()
        globalStatusComponent(data)
        const select = document.querySelector('select')
        select.addEventListener('change', (event) => {
            globalComponent.innerHTML = ''
            const passedValue = event.target.value
            passedValue === 'global' 
            ?globalStatusComponent(data)
            :countryComponent(data, passedValue)
        })
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
    newElement.classList.add('item')
    const formatedValue = value.toLocaleString()
    const output = `<span>${label}</span> ${formatedValue}`
    newElement.innerHTML = output
    element.appendChild(newElement)
}

function countryComponent(obj, id){
    const data = obj.Countries[id]
    Object.entries(data).forEach(([key, value]) => {
        if(key === 'Country' || key === 'CountryCode' || key === 'Slug' || key === 'Date'){}
        else{
            composeInjectToElement(key, value, globalComponent)
        }
    })
}

function updateTitle(key){
    const titleElement = document.querySelector('h1')
    titleElement.textContent = key
}
