import '@testing-library/jest-dom/vitest';

import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';

import Greeting from './Greeting';
import React from 'react';

describe('Greeting', () => {
  it('renders a default greeting', () => {
    render(<Greeting />);
    expect(screen.getByText('Hello, World!')).toBeInTheDocument();
  });

  it('renders greeting with a name', () => {
    render(<Greeting name={'Inga'} />);
    expect(screen.getByText('Hello, Inga!')).toBeInTheDocument();
  });
});
