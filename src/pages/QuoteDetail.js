import React from "react"
import { useParams, Route } from "react-router-dom"
import Comments from "../components/comments/Comments"

const QuoteDetail = () => {
    const { quoteId } = useParams()
    
    return (
        <React.Fragment>
            <h1>Quote Detail Page</h1>
            <p>{quoteId}</p>
            <Route path={`/quotes/${quoteId}/comments`} component={Comments}/>
        </React.Fragment>
    )
}

export default QuoteDetail

