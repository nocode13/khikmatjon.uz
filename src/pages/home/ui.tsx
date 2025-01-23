import './ui.css';

export const HomePage: React.FC = () => {
  return (
    <main className="main">
      <h1 className="title">
        <div>Khikm</div>
        <div>atj</div>
        <div>on</div>
      </h1>
      <svg className="circle" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" className="stop1" />
            <stop offset="100%" className="stop2" />
          </linearGradient>
        </defs>
        <circle cx="50" cy="50" r="40" fill="url(#gradient)" />
      </svg>
    </main>
  );
};
