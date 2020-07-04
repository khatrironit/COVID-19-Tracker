import axios from 'axios'

const url = 'https://covid19.mathdro.id/api'

export const fetchData = async () => {
    try {
        const {data : {confirmed, deaths,recovered,lastUpdate}} = await axios.get(url);
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
       return data 
    } catch (error) {
        console.log(error)
    }
}