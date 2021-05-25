import * as React from "react";
import tw from "tailwind-styled-components";
import { Row } from "./ExchangeRow";

export default function ExchangeRowSekeltonLoader() {
  return (
    <RowSkelton>
      <div>
        <div className="w-12 h-12 rounded bg-gray-200"></div>
      </div>
      <div className="pl-4 flex-1">
        <div className="h-5 w-40 bg-gray-200 mb-2"></div>
        <div className="h-3 w-20 bg-gray-200"></div>
      </div>
    </RowSkelton>
  );
}

const RowSkelton = tw(Row)`
  cursor-default
  animate-pulse
  relative
`;
