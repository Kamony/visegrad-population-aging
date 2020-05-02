import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import PreviewCompatibleImage from "../components/PreviewCompatibleImage";
import { HTMLContent } from "../components/Content";

import remark from "remark";
import remarkHTML from "remark-html";

export const toHTML = (value) =>
  remark().use(remarkHTML).processSync(value).toString();

const LeftColumnMember = ({ imageInfo, name, text, url }) => (
  <div className="box">
    <a href={url} target={"__blank"}>
      <div className="columns">
        <div className="column">
          <PreviewCompatibleImage imageInfo={imageInfo} />
        </div>
        <div className="column">
          <h1 className="subtitle has-text-centered">{name}</h1>
          <div className="is-divider" />
          <HTMLContent className={"content"} content={toHTML(text)} />
        </div>
      </div>
    </a>
  </div>
);

export const TeamPageTemplate = ({ title, members }) => (
  <>
    <h2 className="has-text-weight-bold is-size-1 is-medium is-primary page-header-tile">
      {title}
    </h2>
    <section className="section section--gradient">
      <div className="container">
        <div className="content">
          <div className="section">
          {members.map((member, index) => (
            <LeftColumnMember
              key={index}
              name={member.name}
              text={member.text}
              url={member.url}
              imageInfo={member.image}
            />
          ))}
        </div>
        </div>
      </div>
    </section>
    {/*<section className="section section--gradient">*/}
    {/*  <div className="container">*/}
    {/*    <div className="section">*/}
    {/*      <div className="columns">*/}
    {/*        <div className="column is-7 is-offset-1">*/}
    {/*          <h3 className="has-text-weight-semibold is-size-2">*/}
    {/*            {heading}*/}
    {/*          </h3>*/}
    {/*          <p>{description}</p>*/}
    {/*        </div>*/}
    {/*      </div>*/}
    {/*      <div className="columns">*/}
    {/*        <div className="column is-10 is-offset-1">*/}
    {/*          <Features gridItems={intro.blurbs} />*/}
    {/*          <div className="columns">*/}
    {/*            <div className="column is-7">*/}
    {/*              <h3 className="has-text-weight-semibold is-size-3">*/}
    {/*                {main.heading}*/}
    {/*              </h3>*/}
    {/*              <p>{main.description}</p>*/}
    {/*            </div>*/}
    {/*          </div>*/}
    {/*          <div className="tile is-ancestor">*/}
    {/*            <div className="tile is-vertical">*/}
    {/*              <div className="tile">*/}
    {/*                <div className="tile is-parent is-vertical">*/}
    {/*                  <article className="tile is-child">*/}
    {/*                    <PreviewCompatibleImage imageInfo={main.image1} />*/}
    {/*                  </article>*/}
    {/*                </div>*/}
    {/*                <div className="tile is-parent">*/}
    {/*                  <article className="tile is-child">*/}
    {/*                    <PreviewCompatibleImage imageInfo={main.image2} />*/}
    {/*                  </article>*/}
    {/*                </div>*/}
    {/*              </div>*/}
    {/*              <div className="tile is-parent">*/}
    {/*                <article className="tile is-child">*/}
    {/*                  <PreviewCompatibleImage imageInfo={main.image3} />*/}
    {/*                </article>*/}
    {/*              </div>*/}
    {/*            </div>*/}
    {/*          </div>*/}
    {/*          <Testimonials testimonials={testimonials} />*/}
    {/*          <div*/}
    {/*            className="full-width-image-container"*/}
    {/*            style={{*/}
    {/*              backgroundImage: `url(${*/}
    {/*                fullImage.childImageSharp*/}
    {/*                  ? fullImage.childImageSharp.fluid.src*/}
    {/*                  : fullImage*/}
    {/*              })`,*/}
    {/*            }}*/}
    {/*          />*/}
    {/*          <h2 className="has-text-weight-semibold is-size-2">*/}
    {/*            {pricing.heading}*/}
    {/*          </h2>*/}
    {/*          <p className="is-size-5">{pricing.description}</p>*/}
    {/*          <Pricing data={pricing.plans} />*/}
    {/*        </div>*/}
    {/*      </div>*/}
    {/*    </div>*/}
    {/*  </div>*/}
    {/*</section>*/}
    {/*</div>*/}
  </>
);

TeamPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
  main: PropTypes.shape({
    heading: PropTypes.string,
    description: PropTypes.string,
    image1: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    image2: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    image3: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  }),
  testimonials: PropTypes.array,
  fullImage: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  pricing: PropTypes.shape({
    heading: PropTypes.string,
    description: PropTypes.string,
    plans: PropTypes.array,
  }),
};

const TeamPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;
  console.log({ frontmatter });
  return (
    <Layout>
      <TeamPageTemplate
        // image={frontmatter.image}
        title={frontmatter.title}
        members={frontmatter.members}
        // heading={frontmatter.heading}
        // description={frontmatter.description}
        // intro={frontmatter.intro}
        // main={frontmatter.main}
        // testimonials={frontmatter.testimonials}
        // fullImage={frontmatter.full_image}
        // pricing={frontmatter.pricing}
      />
    </Layout>
  );
};

TeamPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default TeamPage;

export const teamPageQuery = graphql`
  query ProductPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        templateKey
        title
        members {
          name
          text
          url
          image {
            childImageSharp {
              fluid(quality: 64) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`;
