import { Controller, Post, Body, Get, Param, Put, Delete } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './user.model';

@Controller('api/users')
export class UsersController {
    constructor(private readonly userService: UsersService){}

    @Post('/')
    async create(@Body() user: User){
        return await this.userService.create(user)
    }

    @Get('/')
    async findAll(){
        return await this.userService.findAll()
    }

    @Get('/:id')
    async getUser(@Param('id') userId: string){
        return await this.userService.getUser(userId)
    }

    @Put('/:id')
    async update(@Body() user: User, @Param('id') userId: string){
        return await this.userService.update(userId, user)
    }

    @Delete('/:id')
    async delete(@Param('id') userId: string){
        return await this.userService.delete(userId)
    }
}
