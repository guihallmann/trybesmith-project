interface User {
  id?: number;
  username: string;
  classe: string;
  level: number;
  password?: string | null;
}

export default User;