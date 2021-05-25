import * as React from "react";
import tw from "tailwind-styled-components";
import { Header } from "./";

export default function Layout({ children }) {
  return (
    <Container>
      <Header />
      {children}
    </Container>
  );
}

const Container = tw.div`
  container
  mx-auto
  my-4
`;
