import { Injectable } from '@angular/core';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { SpectatorService, createServiceFactory } from '@ngneat/spectator';
import { injectAllTodos, selectAll } from './todo.selectors';
import { isObservable } from 'rxjs';

@Injectable()
class InjectAllTestService {
    allTodos$ = injectAllTodos();
}

describe('TodoSelectors', () => { 

    describe('injectAllTodos', () => {
        let spectator: SpectatorService<InjectAllTestService>;
        const createService = createServiceFactory({
            service: InjectAllTestService,
            providers: [provideMockStore()]
        });
        

        beforeEach(() => spectator = createService());

        it('should inject the allTodos selector', () => {
            const store = spectator.inject(MockStore);
            
            expect(isObservable( spectator.service.allTodos$)).toBeTruthy();
            expect(store.select).toHaveBeenCalledWith(selectAll)
        });


    });

})