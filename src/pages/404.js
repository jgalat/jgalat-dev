import React from 'react';

import SEO from '../components/SEO';
import Terminal from '../components/Terminal';

function NotFoundPage({ location }) {
  const pathname = location.pathname.substring(1);
  return (
    <React.Fragment>
      <SEO title="Not found!" />
      <Terminal
        input={`cat ${pathname}.json | jq`}
        output={`cat: ${pathname}.json: No such file or directory`}
      />
    </React.Fragment>
  );
}

export default NotFoundPage;
