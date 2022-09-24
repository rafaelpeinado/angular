import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { of } from "rxjs";
import { catchError, map, mergeMap } from "rxjs/operators";
import { ProductService } from "../product.service";

import * as ProductActions from './product.actions';

@Injectable()
export class ProductEffects {

    constructor(
        private action$: Actions,
        private productService: ProductService
    ) { }

    loadProducts$ = createEffect(() => {
        return this.action$.pipe(
            ofType(ProductActions.loadProducts),
            // mapeia a ação emitida e retornar o resultado da chamado é
            // injetado no endpoint do serviço do produto de estoque.
            mergeMap(() => this.productService.getProducts().pipe(
                map(products => ProductActions.loadProductsSuccess({ products })),
                catchError(error => of(ProductActions.loadProductsFailure({ error })))
            ))
        );
    });
}
