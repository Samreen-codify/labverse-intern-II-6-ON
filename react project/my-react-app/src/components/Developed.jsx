import React from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";
import "../developedby.css";
import "../index.css";

import samreenImg from "../assets/images/inst 1.png";
import maidaImg from "../assets/images/inst 2.png";

function Developed() {
  return (
    <>
      <NavBar />
      <header className="page-header">
        <h1>Developed by</h1>
        <p>Home / Developer Profile</p>
      </header>
      <section className="developers" style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'flex-start',
        gap: '2.5rem',
        padding: '40px 0',
        background: 'linear-gradient(120deg, #eafcff 0%, #f9f9f9 100%)',
        minHeight: '60vh',
        flexWrap: 'nowrap',
      }}>
        {/* Samreen */}
        <div className="developer-card" style={{
          background: '#fff',
          borderRadius: '18px',
          boxShadow: '0 4px 24px rgba(0,0,0,0.10)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          width: '320px',
          padding: '1.5rem 1.2rem 1.2rem 1.2rem',
          transition: 'transform 0.2s',
          position: 'relative',
        }}>
          <div className="developer-image" style={{
            display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '-1rem',
          }}>
            <img src={samreenImg} alt="Samreen" style={{
              width: '110px', height: '110px', borderRadius: '50%', objectFit: 'cover', boxShadow: '0 2px 12px #00bcd455', marginBottom: '0.7rem', border: '4px solid #eafcff',
            }} />
            <h2 style={{ fontSize: 24, fontWeight: 700, margin: 0, color: '#07415a' }}>Samreen</h2>
            <p style={{ color: '#00bcd4', fontWeight: 600, margin: 0 }}>Back-end Specialist</p>
          </div>
          <div className="developer-info" style={{ textAlign: 'center' }}>
            <h3 style={{ fontSize: 19, color: '#0097a7', marginBottom: 8 }}>About Samreen</h3>
            <p style={{ color: '#222', fontSize: 16, marginBottom: 18 }}>Hi, I'm Samreen, a backend enthusiast specializing in databases and server-side applications. I enjoy making websites powerful and secure from behind the scenes.</p>
            <div className="developer-links" style={{ display: 'flex', justifyContent: 'center', gap: '1.2rem' }}>
              <a href="#" style={{ color: '#07415a', fontWeight: 600, textDecoration: 'none', fontSize: 16 }}>LinkedIn</a>
              <a href="#" style={{ color: '#07415a', fontWeight: 600, textDecoration: 'none', fontSize: 16 }}>Email</a>
              <a href="#" style={{ color: '#07415a', fontWeight: 600, textDecoration: 'none', fontSize: 16 }}>GitHub</a>
            </div>
          </div>
        </div>
        {/* Maida */}
        <div className="developer-card" style={{
          background: '#fff',
          borderRadius: '18px',
          boxShadow: '0 4px 24px rgba(0,0,0,0.10)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          width: '320px',
          padding: '1.5rem 1.2rem 1.2rem 1.2rem',
          transition: 'transform 0.2s',
          position: 'relative',
        }}>
          <div className="developer-image" style={{
            display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '-1rem',
          }}>
            <img src={maidaImg} alt="Maida" style={{
              width: '110px', height: '110px', borderRadius: '50%', objectFit: 'cover', boxShadow: '0 2px 12px #00bcd455', marginBottom: '0.7rem', border: '4px solid #eafcff',
            }} />
            <h2 style={{ fontSize: 24, fontWeight: 700, margin: 0, color: '#07415a' }}>Maida</h2>
            <p style={{ color: '#00bcd4', fontWeight: 600, margin: 0 }}>Full-Stack Developer</p>
          </div>
          <div className="developer-info" style={{ textAlign: 'center' }}>
            <h3 style={{ fontSize: 19, color: '#0097a7', marginBottom: 8 }}>About Maida</h3>
            <p style={{ color: '#222', fontSize: 16, marginBottom: 18 }}>Hello, I'm Maida, a full-stack developer with skills in both front-end and back-end technologies. I am passionate about building complete and scalable web solutions.</p>
            <div className="developer-links" style={{ display: 'flex', justifyContent: 'center', gap: '1.2rem' }}>
              <a href="#" style={{ color: '#07415a', fontWeight: 600, textDecoration: 'none', fontSize: 16 }}>LinkedIn</a>
              <a href="#" style={{ color: '#07415a', fontWeight: 600, textDecoration: 'none', fontSize: 16 }}>Email</a>
              <a href="#" style={{ color: '#07415a', fontWeight: 600, textDecoration: 'none', fontSize: 16 }}>GitHub</a>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Developed;