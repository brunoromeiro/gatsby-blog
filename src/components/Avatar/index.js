import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

import * as S from './styled'

const Avatar = () => {
  const { avatarImage } = useStaticQuery(
    graphql`
      query {
        avatarImage: file(relativePath: { eq: "profile.png" }) {
          childImageSharp {
            gatsbyImageData(width: 60, height: 60, layout: FIXED)
          }
        }
      }
    `
  )

  return <S.AvatarWrapper image={getImage(avatarImage)} alt="Bruno Romeiro" />
}

export default Avatar
