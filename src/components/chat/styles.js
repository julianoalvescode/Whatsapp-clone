import styled from 'styled-components';

import ChatBG from './../../assets/img/bg-chat-.png'

export const Content = styled.div`

  background-color: #f7f9fa;
  border-left: 1px solid #d5dfe3;
  width: 70%;
  height: 100%;

`;


export const Perfil = styled.div`

  background-color: #ededed;
  padding: .6rem 1rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

`;

export const PerfilInfo = styled.div`

  display: flex;
  align-items: center;


`;

export const PerfilName = styled.h4`

  font-weight: 400;
  margin-left: 1rem;

`

export const PerfilImage = styled.img`

  width: 45px;
  height: 45px;
  border-radius: 50%;

`;

export const PerfilConfig = styled.div`


`;

export const ChatMain = styled.div`

  background-image: url(${ChatBG});
  opacity: 0.1;
  background-color: #ffaaaa;
  background-attachment: fixed;
  height: 80%;

`;
