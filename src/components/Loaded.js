import React, { Suspense } from "react";

function Loaded({ match: { params }, location: { state } }) {
  const { patternName } = params;
  const { title } = state;
  const LazyComponent = React.lazy(() => import(`../examples/${patternName}`));
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="wrapper">
        <LazyComponent title={title} />
      </div>
    </Suspense>
  );
}
export default Loaded;
