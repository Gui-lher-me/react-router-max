import {BrowserRouter, Switch, Route, Redirect} from "react-router-dom"
import AllQuotes from "./pages/AllQuotes"
import NewQuote from "./pages/NewQuote"
import QuoteDetail from "./pages/QuoteDetail"

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/quotes" component={AllQuotes}/>
        <Route path="/quotes/:quoteId" component={QuoteDetail}/>
        <Route path="/new-quote" component={NewQuote}/>
        <Route path="/" render={() => <Redirect to="/quotes" />}/>
      </Switch>
    </BrowserRouter>
  )
}

export default App

