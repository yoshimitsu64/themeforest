import { IProps } from 'pages/aboutUs/info/types';
import styled from 'styled-components';

export const StyledInfo = styled.div<Pick<IProps, 'reversed' | 'mb' | 'mt'>>`
  display: flex;
  flex-direction: ${({ reversed }) => (reversed ? 'row-reverse' : 'row')};
  max-width: 1110px;
  height: max-content;
  column-gap: ${({ theme }) => theme.space[4]}px;
  ${({ mb, mt }) => {
    return {
      marginBottom: mb,
      marginTop: mt,
    };
  }};
`;

export const StyledDescription = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: ${({ theme }) => theme.space[2]}px;
`;

export const StyledTitle = styled.div`
  font-size: ${({ theme }) => theme.typography.headLine.extraBold[0].size}px;
  font-weight: ${({ theme }) => theme.typography.headLine.extraBold[0].fontWeight};
  margin-bottom: ${({ theme }) => theme.space[5]}px;
`;

export const StyledSubtitle = styled.div`
  font-size: ${({ theme }) => theme.typography.paragraph.regular[0].size}px;
  font-weight: ${({ theme }) => theme.typography.paragraph.regular[0].fontWeight};
  line-height: ${({ theme }) => theme.typography.paragraph.regular[0].lineHeight}px;
`;

export const StyledImage = styled.div<Pick<IProps, 'imageURL'>>`
  content: url(${({ imageURL }) => imageURL});
`;
