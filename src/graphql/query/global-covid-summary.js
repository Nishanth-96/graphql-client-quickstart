import { gql } from "apollo-boost"

const globalCovidSummaryQuery = gql`
    {
        globalCovidSummary{
        globalSummary{
            newConfirmed
            totalConfirmed
            newDeaths
            totalDeaths
            newConfirmed
            totalRecovered
        }
        countrySummary {
            name
            code
            lastUpdated
            summary{
            newConfirmed
            totalConfirmed
            newDeaths
            totalDeaths
            newRecovered
            totalRecovered
            }
        }
        }
    }
`
export default globalCovidSummaryQuery