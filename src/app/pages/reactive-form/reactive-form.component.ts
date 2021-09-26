import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss'],
})
export class ReactiveFormComponent implements OnInit {
  form: FormGroup;

  constructor(private formBuilder: FormBuilder, private httpClient: HttpClient) {}

  ngOnInit() {
    this.form = this.formBuilder.group({
      name: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
    });
  }

  applyEmailErrorStyle(): boolean {
    return (this.form.get('email').errors && this.form.get('email').errors['email']) || this.showMessageHelp('email');
  }

  applyErrorStyle(formControlName: string): object {
    return {
      'ng-invalid': this.showMessageHelp(formControlName),
      'ng-dirty': this.showMessageHelp(formControlName),
    };
  }

  reset(): void {
    this.form.reset();
  }

  save(): void {
    this.httpClient.post('https://httpbin.org/post', JSON.stringify(this.form.value)).subscribe(
      () => {
        this.reset();
      },
      error => {
        console.error(error);
      },
    );
  }

  showMessageHelp(formControlName: string): boolean {
    return this.form.get(formControlName).invalid && this.form.get(formControlName).touched;
  }
}
