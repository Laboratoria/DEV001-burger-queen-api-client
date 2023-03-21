import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '@testing-library/react'
import { Login } from '../src/components/Login'
import { useNavigate } from 'react-router-dom'
import { AuthProvider } from '../src/components/useAuth'

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => (jest.fn())
}))

describe('Login', () => {
  it('renders content', () => {
    render(<Login useNavigate={useNavigate} />, { wrapper: AuthProvider, useNavigate: () => ({}) })
    expect(screen.getByText('SIGN IN')).toBeInTheDocument()
  })
})
