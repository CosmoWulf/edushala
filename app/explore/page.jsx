'use client';
import Image from 'next/image';
import Link from 'next/link';
import '../../public/css/explore.css';

export default function ExplorePage() {
  return (
    <>
      <nav>
        <div className="logo">
          <h1 className="logo-text">edu</h1>
          <h1 className="logo-shala">Shala</h1>
        </div>
        <ul className="nav-links">
          <Link href="/"><li>Home</li></Link>
          <Link href="/explore"><li id='explore'>Explore</li></Link>
          <li><a href="#">Contact</a></li>
        </ul>
        <Link href="/login">
          <button className="login-btn">Login</button>
        </Link>
      </nav>
      <section className="collage-explorer">
        <div className="search-division">
          <h1>Explore you dream college here right now! </h1>
        </div>
      </section>
    </>
  );
}
