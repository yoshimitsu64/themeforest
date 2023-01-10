import { StyledLayout } from './styled';

interface IProps {
  children: JSX.Element[] | JSX.Element;
}

function Layout({ children }: IProps): JSX.Element {
  return <StyledLayout>{children}</StyledLayout>;
}

export default Layout;
