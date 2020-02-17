import React from 'react';

import { Content, Perfil, PerfilImage, ConfigBox, 
         Status, 
         Message, 
         Config,
         Search,
         BoxSearch,
         ButtonSearch,
         InputSearch,
         ContactMessage,
         ContactMessageItem,
         ContactInfoBox,
         ContactImage,
         ContactTitle,
         ContactInfo,
         MessageContact,
         MessageHour,
         Hour,
         MessageSee,
         BoxMessage 
        } from './styles';

const Sidebar = () => {


  return(
    <>
      <Content>
        <Perfil>
          <PerfilImage src="https://avatars2.githubusercontent.com/u/43914533?s=460&v=4"/>
          <ConfigBox>
            <Status>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                <path fill="#727A7E" d="M12.072 1.761a10.05 10.05 0 0 0-9.303 5.65.977.977 0 0 0 1.756.855 8.098 8.098 0 0 1 7.496-4.553.977.977 0 1 0 .051-1.952zM1.926 13.64a10.052 10.052 0 0 0 7.461 7.925.977.977 0 0 0 .471-1.895 8.097 8.097 0 0 1-6.012-6.386.977.977 0 0 0-1.92.356zm13.729 7.454a10.053 10.053 0 0 0 6.201-8.946.976.976 0 1 0-1.951-.081v.014a8.097 8.097 0 0 1-4.997 7.209.977.977 0 0 0 .727 1.813l.02-.009z"></path>
                <path fill="#009588" d="M19 1.5a3 3 0 1 1 0 6 3 3 0 0 1 0-6z"></path>
              </svg>
            </Status>
            <Message>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                <path opacity=".55" fill="#263238" d="M19.005 3.175H4.674C3.642 3.175 3 3.789 3 4.821V21.02l3.544-3.514h12.461c1.033 0 2.064-1.06 2.064-2.093V4.821c-.001-1.032-1.032-1.646-2.064-1.646zm-4.989 9.869H7.041V11.1h6.975v1.944zm3-4H7.041V7.1h9.975v1.944z"></path>
              </svg>
            </Message>
            <Config>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                <path fill="#263238" fillOpacity=".6" d="M12 7a2 2 0 1 0-.001-4.001A2 2 0 0 0 12 7zm0 2a2 2 0 1 0-.001 3.999A2 2 0 0 0 12 9zm0 6a2 2 0 1 0-.001 3.999A2 2 0 0 0 12 15z"></path>
              </svg>
            </Config>
          </ConfigBox>
        </Perfil>
        <Search>
          <BoxSearch>
            <ButtonSearch>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="#263238" fillOpacity=".3" d="M15.009 13.805h-.636l-.22-.219a5.184 5.184 0 0 0 1.256-3.386 5.207 5.207 0 1 0-5.207 5.208 5.183 5.183 0 0 0 3.385-1.255l.221.22v.635l4.004 3.999 1.194-1.195-3.997-4.007zm-4.808 0a3.605 3.605 0 1 1 0-7.21 3.605 3.605 0 0 1 0 7.21z"></path></svg>
            </ButtonSearch>
            <InputSearch placeholder="Procurar ou começar uma nova conversa"/>
          </BoxSearch>
        </Search>
        <ContactMessage>
          <ContactMessageItem>
            <ContactInfoBox>
              <ContactImage src="data:image/jpeg;base64,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" />
              <ContactInfo>
                <ContactTitle>Steve Jobs</ContactTitle>
                <BoxMessage>
                  <MessageSee>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18">
                      <path fill="#263238" fillOpacity=".4" d="M17.394 5.035l-.57-.444a.434.434 0 0 0-.609.076l-6.39 8.198a.38.38 0 0 1-.577.039l-.427-.388a.381.381 0 0 0-.578.038l-.451.576a.497.497 0 0 0 .043.645l1.575 1.51a.38.38 0 0 0 .577-.039l7.483-9.602a.436.436 0 0 0-.076-.609zm-4.892 0l-.57-.444a.434.434 0 0 0-.609.076l-6.39 8.198a.38.38 0 0 1-.577.039l-2.614-2.556a.435.435 0 0 0-.614.007l-.505.516a.435.435 0 0 0 .007.614l3.887 3.8a.38.38 0 0 0 .577-.039l7.483-9.602a.435.435 0 0 0-.075-.609z"></path>
                    </svg>
                  </MessageSee>
                  <MessageContact>Voando alto em mlq!</MessageContact>
                </BoxMessage>
              </ContactInfo>
            </ContactInfoBox>
            <MessageHour>
              <Hour>23:00</Hour>
            </MessageHour>
          </ContactMessageItem>
          <ContactMessageItem>
            <ContactInfoBox>
              <ContactImage src="https://investidoresbrasil.com.br/wp-content/uploads/2019/04/O-Livro-de-308-Milh%C3%B5es-de-D%C3%B3lares-que-Inspira-Bill-Gates-h%C3%A1-25-anos.jpg" />
              <ContactInfo>
                <ContactTitle>Bill Gates</ContactTitle>
                <BoxMessage>
                  <MessageSee>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18">
                      <path fill="#263238" fillOpacity=".4" d="M17.394 5.035l-.57-.444a.434.434 0 0 0-.609.076l-6.39 8.198a.38.38 0 0 1-.577.039l-.427-.388a.381.381 0 0 0-.578.038l-.451.576a.497.497 0 0 0 .043.645l1.575 1.51a.38.38 0 0 0 .577-.039l7.483-9.602a.436.436 0 0 0-.076-.609zm-4.892 0l-.57-.444a.434.434 0 0 0-.609.076l-6.39 8.198a.38.38 0 0 1-.577.039l-2.614-2.556a.435.435 0 0 0-.614.007l-.505.516a.435.435 0 0 0 .007.614l3.887 3.8a.38.38 0 0 0 .577-.039l7.483-9.602a.435.435 0 0 0-.075-.609z"></path>
                    </svg>
                  </MessageSee>
                  <MessageContact>Voando alto em mlq!</MessageContact>
                </BoxMessage>
              </ContactInfo>
            </ContactInfoBox>
            <MessageHour>
              <Hour>23:00</Hour>
            </MessageHour>
          </ContactMessageItem>
          <ContactMessageItem>
            <ContactInfoBox>
              <ContactImage src="https://www.turismodeestrellas.com/media/files/1862_stephen-hawking-jane-wilde.jpg" />
              <ContactInfo>
                <ContactTitle>Stephen Hawking</ContactTitle>
                <BoxMessage>
                  <MessageSee>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18">
                      <path fill="#263238" fillOpacity=".4" d="M17.394 5.035l-.57-.444a.434.434 0 0 0-.609.076l-6.39 8.198a.38.38 0 0 1-.577.039l-.427-.388a.381.381 0 0 0-.578.038l-.451.576a.497.497 0 0 0 .043.645l1.575 1.51a.38.38 0 0 0 .577-.039l7.483-9.602a.436.436 0 0 0-.076-.609zm-4.892 0l-.57-.444a.434.434 0 0 0-.609.076l-6.39 8.198a.38.38 0 0 1-.577.039l-2.614-2.556a.435.435 0 0 0-.614.007l-.505.516a.435.435 0 0 0 .007.614l3.887 3.8a.38.38 0 0 0 .577-.039l7.483-9.602a.435.435 0 0 0-.075-.609z"></path>
                    </svg>
                  </MessageSee>
                  <MessageContact>Voando alto em mlq!</MessageContact>
                </BoxMessage>
              </ContactInfo>
            </ContactInfoBox>
            <MessageHour>
              <Hour>23:00</Hour>
            </MessageHour>
          </ContactMessageItem>
          <ContactMessageItem>
            <ContactInfoBox>
              <ContactImage src="https://www.biography.com/.image/t_share/MTY2MzU3Nzk2OTM2MjMwNTkx/elon_musk_royal_society.jpg" />
              <ContactInfo>
                <ContactTitle>Elon Musk</ContactTitle>
                <BoxMessage>
                  <MessageSee>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18">
                      <path fill="#263238" fillOpacity=".4" d="M17.394 5.035l-.57-.444a.434.434 0 0 0-.609.076l-6.39 8.198a.38.38 0 0 1-.577.039l-.427-.388a.381.381 0 0 0-.578.038l-.451.576a.497.497 0 0 0 .043.645l1.575 1.51a.38.38 0 0 0 .577-.039l7.483-9.602a.436.436 0 0 0-.076-.609zm-4.892 0l-.57-.444a.434.434 0 0 0-.609.076l-6.39 8.198a.38.38 0 0 1-.577.039l-2.614-2.556a.435.435 0 0 0-.614.007l-.505.516a.435.435 0 0 0 .007.614l3.887 3.8a.38.38 0 0 0 .577-.039l7.483-9.602a.435.435 0 0 0-.075-.609z"></path>
                    </svg>
                  </MessageSee>
                  <MessageContact>Voando alto em mlq!</MessageContact>
                </BoxMessage>
              </ContactInfo>
            </ContactInfoBox>
            <MessageHour>
              <Hour>23:00</Hour>
            </MessageHour>
          </ContactMessageItem>
          <ContactMessageItem>
            <ContactInfoBox>
              <ContactImage src="https://static1.squarespace.com/static/57211f283c44d811d9f1ff5e/5723af5a7c65e48584f1148e/578e29c0e3df280475bd2423/1468935825737/marvel-iron-man-mark-xlvi-sixth-scale-captain-america-civil-war-hot-toys-thumb-902622.jpg?format=1500w" />
              <ContactInfo>
                <ContactTitle>Tony Stark</ContactTitle>
                <BoxMessage>
                  <MessageSee>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18">
                      <path fill="#263238" fillOpacity=".4" d="M17.394 5.035l-.57-.444a.434.434 0 0 0-.609.076l-6.39 8.198a.38.38 0 0 1-.577.039l-.427-.388a.381.381 0 0 0-.578.038l-.451.576a.497.497 0 0 0 .043.645l1.575 1.51a.38.38 0 0 0 .577-.039l7.483-9.602a.436.436 0 0 0-.076-.609zm-4.892 0l-.57-.444a.434.434 0 0 0-.609.076l-6.39 8.198a.38.38 0 0 1-.577.039l-2.614-2.556a.435.435 0 0 0-.614.007l-.505.516a.435.435 0 0 0 .007.614l3.887 3.8a.38.38 0 0 0 .577-.039l7.483-9.602a.435.435 0 0 0-.075-.609z"></path>
                    </svg>
                  </MessageSee>
                  <MessageContact>Você é o que sem essa armadura?</MessageContact>
                </BoxMessage>
              </ContactInfo>
            </ContactInfoBox>
            <MessageHour>
              <Hour>23:00</Hour>
            </MessageHour>
          </ContactMessageItem>
          <ContactMessageItem>
            <ContactInfoBox>
              <ContactImage src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR3_UuILQqt_tu32g1J58jlF39so0vRuSGfUAZhkJHX-kYeRMyl" />
              <ContactInfo>
                <ContactTitle>Barry Allen</ContactTitle>
                <BoxMessage>
                  <MessageSee>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18">
                      <path fill="#263238" fillOpacity=".4" d="M17.394 5.035l-.57-.444a.434.434 0 0 0-.609.076l-6.39 8.198a.38.38 0 0 1-.577.039l-.427-.388a.381.381 0 0 0-.578.038l-.451.576a.497.497 0 0 0 .043.645l1.575 1.51a.38.38 0 0 0 .577-.039l7.483-9.602a.436.436 0 0 0-.076-.609zm-4.892 0l-.57-.444a.434.434 0 0 0-.609.076l-6.39 8.198a.38.38 0 0 1-.577.039l-2.614-2.556a.435.435 0 0 0-.614.007l-.505.516a.435.435 0 0 0 .007.614l3.887 3.8a.38.38 0 0 0 .577-.039l7.483-9.602a.435.435 0 0 0-.075-.609z"></path>
                    </svg>
                  </MessageSee>
                  <MessageContact>Mais tarde aparece em Star City</MessageContact>
                </BoxMessage>
              </ContactInfo>
            </ContactInfoBox>
            <MessageHour>
              <Hour>23:00</Hour>
            </MessageHour>
          </ContactMessageItem>
          <ContactMessageItem>
            <ContactInfoBox>
              <ContactImage src="https://www.opopular.com.br/polopoly_fs/1.1722712.1549320855!/image/image.jpg_gen/derivatives/landscape_800/image.jpg" />
              <ContactInfo>
                <ContactTitle>Mark Zuckerberg</ContactTitle>
                <BoxMessage>
                  <MessageSee>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18">
                      <path fill="#263238" fillOpacity=".4" d="M17.394 5.035l-.57-.444a.434.434 0 0 0-.609.076l-6.39 8.198a.38.38 0 0 1-.577.039l-.427-.388a.381.381 0 0 0-.578.038l-.451.576a.497.497 0 0 0 .043.645l1.575 1.51a.38.38 0 0 0 .577-.039l7.483-9.602a.436.436 0 0 0-.076-.609zm-4.892 0l-.57-.444a.434.434 0 0 0-.609.076l-6.39 8.198a.38.38 0 0 1-.577.039l-2.614-2.556a.435.435 0 0 0-.614.007l-.505.516a.435.435 0 0 0 .007.614l3.887 3.8a.38.38 0 0 0 .577-.039l7.483-9.602a.435.435 0 0 0-.075-.609z"></path>
                    </svg>
                  </MessageSee>
                  <MessageContact>Engenheiro de software agora!</MessageContact>
                </BoxMessage>
              </ContactInfo>
            </ContactInfoBox>
            <MessageHour>
              <Hour>23:00</Hour>
            </MessageHour>
          </ContactMessageItem>
          
        </ContactMessage>
        
      </Content>
    </>
  )
};

export default Sidebar;
