import { Injectable } from '@angular/core';
import { PopupContent } from '../../../../../../../commons/containers/popup-content/popup-content.interface';

@Injectable()
export class ModalEnterPasswordErrors {

  default = (): PopupContent => {
    return {
      title: '¡Oh No!',
      text: 'Ocurrio un error inesperado'
    };
  }

  requiredPasswordPopup = (): PopupContent => {
    return {
      title: '¡Oh No!',
      text: 'Al parecer falta escribir la contraseña del equipo'
    };
  }

}
