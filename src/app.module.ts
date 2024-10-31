import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://victormugisha:victormugisha12345@mycluster.u2uwt.mongodb.net/?retryWrites=true&w=majority&appName=myCluster',
    ),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {} 


// usernam: victormugisha
// password: victormugisha12345