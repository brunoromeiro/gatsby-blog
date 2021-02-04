import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import Layout from "../components/Layout"
import PostItem from "../components/PostItem"
import SEO from "../components/seo"



const IndexPage = () => {
  const { allMarkdownRemark } = useStaticQuery(
    graphql`
      query PostList {
        allMarkdownRemark {
          edges {
            node {
              fields {slug}
              frontmatter {
                background
                category
                title
                description
                date(locale: "pt-br", formatString: "DD [de] MMMM [de] YYYY")
              }
              timeToRead
            }
          }
        }
      }
    `
  )

  const postList = allMarkdownRemark.edges
  
  return (
    <Layout>
      <SEO title="Home" />
      {postList.map(({
        node: {
          frontmatter: { background, category, date, description, title},
          timeToRead,
          fields: { slug }
          }
      }) => (
          <PostItem
          slug={slug}
          background={background}
          category={category}
          date={date}
          timeToRead={timeToRead}
          title={title}
          description={description}
        />
        )
    )}
    </Layout>
  )
}

export default IndexPage
