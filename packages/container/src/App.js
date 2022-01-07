import React from "react";
// import { mount } from "marketing/MarketingApp";
import { default as MarketingApp } from "marketing/MarketingAppApp";

// function MarketingContainer() {
//   const ref = React.useRef();
//   React.useEffect(() => {
//     mount(ref.current);
//   }, []);
//   return <div ref={ref}></div>;
// }

const App = () => {
  return (
    <>
      <h1>App1</h1>
      {/* <MarketingContainer /> */}
      <MarketingApp />
    </>
  );
};

export default App;
