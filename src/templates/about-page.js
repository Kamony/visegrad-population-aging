import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";
import {PageHeader} from "../components/PageHeader";

export const SimplePostsTemplate = ({ title, content, contentComponent }) => {
  const PageContent = contentComponent || Content;

  return (
    <>
      <PageHeader title={title} />
      <section className="section section--gradient">
        <div className="container">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <div className="section">
                <PageContent className="content" content={content} />
              </div>
              <div className="section">
                <div className={"columns"}>
                  <div className={"column"}>
                    <figure className="image is-4by3">
                      <img src={"img/1.jpg"} alt={""}/>
                    </figure>
                  </div>
                  <div className={"column"}>
                    <figure className="image is-4by3">
                      <img src={"img/2.jpg"} alt={""}/>
                    </figure>
                  </div>
                  <div className={"column"}>
                    <figure className="image is-4by3">
                      <img src={"img/3.jpg"} alt={""}/>
                    </figure>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

SimplePostsTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
};

const AboutPage = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <SimplePostsTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
      />
    </Layout>
  );
};

AboutPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default AboutPage;

export const aboutPageQuery = graphql`
  query AboutPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
