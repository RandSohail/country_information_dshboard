import React, { useState, useEffect } from 'react';
import { Error } from '../components';
type ErrorBoundaryProps = {
  children: React.ReactNode;
};
function ErrorBoundary({ children }: ErrorBoundaryProps) {
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const errorHandler = (error: ErrorEvent | Error) => {
      // log the error or send it to an error reporting service
      console.error({ error });
      setHasError(true);
    };

    // Attach the error handler to the component
    window.addEventListener('error', errorHandler);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('error', errorHandler);
    };
  }, []);

  if (hasError) {
    return <Error />;
  }

  return <>{children}</>;
}

export default ErrorBoundary;
