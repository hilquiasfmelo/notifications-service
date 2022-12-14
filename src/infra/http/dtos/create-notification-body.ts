import { IsEmpty, IsNotEmpty, IsUUID, Length } from 'class-validator';

export class CreateNotificationBody {
  @IsNotEmpty()
  @IsUUID()
  recipientId: string;

  @IsNotEmpty()
  @Length(5, 240, {
    message: 'The quantity must contain between 5 and 240 characters.',
  })
  content: string;

  @IsNotEmpty()
  category: string;

  @IsEmpty()
  readAt?: Date;
}
