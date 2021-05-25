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
          <span className="inline-flex mr-4">
            <svg
              class="w-5 h-5 mr-1"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                clip-rule="evenodd"
              ></path>
            </svg>
            {country}
          </span>

          <span className="inline-flex">
            <svg
              class="w-5 h-5 mr-1"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z"
                clip-rule="evenodd"
              ></path>
            </svg>
            {trust_score_rank}
          </span>
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
  mt-1
  text-gray-500
`;
