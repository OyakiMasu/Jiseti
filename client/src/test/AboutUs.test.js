import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import AboutUs from '../components/about';

test('renders the About Us page', () => {
    render(<AboutUs />);
    const headingElement = screen.getByText('About Us');
    expect(headingElement).toBeInTheDocument();
  });