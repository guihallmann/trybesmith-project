import IUser from '../interfaces/userInterface';
import connection from '../models/connection';
import UserModel from '../models/userModel';

class UserService {
  public model: UserModel;

  constructor() {
    this.model = new UserModel(connection);
  }
  
  public async create(user: IUser): Promise<IUser> {
    const newUser = await this.model.create(user);
    return newUser;
  }
}

export default UserService;