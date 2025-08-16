import React, { useState } from 'react';
import { Header } from './Header';
import { FlyerCreator } from './FlyerCreator';
import { FlyerList } from './FlyerList';
import { Analytics } from './Analytics';
import { FlyerData } from '../types/FlyerTypes';
import { Button } from './ui/Button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from './ui/Card';

export const FlyerPlatform: React.FC = () => {
  const [flyers, setFlyers] = useState<FlyerData[]>([]);
  const [activeTab, setActiveTab] = useState<'create' | 'list' | 'analytics'>('create');

  const handleCreateFlyer = (flyer: FlyerData) => {
    setFlyers(prev => [...prev, { ...flyer, id: Date.now().toString() }]);
    setActiveTab('list');
  };

  const handleDeleteFlyer = (id: string) => {
    setFlyers(prev => prev.filter(flyer => flyer.id !== id));
  };

  const tabs = [
    { id: 'create', label: '전단지 생성', icon: '✏️' },
    { id: 'list', label: '전단지 목록', icon: '📋' },
    { id: 'analytics', label: '효과 분석', icon: '📊' }
  ] as const;

  return (
    <div className="min-h-screen bg-[var(--color-background)]">
      <Header />
      
      <div className="max-w-[var(--page-max-width)] mx-auto px-[var(--page-padding)] py-8">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-[var(--font-size-title6)] font-bold text-[var(--color-text)] mb-4">
            thisisflyers
          </h1>
          <p className="text-[var(--font-size-large)] text-[var(--color-text-secondary)] max-w-2xl mx-auto">
            동네 음식점과 카페를 위한 스마트한 디지털 마케팅 솔루션
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex space-x-2 bg-[var(--color-surface)] rounded-[var(--radius-lg)] p-2 mb-8 shadow-sm">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-1 py-3 px-4 rounded-[var(--radius-md)] font-medium transition-all duration-200 flex items-center justify-center space-x-2 ${
                activeTab === tab.id
                  ? 'bg-[var(--color-primary-brand)] text-white shadow-lg'
                  : 'text-[var(--color-text-secondary)] hover:text-[var(--color-text)] hover:bg-[var(--color-surface-darker)]'
              }`}
            >
              <span>{tab.icon}</span>
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <Card variant="elevated" className="min-h-[600px]">
          <CardContent className="p-8">
            {activeTab === 'create' && (
              <div>
                <CardHeader className="text-center pb-8">
                  <CardTitle className="text-[var(--font-size-title4)]">새로운 전단지 만들기</CardTitle>
                  <CardDescription>
                    매력적인 디지털 전단지로 고객을 끌어보세요
                  </CardDescription>
                </CardHeader>
                <FlyerCreator onCreateFlyer={handleCreateFlyer} />
              </div>
            )}
            {activeTab === 'list' && (
              <div>
                <CardHeader className="text-center pb-8">
                  <CardTitle className="text-[var(--font-size-title4)]">전단지 목록</CardTitle>
                  <CardDescription>
                    생성된 전단지들을 관리하고 모니터링하세요
                  </CardDescription>
                </CardHeader>
                <FlyerList 
                  flyers={flyers} 
                  onDeleteFlyer={handleDeleteFlyer} 
                />
              </div>
            )}
            {activeTab === 'analytics' && (
              <div>
                <CardHeader className="text-center pb-8">
                  <CardTitle className="text-[var(--font-size-title4)]">효과 분석</CardTitle>
                  <CardDescription>
                    전단지 성과를 분석하고 마케팅 전략을 개선하세요
                  </CardDescription>
                </CardHeader>
                <Analytics flyers={flyers} />
              </div>
            )}
          </CardContent>
        </Card>

        {/* Quick Stats */}
        {flyers.length > 0 && (
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card variant="outlined" className="text-center p-6">
              <div className="text-[var(--font-size-title4)] font-bold text-[var(--color-primary-brand)] mb-2">
                {flyers.length}
              </div>
              <div className="text-[var(--font-size-small)] text-[var(--color-text-secondary)]">
                총 전단지 수
              </div>
            </Card>
            <Card variant="outlined" className="text-center p-6">
              <div className="text-[var(--font-size-title4)] font-bold text-[var(--color-primary-green)] mb-2">
                {flyers.filter(f => f.status === 'active').length}
              </div>
              <div className="text-[var(--font-size-small)] text-[var(--color-text-secondary)]">
                활성 전단지
              </div>
            </Card>
            <Card variant="outlined" className="text-center p-6">
              <div className="text-[var(--font-size-title4)] font-bold text-[var(--color-primary-blue)] mb-2">
                {flyers.reduce((sum, f) => sum + (f.analytics?.impressions || 0), 0)}
              </div>
              <div className="text-[var(--font-size-small)] text-[var(--color-text-secondary)]">
                총 조회수
              </div>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
};
