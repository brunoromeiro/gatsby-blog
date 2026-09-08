const { createFilePath } = require('gatsby-source-filesystem')
const path = require('path')

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions

  createTypes(`
    type MarkdownRemarkFrontmatter {
      image: String @proxy(from: "thumbnail")
    }

    type MarkdownRemark implements Node {
      frontmatter: MarkdownRemarkFrontmatter
    }
  `)
}

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions

  if (node.internal.type !== 'MarkdownRemark') {
    return
  }

  const slug = createFilePath({
    node,
    getNode,
    basePath: 'pages',
  })

  createNodeField({
    node,
    name: 'slug',
    value: `/${slug.slice(12)}`,
  })
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    {
      allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }) {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              title
              description
              image
            }
            timeToRead
          }
          next {
            frontmatter {
              title
            }
            fields {
              slug
            }
          }
          previous {
            fields {
              slug
            }
            frontmatter {
              title
            }
          }
        }
      }
    }
  `)

  if (result.errors) {
    throw new Error(result.errors.map(error => error.message).join('\n'))
  }

  const posts = result.data.allMarkdownRemark.edges
  const postsPerPage = 6
  const numPages = Math.ceil(posts.length / postsPerPage)

  posts.forEach(({ node, next, previous }) => {
    createPage({
      path: node.fields.slug,
      component: path.resolve('./src/templates/blog-post.js'),
      context: {
        slug: node.fields.slug,
        previousPost: next,
        nextPost: previous,
      },
    })
  })

  Array.from({ length: numPages }).forEach((_, index) => {
    createPage({
      path: index === 0 ? '/' : `/page/${index + 1}`,
      component: path.resolve('./src/templates/blog-list.js'),
      context: {
        limit: postsPerPage,
        skip: index * postsPerPage,
        currentPage: index + 1,
        numPages,
      },
    })
  })
}
