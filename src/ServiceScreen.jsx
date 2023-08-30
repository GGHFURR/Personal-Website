import React, { Suspense } from 'react'

const Nav = React.lazy(() => import('./pages/nav.jsx'));
const Service = React.lazy(() => import('./pages/service.jsx'));

const ServiceScreen = () => {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <Nav />
        <Service />
      </Suspense>
    </div>
  );
}

export default ServiceScreen