import { useNavigate } from 'react-router-dom';
import { NoraLayout } from '../components/NoraLayout';
import { NoraLogo } from '../components/NoraLogo';
import { NoraButton } from '../components/NoraButton';
export const WelcomePage = () => {
  const navigate = useNavigate();
  return <NoraLayout showProgress currentStep={1} totalSteps={3}>
      <div className="flex-1 flex flex-col justify-center items-center text-center">
        <div className="mb-8">
          <NoraLogo size="lg" animated />
          <p className="text-muted-foreground text-lg mt-4">
            your financial co-pilot
          </p>
        </div>

        <div className="mb-12">
          
          <h2 className="text-xl font-medium text-nora-yellow mb-2">
            In 90 seconds
          </h2>
          <p className="text-muted-foreground">
            I create a starter plan with you
          </p>
        </div>
      </div>

      <div className="pb-8 space-y-4">
        <NoraButton fullWidth size="lg" onClick={() => navigate('/permission')}>
          Get started
        </NoraButton>
        
        <NoraButton variant="ghost" fullWidth onClick={() => navigate('/how-it-works')}>
          How does the AI work?
        </NoraButton>
      </div>
    </NoraLayout>;
};