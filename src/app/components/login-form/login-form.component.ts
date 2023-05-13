import { Component } from '@angular/core';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css'],
})
export class LoginFormComponent {
  tableNum: string = '3';

  formData: { name: string; cpf: string } = {
    name: '',
    cpf: '',
  };

  formatCpf = () => {
    this.formData.cpf = this.formData.cpf.replace(
      // 3 consecutive digits three times, and then two consecutive digits, total of 4 groups
      /(\d{3})(\d{3})(\d{3})(\d{2})/,
      // for the first two groups add a dot after the group, for the third group add a hyphen after it
      // $4 is just there so the last two numbers appear
      '$1.$2.$3-$4'
    );
  };

  onSubmit() {
    // Handle form submission logic here
    console.log(this.formData);
  }
}
