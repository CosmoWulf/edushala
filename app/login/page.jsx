'use client';
import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { loginWithEmail, signInWithGoogle } from '@/lib/db';
import '../../public/css/login.css';

export default function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const router = useRouter();

    const handleEmailLogin = async (e) => {
        e.preventDefault();
        try {
            await loginWithEmail(email, password);
            router.push("/dashboard");
        } catch (err) {
            alert(err.message);
        }
    };

    const handleGoogleLogin = async () => {
        try {
            const user = await signInWithGoogle();
            if (user.providerData.length === 1 && user.providerData[0].providerId === "google.com") {
                router.push("/set-password");
            } else {
                router.push("/dashboard");
            }
        } catch (err) {
            alert(err.message);
        }
    };

    return (
        <div className="login-container">
            <div className="login-box">
                <h2 className="login-title">Welcome 👋</h2>
                <p className="login-subtitle">
                    Login to continue your journey with <span className="highlight">eduShala</span>
                </p>

                <form onSubmit={handleEmailLogin} className="login-form">
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
                    <button type="submit" className="login-submit">Login</button>
                </form>

                <div className="divider">or</div>
                <button onClick={handleGoogleLogin} className="login-submit">Continue with Google</button>

                <p className="login-footer">
                    Don’t have an account?{" "}
                    <Link href="/signup" className="signup-link">Sign up</Link>
                </p>
            </div>
        </div>
    );
}
