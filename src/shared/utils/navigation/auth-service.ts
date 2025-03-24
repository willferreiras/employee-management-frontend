// authService.ts
class AuthService {
  // ... other methods ...

  constructor(private userTokenKey: string = "userToken") {
    this.userTokenKey = userTokenKey;
  }

  isAuthenticated(): boolean {
    // Logic to check if the user is authenticated
    // For example, checking if a valid token exists in local storage
    return Boolean(localStorage.getItem(this.userTokenKey));
  }

  // You can add more methods here with appropriate type annotations
}

export const authService = new AuthService();
