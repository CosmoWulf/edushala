'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import '../../public/css/explore.css';

export default function Explore() {
  const [query, setQuery] = useState('');

  const colleges = [
    { id: 1, name: "Donald University", desc: "Top engineering institute with excellent placements.", img: "/assets/donald_university.jpg" },
    { id: 2, name: "Hovard University", desc: "Premier institute for MBBS & research.", img: "/assets/hovard.jpg" },
    { id: 3, name: "Savitri Bai College", desc: "Renowned for MBA & entrepreneurship programs.", img: "/assets/savitri_college.jpg" },
    { id: 4, name: "Makalu Institute", desc: "Known for liberal arts and humanities.", img: "/assets/makalu.jpg" },
  ];

  const filteredColleges = colleges.filter(c =>
    c.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <>
      {/* NAVBAR */}
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

      {/* HERO SECTION */}
      <section className="explore-hero">
        <h1>Find Your Dream College 🎓</h1>
        <p>Browse thousands of colleges, compare courses & apply with ease.</p>
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search for colleges..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button className="primary-btn">Search</button>
        </div>
      </section>

      {/* COLLEGES GRID */}
      <section className="college-grid">
        {filteredColleges.length > 0 ? (
          filteredColleges.map((college) => (
            <div key={college.id} className="college-card">
              {college.img ? (
                <Image
                  className="img-colleges"
                  src={college.img}
                  alt={college.name}
                  width={280}
                  height={160}
                />
              ) : (
                <div className="placeholder">No Image</div>
              )}
              <h3>{college.name}</h3>
              <p>{college.desc}</p>
              <button className="secondary-btn">View Details</button>
            </div>
          ))
        ) : (
          <p className="no-results">No colleges found matching your search.</p>
        )}
      </section>
    </>
  );
}
