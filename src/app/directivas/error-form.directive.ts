import { Directive, Input, HostListener } from "@angular/core";
import { FormGroup } from "@angular/forms";

@Directive({
  selector: "[formGroup]"
})
export class ErrorFormDirective {
  @Input("formGroup") grupo: FormGroup;

  @HostListener("submit", ["$event"])
  submit(event) {
    this.markAsTouched(this.grupo);
  }

  private markAsTouched(formGroup: FormGroup): void {
    setTimeout(() => {
      //formGroup.markAsTouched();
      //formGroup.updateValueAndValidity();

      for (let control in formGroup.controls) {
        console.log(formGroup.controls[control])
        //formGroup.controls[control].markAsTouched();
        formGroup.controls[control].updateValueAndValidity();
      }
    });
  }
}
