import styled from 'styled-components'

export const Content = styled.div`

  width: 30%;

        /* Track */
    

  
`;

export const Perfil = styled.div`

  background-color: #f3f3f3;
  padding: .58rem .9rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

`;

export const PerfilImage = styled.img`

  height: 45px;
  width: 45px;
  border-radius: 50%;


`;

export const ConfigBox = styled.div`

  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 120px;
  margin-right: 1rem;

`;

export const Status = styled.span `
    cursor: pointer;
`;

export const Message = styled.span`
    cursor: pointer;
`;


export const Config = styled.span`
    cursor: pointer;
`;

export const Search = styled.div`
    border-bottom: 1px solid #d5dfe3;
    padding: .5rem .8rem;
    background-color: #fcfcfc;

`;

export const BoxSearch = styled.div`

    background-color: #fff;
    padding: .9rem;
    border: 1px solid #fefefe;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 15px;

`;

export const ButtonSearch = styled.button`

    border: none;
    background: none;
    cursor: pointer;

`;

export const InputSearch = styled.input`

    width: 90%;
    padding: .4rem 0;
    border: none;
    color: #7f7f7f;
    font-family: 'Roboto', Arial, Helvetica, sans-serif;
    font-size: .9rem;

    &::placeholder {
      font-family: 'Roboto', Arial, Helvetica, sans-serif;
      font-size: .9rem;
      line-height: 20px;
    }

`;

export const ContactMessage = styled.div`

    overflow: auto;
    display: flex;
    flex-direction: column;
    height: 79%;

    




`;

export const ContactMessageItem = styled.div`

    padding: .9rem .8rem;
    display: flex;
    justify-content: space-between;
    cursor: pointer;
    transition: all 0.1s;

    &:hover {
      background-color: #f7f7f7;
    }

`;

export const ContactInfoBox = styled.div`

      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 210px;

`;

export const ContactImage = styled.img`

    width: 60px;
    height: 60px;
    border-radius: 100%;


`;

export const ContactTitle = styled.h3`



`;

export const ContactInfo = styled.div`

    margin-left: 11px;

`;

export const MessageContact = styled.p`

      color: #999;
      width: 250px;

`;

export const MessageHour = styled.div`


`;

export const Hour = styled.p`

    color: #999;

`;

export const MessageSee = styled.span`

    margin: 0;
    padding: 0;
    padding-right: 5px;

    svg {
      padding: 0;
      margin: 0;
      outline: 0;
    }

`;


export const BoxMessage = styled.div`

    display: flex;
    align-items: center;
    padding: 4px 0;


`;