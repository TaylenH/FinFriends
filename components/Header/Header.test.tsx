import { render, screen} from '@testing-library/react';
import Header from './Header';

/***
 * @description - test for render
 */
describe("Render test", () => {
    it("renders", () => {
        render(<Header />);
        expect(screen.getByText('News')).toBeInTheDocument();
    })
})