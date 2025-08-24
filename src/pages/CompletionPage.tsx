import { useNavigate } from 'react-router-dom';
import { NoraLayout } from '../components/NoraLayout';
import { NoraLogo } from '../components/NoraLogo';
import { NoraButton } from '../components/NoraButton';

export const CompletionPage = () => {
  const navigate = useNavigate();

  return (
    <NoraLayout>
      <div className="flex-1 flex flex-col justify-center items-center">
        <div className="text-center">
          <NoraLogo size="lg" animated />
        </div>
      </div>

      <div className="pb-8">
        <NoraButton 
          fullWidth 
          size="lg"
          onClick={() => navigate('/chat')}
        >
          Great! Let's chat 💬
        </NoraButton>
      </div>
    </NoraLayout>
  );
};