import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from './product.entity';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private productsRepository: Repository<Product>,
  ) {}

  create(product: Product): Promise<Product> {
    return this.productsRepository.save(product);
  }

  findAll(): Promise<Product[]> {
    return this.productsRepository.find();
  }

  // Cambiar el tipo de retorno para permitir null
  findOne(id: number): Promise<Product | null> {
    return this.productsRepository.findOne({
      where: { id },
    });
  }

  async remove(id: number): Promise<void> {
    await this.productsRepository.delete(id);
  }
}
