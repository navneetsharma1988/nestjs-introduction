import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';

const PASSWORD = 'admin';
const MONGODB_URI = `mongodb+srv://admin:${PASSWORD}@mymongodb.k4ouxrx.mongodb.net/nestjs-demo?retryWrites=true&w=majority`;

@Module({
  imports: [ProductsModule, MongooseModule.forRoot(MONGODB_URI)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}