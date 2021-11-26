const React = require("react");
const Layout = require("./src/components/layout");

// Wraps every page in a component
exports.WrapPageElement = ({ element, props }) => {
  console.log("LOUUURD");
  return <Layout {...props}>{element}</Layout>;
};
