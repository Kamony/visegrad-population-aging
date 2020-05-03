import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import {PageHeader} from "../components/PageHeader";

const DatesPage = ({ data }) => {
  const {
    markdownRemark: { frontmatter },
  } = data;
  return (
    <Layout>
      <PageHeader title={frontmatter.title} />
      <section className="section section--gradient">
        <div className="container">
          <div className="section">
            <div className="content">
              <table className="table is-striped is-bordered is-fullwidth">
                <thead>
                  <tr>
                    <th>Activity</th>
                    <th>Date</th>
                  </tr>
                </thead>
                <tbody>
                  {frontmatter.dates.map((date, index) => (
                    <tr key={index}>
                      <td>{date.name}</td>
                      <td>
                        {new Date(
                          frontmatter.dates[0].date
                        ).toLocaleDateString()}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              {/*{ new Date(frontmatter.dates[0].date)}*/}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default DatesPage;

export const datesPageQuery = graphql`
  query DatesPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        dates {
          name
          date
        }
      }
    }
  }
`;
