export class SignInModel {
  email: string;
  password: string;

  static adapt(data: any): SignInModel {
    const mapped = new SignInModel();
    mapped.email = data.email;
    mapped.password = data.password;
    return mapped;
  }
}
