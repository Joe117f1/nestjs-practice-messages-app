import { Controller, Get, Post, Body, Param } from '@nestjs/common';

@Controller('messages')
export class MessagesController {
  @Get()
  getAllMessages() {
    return 'all messages...';
  }

  @Post()
  createMessage(@Body() body: any) {
    return { body };
  }

  @Get('/:id')
  getMessageById(@Param('id') id: string) {
    return { id };
  }
}
