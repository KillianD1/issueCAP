// This is an automatically generated file. Please do not change its contents manually!
import * as __ from './_';

export function _ProductAspect<TBase extends new (...args: any[]) => object>(Base: TBase) {
  return class Product extends Base {
    declare Product?: __.Key<string>
    declare ProductType?: string | null
    declare CreationDate?: __.CdsDate | null
    declare CreatedByUser?: string | null
    declare to_Description?: __.Composition.of<ProductDescription> | null
      static readonly kind: 'entity' | 'type' | 'aspect' = 'entity';
      declare static readonly actions: Record<never, never>
      declare static readonly keys: __.KeysOf<Product>
  };
}
export class Product extends _ProductAspect(__.Entity) {}
Object.defineProperty(Product, 'name', { value: 'Products' })
Object.defineProperty(Product, 'is_singular', { value: true })
export class Products extends Array<Product> {$count?: number}
Object.defineProperty(Products, 'name', { value: 'Products' })

export function _ProductDescriptionAspect<TBase extends new (...args: any[]) => object>(Base: TBase) {
  return class ProductDescription extends Base {
    declare Product?: __.Key<string>
    declare Language?: __.Key<string>
    declare ProductDescription?: string | null
      static readonly kind: 'entity' | 'type' | 'aspect' = 'entity';
      declare static readonly actions: Record<never, never>
      declare static readonly keys: __.KeysOf<ProductDescription>
  };
}
export class ProductDescription extends _ProductDescriptionAspect(__.Entity) {}
Object.defineProperty(ProductDescription, 'name', { value: 'ProductDescriptions' })
Object.defineProperty(ProductDescription, 'is_singular', { value: true })
export class ProductDescriptions extends Array<ProductDescription> {$count?: number}
Object.defineProperty(ProductDescriptions, 'name', { value: 'ProductDescriptions' })
