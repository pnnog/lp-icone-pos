import { useState } from 'react';
import * as S from './styles';
import { Close } from '@styled-icons/material-outlined';

export type CardProps = {
  img: string;
  title: string;
  modal?: string;
};

const Card = ({ img, title, modal }: CardProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const modalVerifiy = (modal: string | undefined) => {
    !!modal && setIsOpen(true);
    return;
  };

  return (
    <S.Wrapper>
      <S.Card
        role="button"
        aria-label="open modal"
        onClick={() => modalVerifiy(modal)}
      >
        <S.ImageBox>
          <S.Image src={img} alt={title} />
        </S.ImageBox>
        <S.Content>
          <S.Title>{title}</S.Title>
          <S.More>
            <span> Saiba mais</span>
          </S.More>
        </S.Content>
      </S.Card>

      <S.Modal aria-label="modal" aria-hidden={!isOpen} isOpen={isOpen}>
        <S.Close
          role="button"
          aria-label="close modal"
          onClick={() => setIsOpen(false)}
        >
          <Close size={30} />
        </S.Close>

        <S.ModalContent>
          <S.Title>{title}</S.Title>
          <S.Description>{modal}</S.Description>
        </S.ModalContent>
      </S.Modal>
    </S.Wrapper>
  );
};

export default Card;
