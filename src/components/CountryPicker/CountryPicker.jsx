import React, {useEffect, useState} from 'react'
import Styles from './CountryPicker.module.css'
import { NativeSelect , FormControl} from '@material-ui/core'
import { fetchCountries } from '../../Api/api'

export default function CountryPicker({handleCountryChange}) {
    const [countries, setCountries] = useState([])

    useEffect(() => {
        const getCountries = async () => {
            setCountries(await fetchCountries())
        }
        
        getCountries();
        
    }, [setCountries])
    console.log(countries)
    return (
        <div>
            <FormControl className = {Styles.formControl}>
                <NativeSelect defaultValue = "" onChange = {(e)=>handleCountryChange(e.target.value)} style = {{fontSize:'1.5em',padding : '5px',display :'inline'}}>
                    <option value = ''>Global</option>
                    {countries.map((country,i) => <option key = {i} value = {country}>{country}</option>)}
                </NativeSelect>                
            </FormControl>
            <p style = {{display:'inline',marginLeft : '30px'}}>Select a country...</p>
        </div>
    )
}
