import React from 'react';
import { useRouteError } from 'react-router-dom';

const NotFound = () => {
  const error = useRouteError();
  
  return (
    <div>
      <h1>404 - 페이지를 찾을 수 없습니다.</h1>
      {error && <p>{error.message}</p>}
    </div>
  );
};

export default NotFound;
