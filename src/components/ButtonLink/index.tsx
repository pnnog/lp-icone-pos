import { AnchorHTMLAttributes } from 'react';
import * as S from './styles';

type ButtonLinkTypes = AnchorHTMLAttributes<HTMLAnchorElement>;

export type ButtonLinkProps = {
  children?: React.ReactNode;
  fullWidth?: boolean;
} & ButtonLinkTypes;

const ButtonLink = ({
  children,
  fullWidth = false,
  ...props
}: ButtonLinkProps) => (
  <S.Wrapper fullWidth={fullWidth} target="_blank" {...props}>
    {!!children && <span> {children} </span>}
  </S.Wrapper>
);

export default ButtonLink;
