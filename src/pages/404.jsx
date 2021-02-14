import React from 'react';
import styled from 'styled-components';
import Layout from 'src/layout';

const Container = styled.div`
  height: calc(100vh - 50px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Header = styled.h1`
  font-size: 7vw;
  color: var(--primary-color);
  margin: 0;
`;

const SubHeader = styled.h2`
  font-size: 4vw;
  font-weight: normal;
  margin: 0;
`;

const Text = styled.p``;

const NotFoundPage = () => {
  return (
    <Layout errorPage>
      <Container>
        <Header>Oops!</Header>
        <SubHeader>404 - Page not found</SubHeader>
        <Text>
          The page you are looking for might have been removed, had its name
          changed or is temporarily unavailable.
        </Text>
      </Container>
    </Layout>
  );
};

export default NotFoundPage;
