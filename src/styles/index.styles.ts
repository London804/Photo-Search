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
      cursor: pointer;
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

export const Search = styled.section`
  display: flex;
  justify-content: center;
  margin-bottom: 1.5rem;

  .search-container {
    position: relative;
  }

  .search-bar {
    width: 25rem;
    height: 2.5rem;
    border: none;
    padding: 0 3rem 0 1rem;
    border-radius: 0.5rem;
  }

  .search-button {
    position: absolute;
    right: 2px;
    top: 2px;
    height: 2.25rem;
    width: 2.5rem;
    background: transparent;
    font-size: 1rem;
    border-radius: 0px 8px 8px 0px;
    border: none;
    cursor: pointer;
  }

  .ico-mglass {
    position: relative;
    display:inline-block;
    background: ${colors.white};
    border-radius: 30px;
    height: 12px;
    width: 12px;
    border: 2px solid ${colors.grey};
    
    &:after {
      content: "";
      height: 4px;
      width: 9px;
      position: absolute;
      top: 8px;
      left: 5px;
      background: #888;  // ${colors.grey} not working here
      -webkit-transform: rotate(45deg);
      -moz-transform: rotate(45deg);
        -ms-transform: rotate(45deg);
        -o-transform: rotate(45deg);
    }
    
  }
`;

export const Photos = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  row-gap: 1rem;
  width: 100%;
  margin-top: 1.5rem;

  .photo_container img {
    max-width: 100%;
    max-height: 100%;
    width: 100%;
    height: auto;
    padding: 0.5rem;
  }
  
  .info {
    padding: 0 0.5rem;
  }  

  @media (max-width: 700px) {
    grid-template-columns: 1fr;
  }
`;

export const Paginate = styled.section`
  display: flex;
  justify-content: center;
  margin-top: 1.5rem;


  @media (max-width: 700px) {
    .resize {
      display: flex;
      justify-content: center;
      width: 100%;

      button {
        font-size: 12px;
        min-width: 25px;
        height: 25px;
      }
    }
  }
`;