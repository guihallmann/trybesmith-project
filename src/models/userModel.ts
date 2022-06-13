import { Pool } from 'mysql2/promise';
import { ResultSetHeader } from 'mysql2';
import IUser from '../interfaces/userInterface';

class UserModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async create(user: IUser): Promise <IUser> {
    const { username, classe, level, password } = user;
    const query = `INSERT INTO Trybesmith.Users (username, classe, level, password) 
    VALUES (?,?,?,?);`;
    const [result] = await 
    this.connection.execute<ResultSetHeader>(query, [username, classe, level, password]);
    const { insertId } = result;
    return { id: insertId, username, classe, level, password };
  }
}

export default UserModel;