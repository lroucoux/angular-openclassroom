import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private token!: string;

  constructor() {}

  getToken(): string {
    return this.token;
  }

  login(): void {
    this.token = 'MyFakeToken';
  }
}
