// @ts-ignore
import { useState } from 'react';
// @ts-ignore
import { useNavigate } from 'react-router-dom';
import React from 'react';
import { NoraInput } from '../components/NoraInput';
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

  const isFormValid = formData.name && formData.birthday && formData.income && formData.bankAmount;

  return (
    <div className="min-h-screen w-full max-w-[375px] mx-auto" style={{
      background: 'linear-gradient(180deg, rgba(0, 0, 0, 1) 57%, rgba(34, 34, 34, 1) 100%)'
    }}>
      {/* Header with NORA logo */}
      <div className="px-6 pt-8 pb-4">
        <div className="flex justify-center mb-6">
          <h1 
            className="font-normal leading-[1.2] text-center"
            style={{
              fontFamily: 'Montserrat Alternates',
              fontSize: '32px',
              background: 'radial-gradient(circle at 8% 59%, rgba(153, 207, 255, 1) 0%, rgba(119, 111, 255, 1) 32%, rgba(255, 133, 216, 1) 69%, rgba(255, 198, 43, 1) 100%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              textShadow: '0px 0px 0.9842px rgba(0, 0, 0, 0.04), 0px 1.9685px 19.5861px rgba(32, 127, 251, 0.6), 0px -6.8896px 24.0151px rgba(43, 0, 255, 0.58)'
            }}
          >
            NORA
          </h1>
        </div>
      </div>

      {/* Form Content */}
      <div className="px-6 pb-6" style={{ height: 'calc(100vh - 140px)', overflowY: 'auto' }}>
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
      <div className="px-6 pb-8">
        <button
          onClick={handleNext}
          disabled={!isFormValid}
          className="w-full h-12 rounded-full font-inter font-semibold text-base text-white transition-all duration-300"
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
    </div>
  );
};