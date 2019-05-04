import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import SEO from '../components/SEO';
import Terminal from '../components/Terminal';
import urlWrapper from '../util/urlWrapper';

function IndexPage() {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            social {
              github
              linkedin
            }
          }
        }
      }
    `
  );

  return (
    <React.Fragment>
      <SEO />
      <Terminal
        input={`cat my_site.json | jq`}
        output={
          <div>{urlWrapper(JSON.stringify(site.siteMetadata, null, 2))}</div>
        }
      />
    </React.Fragment>
  );
}

export default IndexPage;
