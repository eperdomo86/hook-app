const { render, screen, fireEvent } = require("@testing-library/react");
const { UserContext } = require("../../src/09-useContext/context/UserContext");
const { LoginPage } = require("../../src/09-useContext/LoginPage");

describe('Prueba de <LoginPage />', () => { 

    const user = {
        id: 1,
        name: 'Edward'
    };
    const setUserMock = jest.fn();
    
    test('debe de renderizar el componente sin el usuario', () => { 
        
        render(
            <UserContext.Provider value={{user: null}}>
                <LoginPage />
            </UserContext.Provider>
        );
        expect(screen.getByLabelText('pre').innerHTML).toBe('null');
        expect(screen.getByText('LoginPage')).toBeTruthy();
        expect(screen.findByRole('button')).toBeTruthy();      
        
    })

    test('debe de llamar el setUser cuando se hace click en el botón', () => { 
        
        render(
            <UserContext.Provider value={{user, setUser: setUserMock }}>
                <LoginPage />
            </UserContext.Provider>
        );
        const setUserButton = screen.getByRole('button');
        fireEvent.click(setUserButton);
        expect(setUserMock).toHaveBeenCalledWith({id: 123, name: 'Edward', email: 'edward.perdomo@outlook.com'});
    });
})