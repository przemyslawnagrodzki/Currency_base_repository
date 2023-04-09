import ResultBox from './ResultBox';
import '@testing-library/jest-dom/extend-expect';

describe('Component ResultBox', () => {

    it('should render without crashing', () => {

        const testCases = [
            { amount: '100', from: 'PLN', to: 'USD' },
            { amount: '20', from: 'PLN', to: 'USD' },
            { amount: '200', from: 'PLN', to: 'USD' },
            { amount: '345', from: 'PLN', to: 'USD' },

            { amount: '100', from: 'USD', to: 'PLN' },
            { amount: '997', from: 'USD', to: 'PLN' },
            { amount: '14', from: 'USD', to: 'PLN' },
            { amount: '1900', from: 'USD', to: 'PLN' }
        ];
        for (const testObj of testCases) {
            render(<ResultBox from={testObj.from} to={testObj.to} amount={testObj.amount} />);
        }
    })
    it('should render proper info about conversion when PLN -> USD', () => {
        render(<ResultBox from='PLN' to='USD' amount={100} />)
        const output = screen.getByTestId('output')
        expect(output).toHaveTextContent('PLN 100.00 = $28.57');
    })
    it('should render proper info about conversion when USD -> PLN', () => {
        render(<ResultBox from='USD' to='PLN' amount={100} />)
        const output = screen.getByTestId('output')
        expect(output).toHaveTextContent('$28.57 = PLN 100.00');
    })
    it('should render proper info about conversion when PLN -> PLN', () => {
        render(<ResultBox from='PLN' to='PLN' amount={100} />)
        const output = screen.getByTestId('output')
        expect(output).toHaveTextContent('PLN 100.00 = PLN 100.00');
    })
    it('should render text "Wrong value..." when the amount is negative', ()=> {
        render(<ResultBox from='PLN' to='USD' amount={-100} />)
        const output = screen.getByTestId('output')
        expect(output).toHaveTextContent('Wrong value...');
    })
})
