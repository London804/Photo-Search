import styled from 'styled-components';
import {colors} from './colors.styles';


export const Main = styled.main`
  width: 100%;
  max-width: 1100px;
  padding: 2rem;
  margin: 0 auto;

  .header {
    position: relative; 

    .home {
      position: absolute;
      bottom: 0;
      height: 2.5rem;
      padding: 0 0.5rem;
      background: ${colors.white};
      color: ${colors.grey};
      border: ${colors.white};
      border-radius: 0.25rem;
    }
  }

  .loading {
    display: flex;
    justify-content: center;
    margin-top: 6.25rem;
  }


  /* Mobile */
  @media (max-width: 1024px) {
    width: 100%;
    padding: 2rem;
    margin: 0 auto;
  }
`;