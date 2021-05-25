import * as React from "react";
import { Layout, ExchangeRow } from "../../components";
import tw from "tailwind-styled-components";

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

      <section className="mt-6 flex">
        <h3 className="text-gray-500 uppercase text-sm">Description</h3>

        {exchange && exchange.description != "" ? (
          <div
            dangerouslySetInnerHTML={{ __html: exchange.description }}
            className="mt-2 flex-1"
          ></div>
        ) : (
          <div className="p-10 text-center text-gray-400 flex items-center justify-center flex-1">
            No Description Found
          </div>
        )}

        <div className="w-72 border-l px-5">
          <h3 className="text-gray-500 uppercase text-sm mb-6">More Info</h3>

          <InfoRow title="Established In" value={exchange.year_established} />
          <InfoRow title="Trust Score" value={exchange.trust_score} />
          <InfoRow title="Trust Score Rank" value={exchange.trust_score_rank} />

          <br></br>

          {exchange.telegram_url && (
            <SocialLink href={exchange.telegram_url} target="_blank">
              <img src="/static/img/social/telegram.png" />
            </SocialLink>
          )}

          {exchange.slack_url && (
            <SocialLink href={exchange.slack_url} target="_blank">
              <img src="/static/img/social/slack.png" />
            </SocialLink>
          )}

          {exchange.reddit_url && (
            <SocialLink href={exchange.reddit_url} target="_blank">
              <img src="/static/img/social/reddit.png" />
            </SocialLink>
          )}

          {exchange.facebook_url && (
            <SocialLink href={exchange.facebook_url} target="_blank">
              <img src="/static/img/social/facebook.png" />
            </SocialLink>
          )}
        </div>
      </section>
    </Layout>
  );
}

const InfoRow = ({ title, value }) => {
  return (
    <div className="flex flex-col mb-4">
      <span className="text-lg">{value}</span>
      <span className="uppercase text-gray-500 text-sm">{title}</span>
    </div>
  );
};

const SocialLink = tw.a`
  w-5 
  h-5 
  mr-5
  opacity-50
  inline-block
  
  hover:opacity-100
`;
