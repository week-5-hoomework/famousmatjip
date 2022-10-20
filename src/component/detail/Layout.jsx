import React from 'react';

function Layout(props) {
  return (
    <div>
      <div className="bg-red-200 max-w-screen-xl m-auto">{props.children}</div>
    </div>
  );
}

export default Layout;
