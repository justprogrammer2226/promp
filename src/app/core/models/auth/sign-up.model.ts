export class SignUpModel {
  email: string;
  password: string;
  confirmPassword: string;

  static adapt(data: any): SignUpModel {
    const mapped = new SignUpModel();
    mapped.email = data.email;
    mapped.password = data.password;
    mapped.confirmPassword = data.confirmPassword;
    return mapped;
  }
}
