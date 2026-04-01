import Link from 'next/link';
import './landing.css';

const LandingPage = () => {
  return (
    <div className="landing-container">
      <h1 className="landing-title">Welcome to StreamConnect</h1>
      <div className="landing-actions">
        <Link href="/home" className="landing-btn-primary">Go to Home</Link>
        <Link href="/creator" className="landing-btn-secondary">Explore Creators</Link>
      </div>
    </div>
  );
};

export default LandingPage;
