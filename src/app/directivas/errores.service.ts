import { Injectable } from '@angular/core';

@Injectable()
export class ErroresService {

  constructor() { }

  obtenerMensaje(validatorId: string) {
    return this.mensajesError[validatorId]
  }

  private mensajesError = {
    "required": "El campo es requerido",
    "email": "Debe ser un correo"
  }

}