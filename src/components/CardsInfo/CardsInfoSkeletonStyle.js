import styled, { keyframes } from "styled-components";
export const CardGroup = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1rem;
`;
export const Card = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #ababab30;
  color: var(--primary-color);
  animation: {pulse} infinite ease 0s 1 normal forwards;
  height: 320px;
`;

export const CardImage = styled.img`
  height: 235px; /* Manteniendo la altura específica */
  width: 100%;
`;
export const CardImageSketelon = styled.div`
  height: 235px; /* Manteniendo la altura específica */
  width: 100%;
  animation: {pulse} infinite ease 0s 1 normal forwards;
`;

export const Divider = styled.div`
  height: 5px;
  background-color: #ff000030;
`;

export const Name = styled.div`
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;

  button {
    &:hover {
      transform: scale(1.01);
      background-color: transparent;
      border: none;
    }
  }
`;

const pulse = keyframes`
  0%,
	50%,
	100% {
		opacity: 1;
	}

	25%,
	75% {
		opacity: 0;
	}
`;
