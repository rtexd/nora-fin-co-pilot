
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
          <p className="text-muted-foreground text-lg mt-4">
            your financial co-pilot
          </p>
        </div>

        <div className="flex-1"></div>

        <div className="mb-12">
          <h2 className="text-xl font-medium text-nora-yellow mb-6">
            May I use AI to guide you?
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            I will ask simple questions, generate a plan, 
            and protect your privacy. You can edit 
            everything later. Is that ok?
          </p>
        </div>
      </div>

      <div className="pb-8 space-y-4">
        <NoraButton 
          fullWidth 
          size="lg"
          onClick={() => navigate('/onboarding')}
        >
          Ok
        </NoraButton>
        
        <NoraButton 
          variant="ghost" 
          fullWidth
          onClick={() => navigate('/')}
        >
          Not now
        </NoraButton>
      </div>
    </NoraLayout>
  );
};
