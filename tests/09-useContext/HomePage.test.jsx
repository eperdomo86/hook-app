const { render, screen } = require("@testing-library/react");
const { UserContext } = require("../../src/09-useContext/context/UserContext");
const { HomePage } = require("../../src/09-useContext/HomePage");

describe('Pruebas en <HomePage />', () => { 
    
    const user = {
        id: 1,
        name: 'Edward'
    }

    test('debe de mostrar el componente sin el usuario', () => { 
        
        render(
            <UserContext.Provider value={{user: null}}>
                <HomePage />
            </UserContext.Provider>
           
        );
        const preTag = screen.getByLabelText('pre');
        expect( preTag.innerHTML ).toBe('null');
        
    }); 

    test('debe de mostrar el componente con el usuario', () => { 
        
        render(
            <UserContext.Provider value={{user}}>
                <HomePage />
            </UserContext.Provider>
           
        );
        const preTag = screen.getByLabelText('pre');
        expect( JSON.parse(preTag.innerHTML) ).toEqual(user);
        
    }); 

});