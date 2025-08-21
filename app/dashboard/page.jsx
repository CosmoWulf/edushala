'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { auth, logout } from '@/lib/db';
import { onAuthStateChanged } from "firebase/auth";
import '../../public/css/dashboard.css';

export default function DashboardPage() {
    const [user, setUser] = useState(null);
    const router = useRouter();

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) {
                setUser(currentUser);
            } else {
                router.push("/login");
            }
        });
        return () => unsubscribe();
    }, [router]);

    const handleLogout = async () => {
        await logout();
        router.push("/login");
    };

    if (!user) {
        return <p className="loading">Loading...</p>;
    }

    return (
        <div className="dashboard-container">
            {/* Sidebar */}
            <aside className="sidebar">
                <h2 className="logo">eduShala</h2>
                <ul className="menu">
                    <li>🏠 Home</li>
                    <li>📚 Courses</li>
                    <li>👤 Profile</li>
                </ul>
                <button className="logout-btn" onClick={handleLogout}>
                    🚪 Logout
                </button>
            </aside>

            {/* Main Content */}
            <main className="main-content">
                <h1>Welcome, {user.displayName || user.email} 👋</h1>
                <p>Here’s your personalized dashboard.</p>

                <div className="cards">
                    <div className="card">📚 Your Courses</div>
                    <div className="card">⭐ Progress</div>
                    <div className="card">🎯 Achievements</div>
                </div>
            </main>
        </div>
    );
}
