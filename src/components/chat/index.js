import React, { Component } from 'react';

import { Content, Perfil, PerfilImage, 
         PerfilName, 
         PerfilInfo,
         PerfilConfig,
         ChatMain

  } from './styles';

export default class Chat extends Component {
  render() {
    return(
      <>
        <Content>
          <Perfil>
            <PerfilInfo>
              <PerfilImage src="https://avatars2.githubusercontent.com/u/43914533?s=460&v=4"/>
              <PerfilName>Juliano Alves</PerfilName>
            </PerfilInfo>
            <PerfilConfig>

            </PerfilConfig>
          </Perfil>
          <ChatMain>

          </ChatMain>
        </Content>
      </>
    )
  }
}
