'use client';
import { useState } from 'react';
import Link from 'next/link';
import '../../public/css/login.css';
import { useRouter } from 'next/navigation';
import { loginWithEmail, signInWithGoogle, signInWithFacebook } from '@/lib/db';
import { FaGoogle, FaFacebookF } from 'react-icons/fa';

export default function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const router = useRouter();

    // ✅ Email Login
    const handleLogin = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');
        try {
            const user = await loginWithEmail(email, password);
            alert(`Welcome back ${user.displayName || user.email} 🎉`);
            router.push('/dashboard'); // login ke baad redirect
        } catch (err) {
            console.error(err);
            setError('Invalid email or password ❌');
        } finally {
            setLoading(false);
        }
    };

    // ✅ Google Login
    const handleGoogleLogin = async () => {
        try {
            const user = await signInWithGoogle();
            alert(`Welcome back ${user.displayName} 🎉`);
            router.push('/dashboard');
        } catch (err) {
            console.error(err);
            setError('Google login failed ❌');
        }
    };

    // ✅ Facebook Login
    const handleFacebookLogin = async () => {
        try {
            const user = await signInWithFacebook();
            alert(`Welcome back ${user.displayName} 🎉`);
            router.push('/dashboard');
        } catch (err) {
            console.error(err);
            setError('Facebook login failed ❌');
        }
    };

    return (
        <div className="login-container">
            <div className="login-box">
                <h2 className="login-title">Welcome 👋</h2>
                <p className="login-subtitle">
                    Login to continue your journey with <span className="highlight">eduShala</span>
                </p>

                {/* Login Form */}
                <form className="login-form" onSubmit={handleLogin}>
                    <input
                        type="email"
                        placeholder="Email address"
                        className="login-input"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        className="login-input"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <button type="submit" className="login-submit" disabled={loading}>
                        {loading ? 'Logging in...' : 'Login'}
                    </button>
                </form>

                {error && <p className="error-text">{error}</p>}

                <div className="divider">or continue with</div>

                {/* Social Logins */}
                <div className="social-login">
                    <button className="social-btn google" onClick={handleGoogleLogin}>
                        <FaGoogle className="icon" /> Google
                    </button>
                    <button className="social-btn facebook" onClick={handleFacebookLogin}>
                        <FaFacebookF className="icon" /> Facebook
                    </button>
                </div>

                <p className="login-footer">
                    Don’t have an account?{" "}
                    <Link href="/signup" className="signup-link">Sign up</Link>
                </p>
            </div>
        </div>
    );
}
