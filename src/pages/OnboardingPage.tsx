import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { NoraLayout } from '../components/NoraLayout';
import { NoraLogo } from '../components/NoraLogo';
import { NoraInput } from '../components/NoraInput';
import { NoraButton } from '../components/NoraButton';
import { NoraTag } from '../components/NoraTag';

export const OnboardingPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    birthday: '',
    income: '',
    incomeFrequency: 'monthly',
    bankAccount: '',
    bankAmount: '',
    job: ''
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleNext = () => {
    // Store form data (you could use localStorage, context, or state management)
    localStorage.setItem('noraOnboardingData', JSON.stringify(formData));
    navigate('/goals');
  };

  return (
    <NoraLayout showProgress currentStep={2} totalSteps={3}>
      <div className="py-6">
        <div className="mb-8">
          <NoraLogo size="sm" animated={false} />
        </div>

        <div className="space-y-6">
          <NoraInput
            label="What is your name?"
            placeholder="Full name"
            value={formData.name}
            onChange={(e) => handleInputChange('name', e.target.value)}
            required
          />

          <NoraInput
            label="Your birthday"
            placeholder="Month / day / year"
            value={formData.birthday}
            onChange={(e) => handleInputChange('birthday', e.target.value)}
            required
          />

          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              How much do you receive? <span className="text-destructive">*</span>
            </label>
            <NoraInput
              placeholder="R$ Monthly"
              value={formData.income}
              onChange={(e) => handleInputChange('income', e.target.value)}
              className="mb-3"
            />
            <div className="flex gap-3">
              <NoraTag
                selected={formData.incomeFrequency === 'monthly'}
                onClick={() => handleInputChange('incomeFrequency', 'monthly')}
              >
                R$ Monthly
              </NoraTag>
              <NoraTag
                selected={formData.incomeFrequency === 'weekly'}
                onClick={() => handleInputChange('incomeFrequency', 'weekly')}
              >
                R$ Weekly
              </NoraTag>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              How much money do you have in your bank account? <span className="text-destructive">*</span>
            </label>
            <NoraInput
              placeholder="Institution"
              value={formData.bankAccount}
              onChange={(e) => handleInputChange('bankAccount', e.target.value)}
              className="mb-3"
            />
            <NoraInput
              placeholder="e.g., $1,000*"
              value={formData.bankAmount}
              onChange={(e) => handleInputChange('bankAmount', e.target.value)}
            />
          </div>

          <NoraInput
            label="What do you do? Tell me about your job"
            placeholder="Write in your own words..."
            value={formData.job}
            onChange={(e) => handleInputChange('job', e.target.value)}
            required
          />
        </div>
      </div>

      <div className="pb-8">
        <NoraButton 
          fullWidth 
          size="lg"
          onClick={handleNext}
          disabled={!formData.name || !formData.birthday || !formData.income || !formData.job}
        >
          Next
        </NoraButton>
      </div>
    </NoraLayout>
  );
};