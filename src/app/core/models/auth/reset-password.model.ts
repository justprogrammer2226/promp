export class ResetPasswordModel {
  email: string;
  token: string;
  newPassword: string;

  static adapt(data: any): ResetPasswordModel {
    const mapped = new ResetPasswordModel();
    mapped.email = data.email;
    mapped.token = data.token;
    mapped.newPassword = data.newPassword;
    return mapped;
  }
}
