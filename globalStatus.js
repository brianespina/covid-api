import composeInjectToElement from './helperFunctions.js'

export default function globalStatusComponent(obj, element){
    const globalData = obj.Global
    console.log(globalData)
    const dataArray = [
        {
            name: 'newConfirmed',
            className: 'new-confirmed',
            label: 'New Confirmed Cases: ',
            data: globalData.NewConfirmed
        },
        {
            name: 'newDeaths',
            className: 'new-deaths',
            label: 'New Deaths: ',
            data: globalData.NewDeaths
        },
        {
            name: 'newRecovered',
            className: 'new-recovered',
            label: 'New Recovered: ',
            data: globalData.NewRecovered
        },
        {
            name: 'totalConfirmed',
            className: 'total-confirmed',
            label: 'Total Confirmed: ',
            data: globalData.TotalConfirmed
        },
        {
            name: 'totalDeaths',
            className: 'total-deaths',
            label: 'Total Deaths: ',
            data: globalData.TotalDeaths
        },
        {
            name: 'totalRecovered',
            className: 'total-recovered',
            label: 'Total Recovered: ',
            data: globalData.TotalRecovered
        },
    ]
    dataArray.map(data => {
        composeInjectToElement(data, element)
    })
}