import styled from 'styled-components';
import { OutboundLink as GALink } from 'gatsby-plugin-google-analytics';

export default styled(GALink)`
  &:link {
    text-decoration: underline;
    color: inherit;
  }

  &:visited {
    text-decoration: underline;
    color: inherit;
  }
`;
