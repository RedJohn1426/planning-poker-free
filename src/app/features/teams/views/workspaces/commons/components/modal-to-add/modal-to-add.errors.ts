import { Injectable } from '@angular/core';
import { PopupContent } from '../../../../../../../commons/containers/popup-content/popup-content.interface';

@Injectable()
export class ModalToAddErrors {

  default = (): PopupContent => {
    return {
      title: '¡Oh No!',
      text: 'Ocurrio un error inesperado'
    };
  }

  requiredNamePopup = (): PopupContent => {
    return {
      title: '¡Oh No!',
      text: 'Al parecer falta escribir el nombre del equipo'
    };
  }

  requiredPasswordPopup = (): PopupContent => {
    return {
      title: '¡Oh No!',
      text: 'Al parecer falta escribir la contraseña del equipo'
    };
  }

  minLengthNamePopup = (): PopupContent => {
    return {
      title: '¡Oh No!',
      text: 'Al parecer el nombre de tu equipo es demasiado corto'
    };
  }

  minLengthPasswordPopup = (): PopupContent => {
    return {
      title: '¡Oh No!',
      text: 'Al parecer la contraseña de tu equipo es demasiado corto'
    };
  }

  maxLengthNamePopup = (): PopupContent => {
    return {
      title: '¡Oh No!',
      text: 'Al parecer el nombre de tu equipo es demasiado largo'
    };
  }

  maxLengthPasswordPopup = (): PopupContent => {
    return {
      title: '¡Oh No!',
      text: 'Al parecer la contraseña de tu equipo es demasiado largo'
    };
  }

  patternNamePopup = (): PopupContent => {
    return {
      title: '¡Oh No!',
      text: 'Al parecer solo se aceptan letras'
    };
  }

  patternPasswordPopup = (): PopupContent => {
    return {
      title: '¡Oh No!',
      text: 'Al parecer solo se aceptan letras, números y algunos caracteres especiales'
    };
  }
}
