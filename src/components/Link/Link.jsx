import styled from 'styled-components';
import { Link as GatsbyLink } from 'gatsby';

export default styled(GatsbyLink)`
  &:link {
    text-decoration: underline;
    color: inherit;
  }

  &:visited {
    text-decoration: underline;
    color: inherit;
  }
`;
