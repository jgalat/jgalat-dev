import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

function SEO({ title }) {
  const { site } = useStaticQuery(SITE_QUERY);
  const { title: siteTitle, description } = site.siteMetadata;
  const helmetTitle = title ? `${title} | ${siteTitle}` : siteTitle;
  return (
    <Helmet
      htmlAttributes={{
        lang: 'en',
      }}
      title={helmetTitle}
      meta={[
        {
          name: 'description',
          content: description,
        },
      ]}
    />
  );
}

SEO.defaultProps = {
  title: '',
};

SEO.propTypes = {
  title: PropTypes.string,
};

const SITE_QUERY = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`;

export default SEO;
