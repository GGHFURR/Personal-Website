import React, { Suspense } from 'react'

const Nav = React.lazy(() => import('./pages/nav.jsx'));
const Experience = React.lazy(() => import('./pages/experience.jsx'));

const ExperienceScreen = () => {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <Nav />
        <Experience />
      </Suspense>
    </div>
  );
}

export default ExperienceScreen