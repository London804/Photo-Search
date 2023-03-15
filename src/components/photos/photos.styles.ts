import styled from 'styled-components';

export const Photos = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  row-gap: 1rem;
  width: 100%;


.photo_container:nth-child(even){
  display: grid;
  justify-content: end;    
}


.photo_container img {
  max-width: 100%;
  max-height: 100%;
  width: 100%;
  height: auto;
  padding: 0.5rem;
}
  margin-top: 1.5rem;

  @media (max-width: 700px) {
    grid-template-columns: 1fr;
  }
`;