import { Link } from 'react-router-dom';

export default function AboutUs() {
  return (
    <section className="about page">
      <Link to="/plants">← Plants</Link>
      <h1>About Paradise Nursery</h1>
      <p>Paradise Nursery makes it easy to discover healthy, beautiful houseplants for homes and offices.</p>
      <p>We select beginner-friendly plants and provide simple care information so every customer can grow with confidence.</p>
    </section>
  );
}