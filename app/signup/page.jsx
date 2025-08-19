'use client';
import { useState } from 'react';
import Link from 'next/link';
import { FaGoogle, FaFacebookF } from 'react-icons/fa';
import '../../public/css/signup.css';
import {
    signUpWithEmail,
    signInWithGoogle,
    signInWithFacebook,
} from '@/lib/db';

export default function SignupPage() {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    // Email/Password Signup
    const handleEmailSignup = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');
        try {
            const user = await signUpWithEmail(email, password);
            console.log("Signup Success:", user);
            alert(`Welcome ${fullName || user.email}! 🎉`);
            // TODO: Redirect to dashboard or home
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    // Google Signup
    const handleGoogleSignup = async () => {
        try {
            const user = await signInWithGoogle();
            console.log("Google Login Success:", user);
            alert(`Welcome ${user.displayName}! 🎉`);
        } catch (err) {
            console.error(err);
            setError("Google sign-in failed");
        }
    };

    // Facebook Signup
    const handleFacebookSignup = async () => {
        try {
            const user = await signInWithFacebook();
            console.log("Facebook Login Success:", user);
            alert(`Welcome ${user.displayName}! 🎉`);
        } catch (err) {
            console.error(err);
            setError("Facebook sign-in failed");
        }
    };

    return (
        <div className="login-container">
            <div className="login-box">
                <h2 className="login-title">Create Account ✨</h2>
                <p className="login-subtitle">
                    Join <span className="highlight">eduShala</span> and start your learning journey
                </p>

                {/* Signup Form */}
                <form className="login-form" onSubmit={handleEmailSignup}>
                    <input
                        type="text"
                        placeholder="Full Name"
                        className="login-input"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        required
                    />
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
                        {loading ? "Creating..." : "Sign Up"}
                    </button>
                </form>

                {error && <p className="error-text">{error}</p>}

                <div className="divider">or sign up with</div>

                {/* Social Login Buttons */}
                <div className="social-login">
                    <button
                        className="social-btn google"
                        onClick={handleGoogleSignup}
                    >
                        <FaGoogle className="icon" /> Google
                    </button>
                    <button
                        className="social-btn facebook"
                        onClick={handleFacebookSignup}
                    >
                        <FaFacebookF className="icon" /> Facebook
                    </button>
                </div>

                <p className="login-footer">
                    Already have an account?{" "}
                    <Link href="/login" className="signup-link">Login</Link>
                </p>
            </div>
        </div>
    );
}
