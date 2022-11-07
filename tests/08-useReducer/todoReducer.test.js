import { todoReducer } from "../../src/08-useReducer";

describe('Pruebas en el todoReducer', () => { 
    const initialState = [{
        id: 1,
        description: 'Demo Todo',
        done: false
    }];

    test('debe de retornar el estado inicial', () => { 
        const newState = todoReducer(initialState, {});
        expect(newState).toBe(initialState);
    });

    test('debe de agregar un nuevo todo', () => {
        const action = {
            type: '[TODO] Add Todo',
            payload: {
                id: 2,
                description: 'Nuevo todo #2',
                done: false
            }
        }
        const newState = todoReducer(initialState, action);
        expect(newState.length).toBe(2);
        expect(newState).toContain(action.payload);
    });

    test('debe de eliminar un todo', () => {
        const action = {
            type: '[TODO] Add Todo',
            payload: {
                id: 2,
                description: 'Nuevo todo #2',
                done: false
            }
        }
        const newState = todoReducer(initialState, action);
        expect(newState.length).toBe(2);
        expect(newState).toContain(action.payload);
        const actionRemove = {
            type: '[TODO] Remove Todo',
            payload: 2
        }
        const newStateRemove = todoReducer(newState, actionRemove);
        expect(newStateRemove.length).toBe(1);
    });

    test('debe de modificar un todo', () => {
        const action = {
            type: '[TODO] Add Todo',
            payload: {
                id: 2,
                description: 'Nuevo todo #2',
                done: false
            }
        }
        const newState = todoReducer(initialState, action);
        expect(newState.length).toBe(2);
        expect(newState).toContain(action.payload);
        const actionToogle = {
            type: '[TODO] Toggle Todo',
            payload: 2
        }
        const newStateRemove = todoReducer(newState, actionToogle);
        const findElement = newStateRemove.find((x) => x.id == actionToogle.payload);
        expect(findElement.done).toBe(true);
    });
});