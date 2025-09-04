import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { NoraInput } from '../components/NoraInput';
import { NoraButton } from '../components/NoraButton';
import { NoraTag } from '../components/NoraTag';
import { NoraLayout } from '../components/NoraLayout';

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

  const isFormValid = formData.name && formData.birthday && formData.income && formData.bankAmount;

  return (
    <NoraLayout showProgress currentStep={2} totalSteps={3}>
      {/* Form Content */}
      <div className="flex-1 overflow-y-auto">
        <div className="space-y-6">
          {/* Name Field */}
          <div className="space-y-2">
            <label className="block text-white font-inter font-medium text-sm">
              What is your name?*
            </label>
            <div className="relative">
              <input
                type="text"
                placeholder="Full name"
                value={formData.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
                className="w-full h-12 px-4 bg-transparent border border-[#333333] rounded-2xl text-white placeholder-[#666666] font-inter text-sm focus:outline-none focus:border-[#99CFFF]"
              />
            </div>
          </div>

          {/* Birthday Field */}
          <div className="space-y-2">
            <label className="block text-white font-inter font-medium text-sm">
              Your birthday*
            </label>
            <div className="relative">
              <input
                type="text"
                placeholder="Select"
                value={formData.birthday}
                onChange={(e) => handleInputChange('birthday', e.target.value)}
                className="w-full h-12 px-4 bg-transparent border border-[#333333] rounded-2xl text-white placeholder-[#666666] font-inter text-sm focus:outline-none focus:border-[#99CFFF]"
              />
            </div>
          </div>

          {/* Income Field */}
          <div className="space-y-2">
            <label className="block text-white font-inter font-medium text-sm">
              How much do you receive?*
            </label>
            <div className="flex gap-3">
              <div className="flex-1">
                <input
                  type="text"
                  placeholder="R$ Weekly"
                  value={formData.incomeFrequency === 'weekly' ? formData.income : ''}
                  onChange={(e) => {
                    handleInputChange('income', e.target.value);
                    handleInputChange('incomeFrequency', 'weekly');
                  }}
                  className="w-full h-12 px-4 bg-transparent border border-[#333333] rounded-2xl text-white placeholder-[#666666] font-inter text-sm focus:outline-none focus:border-[#99CFFF]"
                />
              </div>
              <div className="flex-1">
                <input
                  type="text"
                  placeholder="R$ Monthly"
                  value={formData.incomeFrequency === 'monthly' ? formData.income : ''}
                  onChange={(e) => {
                    handleInputChange('income', e.target.value);
                    handleInputChange('incomeFrequency', 'monthly');
                  }}
                  className="w-full h-12 px-4 bg-transparent border border-[#333333] rounded-2xl text-white placeholder-[#666666] font-inter text-sm focus:outline-none focus:border-[#99CFFF]"
                />
              </div>
            </div>
          </div>

          {/* Bank Account Field */}
          <div className="space-y-2">
            <label className="block text-white font-inter font-medium text-sm">
              How much money do you have in your bank account?*
            </label>
            <div className="flex gap-3">
              <div className="flex-1">
                <input
                  type="text"
                  placeholder="e.g., $1,000*"
                  value={formData.bankAmount}
                  onChange={(e) => handleInputChange('bankAmount', e.target.value)}
                  className="w-full h-12 px-4 bg-transparent border border-[#333333] rounded-2xl text-white placeholder-[#666666] font-inter text-sm focus:outline-none focus:border-[#99CFFF]"
                />
              </div>
              <div className="flex-1">
                <input
                  type="text"
                  placeholder="Institution"
                  value={formData.bankAccount}
                  onChange={(e) => handleInputChange('bankAccount', e.target.value)}
                  className="w-full h-12 px-4 bg-transparent border border-[#333333] rounded-2xl text-white placeholder-[#666666] font-inter text-sm focus:outline-none focus:border-[#99CFFF]"
                />
              </div>
            </div>
          </div>

          {/* Profession Field */}
          <div className="space-y-2">
            <label className="block text-white font-inter font-medium text-sm">
              What is your profession?
            </label>
            <div className="relative">
              <input
                type="text"
                placeholder="Write in your own words…"
                value={formData.job}
                onChange={(e) => handleInputChange('job', e.target.value)}
                className="w-full h-12 px-4 bg-transparent border border-[#333333] rounded-2xl text-white placeholder-[#666666] font-inter text-sm focus:outline-none focus:border-[#99CFFF]"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Next Button */}
      <div>
        <button
          onClick={handleNext}
          disabled={!isFormValid}
          className="w-full h-[52px] rounded-[2222px] font-inter font-semibold text-base text-white transition-all duration-300 flex items-center justify-center leading-[1.5em]"
          style={{
            background: isFormValid 
              ? 'linear-gradient(90deg, rgba(153, 206, 252, 1) 0%, rgba(167, 89, 211, 1) 28%, rgba(216, 80, 91, 1) 75%, rgba(255, 198, 43, 1) 100%)'
              : 'linear-gradient(90deg, rgba(153, 206, 252, 1) 0%, rgba(167, 89, 211, 1) 28%, rgba(216, 80, 91, 1) 75%, rgba(255, 198, 43, 1) 100%)',
            opacity: isFormValid ? 1 : 0.2,
            border: '1px solid transparent',
            cursor: isFormValid ? 'pointer' : 'not-allowed'
          }}
        >
          Next
        </button>
      </div>
    </NoraLayout>
  );
};
