export interface User {
  id: string;
  email: string;
  hashedPassword: string;
  currentTokenId: string | null;
}
