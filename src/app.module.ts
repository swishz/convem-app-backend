import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MessageController } from './message-controller/message-controller.controller';

@Module({
  imports: [],
  controllers: [AppController, MessageController],
  providers: [AppService],
})
export class AppModule {}
