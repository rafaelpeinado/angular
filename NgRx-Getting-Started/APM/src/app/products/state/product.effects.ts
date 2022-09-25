import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { of } from "rxjs";
import { catchError, concatMap, map, mergeMap } from "rxjs/operators";
import { ProductService } from "../product.service";

import { ProductPageActions, ProductApiActions } from './actions';

@Injectable()
export class ProductEffects {

    constructor(
        private action$: Actions,
        private productService: ProductService
    ) { }

    loadProducts$ = createEffect(() => {
        return this.action$.pipe(
            ofType(ProductPageActions.loadProducts),
            // mapeia a ação emitida e retornar o resultado da chamado é
            // injetado no endpoint do serviço do produto de estoque.
            mergeMap(() => this.productService.getProducts().pipe(
                map(products => ProductApiActions.loadProductsSuccess({ products })),
                catchError(error => of(ProductApiActions.loadProductsFailure({ error })))
            ))
        );
    });

    updateProduct$ = createEffect(() => {
        return this.action$
            .pipe(
                ofType(ProductPageActions.updateProduct),
                concatMap(action =>
                    this.productService.updateProduct(action.product)
                        .pipe(
                            map(product => ProductApiActions.updateProductSuccess({ product })),
                            catchError(error => of(ProductApiActions.updateProductFailure({ error })))
                        )
                )
            )
    });

    createProduct$ = createEffect(() => {
        return this.action$
            .pipe(
                ofType(ProductPageActions.createProduct),
                concatMap(action =>
                    this.productService.createProduct(action.product)
                        .pipe(
                            map(product => ProductApiActions.createProductSuccess({ product })),
                            catchError(error => of(ProductApiActions.createProductFailure({ error })))
                        )
                )
            )
    });

    deleteProduct$ = createEffect(() => {
        return this.action$
            .pipe(
                ofType(ProductPageActions.deleteProduct),
                mergeMap(action =>
                    this.productService.deleteProduct(action.productId)
                        .pipe(
                            map(() => ProductApiActions.deleteProductSuccess({ productId: action.productId })),
                            catchError(error => of(ProductApiActions.deleteProductFailure({ error })))
                        )
                )
            )
    })
}
