// https://www.facebook.com/groups/607163139705114/

import { Component } from '@angular/core';
import {FormGroup, FormControl, Validators} from "@angular/forms"

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  grupo: FormGroup

  ngOnInit() {
    this.grupo = new FormGroup({
      correo: new FormControl(null, [Validators.required, Validators.email]),
      contrasena: new FormControl(null, Validators.required)
    })
  }

  grabar(evento) {
    evento.preventDefault()
  }
}
