import React from 'react';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';

import SEO from '../components/seo';
import useKonamiCode from '../hooks/useKonamiCode';
import useDarkMode from '../hooks/useDarkMode';
import { dark, light } from '../themes';

function IndexPage() {
  const { site } = useStaticQuery(SITE_QUERY);
  const { author, email, social } = site.siteMetadata;
  const konamiCode = useKonamiCode();
  const [darkMode, colorSchemeToggler] = useDarkMode();
  return (
    <ThemeProvider theme={darkMode ? dark : light}>
      <GlobalStyle />
      <SEO />
      <Toggler
        aria-label="Switch between light and dark mode"
        onClick={colorSchemeToggler}
      >
        {darkMode ? '☀️' : '🌙'}
      </Toggler>
      <Heading1>{author}</Heading1>
      <Heading2>I'm a full-stack developer</Heading2>
      <Text>Here are some links</Text>
      <List>
        <ListItem>
          <Link href={social.linkedin}>LinkedIn profile</Link>
        </ListItem>
        <ListItem>
          <Link href={social.github}>GitHub profile</Link>
        </ListItem>
      </List>
      {konamiCode && (
        <React.Fragment>
          <Text secondary>You've unlocked my email address!</Text>
          <Text>
            Email me at <Link href={`mailto:${email}`}>{email}</Link>
          </Text>
        </React.Fragment>
      )}
    </ThemeProvider>
  );
}

export default IndexPage;

const SITE_QUERY = graphql`
  query {
    site {
      siteMetadata {
        author
        email
        social {
          github
          linkedin
        }
      }
    }
  }
`;

const GlobalStyle = createGlobalStyle`
  * {
    transition: all 0.25s linear;
  }

  html, body {
    height: 100vh;
    font-family: 'Roboto Mono', monospace;
    background-color: ${(props) => props.theme.background};
    color: ${(props) => props.theme.text};
    transition: background-color 0.1s linear;
  }

  a, button {
    outline: none !important;
  }
`;

const Toggler = styled.button`
  width: 56px;
  height: 56px;
  font-size: 2rem;
  position: fixed;
  top: 16px;
  right: 16px;
  border: none;
  background-color: transparent;

  :focus {
    border: 2px ${(props) => props.theme.secondary} solid;
    transition: 0.25s;
  }
`;

const Heading1 = styled.h1`
  font-size: 3rem;
  margin: 0 0 8px 0;
  color: ${(props) => props.theme.text};
  font-weight: 400;
`;

const Heading2 = styled.h2`
  font-size: 1.5rem;
  margin: 0 0 24px 0;
  color: #757575;
  font-weight: 400;
`;

const List = styled.ul`
  font-size: 1.5rem;
  list-style: none;
  margin: 0 0 24px 0;
  padding: 0;
`;

const ListItem = styled.li`
  margin: 8px 0;

  :before {
    content: '>> ';
    color: ${(props) => props.theme.text};
  }
`;

const Text = styled.p`
  font-size: 1.5rem;
  margin: 0 0 8px 0;
  color: ${(props) =>
    props.secondary ? props.theme.secondary : props.theme.text};
`;

const Link = styled.a`
  :link,
  :visited {
    text-decoration: none;
    color: ${(props) => props.theme.primary};
  }

  :hover,
  :focus {
    color: #000;
    background-color: ${(props) => props.theme.secondary};
    transition: 0.25s linear;
  }
`;
