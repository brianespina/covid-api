import globalStatus from './globalStatus.js'

const API_URL = 'https://api.covid19api.com/summary'
const globalComponent = document.getElementById('root')

async function fetchAPI(){
    try{
        const call = await fetch(API_URL)
        const data = await call.json()

        globalStatus(data, globalComponent)
        document.getElementById('loader').classList.add('hide')

    }catch(err){console.log(err)}
}

fetchAPI()

