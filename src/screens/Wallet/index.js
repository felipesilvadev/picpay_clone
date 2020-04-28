import React, { useState } from 'react';
import { StatusBar, Switch } from 'react-native';
import { Feather, MaterialCommunityIcons, FontAwesome, AntDesign } from '@expo/vector-icons';

import { 
  Container, 
  Header, 
  HeaderContainer, 
  Title, 
  BalanceContainer, 
  Value, 
  Bold,
  EyeButton,
  Info,
  Actions,
  Action,
  ActionLabel,
  UseBalance,
  UseBalanceTitle,
  PaymentMethods,
  PaymentMethodsTitle,
  Card,
  CardBody,
  CardDetails,
  CardTitle,
  CardInfo,
  CreditCardImg,
  AddButton,
  AddLabel,
  UseTicketButton,
  UseTicketLabel
} from './styles';

import creditCard from '../../assets/images/credit-card.png';

export default function Wallet() {
  const [isVisible, setIsVisible] = useState(true);
  const [useBalance, setUseBalance] = useState(true);

  const handleToggle = () => {
    setIsVisible(!isVisible);
  };

  const handleSwitch = () => {
    setUseBalance(!useBalance);
  };

  return (
    <>
      <StatusBar backgroundColor={useBalance ? "#52e78c" : '#d3d3d3'} />

      <Container>
        <Header colors={
          useBalance ? (
            ['#52e78c', '#1ab563']
          ) : (
            ['#d3d3d3', '#868686']
          )
        }>
          <HeaderContainer>
            <Title>Saldo PicPay</Title>

            <BalanceContainer>
              <Value>
                R$ <Bold>{isVisible ? '0,00' : '----'}</Bold>
              </Value>

              <EyeButton onPress={handleToggle}>
                <Feather name={isVisible ? 'eye' : 'eye-off'} size={28} color="#fff" />
              </EyeButton>
            </BalanceContainer>

            <Info>Seu saldo está rendendo 100% do CDI</Info>

            <Actions>
              <Action>
                <MaterialCommunityIcons name="cash" size={28} color="#fff" />
                <ActionLabel>Adicionar</ActionLabel>
              </Action>

              <Action>
                <FontAwesome name="bank" size={20} color="#fff" />
                <ActionLabel>Retirar</ActionLabel>
              </Action>
            </Actions>
          </HeaderContainer>
        </Header>

        <UseBalance>
          <UseBalanceTitle>
            Usar saldo ao pagar
          </UseBalanceTitle>

          <Switch value={useBalance} onValueChange={handleSwitch} />
        </UseBalance>

        <PaymentMethods>
          <PaymentMethodsTitle>Formas de pagamento</PaymentMethodsTitle>

          <Card>
            <CardBody>
              <CardDetails>
                <CardTitle>
                  Cadastre seu cartão de crédito
                </CardTitle>

                <CardInfo>
                  Cadastre seu cartão de crédito para poder fazer pagamentos mesmo quando não tiver saldo no seu PicPay.
                </CardInfo>
              </CardDetails>

              <CreditCardImg source={creditCard} resizeMode="contain" />
            </CardBody>

            <AddButton>
              <AntDesign name="pluscircleo" size={30} color="#0db060" />
              <AddLabel>Adicionar cartão de crédito</AddLabel>
            </AddButton>
          </Card>

          <UseTicketButton>
            <MaterialCommunityIcons name="ticket-outline" size={20} color="#0db060" />
            <UseTicketLabel>Usar código promocional</UseTicketLabel>
          </UseTicketButton>
        </PaymentMethods>
      </Container>
    </>
  );
}
