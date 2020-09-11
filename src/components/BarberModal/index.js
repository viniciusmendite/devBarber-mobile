import React from 'react';
import {useNavigation} from '@react-navigation/native';

import {Modal, ModalArea, ModalBody} from './styles';

const BarberModal = ({show, setShow, user, service}) => {
  return (
    <Modal
      transparent={true}
      visible={show}
      animationType="slide"
      onRequestClose={() => setShow(false)}>
      <ModalArea>
        <ModalBody />
      </ModalArea>
    </Modal>
  );
};

export default BarberModal;
