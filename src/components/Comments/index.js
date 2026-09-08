import React, { useEffect } from 'react'
import PropTypes from 'prop-types'

import * as S from './styled'

const Comments = ({ url, title }) => {
  const completeUrl = `https://brunoromeiro.com${url}`

  useEffect(() => {
    if (typeof window === 'undefined') return undefined

    const configureDisqus = function () {
      this.page.url = completeUrl
      this.page.identifier = completeUrl
      this.page.title = title
    }

    if (window.DISQUS) {
      window.DISQUS.reset({
        reload: true,
        config: configureDisqus,
      })
      return undefined
    }

    window.disqus_config = configureDisqus

    const script = document.createElement('script')
    script.id = 'disqus-embed-script'
    script.src = 'https://disqus_z3dsKV8Xnk.disqus.com/embed.js'
    script.setAttribute('data-timestamp', String(Date.now()))
    script.async = true
    document.body.appendChild(script)

    return () => {
      script.remove()
    }
  }, [completeUrl, title])

  return (
    <S.CommentsWrapper>
      <S.CommentsTitle>Comentários</S.CommentsTitle>
      <div id="disqus_thread" />
    </S.CommentsWrapper>
  )
}

Comments.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}

export default Comments
