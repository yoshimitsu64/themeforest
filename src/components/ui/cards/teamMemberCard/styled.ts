import styled from 'styled-components';

interface IProps {
  imageURL: string;
}

export const StyledTeamMemberCard = styled.div<IProps>`
  display: flex;
  width: ${({ theme }) => theme.sizes[6]}px;
  height: ${({ theme }) => theme.sizes[9]}px;
  background: linear-gradient(180deg, rgba(40, 50, 66, 0) 26.37%, #283850 103.66%),
    url(${({ imageURL }) => imageURL});
  padding: 20px;
  transition: 1.3s ease-out;

  &:hover {
    transform: scale(1.2);
    transition: transform 1.3s;
  }
`;

export const StyledFooter = styled.div`
  align-self: flex-end;
  padding-left: ${({ theme }) => theme.space[4]}px;
  padding-right: ${({ theme }) => theme.space[4]}px;
  color: ${({ theme }) => theme.colors.white};
`;

export const StyledName = styled.div`
  font-size: ${({ theme }) => theme.typography.headLine.bold[1].size}px;
  font-weight: ${({ theme }) => theme.typography.headLine.bold[1].fontWeight};
`;

export const StyledSpeciality = styled.div`
  font-size: ${({ theme }) => theme.typography.paragraph.regular[1].size}px;
  font-weight: ${({ theme }) => theme.typography.paragraph.regular[1].fontWeight};
  line-height: ${({ theme }) => theme.typography.paragraph.regular[1].lineHeight}px;
`;
