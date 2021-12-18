import Head from "next/head";

const Meta = ({ title, keywords, description }) => {
  return <Head></Head>;
};

Meta.defaultProps = {
  title: "WebDev Newz",
  keywords: "Web",
  description: "latest news",
};

export default Meta;
