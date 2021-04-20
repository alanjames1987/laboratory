import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectModel } from '@nestjs/mongoose';
import { Model } from "mongoose";

import { Product } from './product.model';

@Injectable()
export class ProductService {

    private products: any[] = [];

    constructor(@InjectModel('Product') private readonly productModel: Model<Product>) { }

    async insertProduct(title: string, desc: string, price: number) {
        
        const newProduct = new this.productModel({
            title,
            description: desc,
            price,
        });
        
        const result = await newProduct.save();

        return result.id;

    }

    getProducts() {
        return [...this.products];
    }

    getSingleProduct(productId: string) {
        const product = this.findProduct(productId)[0];
        return { ...product };
    }

    updateProduct(productId: string, title: string, desc: string, price: number) {

        const [product, index] = this.findProduct(productId);

        let updateProduct = { ...product };

        if (title) {
            updateProduct.title = title;
        }

        if (desc) {
            updateProduct.description = desc;
        }

        if (price) {
            updateProduct.price = price;
        }

        this.products[index] = updateProduct;

        return { ...updateProduct };

    }

    private findProduct(productId: string): [Product, number] {
        const productIndex = this.products.findIndex((prod) => prod.id == productId);
        let product = this.products[productIndex];
        if (!product) {
            throw new NotFoundException('Could not find product');
        }
        return [product, productIndex];
    }

}