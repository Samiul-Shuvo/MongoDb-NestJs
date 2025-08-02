import { Injectable } from '@nestjs/common';
import { User } from './schemas/user.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async createUser(): Promise<User> {
    const user = new this.userModel({
      name: 'Samiul Shuvo',
      address: {
        street: '24 street',
        city: 'Chattogram',
      },
    });
    return user.save();
  }

  async findAll(): Promise<User[]> {
    return this.userModel.find();
  }
}
