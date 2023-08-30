import React, { Suspense } from 'react'

const Nav = React.lazy(() => import('./pages/nav.jsx'));
const Portofolio = React.lazy(() => import('./pages/portofolio.jsx'));

const PortofolioScreen = () => {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <Nav />
        <Portofolio />
      </Suspense>
    </div>
  );
}

export default PortofolioScreen