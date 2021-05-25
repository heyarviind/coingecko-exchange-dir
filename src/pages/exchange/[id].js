import * as React from "react";
import {
  Layout,
  ExchangeRow,
  ExchangeRowSekeltonLoader,
} from "../../components";
import tw from "tailwind-styled-components";

export default function Index({ params }) {
  const [exchange, setExchange] = React.useState({});
  const [gettingDetails, setGettingDetails] = React.useState(true);

  React.useEffect(() => {
    const getExchange = () => {
      setGettingDetails(true);
      fetch(`https://api.coingecko.com/api/v3/exchanges/${params.id}`)
        .then((response) => {
          setGettingDetails(false);
          return response.json();
        })
        .then((exchange) => setExchange(exchange))
        .catch((err) => err);
    };

    getExchange();
  }, [params.id]);

  return (
    <Layout>
      <section className="">
        {gettingDetails ? (
          <ExchangeRowSekeltonLoader />
        ) : (
          <ExchangeRow data={exchange} noninteractive={1} />
        )}
      </section>

      {exchange.name && (
        <section className="mt-6 flex flex-col md:flex-row">
          <div className="flex-1">
            <h3 className="text-gray-500 uppercase text-sm">Description</h3>

            {exchange && exchange.description !== "" ? (
              <div
                dangerouslySetInnerHTML={{ __html: exchange.description }}
                className="mt-2 flex-1"
              ></div>
            ) : (
              <div className="p-10 text-center text-gray-400 flex items-center justify-center flex-1">
                No Description Found
              </div>
            )}
          </div>

          <div className="w-full md:w-52 md:border-l md:px-5 mt-10 md:mt-0">
            <h3 className="text-gray-500 uppercase text-sm mb-6">More Info</h3>

            <InfoRow title="Established In" value={exchange.year_established} />
            <InfoRow title="Trust Score" value={exchange.trust_score} />
            <InfoRow
              title="Trust Score Rank"
              value={exchange.trust_score_rank}
            />

            <br></br>

            {exchange.telegram_url && (
              <SocialLink href={exchange.telegram_url} target="_blank">
                <img
                  alt="telegram icon"
                  src="/static/img/social/telegram.png"
                />
              </SocialLink>
            )}

            {exchange.slack_url && (
              <SocialLink href={exchange.slack_url} target="_blank">
                <img alt="salck icon" src="/static/img/social/slack.png" />
              </SocialLink>
            )}

            {exchange.reddit_url && (
              <SocialLink href={exchange.reddit_url} target="_blank">
                <img alt="reddit icon" src="/static/img/social/reddit.png" />
              </SocialLink>
            )}

            {exchange.facebook_url && (
              <SocialLink href={exchange.facebook_url} target="_blank">
                <img
                  alt="facebook icon"
                  src="/static/img/social/facebook.png"
                />
              </SocialLink>
            )}
          </div>
        </section>
      )}
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
