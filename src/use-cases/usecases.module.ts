import { Module } from '@nestjs/common';
import { CommonModule } from 'src/common/common.module';
import { DatabaseModule } from 'src/infrastructure/database/database.module';
import { MessageQueueModule } from 'src/infrastructure/message-queue/message-queue.module';
import { SignInController } from './sign-in/sign-in.controller';
import { SignUpMapper } from './sign-up/sign-up-mapper';
import { SignUpController } from './sign-up/sign-up.controller';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { jwtConstants, JwtStrategy } from 'src/use-cases/jwt.strategy';
@Module({
    imports: [
        CommonModule,
        DatabaseModule,
        PassportModule.register({ defaultStrategy: 'jwt' }),
        JwtModule.register({
            secret: jwtConstants.secret,
            signOptions: { expiresIn: '1d' },
        }),
        MessageQueueModule
    ],
    controllers: [
        SignInController,
        SignUpController
    ],
    providers: [
        JwtStrategy,
        SignUpMapper
    ],
})
export class UsecasesModule { }