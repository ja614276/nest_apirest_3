import { Controller, Get, Post, Body, Param, Delete, NotFoundException, Put } from '@nestjs/common';
import { ProductsService } from './products.service';
import { Product } from './product.entity';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  // Crear producto
  @Post()
  create(@Body() product: Product): Promise<Product> {
    return this.productsService.create(product);
  }

  // Obtener todos los productos
  @Get()
  findAll(): Promise<Product[]> {
    return this.productsService.findAll();
  }

  // Obtener un solo producto por ID
  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Product> {
    const product = await this.productsService.findOne(id);
    if (!product) {
      throw new NotFoundException(`Product with id ${id} not found`);
    }
    return product;
  }

  // Actualizar un producto
  @Put(':id')
  async update(@Param('id') id: number, @Body() product: Product): Promise<Product> {
    const existingProduct = await this.productsService.findOne(id);
    if (!existingProduct) {
      throw new NotFoundException(`Product with id ${id} not found`);
    }

    // Actualiza los campos del producto con los datos enviados en el cuerpo de la solicitud
    Object.assign(existingProduct, product);
    return this.productsService.create(existingProduct); // O usar update() si es preferido
  }

  // Eliminar producto por ID
  @Delete(':id')
  remove(@Param('id') id: number): Promise<void> {
    return this.productsService.remove(id);
  }
}
