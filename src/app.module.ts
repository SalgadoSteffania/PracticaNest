import { Module } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';
import { PrismaModule } from './prisma/prisma.module';
import { UsersModule } from './users/users.module';

@Module({
  providers: [PrismaService],
  exports: [PrismaService],
  imports: [PrismaModule, UsersModule],
})
export class AppModule {}
