import * as React from "react";
import tw from "tailwind-styled-components";
import { Link } from "gatsby";
import { Button } from "./";

export default function ExchangeRow({ data }) {
  const { id, name, country, url, image, trust_score_rank } = data;

  return (
    <Row>
      <div>
        <img
          src={image}
          alt={`${name} logo`}
          width="48px"
          className="rounded"
        />
      </div>
      <div className="pl-4 flex-1">
        <Name target="_blank" href={url}>
          {name}
        </Name>
        <Info>
          {country} {trust_score_rank}
        </Info>
      </div>
      <div>
        <Link to={`/exchange/${id}`}>
          <Button>View Details</Button>
        </Link>
      </div>
    </Row>
  );
}

export const Row = tw.div`
  p-6
  rounded-lg
  bg-white
  mb-3
  flex
  items-center
  transition
  duration-300
  ease-in-out
  shadow-sm

  hover:shadow-lg
`;

export const Name = tw.a`
  text-xl

  hover:text-blue-500
`;

export const Info = tw.div`
  text-sm
  text-gray-500
`;
