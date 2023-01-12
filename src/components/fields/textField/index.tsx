import Typography from 'components/typography';
import { InputHTMLAttributes, memo } from 'react';
import { IProps } from './types';

import { StyledTextFieldContainer, StyledTextFiedldTitle, StyledTextField } from './styled';

const TextField = ({
  value,
  error,
  title,
  ...rest
}: IProps & InputHTMLAttributes<HTMLInputElement>): JSX.Element => {
  return (
    <StyledTextFieldContainer>
      <StyledTextFiedldTitle error={error}>
        <Typography type="headLine" variant="semiBold" size={0}>
          {title}
        </Typography>
      </StyledTextFiedldTitle>
      <StyledTextField {...rest} value={value} error={error} />
      {error}
    </StyledTextFieldContainer>
  );
};

export default memo(TextField);
