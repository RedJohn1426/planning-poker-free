import { PopupError } from '../../popups/popup-error/popup-error.interface';
import { Injectable } from '@angular/core';

@Injectable()
export class EnterNameFormErrors {

  default = (): PopupError => {
    return {
      title: '¡Oh No!',
      text: 'Ocurrio un error inesperado'
    };
  }

  requiredDataPopup = (): PopupError => {
    return {
      title: '¡Oh No!',
      text: 'Al parecer tienes que registrar un nombre obligatoriamente'
    };
  }

  minLengthDataPopup = (): PopupError => {
    return {
      title: '¡Oh No!',
      text: 'Al parecer tu nombre es demasiado corto'
    };
  }

  maxLengthDataPopup = (): PopupError => {
    return {
      title: '¡Oh No!',
      text: 'Al parecer tu nombre es demasiado largo'
    };
  }

  patternDataPopup = (): PopupError => {
    return {
      title: '¡Oh No!',
      text: 'Al parecer solo se aceptan letras'
    };
  }
}
