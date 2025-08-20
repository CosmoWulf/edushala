'use client';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import "../../../public/css/collegeDetails.css";

const colleges = [
    { id: "donald_university", name: "Donald University", desc: "Top engineering institute with excellent placements.", img: "/assets/donald_university.jpg" },
    { id: "hovard_uviversity", name: "Hovard University", desc: "Premier institute for MBBS & research.", img: "/assets/hovard.jpg" },
    { id: "savitri_college", name: "Savitri Bai College", desc: "Renowned for MBA & entrepreneurship programs.", img: "/assets/savitri_college.jpg" },
    { id: "makalu_inst", name: "Makalu Institute", desc: "Known for liberal arts and humanities.", img: "/assets/makalu.jpg" },
];

export default function CollegeDetails() {
    const params = useParams();
    const college = colleges.find(c => c.id.toString() === params.id);

    if (!college) return <h1>College not found</h1>;

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
            <section className="college-hero">
                <Image src={college.img} alt={college.name} width={900} height={400} className="college-hero-img" />
                <div className="overlay"></div>
                <div className="college-hero-text">
                    <h1>{college.name}</h1>
                    <p>{college.desc}</p>
                    <button className="primary-btn">Apply Now</button>
                </div>
            </section>

            {/* DETAILS SECTION */}
            <section className="college-details">
                <h2>About {college.name}</h2>
                <p>
                    {college.name} is one of the most prestigious institutes in India.
                    It is well known for academic excellence, world-class infrastructure,
                    and an amazing placement record. With top-notch faculty and vibrant
                    student culture, it provides a complete environment for growth.
                </p>

                <h3>Available Courses</h3>
                <ul>
                    <li>B.Tech in Computer Science</li>
                    <li>MBA in Finance & Marketing</li>
                    <li>BA in Liberal Arts</li>
                    <li>PhD in Research</li>
                </ul>
            </section>
        </>
    );
}
