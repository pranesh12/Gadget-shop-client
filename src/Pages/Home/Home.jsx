import { Suspense, lazy } from "react";

const SecondHome = lazy(() => import("./SecondHome"));

const Home = () => {
  return (
    <div>
      <Suspense fallback={<div>Loading .....</div>}>
        <SecondHome />
      </Suspense>
    </div>
  );
};

export default Home;
