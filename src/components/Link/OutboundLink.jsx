import styled from 'styled-components';
import { OutboundLink as GTAGLink } from 'gatsby-plugin-google-gtag';

export default styled(GTAGLink)`
  &:link {
    text-decoration: underline;
    color: inherit;
  }

  &:visited {
    text-decoration: underline;
    color: inherit;
  }
`;
