import { Controller, Post, Body } from '@nestjs/common';

@Controller('message')
export class MessageController {
  @Post()
  async validateMessage(
    @Body() message: { message: string },
  ): Promise<{ message: string }> {
    const result = message.message === 'sim' ? 'success' : 'error';
    return { message: result };
  }
}
