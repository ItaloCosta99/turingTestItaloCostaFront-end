import styled from 'styled-components';

const Card = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: 5rem;

  .arrow-down {
    display: block;
    margin: 15px auto;
    width: 25px;
    height: 25px;
    border-top: 2px solid #000;
    border-left: 2px solid #000;
    transform: rotate(-135deg);
  }

  a {
    font-size: 6rem;
    text-decoration: none;
    color: black;
  }
  
  a:hover {
    color: grey;
    transition: 0.2s;
  }

  p{
    font-size: 2rem;
    color: f
  }

  img {
    max-width: 200px;
    max-height: 200px;
    margin-bottom: 2rem;
    border-radius: 8px;
  }
`;

export default Card;