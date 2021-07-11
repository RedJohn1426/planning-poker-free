import { PopupContent } from '../../../../../../../commons/components/popup-content/popup-content.interface';
import { Injectable } from '@angular/core';

@Injectable()
export class EnterNameFormErrors {

  default = (): PopupContent => {
    return {
      title: '¡Oh No!',
      text: 'Ocurrio un error inesperado'
    };
  }

  requiredDataPopup = (): PopupContent => {
    return {
      title: '¡Oh No!',
      text: 'Al parecer tienes que registrar un nombre obligatoriamente'
    };
  }

  minLengthDataPopup = (): PopupContent => {
    return {
      title: '¡Oh No!',
      text: 'Al parecer tu nombre es demasiado corto'
    };
  }

  maxLengthDataPopup = (): PopupContent => {
    return {
      title: '¡Oh No!',
      text: 'Al parecer tu nombre es demasiado largo'
    };
  }

  patternDataPopup = (): PopupContent => {
    return {
      title: '¡Oh No!',
      text: 'Al parecer solo se aceptan letras'
    };
  }
}
