import styled from 'styled-components'
import media from 'styled-media-query'

export const SidebarWrapper = styled.aside`
  align-items: center;
  background: var(--mediumBackground);
  border-right: 1px solid var(--borders);
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: flex-start;
  left: 0;
  padding: 2.5rem 1.5rem;
  position: fixed;
  text-align: center;
  top: 0;
  width: 20rem;
  z-index: 20;

  ${media.lessThan("large")`
    align-items: center;
    border-bottom: 1px solid var(--borders);
    border-right: 0;
    flex-direction: row;
    height: auto;
    justify-content: space-between;
    padding: 0.75rem 1rem;
    width: 100%;
  `}
`
