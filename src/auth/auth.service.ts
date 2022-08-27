import {
  ConflictException,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AuthCredentialsDto } from './dto/auth-credentials.dto';
import { User } from './user.entity';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User) private tasksRepository: Repository<User>,
  ) {}

  async signUp(authcredentialsDto: AuthCredentialsDto): Promise<void> {
    const { username, password } = authcredentialsDto;
    const user = this.tasksRepository.create({ username, password });
    try {
      await this.tasksRepository.save(user);
    } catch (error) {
      if (error.code === '23505') {
        throw new ConflictException('Username already exists dude');
      } else {
        throw new InternalServerErrorException();
      }
    }
  }
}
