import React, { Suspense } from 'react'

const Nav = React.lazy(() => import('./pages/nav.jsx'));
const Contact = React.lazy(() => import('./pages/Contact.jsx'));

const ContactScreen = () => {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <Nav />
        <Contact />
      </Suspense>
    </div>
  );
}

export default ContactScreen