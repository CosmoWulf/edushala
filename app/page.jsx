'use client';
import Image from 'next/image';
import Link from 'next/link';
import '../public/css/styles.css';

export default function Home() {
  return (
    <>
      <nav>
        <div className="logo">
          <h1 className="logo-text">edu</h1>
          <h1 className="logo-shala">Shala</h1>
        </div>
        <ul className="nav-links">
          <Link href="/"><li>Home</li></Link>
          <li><a href="#">How it Works</a></li>
          <li><a href="#">Pricing</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
        <Link href="/login">
          <button className="login-btn">Login</button>
        </Link>
      </nav>

      <section className="hero">
        <div className="hero-left">
          <h1>Your Journey to the Right College Starts Here 🎓</h1>
          <p>
            Discover top colleges, compare courses, apply online and secure your future with ease.
          </p>
          <div className="hero-btns">
            <Link href="/signup">
              <button className="primary-btn">Get Started</button>
            </Link>
            <Link href="/explore">
              <button className="secondary-btn">Explore Colleges</button>
            </Link>
          </div>
        </div>

        <div className="hero-right">
          <Image
            src="/assets/illustration.jpg"
            alt="College Student"
            width={500}
            height={500}
            priority
          />
        </div>
      </section>
    </>
  );
}
