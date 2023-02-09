import { Body, Controller, Post } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto } from 'src/dto/user.dto';
import { MongoRepository } from 'typeorm';
import { User } from './user.entity';

@Controller('users')
export class UserController {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: MongoRepository<User>,
  ) {}

  @Post()
  public async createUser(@Body() createUserDto: CreateUserDto) {
    console.log(createUserDto);
    const user = await this.userRepository.save(createUserDto);
    return user
  }
}
