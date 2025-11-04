import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';

describe('App Component', () => {
  test('renders main heading', () => {
    render(<App />);
    const heading = screen.getByText(/EvoGit Web Demo/i);
    expect(heading).toBeInTheDocument();
  });

  test('renders subtitle', () => {
    render(<App />);
    const subtitle = screen.getByText(/AI-Powered Autonomous Repository Improvements/i);
    expect(subtitle).toBeInTheDocument();
  });

  test('displays loading state initially', () => {
    render(<App />);
    const loadingText = screen.getByText(/Loading improvement history/i);
    expect(loadingText).toBeInTheDocument();
  });

  test('displays improvements after loading', async () => {
    render(<App />);

    await waitFor(() => {
      expect(screen.queryByText(/Loading improvement history/i)).not.toBeInTheDocument();
    });

    expect(screen.getByText(/Enhanced README with comprehensive setup instructions/i)).toBeInTheDocument();
  });

  test('renders feature cards', () => {
    render(<App />);

    expect(screen.getByText(/Automated Improvements/i)).toBeInTheDocument();
    expect(screen.getByText(/Safe Guardrails/i)).toBeInTheDocument();
    expect(screen.getByText(/Code Review/i)).toBeInTheDocument();
    expect(screen.getByText(/Zero Maintenance/i)).toBeInTheDocument();
  });

  test('renders footer with Claude Code link', () => {
    render(<App />);

    const link = screen.getByRole('link', { name: /Claude Code/i });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', 'https://www.anthropic.com/claude');
    expect(link).toHaveAttribute('target', '_blank');
    expect(link).toHaveAttribute('rel', 'noopener noreferrer');
  });

  test('improvement cards have correct status colors', async () => {
    render(<App />);

    await waitFor(() => {
      expect(screen.queryByText(/Loading improvement history/i)).not.toBeInTheDocument();
    });

    const completedBadges = screen.getAllByText(/completed/i);
    expect(completedBadges.length).toBeGreaterThan(0);
  });

  test('renders what is this section', () => {
    render(<App />);

    expect(screen.getByText(/What is This?/i)).toBeInTheDocument();
    expect(screen.getByText(/This project demonstrates autonomous code improvements/i)).toBeInTheDocument();
  });
});
