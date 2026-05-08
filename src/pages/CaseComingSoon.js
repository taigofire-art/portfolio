import Nav from '../components/Nav';

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@300&family=DM+Sans:wght@400;500&display=swap');
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  :root { --ink: #1c2e4a; --bic-mid: #4a6080; --sketch: #8aa0bc; --border: #dde3ed; --paper: #f5f7fa; }
  body { font-family: 'DM Sans', sans-serif; background: #fff; }
  .cs-wrap {
    margin-top: 64px; min-height: calc(100vh - 64px);
    display: flex; align-items: center; justify-content: center;
    flex-direction: column; gap: 32px; padding: 48px 24px;
    background: var(--paper);
  }
  .cs-badge {
    font-size: 11px; font-weight: 500; color: var(--bic-mid);
    text-transform: uppercase; letter-spacing: 0.14em;
    background: #fff; border: 0.5px solid var(--border);
    border-radius: 20px; padding: 5px 16px;
  }
  .cs-title {
    font-family: 'Playfair Display', serif;
    font-weight: 300; font-size: clamp(28px, 4vw, 48px);
    color: var(--ink); line-height: 1.15; text-align: center;
    letter-spacing: -0.02em; max-width: 600px;
  }
  .cs-sub {
    font-size: 14px; color: var(--bic-mid);
    text-align: center; letter-spacing: 0.02em;
  }
  .cs-msg {
    font-size: 15px; color: var(--bic-mid);
    text-align: center; line-height: 1.7; max-width: 440px;
  }
  .cs-nav {
    display: flex; gap: 16px; flex-wrap: wrap; justify-content: center;
    margin-top: 16px;
  }
  .cs-nav a {
    display: inline-flex; align-items: center; gap: 6px;
    font-size: 13px; color: var(--bic-mid); text-decoration: none;
    border: 0.5px solid var(--border); border-radius: 8px;
    padding: 9px 18px; background: #fff; transition: all 0.2s;
  }
  .cs-nav a:hover { color: var(--ink); border-color: var(--sketch); }
  .cs-nav a.primary {
    background: var(--ink); color: #e8eef5; border-color: var(--ink);
  }
  .cs-nav a.primary:hover { opacity: 0.85; }
  .cs-sketch { opacity: 0.25; margin: 8px 0; }
`;

export default function CaseComingSoon({ title, subtitle, prev, prevTitle, next, nextTitle }) {
  return (
    <>
      <style>{styles}</style>
      <Nav />
      <div className="cs-wrap">
        <span className="cs-badge">Em construção</span>
        <svg className="cs-sketch" width="80" height="80" viewBox="0 0 80 80" fill="none">
          <rect x="8" y="16" width="64" height="46" rx="4" stroke="#1c2e4a" strokeWidth="1.5" fill="none"/>
          <line x1="18" y1="32" x2="62" y2="32" stroke="#1c2e4a" strokeWidth="1"/>
          <line x1="18" y1="42" x2="50" y2="42" stroke="#1c2e4a" strokeWidth="1" strokeDasharray="4 3"/>
          <line x1="18" y1="52" x2="40" y2="52" stroke="#1c2e4a" strokeWidth="1" strokeDasharray="4 3"/>
          <circle cx="56" cy="52" r="8" stroke="#1c2e4a" strokeWidth="1" fill="none"/>
          <line x1="62" y1="58" x2="68" y2="64" stroke="#1c2e4a" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
        <h1 className="cs-title">{title}</h1>
        <p className="cs-sub">{subtitle}</p>
        <p className="cs-msg">
          Este case está sendo documentado e estará disponível em breve.
          Enquanto isso, confira os outros cases ou entre em contato.
        </p>
        <div className="cs-nav">
          {prev && (
            <a href={prev}>
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M11 7H3M6 10l-3-3 3-3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              {prevTitle}
            </a>
          )}
          <a href="/" className="primary">Ver todos os cases</a>
          {next && next !== '/' && (
            <a href={next}>
              {nextTitle}
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          )}
        </div>
      </div>
    </>
  );
}
