import * as React from "react";
import {
  Layout,
  ExchangeRow,
  Button,
  ExchangeRowSekeltonLoader,
} from "../components";
import { useQueryParam, NumberParam } from "use-query-params";

export default function Index() {
  const [exchanges, setExchanges] = React.useState([]);
  const [loadingExchanges, setLoadingExchanges] = React.useState(true);
  const [page = 1, setCurrentPage] = useQueryParam("page", NumberParam);
  const perPage = 10;

  React.useEffect(() => {
    const getExchanges = () => {
      setLoadingExchanges(true);
      fetch(
        `https://api.coingecko.com/api/v3/exchanges?per_page=${perPage}&page=${page}`
      )
        .then((response) => {
          setLoadingExchanges(false);
          return response.json();
        })
        .then((exchanges) => setExchanges(exchanges))
        .catch((err) => err);
    };

    getExchanges();
  }, [page]);

  // increment page number and scroll to top
  const nextPage = () => {
    setCurrentPage(page + 1);
    window.scrollTo(0, 0);
  };

  // decrement page number and scroll to top
  const previousPage = () => {
    // only go to previous page if current page is equal or greater than 2
    if (page >= 2) {
      setCurrentPage(page - 1);
      window.scrollTo(0, 0);
    }
  };

  return (
    <Layout>
      {/* if it is the first time loading exchanges, we will show skeleton ExchangeRow */}
      {exchanges.length === 0 &&
        loadingExchanges &&
        Array.from(Array(10), (e, i) => (
          <ExchangeRowSekeltonLoader key={`skeleton-${i}`} />
        ))}

      {/* if user has already loaded the exchanges and changing the pages, it will just fade it to indicate that its loading */}
      {exchanges.length > 0 && (
        <div className={`${loadingExchanges ? "opacity-50" : ""}`}>
          {exchanges &&
            exchanges.map((exchange) => (
              <ExchangeRow data={exchange} key={exchange.id} />
            ))}
        </div>
      )}

      {/* pagination */}
      <div className="text-center py-6 mt-10">
        {page > 1 && (
          <Button className="ml-2" onClick={() => previousPage()}>
            ← Previous
          </Button>
        )}
        &nbsp;
        <Button onClick={() => nextPage()}>Next →</Button>
      </div>
    </Layout>
  );
}
