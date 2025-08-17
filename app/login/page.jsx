'use client';
import Link from 'next/link';
import '../../public/css/login.css';

export default function LoginPage() {
    return (
        <div className="login-container">
            <div className="login-box">
                <h2 className="login-title">Welcome 👋</h2>
                <p className="login-subtitle">
                    Login to continue your journey with <span className="highlight">eduShala</span>
                </p>

                <form className="login-form">
                    <input
                        type="email"
                        placeholder="Email address"
                        className="login-input"
                        required
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        className="login-input"
                        required
                    />
                    <button type="submit" className="login-submit">Login</button>
                </form>

                <p className="login-footer">
                    Don’t have an account?{" "}
                    <Link href="/signup" className="signup-link">Sign up</Link>
                </p>
            </div>
        </div>
    );
}
