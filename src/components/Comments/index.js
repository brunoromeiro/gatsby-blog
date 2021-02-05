import React from 'react'
import propTypes from 'prop-types'
import ReactDisqusComments from 'react-disqus-comments'

import * as S from './styled'

const Comments = ({url, title}) => {
  const completeUrl = `https://brunoromeiro.com.br${url}`
  return (
    <S.CommentsWrapper>
      <S.CommentsTitle>Comentários</S.CommentsTitle>
      <ReactDisqusComments
        shortname="disqus_z3dsKV8Xnk"
        identifier={completeUrl}
        title={title}
        url={completeUrl}
      />
    </S.CommentsWrapper>
  )
}
Comments.prototype = {
  url: propTypes.string.isRequired,
  title: propTypes.string.isRequired
}

export default Comments
