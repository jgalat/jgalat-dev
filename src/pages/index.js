import React from 'react';
import styled from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';

import SEO from '../components/SEO';
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
      <P>
        Check my <Link href={social.linkedin}>Linkedin profile</Link>
      </P>
      <P>
        See my code on <Link href={social.github}>GitHub</Link>
      </P>
      {konamiCode && (
        <React.Fragment>
          <P color="#f00075">You've unlocked my email address!</P>
          <P>
            Email me at <Link href={`m̀ailto:${email}`}>{email}</Link>
          </P>
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
  font-size: 2rem;
  margin: 0 0 24px 0;
  color: #fff;
`;

const Heading2 = styled.h2`
  font-size: 1.4rem;
  margin: 0 0 16px 0;
  color: #ddd;
`;

const P = styled.p`
  font-size: 1.2rem;
  margin: 0 0 8px 0;
  color: ${(props) => (props.color ? props.color : '#bbb')};
`;

const Link = styled.a`
  &:link,
  &:visited {
    text-decoration: none;
    background-color: #4eb7ca;
    color: #000;
  }

  &:hover {
    background-color: #f00075;
    transition: 0.3s;
  }
`;

export default IndexPage;
