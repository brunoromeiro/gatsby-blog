import React from 'react'
import propTypes from 'prop-types'
import AniLink from "gatsby-plugin-transition-link/AniLink"

import getThemeColor from '../../utils/getThemeColor'

import * as S from './styled'

const Pagination = ({isFirst, isLast, currentPage, numPages, prevPage, nextPage}) => (
  <S.PaginationWrapper>
    {!isFirst && <AniLink
      cover
      to={prevPage}
      direction="left"
      bg={getThemeColor()}
      duration={0.6}
    >← pagina anterior</AniLink>}
    
    <p>{currentPage} de {numPages}</p>
    
    {!isLast && <AniLink
      cover
      to={nextPage}
      direction="right"
      bg={getThemeColor()}
      duration={0.6}
    >próxima página →</AniLink>}
  </S.PaginationWrapper>
) 

Pagination.propTypes = {
  isFirst: propTypes.bool.isRequired,
  isLast: propTypes.bool.isRequired,
  currentPage: propTypes.number.isRequired,
  numPages: propTypes.number.isRequired,
  prevPage: propTypes.string.isRequired,
  nextPage: propTypes.string.isRequired,
}

export default Pagination
