import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { NoraLayout } from '../components/NoraLayout';
import { NoraLogo } from '../components/NoraLogo';
import { NoraInput } from '../components/NoraInput';
import { NoraButton } from '../components/NoraButton';
import { NoraTag } from '../components/NoraTag';

const goalOptions = [
  'Build an emergency fund',
  'Investment',
  'Organize spending',
  'Pay off debts',
  'Receive Inheritance',
  'Monthly Bills',
  'Habitual wallet',
  'Other'
];

export const GoalsPage = () => {
  const navigate = useNavigate();
  const [selectedGoals, setSelectedGoals] = useState<string[]>([]);
  const [customGoal, setCustomGoal] = useState('');
  const [targetAmount, setTargetAmount] = useState('');
  const [agreement, setAgreement] = useState('');

  const toggleGoal = (goal: string) => {
    setSelectedGoals(prev => 
      prev.includes(goal) 
        ? prev.filter(g => g !== goal)
        : [...prev, goal]
    );
  };

  const handleDone = () => {
    const goalsData = {
      selectedGoals,
      customGoal,
      targetAmount,
      agreement
    };
    localStorage.setItem('noraGoalsData', JSON.stringify(goalsData));
    navigate('/completion');
  };

  return (
    <NoraLayout showProgress currentStep={3} totalSteps={3}>
      <div className="py-6">
        <div className="mb-8">
          <NoraLogo size="sm" animated={false} />
        </div>

        <div className="space-y-8">
          <div>
            <h2 className="text-lg font-medium text-nora-yellow mb-6">
              1. What's your main financial goal right now?
            </h2>
            <div className="flex flex-wrap gap-3 mb-4">
              {goalOptions.map((goal) => (
                <NoraTag
                  key={goal}
                  selected={selectedGoals.includes(goal)}
                  onClick={() => toggleGoal(goal)}
                >
                  {goal}
                </NoraTag>
              ))}
            </div>
            <NoraInput
              placeholder="Write in your own words..."
              value={customGoal}
              onChange={(e) => setCustomGoal(e.target.value)}
            />
          </div>

          <div>
            <h2 className="text-lg font-medium text-nora-yellow mb-4">
              2. Do you have an amount/target in mind?
            </h2>
            <NoraInput
              placeholder="e.g., R$ 5,000 in 4 months"
              value={targetAmount}
              onChange={(e) => setTargetAmount(e.target.value)}
            />
            <p className="text-sm text-muted-foreground mt-2">
              If you're not sure, I'll help you estimate.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-medium text-nora-yellow mb-4">
              3. If you have something to agree:
            </h2>
            <NoraInput
              placeholder="Write in your own words..."
              value={agreement}
              onChange={(e) => setAgreement(e.target.value)}
            />
          </div>
        </div>
      </div>

      <div className="pb-8">
        <NoraButton 
          fullWidth 
          size="lg"
          onClick={handleDone}
          disabled={selectedGoals.length === 0 && !customGoal}
        >
          Done!
        </NoraButton>
      </div>
    </NoraLayout>
  );
};