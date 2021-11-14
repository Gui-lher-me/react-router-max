import { Fragment } from 'react';

import {useHistory} from "react-router-dom"

import QuoteItem from './QuoteItem';
import classes from './QuoteList.module.css';

const sortQuotes = (quotes, ascending) => {
  return quotes.sort((quoteA, quoteB) => {
    if (ascending) {
      return quoteA.id > quoteB.id ? 1 : -1
    } else {
      return quoteA.id < quoteB.id ? 1 : -1
    }
  })
}

const QuoteList = ({quotes}) => {
  const history = useHistory()

  const queryParams = new URLSearchParams(history.location.search)

  const isSortingAscending = queryParams.get("sort") === "asc"

  const sortedQuotes = sortQuotes(quotes, isSortingAscending)

  const changeSortingHandler = () => {
    history.push({
      pathname: history.location.pathname,
      search: `?sort=${(isSortingAscending ? "des" : "asc")}`
    })
    // history.push(`${history.location.pathname}?sort=${(isSortingAscending ? "des" : "asc")}`)
  }

  return (
    <Fragment>
      <div className={classes.sorting}>
        <button onClick={changeSortingHandler}>Sort {!isSortingAscending ? "Ascending" : "Descending"}</button>
      </div>
      <ul className={classes.list}>
        {sortedQuotes.map(quote => (
          <QuoteItem
            key={quote.id}
            id={quote.id}
            author={quote.author}
            text={quote.text}
          />
        ))}
      </ul>
    </Fragment>
  );
};

export default QuoteList;
