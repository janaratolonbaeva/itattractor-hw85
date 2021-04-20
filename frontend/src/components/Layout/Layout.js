import React from 'react';
import Header from "../Navigation/Header/Header";
import {Container} from "@material-ui/core";

const Layout = (props) => {
  return (
    <>
      <Header/>
      <Container maxWidth="lg">
        {props.children}
      </Container>
    </>
  );
};

export default Layout;