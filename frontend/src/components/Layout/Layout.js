import React from 'react';
import Header from "../Navigation/Header/Header";
import {Container} from "@material-ui/core";

const Layout = (props) => {
  return (
    <>
      <Header/>
      <main>
        <Container maxWidth="lg">
          {props.children}
        </Container>
      </main>
    </>
  );
};

export default Layout;