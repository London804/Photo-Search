import styled from 'styled-components';

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