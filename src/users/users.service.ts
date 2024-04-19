import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './user.model';

@Injectable()
export class UsersService {
    constructor(@InjectModel('User') private readonly userModel: Model<User>){}

    async create(user: User): Promise<User>{
        const createdUser = new this.userModel(user)
        return await createdUser.save()
    }

    async findAll(): Promise<User[]> {
        return await this.userModel.find().exec()
    }

    async getUser(userId: string): Promise<User>{
        const existingUser = await this.userModel.findById(userId)
        if(!existingUser){
            throw new NotFoundException(`User ${userId} not found`)
        }
        return existingUser
    }

    async update(userId: string, updateData: User): Promise<User> {
        const existingUser = await this.userModel.findByIdAndUpdate(userId, updateData, {new: true})
        if(!existingUser){
            throw new NotFoundException(`User ${userId} not found`)
        }
        return existingUser
    }

    async delete(userId: string){
        const existingUser = await this.userModel.findByIdAndDelete(userId)
        if(!existingUser){
            throw new NotFoundException(`User ${userId} not found`)
        }
        return {message: `success deleting User ${userId}`}
    }
}
