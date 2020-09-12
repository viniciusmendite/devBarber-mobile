import styled from 'styled-components/native';

export const Modal = styled.Modal``;

export const ModalArea = styled.View`
  flex: 1;
  background-color: rgba(0, 0, 0, 0.5);
  justify-content: flex-end;
`;

export const ModalBody = styled.View`
  background-color: #83d6e3;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  min-height: 300px;
  padding: 10px 20px 40px 20px;
`;

export const CloseButton = styled.TouchableOpacity`
  width: 40px;
  height: 40px;
`;

export const ModalItem = styled.View`
  background-color: #fff;
  border-radius: 10px;
  margin-bottom: 15px;
  padding: 10px;
`;

export const UserInfo = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const UserAvatar = styled.Image`
  width: 56px;
  height: 56px;
  border-radius: 20px;
  margin-right: 15px;
`;

export const UserName = styled.Name`
  font-size: 18px;
  color: #000;
`;
