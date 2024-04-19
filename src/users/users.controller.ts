import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private readonly userService: UsersService){}

    @Post('/')
    async create(@Body() user){
        return await this.userService.create(user)
    }

    @Get('/')
    async findAll(){
        return await this.userService.findAll()
    }


}
