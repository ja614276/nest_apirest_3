import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './product.entity';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Product])], // Esto importa el repositorio de Product para usarlo en ProductsService
  providers: [ProductsService],  // Proveedor de servicio para gestionar la lógica de negocios
  controllers: [ProductsController], // Controlador que gestiona las rutas relacionadas con productos
})
export class ProductsModule {}
