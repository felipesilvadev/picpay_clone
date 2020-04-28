import React from 'react';

import { Container, Details, Title, Img, Description, ActionLabel } from './styles';

import img13 from '../../assets/images/13.png'

export default function Banner() {
  return (
    <Container>
      <Details>
        <Title>Divirta-se em casa</Title>

        <Description>
          Aproveite games, música e TVs por assinatura sem sair de casa.
        </Description>

        <ActionLabel>
          Conhecer a PicPay Store
        </ActionLabel>
      </Details>
      <Img source={img13} />
    </Container>
  );
}
