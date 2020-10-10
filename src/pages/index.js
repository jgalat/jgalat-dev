import React, { useState } from 'react';
import styled, { createGlobalStyle, css } from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';

import SEO from '../components/seo';
import useKonamiCode from '../hooks/use-konami-code';
import useColorScheme from '../hooks/use-color-scheme';

function IndexPage() {
  const { site } = useStaticQuery(SITE_QUERY);
  const { author, email, social } = site.siteMetadata;
  const [enableTransitions, setEnableTransitions] = useState(false);
  const konamiCode = useKonamiCode();
  const [colorScheme, colorSchemeToggler] = useColorScheme();

  return (
    <React.Fragment>
      <GlobalStyle transitions={enableTransitions} />
      <SEO />
      {typeof window !== 'undefined' && (
        <Toggler
          aria-label="Switch between light and dark mode"
          onClick={() => {
            setEnableTransitions(true);
            colorSchemeToggler();
          }}
        >
          {colorScheme === 'dark' ? '☀️' : '🌙'}
        </Toggler>
      )}
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
    </React.Fragment>
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
  ${(props) =>
    props.transitions &&
    css`
      * {
        transition: all 0.25s linear;
      }
    `}

  html {
    font-family: 'Roboto Mono', monospace;
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
  background: none;
  padding: 0;
  color: var(--color-text);

  :focus,
  :active {
    border: 2px var(--color-secondary) solid;
    transition: 0.25s;
  }
`;

const Heading1 = styled.h1`
  font-size: 3rem;
  margin: 0 0 8px 0;
  color: var(--color-text);
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
    color: var(--color-text);
  }
`;

const Text = styled.p`
  font-size: 1.5rem;
  margin: 0 0 8px 0;
  color: ${(props) =>
    props.secondary ? 'var(--color-secondary)' : 'var(--color-text)'};
`;

const Link = styled.a`
  :link,
  :visited {
    text-decoration: none;
    color: var(--color-primary);
  }

  :hover,
  :focus {
    color: #000;
    background-color: var(--color-secondary);
    transition: 0.25s linear;
  }
`;
