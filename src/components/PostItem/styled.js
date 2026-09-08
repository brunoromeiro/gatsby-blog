import styled from 'styled-components'
import media from 'styled-media-query'
import { Link } from 'gatsby'

export const PostItemLink = styled(Link)`
  color: var(--texts);
  display: block;
  text-decoration: none;
  height: 100%;

  &:focus-visible {
    outline: 2px solid var(--highlight);
    outline-offset: 4px;
  }
`

export const PostItemWrapper = styled.article`
  background: var(--surface);
  border: 1px solid var(--borders);
  border-radius: 1.25rem;
  box-shadow: 0 8px 30px var(--shadow);
  display: flex;
  gap: 1.5rem;
  height: 100%;
  padding: 1.5rem;
  transition: transform 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease;

  ${PostItemLink}:hover & {
    border-color: var(--highlight);
    box-shadow: 0 14px 40px var(--shadow);
    transform: translateY(-3px);
  }

  body#grid & {
    flex-direction: column;
    gap: 1rem;
    padding: 1.5rem;
  }

  ${media.lessThan("large")`
    gap: 1rem;
    padding: 1.25rem;
  `}
`

export const PostItemTag = styled.div`
  align-items: center;
  background: ${props => props.background || 'var(--highlight)'};
  border-radius: 1rem;
  color: var(--postColor);
  display: flex;
  flex: 0 0 5rem;
  font-size: 0.85rem;
  font-weight: 800;
  justify-content: center;
  min-height: 5rem;
  letter-spacing: 0.04em;
  padding: 0.5rem;
  text-align: center;
  text-transform: uppercase;

  ${media.lessThan("large")`
    align-self: flex-start;
    flex-basis: auto;
    min-height: 0;
    min-width: 0;
    padding: 0.35rem 0.65rem;
  `}
`

export const PostItemInfo = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  min-width: 0;
`

export const PostItemDate = styled.time`
  color: var(--mutedText);
  font-size: 0.85rem;
  font-weight: 600;
  line-height: 1.4;
`

export const PostItemTitle = styled.h2`
  color: var(--heading);
  font-size: 1.35rem;
  font-weight: 750;
  letter-spacing: -0.02em;
  line-height: 1.2;
  margin: 0.4rem 0 0.65rem;

  body#grid & {
    font-size: 1.45rem;
  }
`

export const PostItemDescription = styled.p`
  color: var(--texts);
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.6;
  margin: 0;
`
