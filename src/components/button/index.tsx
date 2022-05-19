import React from "react";

function Button(props: { children: string }) {
  const { children } = props;

  return (
    <button className='button'>
      {children}
    </button>
  );
}

export default Button;
