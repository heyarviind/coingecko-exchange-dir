import * as React from "react";
import { Layout, ExchangeRow } from "../../components";

export default function Index({ params }) {
  const [exchange, setExchange] = React.useState({});

  React.useEffect(() => {
    getExchange();
  }, []);

  const getExchange = () => {
    fetch(`https://api.coingecko.com/api/v3/exchanges/${params.id}`)
      .then((response) => response.json())
      .then((exchange) => setExchange(exchange))
      .catch((err) => err);
  };

  return (
    <Layout>
      <section className="">
        <ExchangeRow data={exchange} />
      </section>

      <section className="mt-6">
        <h3 className="text-gray-500 uppercase text-sm">Description</h3>

        {exchange && exchange.description != "" ? (
          <div
            dangerouslySetInnerHTML={{ __html: exchange.description }}
            className="mt-2"
          ></div>
        ) : (
          <div className="p-10 text-center text-gray-400 flex items-center justify-center">
            Nothing Found
          </div>
        )}
      </section>
    </Layout>
  );
}
