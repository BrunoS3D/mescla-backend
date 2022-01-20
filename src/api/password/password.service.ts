import { Injectable } from '@nestjs/common';
import { hash, compare } from 'bcrypt';

import config from '@/config';

@Injectable()
export class PasswordService {
  constructor() {}

  validatePassword(password: string, hashedPassword: string): Promise<boolean> {
    return compare(password, hashedPassword);
  }

  hashPassword(password: string): Promise<string> {
    return hash(password, config.passwordSalt);
  }
}
