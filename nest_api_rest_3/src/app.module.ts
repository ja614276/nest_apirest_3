import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './products/product.entity';  // Asegúrate de que la ruta es correcta
import { ProductsModule } from './products/products.module';  // Importa el ProductsModule

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',  // Asegúrate de que sea MySQL
      host: 'localhost',  // Host de MySQL
      port: 3306,  // Puerto por defecto de MySQL
      username: 'root',  // Usuario de MySQL
      password: '@AlvArez1',  // Contraseña de MySQL
      database: 'nest_db_13',  // Nombre de tu base de datos
      entities: [Product],  // Asegúrate de que la entidad Product esté aquí
      synchronize: true,  // Esto debería hacer que la tabla se cree automáticamente
      logging: true,  // Para ver los logs de las consultas SQL
    }),
    ProductsModule,  // Importa el ProductsModule donde registras la entidad Product
  ],
})
export class AppModule {}
