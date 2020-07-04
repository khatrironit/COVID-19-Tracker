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
            <FormControl>
                <NativeSelect defaultValue = "" onChange = {(e)=>handleCountryChange(e.target.value)}>
                    <option value = 'global'>Global</option>
                    {countries.map(country => <option value = {country}>{country}</option>)}
                </NativeSelect>
            </FormControl>
        </div>
    )
}
