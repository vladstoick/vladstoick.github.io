import * as React from "react";

interface IndexPageProps {
  data: {
    markdownRemark: {
      html: string;
    };
  };
}

const IndexPage = (props: IndexPageProps) => {
  return (
    <div dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html }} />
  );
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPage {
    markdownRemark {
      html
    }
  }
`;
