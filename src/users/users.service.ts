import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './user.model';

@Injectable()
export class UsersService {
    constructor(@InjectModel('User') private readonly userModel: Model<User>){}

    async create(user: User): Promise<User>{
        const createdUser = new this.userModel({user})
        return await createdUser.save()
    }

    async findAll(): Promise<User[]> {
        return await this.userModel.find().exec()
    }
}
