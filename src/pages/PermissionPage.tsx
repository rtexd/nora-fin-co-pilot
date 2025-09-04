import { useNavigate } from 'react-router-dom';
import { NoraLayout } from '../components/NoraLayout';
import { NoraLogo } from '../components/NoraLogo';
import { NoraButton } from '../components/NoraButton';

export const PermissionPage = () => {
  const navigate = useNavigate();

  return (
    <NoraLayout showProgress currentStep={1} totalSteps={3}>
      <div className="flex-1 flex flex-col">
        <div className="mb-12 text-center">
          <NoraLogo size="md" animated={false} />
          <p 
            className="text-[#B3B3B3] font-inter font-normal leading-[1.2] tracking-[0.04em] text-center max-w-[226px] mx-auto mt-4"
            style={{
              fontSize: '19.051px',
              textShadow: '0px 0px 0.8283px rgba(0, 0, 0, 0.04), 0px 1.6566px 16.4833px rgba(32, 127, 251, 0.6), 0px -5.7982px 20.2107px rgba(43, 0, 255, 0.58)'
            }}
          >
            your financial co-pilot
          </p>
        </div>

        <div className="flex-1"></div>

        <div id="text-box" className="mb-12">
          <h2 className="text-xl font-medium text-[#F2A938] mb-[10px]">
            May I use AI to guide you?
          </h2>
          <p className="text-white font-inter font-normal text-base leading-[1.2]">
            I will ask simple questions, generate a plan, and protect your privacy. You can edit everything later. Is that ok?
          </p>
        </div>
      </div>

      <div className="pb-8 space-y-4">
        <NoraButton 
          fullWidth 
          size="md"
          onClick={() => navigate('/onboarding')}
        >
          Ok
        </NoraButton>
        
        <NoraButton 
          variant="outline-soft" 
          fullWidth
          size="md"
          onClick={() => navigate('/')}
        >
          Not now
        </NoraButton>
      </div>
    </NoraLayout>
  );
};