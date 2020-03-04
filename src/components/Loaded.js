import React, { Suspense } from "react";

function Loaded({ match: { params } }) {
  const { patternName } = params;
  console.log({ patternName });
  const LazyComponent = React.lazy(() => import(`../examples/${patternName}`));
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="wrapper">
        <LazyComponent title={patternName} />
      </div>
    </Suspense>
  );
}
export default Loaded;
