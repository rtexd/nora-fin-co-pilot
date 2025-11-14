import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div style={{
      width: '402px',
      height: '874px',
      background: 'linear-gradient(180deg, rgba(0, 0, 0, 1) 57%, rgba(34, 34, 34, 1) 100%)',
      position: 'relative',
      margin: '0 auto',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <div className="text-center" style={{ padding: '0 32px' }}>
        <h1 className="text-4xl font-bold mb-4" style={{ color: '#FFFFFF' }}>404</h1>
        <p className="text-xl mb-4" style={{ color: '#B3B3B3' }}>Oops! Page not found</p>
        <a href="/" className="underline" style={{ 
          color: '#99CFFF',
          transition: 'color 0.3s'
        }}>
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
