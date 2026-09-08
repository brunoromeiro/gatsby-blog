import styled from 'styled-components'
import media from 'styled-media-query'

export const ListWrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin: 0 auto;
  max-width: 1100px;
  width: 100%;

  body#grid & {
    display: grid;
    gap: 1.25rem;
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  ${media.lessThan("large")`
    gap: 0.875rem;

    body#grid & {
      grid-template-columns: 1fr;
    }
  `}
`
