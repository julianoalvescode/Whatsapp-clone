import React from 'react';

import { Content, ImageHome, HomeBox, BoxImage, Title, 
          Subtitle, 
          BoxSubtitle,
          BoxInfo,
          Info,
          InfoLink,
          Trace 
        } from './styles';

import { MdLaptopMac } from 'react-icons/md'

import WhatsAppClone from './../../assets/img/WhatsAppClone.png';

const Home = () => {


  return(
    <>
      <Content>
        <HomeBox>
          <BoxImage>
            <ImageHome src={WhatsAppClone}/>
          </BoxImage>
          <Title>Mantenha seu celular conectado</Title>
          <BoxSubtitle>
            <Subtitle>O WhatsApp conecta ao seu telefone para sincronizar suas mensagens. Para reduzir o uso de dados, conecte seu telefone a uma rede Wi-Fi.</Subtitle>
          </BoxSubtitle>
          <Trace />
          <BoxInfo>
            <MdLaptopMac size={16} color="#9DA3A5"/>
            <Info>
             O WhatsApp está disponível para Windows. 
            </Info>
            <InfoLink href="https://github.com/julianoalvescode/whatsapp-clone" target="_blank">
              Obtenha-o aqui
            </InfoLink>
          </BoxInfo>
        </HomeBox>
      </Content>
    </>
  )

};

export default Home;
