'use client';
import Link from 'next/link';
import { FaGoogle, FaFacebookF } from 'react-icons/fa';
import '../../public/css/signup.css';

export default function SignupPage() {
    return (
        <div className="login-container">
            <div className="login-box">
                <h2 className="login-title">Create Account ✨</h2>
                <p className="login-subtitle">
                    Join <span className="highlight">eduShala</span> and start your learning journey
                </p>

                {/* Signup Form */}
                <form className="login-form">
                    <input
                        type="text"
                        placeholder="Full Name"
                        className="login-input"
                        required
                    />
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
                    <button type="submit" className="login-submit">Sign Up</button>
                </form>

                <div className="divider">or sign up with</div>

                {/* Social Login Buttons */}
                <div className="social-login">
                    <button className="social-btn google">
                        <FaGoogle className="icon" /> Google
                    </button>
                    <button className="social-btn facebook">
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
