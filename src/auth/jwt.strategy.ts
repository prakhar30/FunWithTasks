import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { InjectRepository } from '@nestjs/typeorm';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { Repository } from 'typeorm';
import { JwtPayload } from './jwt-payload.interface';
import { User } from './user.entity';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    @InjectRepository(User) private usersRepository: Repository<User>,
  ) {
    super({
      secretOrKey: 'topSecret51', // same as secret added in auth module
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(), // how to extract token from the request, in header as a bearer token
    });
  }

  async validate(payload: JwtPayload): Promise<User> {
    const { username } = payload;
    const user: User = await this.usersRepository.findOne({
      where: {
        username: username,
      },
    });

    if (!user) {
      throw new UnauthorizedException();
    }

    return user;
  }
}
