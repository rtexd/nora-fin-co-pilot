
import { useNavigate } from 'react-router-dom';
import React from 'react';

export const PermissionPage = () => {
  const navigate = useNavigate();
  
  return (
    <div className="w-full max-w-[402px] mx-auto" style={{
      background: 'linear-gradient(180deg, rgba(0, 0, 0, 1) 57%, rgba(34, 34, 34, 1) 100%)',
      height: '874px',
      position: 'relative'
    }}>
      {/* Progress Bar */}
      <div style={{ position: 'absolute', left: '32px', top: '40px', width: '338px', height: '6.46px' }}>
        <div style={{ position: 'absolute', left: 0, top: 0, width: 'calc((338px - 16px)/3)', height: '6.46px', background: '#99CFFF', borderRadius: '8.61px' }}></div>
        <div style={{ position: 'absolute', left: 'calc(((338px - 16px)/3) + 8px)', top: 0, width: 'calc((338px - 16px)/3)', height: '6.46px', background: '#666666', borderRadius: '8.61px' }}></div>
        <div style={{ position: 'absolute', left: 'calc(2 * (((338px - 16px)/3) + 8px))', top: 0, width: 'calc((338px - 16px)/3)', height: '6.46px', background: '#666666', borderRadius: '8.61px' }}></div>
      </div>

      {/* Main Content */}
      <div style={{ position: 'absolute', left: '32px', top: '210px', bottom: '40px', width: '338px', display: 'flex', justifyContent: 'center' }}>
        <div style={{ width: '338px', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '264px', padding: '0px' }}>
          {/* Logo Section */}
          <div style={{ width: '338px', height: '143px' }}>
            <div style={{ width: '338px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <div style={{ width: '338px', display: 'flex', flexDirection: 'column', padding: '0px 46px 0px 49px' }}>
                <p 
                  style={{
                    fontFamily: 'SF Pro Display, SF Pro Text, system-ui, sans-serif',
                    fontWeight: 400,
                    fontSize: '21.397px',
                    lineHeight: '1.2em',
                    letterSpacing: '0.05em',
                    textAlign: 'left',
                    color: '#EDEDED',
                    textShadow: '0px 0px 0.8916px rgba(0, 0, 0, 0.04), 0px 1.7831px 17.7419px rgba(32, 127, 251, 0.6), 0px -6.2409px 21.7539px rgba(43, 0, 255, 0.58)'
                  }}
                >
                  Hi, I am
                </p>
                <h1 
                  style={{
                    fontFamily: 'Montserrat Alternates',
                    fontWeight: 400,
                    fontSize: '76.995px',
                    lineHeight: '1.2em',
                    textAlign: 'left',
                    background: 'radial-gradient(circle at 8% 59%, rgba(153, 207, 255, 1) 0%, rgba(119, 111, 255, 1) 32%, rgba(255, 133, 216, 1) 69%, rgba(255, 198, 43, 1) 100%)',
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    textShadow: '0px 0px 1.0594px rgba(0, 0, 0, 0.04), 0px 2.1188px 21.0816px rgba(32, 127, 251, 0.6), 0px -7.4156px 25.8488px rgba(43, 0, 255, 0.58)'
                  }}
                >
                  NORA
                </h1>
              </div>
              <p 
                style={{
                  fontFamily: 'SF Pro Display, SF Pro Text, system-ui, sans-serif',
                  fontWeight: 400,
                  fontSize: '20.506px',
                  lineHeight: '1.2em',
                  letterSpacing: '0.05em',
                  textAlign: 'center',
                  color: '#FFFFFF',
                  width: '234px',
                  textShadow: '0px 0px 0.8916px rgba(0, 0, 0, 0.04), 0px 1.7831px 17.7419px rgba(32, 127, 251, 0.6), 0px -6.2409px 21.7539px rgba(43, 0, 255, 0.58)'
                }}
              >
                your financial co-pilot
              </p>
            </div>
          </div>

          {/* Bottom Section */}
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', flex: 1 }}>
            <div style={{ width: '338px', display: 'flex', flexDirection: 'column', gap: '24px', alignSelf: 'flex-end' }}>
              {/* Text Bottom */}
              <div style={{ width: '338px', minHeight: '62px' }}>
                <p style={{
                  margin: 0,
                  fontFamily: 'SF Pro Display, SF Pro Text, system-ui, sans-serif',
                  fontWeight: 600,
                  fontSize: '17.222px',
                  lineHeight: '1.2em',
                  textAlign: 'left',
                  color: '#F2A938'
                }}>
                  May I use AI to guide you?
                </p>
                <p style={{
                  marginTop: '10px',
                  fontFamily: 'SF Pro Display, SF Pro Text, system-ui, sans-serif',
                  fontWeight: 400,
                  fontSize: '17.222px',
                  lineHeight: '1.2em',
                  textAlign: 'left',
                  color: '#FFFFFF'
                }}>
                  I will ask simple questions, generate a plan, and protect your privacy. You can edit everything later. Is that ok?
                </p>
              </div>
              
              {/* Button Group */}
              <div style={{ width: '338px', height: '120.06px', position: 'relative' }}>
                {/* Ok Button */}
                <button
                  onClick={() => navigate('/onboarding')}
                  style={{
                    position: 'absolute',
                    left: '0px',
                    top: '0px',
                    width: '338px',
                    height: '51px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: '2391.66px',
                    border: '1px solid #5856D6',
                    background: 'transparent',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'rgba(88, 86, 214, 0.1)';
                    e.currentTarget.style.transform = 'scale(1.02)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'transparent';
                    e.currentTarget.style.transform = 'scale(1)';
                  }}
                  onFocus={(e) => {
                    e.currentTarget.style.boxShadow = '0 0 0 2px rgba(88, 86, 214, 0.5)';
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: '10.764px',
                    padding: '4.305px 17.222px',
                    width: '338px',
                    height: '52px',
                    borderRadius: '238.951px'
                  }}>
                    <span style={{
                      width: '338px',
                      fontFamily: 'SF Pro Display, SF Pro Text, system-ui, sans-serif',
                      fontWeight: 600,
                      fontSize: '17.222px',
                      lineHeight: '1.5em',
                      textAlign: 'center',
                      color: '#FFFFFF'
                    }}>
                      Ok
                    </span>
                  </div>
                </button>
                
                {/* Not now Button */}
                <button
                  onClick={() => navigate('/')}
                  style={{
                    position: 'absolute',
                    left: '0px',
                    top: '68.4px',
                    width: '338px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: '2391.66px',
                    background: 'rgba(0, 0, 0, 0.2)',
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'rgba(0, 0, 0, 0.4)';
                    e.currentTarget.style.transform = 'scale(1.02)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'rgba(0, 0, 0, 0.2)';
                    e.currentTarget.style.transform = 'scale(1)';
                  }}
                  onFocus={(e) => {
                    e.currentTarget.style.boxShadow = '0 0 0 2px rgba(113, 113, 113, 0.5)';
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: '10.764px',
                    padding: '4.305px 17.222px',
                    height: '51.67px',
                    borderRadius: '238.951px'
                  }}>
                    <div style={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      gap: '8.611px'
                    }}>
                      <div style={{
                        display: 'flex',
                        justifyContent: 'center',
                        gap: '10.764px',
                        padding: '8.611px 0px'
                      }}>
                        <span style={{
                          fontFamily: 'Inter',
                          fontWeight: 600,
                          fontSize: '17.222px',
                          lineHeight: '1.5em',
                          textAlign: 'center',
                          color: '#717171'
                        }}>
                          Not now
                        </span>
                      </div>
                    </div>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
