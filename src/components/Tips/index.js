import React from 'react';

import { Container, Option, Title, Img } from './styles';

import img8 from '../../assets/images/08.png';
import img9 from '../../assets/images/09.png';
import img10 from '../../assets/images/10.png';
import img11 from '../../assets/images/11.png';
import img12 from '../../assets/images/12.png';

const items = [
  {
    key: String(Math.random()),
    img: img8,
    title: 'Universitário! Cadastre-se e ganhe mais cashback',
    color: '#172c4a'
  },
  {
    key: String(Math.random()),
    img: img9,
    title: 'Compre créditos pré-pagos',
    color: '#6a0159'
  },
  {
    key: String(Math.random()),
    img: img10,
    title: 'Pague um amigo à distâcia',
    color: '#4139c8'
  },
  {
    key: String(Math.random()),
    img: img11,
    title: 'Pague suas contas sem sair de casa',
    color: '#ba2f76'
  },
  {
    key: String(Math.random()),
    img: img12,
    title: 'Adicione dinheiro na sua carteira',
    color: '#172c4a'
  },
];

export default function Tips() {
  return (
    <Container>
      {items.map(item => (
        <Option key={item.key} bgColor={item.color}>
          <Title>{item.title}</Title>

          <Img source={item.img} />
        </Option>
      ))}
    </Container>
  );
}
