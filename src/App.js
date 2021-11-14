import {BrowserRouter, Switch, Route, Redirect} from "react-router-dom"
import AllQuotes from "./pages/AllQuotes"
import NewQuote from "./pages/NewQuote"
import QuoteDetail from "./pages/QuoteDetail"
import Layout from "./components/layout/Layout"
// main route definition
function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/quotes" component={AllQuotes}/>
          <Route path="/quotes/:quoteId" component={QuoteDetail}/>
          <Route path="/new-quote" component={NewQuote}/>
          <Route exact path="/" render={() => <Redirect to="/quotes" />}/>
          <Route path="*" render={() => <p className="centered">Page not found!</p>} />
        </Switch>
      </Layout>
    </BrowserRouter>
  )
}

export default App

