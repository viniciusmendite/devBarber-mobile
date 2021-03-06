import React from 'react';
import {useNavigation} from '@react-navigation/native';

import {
  Modal,
  ModalArea,
  ModalBody,
  CloseButton,
  ModalItem,
  UserInfo,
  UserAvatar,
  UserName,
} from './styles';

import ExpandIcon from '../../assets/expand.svg';

const BarberModal = ({show, setShow, user, service}) => {
  const handleCloseModal = () => {
    setShow(false);
  };

  return (
    <Modal
      transparent={true}
      visible={show}
      animationType="slide"
      onRequestClose={() => setShow(false)}>
      <ModalArea>
        <ModalBody>
          <CloseButton onPress={handleCloseModal}>
            <ExpandIcon width="40" height="40" fill="#000" />
          </CloseButton>
          <ModalItem>
            <UserInfo>
              <UserAvatar source={{uri: user.avatar}} />
              <UserName>{user.name}</UserName>
            </UserInfo>
          </ModalItem>
        </ModalBody>
      </ModalArea>
    </Modal>
  );
};

export default BarberModal;
