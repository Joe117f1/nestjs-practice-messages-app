import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { CreateMessageDto } from './dto';

@Controller('messages')
export class MessagesController {
  @Get()
  getAllMessages() {
    return 'all messages...';
  }

  @Post()
  createMessage(@Body() body: CreateMessageDto) {
    return { body };
  }

  @Get('/:id')
  getMessageById(@Param('id') id: string) {
    return { id };
  }
}
