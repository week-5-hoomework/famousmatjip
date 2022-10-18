import React from 'react';

function Layout(props) {
  return (
    <div>
      <div className="bg-red-200 max-w-screen-xl grid place-items-center @media">{props.children}</div>
    </div>
  );
}

export default Layout;
