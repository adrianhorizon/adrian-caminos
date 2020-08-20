import React from "react";
import App from '../routes/App';
import renderer from 'react-test-renderer';

jest.mock('react-dom', () => ({ render: jest.fn() }))

it('Create should App', () => {
    const app = renderer.create(<App />);
    expect(app).toMatchSnapshot();
});