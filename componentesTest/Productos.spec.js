import React from 'react'

import Productos from '../src/components/Productos'
import { ProductContextProvider } from '../src/components/DataContext'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

describe('Productos', () => {
  it('renders content', () => {
    render(<Productos productName='Hamburguesa' />, { wrapper: ProductContextProvider })
    expect(screen.getByText('Hamburgesa')).toBeInTheDocument()
  })
})
