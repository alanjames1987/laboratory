import { Controller, Post, Body, Get, Param, Patch } from '@nestjs/common';
import { ProductService } from './product.service';

@Controller('products')
export class ProductController {

    constructor(private readonly productService: ProductService) { }

    @Post()
    async addProduct(
        @Body('title') prodTitle: string,
        @Body('description') prodDesc: string,
        @Body('price') prodPrice: number,
    ): Promise<any> {
        let id = await this.productService.insertProduct(prodTitle, prodDesc, prodPrice);
        return {
            id: id,
        }
    }

    @Get()
    getAllProducts() {
        return this.productService.getProducts();
    }

    @Get(':id')
    getProduct(@Param('id') prodId: string) {
        return this.productService.getSingleProduct(prodId);
    }

    @Patch(':id')
    updateProduct(
        @Param('id') prodId: string,
        @Body('title') prodTitle: string,
        @Body('description') prodDesc: string,
        @Body('price') prodPrice: number,
    ) {
        return this.productService.updateProduct(prodId, prodTitle, prodDesc, prodPrice);
    }

}