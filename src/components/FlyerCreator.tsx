import React, { useState } from 'react';
import { FlyerFormData, FlyerData, BUSINESS_TYPES, INTEREST_TAGS } from '../types/FlyerTypes';
import { Button } from './ui/Button';
import { Input } from './ui/Input';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from './ui/Card';

interface FlyerCreatorProps {
  onCreateFlyer: (flyer: FlyerData) => void;
}

export const FlyerCreator: React.FC<FlyerCreatorProps> = ({ onCreateFlyer }) => {
  const [formData, setFormData] = useState<FlyerFormData>({
    title: '',
    description: '',
    businessName: '',
    businessType: 'restaurant',
    address: '',
    radius: 1,
    text: '',
    callToAction: '',
    offer: '',
    ageRange: [20, 50],
    interests: [],
    maxDistance: 5,
    dailyBudget: 10000,
    totalBudget: 100000,
    startDate: '',
    endDate: '',
    startTime: '09:00',
    endTime: '18:00',
  });

  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 4;

  const handleInputChange = (field: keyof FlyerFormData, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleInterestToggle = (interest: string) => {
    setFormData(prev => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter(i => i !== interest)
        : [...prev.interests, interest]
    }));
  };

  const handleSubmit = () => {
    const flyer: FlyerData = {
      id: '',
      title: formData.title,
      description: formData.description,
      businessName: formData.businessName,
      businessType: formData.businessType,
      location: {
        address: formData.address,
        latitude: 37.5665, // 서울 기본값 (실제로는 지도 API에서 가져와야 함)
        longitude: 126.9780,
        radius: formData.radius,
      },
      content: {
        text: formData.text,
        callToAction: formData.callToAction,
        offer: formData.offer,
      },
      targeting: {
        ageRange: formData.ageRange,
        interests: formData.interests,
        maxDistance: formData.maxDistance,
      },
      budget: {
        dailyBudget: formData.dailyBudget,
        totalBudget: formData.totalBudget,
        spent: 0,
      },
      schedule: {
        startDate: new Date(formData.startDate),
        endDate: new Date(formData.endDate),
        activeHours: {
          start: formData.startTime,
          end: formData.endTime,
        },
      },
      status: 'draft',
      createdAt: new Date(),
      updatedAt: new Date(),
      analytics: {
        impressions: 0,
        clicks: 0,
        conversions: 0,
        ctr: 0,
        cpc: 0,
        cpm: 0,
      },
    };

    onCreateFlyer(flyer);
  };

  const nextStep = () => setCurrentStep(prev => Math.min(prev + 1, totalSteps));
  const prevStep = () => setCurrentStep(prev => Math.max(prev - 1, 1));

  const renderStepIndicator = () => (
    <div className="mb-8">
      <div className="flex items-center justify-between">
        {Array.from({ length: totalSteps }, (_, index) => (
          <div key={index} className="flex items-center">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
              index + 1 < currentStep
                ? 'bg-[var(--color-primary-green)] text-white'
                : index + 1 === currentStep
                ? 'bg-[var(--color-primary-brand)] text-white'
                : 'bg-[var(--color-surface-medium)] text-[var(--color-text-secondary)]'
            }`}>
              {index + 1 < currentStep ? '✓' : index + 1}
            </div>
            {index < totalSteps - 1 && (
              <div className={`w-16 h-0.5 mx-2 ${
                index + 1 < currentStep ? 'bg-[var(--color-primary-green)]' : 'bg-[var(--color-surface-medium)]'
              }`} />
            )}
          </div>
        ))}
      </div>
      <div className="text-center mt-4">
        <p className="text-sm text-[var(--color-text-secondary)]">
          단계 {currentStep} / {totalSteps}
        </p>
      </div>
    </div>
  );

  const renderStep1 = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Input
          label="전단지 제목"
          placeholder="매력적인 제목을 입력하세요"
          value={formData.title}
          onChange={(e) => handleInputChange('title', e.target.value)}
          helperText="고객의 관심을 끌 수 있는 제목을 작성하세요"
        />
        <Input
          label="비즈니스명"
          placeholder="상호명을 입력하세요"
          value={formData.businessName}
          onChange={(e) => handleInputChange('businessName', e.target.value)}
        />
      </div>
      
      <Input
        label="전단지 설명"
        placeholder="서비스나 제품에 대한 간단한 설명을 입력하세요"
        value={formData.description}
        onChange={(e) => handleInputChange('description', e.target.value)}
        helperText="고객이 이해하기 쉽게 간결하게 작성하세요"
      />

      <div>
        <label className="block text-sm font-medium text-[var(--color-text)] mb-3">
          비즈니스 유형
        </label>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
          {BUSINESS_TYPES.map((type) => (
            <button
              key={type.value}
              type="button"
              onClick={() => handleInputChange('businessType', type.value)}
              className={`p-3 rounded-[var(--radius-lg)] border-2 transition-all duration-200 ${
                formData.businessType === type.value
                  ? 'border-[var(--color-primary-brand)] bg-[var(--color-primary-brand)]/10'
                  : 'border-[var(--color-border)] hover:border-[var(--color-primary-brand)]/50'
              }`}
            >
              <div className="text-2xl mb-2">{type.icon}</div>
              <div className="text-sm font-medium">{type.label}</div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );

  const renderStep2 = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Input
          label="주소"
          placeholder="비즈니스 주소를 입력하세요"
          value={formData.address}
          onChange={(e) => handleInputChange('address', e.target.value)}
          helperText="정확한 주소를 입력하면 타겟팅이 더 정확해집니다"
        />
        <div>
          <label className="block text-sm font-medium text-[var(--color-text)] mb-2">
            서비스 반경 (km)
          </label>
          <input
            type="range"
            min="0.5"
            max="10"
            step="0.5"
            value={formData.radius}
            onChange={(e) => handleInputChange('radius', parseFloat(e.target.value))}
            className="w-full h-2 bg-[var(--color-surface-medium)] rounded-lg appearance-none cursor-pointer"
          />
          <div className="flex justify-between text-xs text-[var(--color-text-secondary)] mt-1">
            <span>0.5km</span>
            <span className="font-medium text-[var(--color-primary-brand)]">{formData.radius}km</span>
            <span>10km</span>
          </div>
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-[var(--color-text)] mb-3">
          최대 타겟팅 거리 (km)
        </label>
        <input
          type="range"
          min="1"
          max="20"
          step="1"
          value={formData.maxDistance}
          onChange={(e) => handleInputChange('maxDistance', parseInt(e.target.value))}
          className="w-full h-2 bg-[var(--color-surface-medium)] rounded-lg appearance-none cursor-pointer"
        />
        <div className="flex justify-between text-xs text-[var(--color-text-secondary)] mt-1">
          <span>1km</span>
          <span className="font-medium text-[var(--color-primary-brand)]">{formData.maxDistance}km</span>
          <span>20km</span>
        </div>
      </div>
    </div>
  );

  const renderStep3 = () => (
    <div className="space-y-6">
      <Input
        label="전단지 내용"
        placeholder="고객에게 전달하고 싶은 메시지를 입력하세요"
        value={formData.text}
        onChange={(e) => handleInputChange('text', e.target.value)}
        helperText="간결하고 명확한 메시지로 작성하세요"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Input
          label="행동 유도 문구"
          placeholder="예: 지금 바로 방문하세요"
          value={formData.callToAction}
          onChange={(e) => handleInputChange('callToAction', e.target.value)}
          helperText="고객이 행동할 수 있도록 유도하는 문구를 작성하세요"
        />
        <Input
          label="특별 혜택 (선택사항)"
          placeholder="예: 첫 방문 고객 20% 할인"
          value={formData.offer}
          onChange={(e) => handleInputChange('offer', e.target.value)}
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-[var(--color-text)] mb-3">
          타겟 연령대
        </label>
        <div className="flex items-center space-x-4">
          <input
            type="number"
            min="18"
            max="80"
            value={formData.ageRange[0]}
            onChange={(e) => handleInputChange('ageRange', [parseInt(e.target.value), formData.ageRange[1]])}
            className="w-20 px-3 py-2 bg-[var(--color-surface)] border border-[var(--color-border)] rounded-[var(--radius-md)] text-center"
          />
          <span className="text-[var(--color-text-secondary)]">~</span>
          <input
            type="number"
            min="18"
            max="80"
            value={formData.ageRange[1]}
            onChange={(e) => handleInputChange('ageRange', [formData.ageRange[0], parseInt(e.target.value)])}
            className="w-20 px-3 py-2 bg-[var(--color-surface)] border border-[var(--color-border)] rounded-[var(--radius-md)] text-center"
          />
          <span className="text-[var(--color-text-secondary)]">세</span>
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-[var(--color-text)] mb-3">
          관심사 (다중 선택 가능)
        </label>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {INTEREST_TAGS.map((tag) => (
            <button
              key={tag.value}
              type="button"
              onClick={() => handleInterestToggle(tag.value)}
              className={`p-3 rounded-[var(--radius-lg)] border-2 transition-all duration-200 ${
                formData.interests.includes(tag.value)
                  ? 'border-[var(--color-primary-brand)] bg-[var(--color-primary-brand)]/10'
                  : 'border-[var(--color-border)] hover:border-[var(--color-primary-brand)]/50'
              }`}
            >
              <div className="text-sm font-medium">{tag.label}</div>
              <div className="text-xs text-[var(--color-text-secondary)]">{tag.category}</div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );

  const renderStep4 = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Input
          label="시작 날짜"
          type="date"
          value={formData.startDate}
          onChange={(e) => handleInputChange('startDate', e.target.value)}
        />
        <Input
          label="종료 날짜"
          type="date"
          value={formData.endDate}
          onChange={(e) => handleInputChange('endDate', e.target.value)}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Input
          label="시작 시간"
          type="time"
          value={formData.startTime}
          onChange={(e) => handleInputChange('startTime', e.target.value)}
        />
        <Input
          label="종료 시간"
          type="time"
          value={formData.endTime}
          onChange={(e) => handleInputChange('endTime', e.target.value)}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Input
          label="일일 예산 (원)"
          type="number"
          placeholder="10000"
          value={formData.dailyBudget}
          onChange={(e) => handleInputChange('dailyBudget', parseInt(e.target.value))}
          helperText="하루에 사용할 수 있는 최대 예산을 설정하세요"
        />
        <Input
          label="총 예산 (원)"
          type="number"
          placeholder="100000"
          value={formData.totalBudget}
          onChange={(e) => handleInputChange('totalBudget', parseInt(e.target.value))}
          helperText="전체 캠페인에 사용할 수 있는 총 예산을 설정하세요"
        />
      </div>

      <Card variant="outlined" className="p-4">
        <div className="text-center">
          <h4 className="font-semibold text-[var(--color-text)] mb-2">예산 요약</h4>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <p className="text-[var(--color-text-secondary)]">일일 예산</p>
              <p className="font-medium text-[var(--color-text)]">{formData.dailyBudget.toLocaleString()}원</p>
            </div>
            <div>
              <p className="text-[var(--color-text-secondary)]">총 예산</p>
              <p className="font-medium text-[var(--color-text)]">{formData.totalBudget.toLocaleString()}원</p>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );

  const renderCurrentStep = () => {
    switch (currentStep) {
      case 1:
        return renderStep1();
      case 2:
        return renderStep2();
      case 3:
        return renderStep3();
      case 4:
        return renderStep4();
      default:
        return renderStep1();
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      {renderStepIndicator()}
      
      <Card variant="elevated" className="mb-8">
        <CardContent className="p-8">
          {renderCurrentStep()}
        </CardContent>
      </Card>

      <div className="flex justify-between">
        <Button
          variant="ghost"
          onClick={prevStep}
          disabled={currentStep === 1}
          className="px-8"
        >
          이전
        </Button>
        
        <div className="flex space-x-4">
          {currentStep < totalSteps ? (
            <Button
              variant="primary"
              onClick={nextStep}
              className="px-8"
            >
              다음
            </Button>
          ) : (
            <Button
              variant="primary"
              onClick={handleSubmit}
              className="px-8"
            >
              전단지 생성
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};
