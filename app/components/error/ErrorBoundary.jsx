import { Component } from 'react';

/**
 * ErrorBoundary is a React component that catches JavaScript errors in its child component tree,
 * logs those errors, and displays a fallback UI instead of crashing the entire component tree.
 * 
 * @param {Object} props - The component props.
 * @param {React.ReactNode} props.fallback - The fallback UI to display when an error occurs.
 * @param {React.ReactNode} props.children - The child components to render.
 */
class ErrorBoundary extends Component {
    state = { hasError: false };

    static getDerivedStateFromError() {
        // Update state to indicate an error has occurred.
        return { hasError: true };
    }

    componentDidCatch(error, info) {
        // Log error information for debugging.
        console.error('Error occurred:', error);
        console.error('Error info:', info);
    }

    render() {
        if (this.state.hasError) {
            // Render fallback UI when an error has been caught.
            return this.props.fallback || <h1>Something went wrong. (ErrorBounadry)</h1>;
        }

        // Render child components when no error occurs.
        return this.props.children;
    }
}

export default ErrorBoundary;
