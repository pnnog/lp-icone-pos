import { AnchorHTMLAttributes } from 'react';
import * as S from './styles';

type ButtonLinkTypes = AnchorHTMLAttributes<HTMLAnchorElement>;

export type ButtonLinkProps = {
  children?: React.ReactNode;
  icon?: JSX.Element;
  size?: 'medium' | 'large';
  fullWidth?: boolean;
} & ButtonLinkTypes;

const ButtonLink = ({
  children,
  icon,
  size,
  fullWidth = false,
  ...props
}: ButtonLinkProps) => (
  <S.Wrapper
    fullWidth={fullWidth}
    size={size}
    hasIcon={!!icon}
    target="_blank"
    {...props}
  >
    {!!icon && icon}
    {!!children && <span> {children} </span>}
  </S.Wrapper>
);

export default ButtonLink;
