import React from "react";
// import Layout from "./src/components/layout";

// Wraps every page in a component
// export const wrapPageElement = ({ element }) => {
//   return <Layout>{element}</Layout>;
// };

export const wrapPageElement = ({ element }) => {
  return <React.Fragment>{element}</React.Fragment>;
};
