import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

function SEO({ lang, title }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `
  );

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title ? title : site.siteMetadata.title}
      titleTemplate={title ? `%s | ${site.siteMetadata.title}` : '%s'}
      meta={[
        {
          name: 'description',
          content: site.siteMetadata.description,
        },
      ]}
    />
  );
}

SEO.defaultProps = {
  lang: 'en',
  description: '',
};

SEO.propTypes = {
  lang: PropTypes.string,
  description: PropTypes.string,
};

export default SEO;
