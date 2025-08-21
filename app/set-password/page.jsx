'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { linkGoogleWithPassword } from '@/lib/db';
import '../../public/css/login.css';

export default function SetPasswordPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const router = useRouter();

    const handleSetPassword = async (e) => {
        e.preventDefault();
        try {
            await linkGoogleWithPassword(email, password);
            alert("Password set successfully ✅");
            router.push("/dashboard");
        } catch (error) {
            alert(error.message);
        }
    };

    return (
        <div className="login-container">
            <div className="login-box">
                <h2 className="login-title">Set Your Password 🔑</h2>
                <form onSubmit={handleSetPassword} className="login-form">
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
                        placeholder="New Password"
                        className="login-input"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <button type="submit" className="login-submit">Set Password</button>
                </form>
            </div>
        </div>
    );
}
