import { Suspense } from "react";
import { HelmetProvider } from "react-helmet-async";

export const Providers = ({ children }) => {
  return (
    <HelmetProvider>
      <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
    </HelmetProvider>
  );
};
