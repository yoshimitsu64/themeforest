import styled from 'styled-components';

interface IProps {
  imageURL: string;
}

export const StyledServiceCard = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.white};
  padding: ${({ theme }) => theme.space[6]}px;
  box-shadow: ${({ theme }) => theme.shadows.shadowCard3.boxShadow};
  scroll-margin: inherit;
  width: ${({ theme }) => theme.sizes[0] - 3}%;
  margin-bottom: ${({ theme }) => theme.space[7]}px;
`;
export const StyledServiceCardLogo = styled.div<IProps>`
  width: max-content;
  content: url(${({ imageURL }) => imageURL});
`;
