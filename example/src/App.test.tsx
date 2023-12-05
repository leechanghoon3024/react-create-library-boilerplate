import React from 'react';
import { render, screen } from '@testing-library/react';
// import FileUploader from '../src/FileUploader';

test('renders learn react link', () => {
    // render(<FileUploader />);
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
});
