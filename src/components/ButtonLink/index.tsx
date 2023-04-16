/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { AnchorHTMLAttributes, forwardRef } from 'react';
import * as S from './styles';

export type AnchorTypes = AnchorHTMLAttributes<HTMLAnchorElement>;

export type ButtonLinkProps = {
  children: React.ReactNode;
  fullWidth?: boolean;
} & AnchorTypes;

const ButtonLink: React.ForwardRefRenderFunction<S.WrapperProps, ButtonLinkProps> = (
  { children, fullWidth = false, href = ' http://www.whatsapp.com', target },
  ref
) => (
  <S.Wrapper fullWidth={fullWidth} href={href} target={target}>
    {children}
  </S.Wrapper>
);

export default React.forwardRef(ButtonLink);
