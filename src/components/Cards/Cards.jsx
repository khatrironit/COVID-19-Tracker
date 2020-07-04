import React from 'react'
import {Card, Grid, CardContent, Typography} from '@material-ui/core'
import CountUp from 'react-countup' 
import cx from 'classnames'
import styles from './Cards.module.css'
export default function Cards({data : {confirmed,recovered,deaths,lastUpdate}}) {
    console.log(lastUpdate)
    if(!confirmed){
        return <h3>Loading...</h3>
    }
    return (
        <div className = {styles.container}>
            <Grid container spacing = {3} justify = "center">
                <Grid item component = {Card} xs = {12} md = {3} lg = {3} className = {cx(styles.card,styles.infected)}>
                    <CardContent>
                        <Typography color = "textSecondary" gutterBottom style = {{fontSize : '1.3em'}}>Infected</Typography>
                        <Typography variant = "h4">
                            <CountUp start = {0} end = {confirmed.value} duration = {2.5} separator = ","/>
                        </Typography>
                        <Typography color = "textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant = "body2">Number of active cases of COVID-19</Typography>
                    </CardContent>
                </Grid>
                <Grid item component = {Card} xs = {12} md = {3} lg = {3} className = {cx(styles.card,styles.recovered)}>
                    <CardContent>
                        <Typography color = "textSecondary" gutterBottom style = {{fontSize : '1.3em'}}>Recovered</Typography>
                        <Typography variant = "h4">
                            <CountUp start = {0} end = {recovered.value} duration = {2.5} separator = ","/>
                        </Typography>
                        <Typography color = "textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant = "body2">Number of recoveries from COVID-19</Typography>
                    </CardContent>
                </Grid>
                <Grid item component = {Card} xs = {12} md = {3} lg = {3} className = {cx(styles.card,styles.deaths)}>
                    <CardContent>
                        <Typography color = "textSecondary" gutterBottom style = {{fontSize : '1.3em'}}>Deaths</Typography>
                        <Typography variant = "h4">
                            <CountUp start = {0} end = {deaths.value} duration = {2.5} separator = ","/>
                        </Typography>
                        <Typography color = "textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant = "body2">Number of deaths caused by COVID-19</Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </div>
    )
}
