import React from 'react';
import { useQuery } from '@apollo/react-hooks'

import globalCovidSummaryQuery from '../../graphql/query/global-covid-summary'

function GlobalCovidSummary() {
    const { loading, error, data } = useQuery(globalCovidSummaryQuery)
    if (loading) return <p>Loading...</p>
    if (error) return <p>Error :(</p>
    return (
        <div>
            <h1>Global Covid Stats</h1>
            <p>New Confirmed - {data.globalCovidSummary.globalSummary.newConfirmed}</p>
            <p>Total Confirmed - {data.globalCovidSummary.globalSummary.totalConfirmed}</p>
            <p>New Deaths - {data.globalCovidSummary.globalSummary.newDeaths}</p>
            <p>Total Deaths - {data.globalCovidSummary.globalSummary.totalDeaths}</p>
            <p>Total Recovered - {data.globalCovidSummary.globalSummary.totalRecovered}</p>
        </div>
    )
}

export default GlobalCovidSummary;