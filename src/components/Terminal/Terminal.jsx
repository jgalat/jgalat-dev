import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const OuterWindow = styled.div`
  background-color: #292929;
  padding: 5px;
  font-family: 'Roboto Mono', monospace;
  font-size: 1rem;
  max-width: 90vw;
`;

const WindowTitle = styled.div`
  color: #949494;
  margin-bottom: 5px;
`;

const InnerWindow = styled.div`
  background-color: #111111;
  color: #eeeeee;
  padding: 5px;
  max-width: 100%;
  overflow-x: auto;
  scrollbar-width: none;
  white-space: nowrap;
`;

const Prompt = styled.span`
  color: #e84f4f;
`;

const Input = styled.code`
  font-family: inherit;
  font-size: inherit;
`;

const Output = styled.pre`
  display: block;
  margin: 0;
`;

function Terminal({ input, output }) {
  return (
    <OuterWindow>
      <WindowTitle>jgalat@meme-machine:~</WindowTitle>
      <InnerWindow>
        <Input>
          <Prompt>$ </Prompt>
          {input}
        </Input>
        <Output>{output}</Output>
      </InnerWindow>
    </OuterWindow>
  );
}

Terminal.defaultProps = {
  input: '',
  output: undefined,
};

Terminal.propTypes = {
  input: PropTypes.string,
  output: PropTypes.node,
};

export default Terminal;
