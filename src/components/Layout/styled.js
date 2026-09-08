import styled from 'styled-components'
import media from 'styled-media-query'

export const LayoutWrapper = styled.section`
  min-height: 100vh;
`

export const LayoutMain = styled.main`
  background: var(--background);
  color: var(--texts);
  min-height: 100vh;
  padding: 4rem 4rem 5rem 24rem;
  transition: background-color 0.3s ease, color 0.3s ease;
  width: 100%;

  ${media.lessThan("large")`
    padding: 5.5rem 1.25rem 4rem;
  `}

  ${media.lessThan("medium")`
    padding: 5rem 1rem 3rem;
  `}
`
