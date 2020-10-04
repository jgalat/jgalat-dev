import React from 'react';
import styled from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';

import SEO from '../components/seo';
import useKonamiCode from '../hooks/useKonamiCode';

function IndexPage() {
  const { site } = useStaticQuery(SITE_QUERY);
  const { author, email, social } = site.siteMetadata;
  const konamiCode = useKonamiCode();
  return (
    <React.Fragment>
      <SEO />
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
          <Text color="#f00075">You've unlocked my email address!</Text>
          <Text>
            Email me at <Link href={`mailto:${email}`}>{email}</Link>
          </Text>
        </React.Fragment>
      )}
    </React.Fragment>
  );
}

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

const Heading1 = styled.h1`
  font-size: 3rem;
  margin: 0 0 8px 0;
  color: #fff;
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
  :before {
    content: '>> ';
    color: #fff;
  }

  margin: 8px 0;
`;

const Text = styled.p`
  font-size: 1.5rem;
  margin: 0 0 8px 0;
  color: ${(props) => (props.color ? props.color : '#fff')};
`;

const Link = styled.a`
  :link,
  :visited {
    text-decoration: none;
    color: #4eb7ca;
  }

  :hover,
  :focus {
    color: #000;
    background-color: #f00075;
    transition: 0.3s;
  }
`;

export default IndexPage;
