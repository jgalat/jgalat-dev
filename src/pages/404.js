import React, { useEffect } from 'react';
import { navigate } from 'gatsby';

import SEO from '../components/seo';

function NotFoundPage() {
  useEffect(() => navigate('/', { replace: true }));
  return <SEO title="Not found!" />;
}

export default NotFoundPage;
