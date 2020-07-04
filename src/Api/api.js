import axios from 'axios'

const url = 'https://covid19.mathdro.id/api'

export const fetchData = async (country) => {
    let changeableurl = url;
    if(country){
        changeableurl = `${url}/countries/${country}`
    }
    try {
        const {data : {confirmed, deaths,recovered,lastUpdate}} = await axios.get(changeableurl);
        const modifiedData = {
            confirmed,
            deaths,
            recovered,
            lastUpdate
        }
        return modifiedData;
    } catch (error) {
        console.log(error);
    }
}

export const fetchDailyData = async () =>{
    try {
       const {data} = await axios.get(`${url}/daily`)
       return data.map(({ confirmed, deaths, reportDate: date }) => ({ confirmed: confirmed.total, deaths: deaths.total, date }));
 
    } catch (error) {
        console.log(error)
    }
}

export const fetchCountries = async () => {
    try {
        const {data : {countries}} = await axios.get(`${url}/countries`)
        return countries.map((country) => country.name);
    } catch (error) {
        console.log(error)
    }
}