import * as React from "react";
import tw from "tailwind-styled-components";

export default function Button({ children, onClick }) {
  return (
    <StyledButton onClick={onClick ? () => onClick() : null}>
      {children}
    </StyledButton>
  );
}

const StyledButton = tw.button`
 inline-flex
 items-center
 justify-center
 px-4
 py-2
 border
 text-sm
 font-medium
 rounded-md
 text-gray-900
 bg-white
 shadow-sm
 transition
 ease-in-out
 duration-150
 outline-none

 hover:text-gray-600
 hover:no-underline

 focus:outline-none
 focus:text-gray-600
`;
