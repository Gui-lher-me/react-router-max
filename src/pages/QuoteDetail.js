import React from "react"
import { useParams, Route, Link, useRouteMatch } from "react-router-dom"
import Comments from "../components/comments/Comments"
import HighlightedQuote from "../components/quotes/HighlightedQuote"

const DUMMY_QUOTES = [
    {id: "q1", author: "Max", text: "Learning React is fun!"},{id: "q2", author: "Maximilian", text: "Learning React is great!"},
]

const QuoteDetail = () => {
    const {path, url} = useRouteMatch()
    const { quoteId } = useParams()
    
    const quote = DUMMY_QUOTES.find(quote => quote.id === quoteId)

    if(!quote) return <p>No quote found!</p>

    return (
        <React.Fragment>
            <HighlightedQuote text={quote.text} author={quote.author} />
            <Route exact path={path}>
                <div className="centered">
                    <Link className="btn--flat" to={`${url}/comments`}>Load Comments</Link>
                </div>
            </Route>
            
            <Route path={`${path}/comments`} component={Comments}/>
        </React.Fragment>
    )
}

export default QuoteDetail

