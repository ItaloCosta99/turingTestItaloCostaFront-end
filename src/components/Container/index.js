import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: 100%;
  max-width: 40rem;
  max-height: 45rem;
  padding: 4rem 2rem 3rem;
  margin: auto 10%;
  background-color: var(--green);
  font-size: 1.5rem;
  box-shadow: 7.5px 5px 5px rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  .avatar {
    width: 17rem;
    height: 17rem;
    border-radius: 8px;
    box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.2);
    margin-bottom: 20px;

  }

  p:nth-child(1){
    display: block;
    margin-top: 20px;
  }
`;

export default Container;