'use client';
import { useRouter } from 'next/navigation';

const SundaySupplement = ({ photography }) => {
  const router = useRouter();
  return (
    <section className="page animated fadeIn">
      <div className="section-label" style={{ marginBottom: '18px' }}>
        <span className="section-label-rule"></span>
        <span className="section-label-text">Sunday Supplement &mdash; Arts & Leisure</span>
        <span className="section-label-rule"></span>
      </div>

      <div style={{ textAlign: 'center', marginBottom: '30px' }}>
        <button
          onClick={() => router.push('/')}
          style={{
            fontFamily: "'IM Fell English', serif",
            fontSize: '0.8rem',
            background: 'var(--ink)',
            color: 'var(--paper)',
            padding: '4px 12px',
            border: 'none',
            cursor: 'pointer',
            float: 'left'
          }}
        >
          &larr; Return to Front Page
        </button>
        <span className="kicker" style={{ clear: 'both', display: 'block', paddingTop: '10px' }}>{photography.title}</span>
        <h1 className="headline-main" style={{ fontSize: '3rem' }}>Through The Mobile Lens</h1>
        <p className="headline-deck">{photography.subtitle}</p>
        <div className="masthead-rule-thin" style={{ maxWidth: '400px', margin: '10px auto' }}></div>
      </div>

      <div className="col-grid col-grid-3">
        <div className="col">
          <p className="subhead">A Different Perspective</p>
          <p className="byline">Our Arts Correspondent</p>
          <p className="body-text">
            When not architecting decentralised systems, Abhijeet explores the interplay of light and shadow through his mobile camera. This supplement showcases the world as seen through his eyes.
          </p>
          <div className="letter" style={{ marginTop: '20px' }}>
            &ldquo;Photography, like coding, is about framing the world in a way that makes sense to me.&rdquo;
          </div>
        </div>
        <div className="col-divider"></div>
        <div className="col">
          <div className="photo-box">
            {photography.samples && photography.samples.length > 0 ? (
              <img src={photography.samples[0]} alt="Landscape Exhibit" style={{ width: '100%', display: 'block' }} />
            ) : (
              <div style={{ background: 'var(--paper-dark)', height: '300px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '4rem', filter: 'sepia(40%)' }}>
                &#128248;
              </div>
            )}
            <p className="photo-caption">{photography.samples && photography.samples.length > 0 ? 'Featured Exhibit &mdash; Light & Shadow Study' : 'Sample Landscape &mdash; [Awaiting high-resolution plates from the editorial board]'}</p>
          </div>
        </div>
        <div className="col-divider"></div>
        <div className="col">
          <p className="subhead-sm">Latest Exhibits</p>
          <p className="body-text">
            The developer maintains a curated gallery of his visual work on Instagram, documenting the daily beauty of Nashik and beyond.
          </p>
          <div style={{ textAlign: 'center', marginTop: '20px' }}>
            <a href={photography.instagram} target="_blank" rel="noreferrer" className="project-link" style={{ fontSize: '1rem' }}>View the Gallery &rarr;</a>
          </div>

          <div className="ornament-rule" style={{ marginTop: '40px' }}>
            <hr /><span>&#10022;</span><hr />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SundaySupplement;
