import styled from 'styled-components';

const Button = styled.a`
  width: 14rem;
  height: 5rem;
  background-color: var(--white);
  border-radius: 8px;
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  text-decoration: none;

  img {
    width: 2rem;
    height: 2rem;
    padding-right: 10px;
  }

  :hover{
    background-color: var(--green);
    border: 1px black;
    transition: 0.2s;
  }
`;

export default Button;