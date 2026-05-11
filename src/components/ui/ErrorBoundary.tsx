'use client';
import React, { Component, ErrorInfo, ReactNode } from 'react';
import styles from './ErrorBoundary.module.css';

interface Props {
  children?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.title}>Something went wrong</h2>
            <p className={styles.message}>
              We've encountered an unexpected error. Our team has been notified.
            </p>
            <button
              className={styles.button}
              onClick={() => this.setState({ hasError: false })}
            >
              Try again
            </button>
            <a href="/" className={styles.link}>
              Return Home
            </a>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}


export default ErrorBoundary;
