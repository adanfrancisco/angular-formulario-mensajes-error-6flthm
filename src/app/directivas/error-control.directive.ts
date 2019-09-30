import { Directive, ElementRef, Input, HostListener } from "@angular/core";
import { NgControl, ValidationErrors } from "@angular/forms";
import { Subscription } from "rxjs";
import uuid from "uuid"

import { ErroresService } from "./errores.service";

@Directive({
  selector: "[formControlName], [formControl]"
})
export class ErrorControlDirective {
  errorSpanId: string = "";

  cambioEstadoSuscripcion: Subscription;

  constructor(
    private el: ElementRef,
    private control: NgControl,
    private erroresService: ErroresService
  ) {}

  ngOnInit() {
    this.errorSpanId = uuid.v4();
    this.cambioEstadoSuscripcion = this.control.statusChanges.subscribe(
      status => {
        if (status == "INVALID") {
          this.mostrarError();
        } else {
          this.removerError();
        }
      }
    );
  }

  ngOnDestroy() {
    this.cambioEstadoSuscripcion.unsubscribe();
  }

  @HostListener("blur", ["$event"])
  eventoBlur(event) {
    if (this.control.value == null || this.control.value == "") {
      if (this.control.errors) {
        this.mostrarError();
      } else {
        this.removerError();
      }
    }
  }

  private mostrarError() {
    this.removerError();
    const valErrors: ValidationErrors = this.control.errors;
    const primerError = Object.keys(valErrors)[0];
    const errorMsg = this.erroresService.obtenerMensaje(primerError);
    const errSpan =
      `<span style="color:red;font-style:italic;font-size:11px" id="${this.errorSpanId}">${errorMsg}</span>`;
    this.el.nativeElement.parentElement.insertAdjacentHTML(
      "beforeend",
      errSpan
    );
  }

  private removerError(): void {
    const errorElement = document.getElementById(this.errorSpanId);
    if (errorElement) errorElement.remove();
  }
}
