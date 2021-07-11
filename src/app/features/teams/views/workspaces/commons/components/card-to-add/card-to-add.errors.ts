import { PopupContent } from '../../../../../../../commons/containers/popup-content/popup-content.interface';
import { Injectable } from '@angular/core';

@Injectable()
export class CardToAddErrors {

  default = (): PopupContent => {
    return {
      title: '¡Oh No!',
      text: 'Ocurrio un error inesperado'
    };
  }

  requiredDataPopup = (): PopupContent => {
    return {
      title: '¡Oh No!',
      text: 'Al parecer falta escribir el nombre del equipo'
    };
  }

  minLengthDataPopup = (): PopupContent => {
    return {
      title: '¡Oh No!',
      text: 'Al parecer el nombre de tu equipo es demasiado corto'
    };
  }

  maxLengthDataPopup = (): PopupContent => {
    return {
      title: '¡Oh No!',
      text: 'Al parecer el nombre de tu equipo es demasiado largo'
    };
  }

  patternDataPopup = (): PopupContent => {
    return {
      title: '¡Oh No!',
      text: 'Al parecer solo se aceptan letras'
    };
  }
}
