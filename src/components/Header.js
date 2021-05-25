import * as React from "react";
import tw from "tailwind-styled-components";
import { useLocation } from "@reach/router";

export default function Header() {
  const location = useLocation();

  return (
    <HeaderContainer className="">
      {location.pathname != "/" && (
        <span className="w-20">
          <BackButton onClick={() => window.history.back()}>
            <svg
              className="w-6 h-6 currentColor"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
                clipRule="evenodd"
              />
            </svg>
          </BackButton>
        </span>
      )}
      <span className="text-center text-3xl text-italic flex-1">Exchanges</span>
      <span className="w-20"></span>
    </HeaderContainer>
  );
}

const HeaderContainer = tw.header`
  flex
  py-10
`;

const BackButton = tw.span`
  w-10
  h-10
  rounded-full
  flex
  items-center
  justify-center
  transition
  duration-300
  ease-in-out
  cursor-pointer
  text-gray-500

  hover:bg-gray-200
`;
