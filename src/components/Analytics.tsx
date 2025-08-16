import React, { useState, useMemo } from 'react';
import { FlyerData } from '../types/FlyerTypes';
import { Button } from './ui/Button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from './ui/Card';

interface AnalyticsProps {
  flyers: FlyerData[];
}

export const Analytics: React.FC<AnalyticsProps> = ({ flyers }) => {
  const [selectedPeriod, setSelectedPeriod] = useState<'7d' | '30d' | '90d' | 'all'>('30d');
  const [selectedMetric, setSelectedMetric] = useState<'impressions' | 'clicks' | 'conversions' | 'ctr' | 'cpc' | 'cpm'>('impressions');

  const analyticsData = useMemo(() => {
    if (flyers.length === 0) return null;

    const now = new Date();
    const periodMap = {
      '7d': new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000),
      '30d': new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000),
      '90d': new Date(now.getTime() - 90 * 24 * 60 * 60 * 1000),
      'all': new Date(0),
    };

    const filteredFlyers = flyers.filter(flyer => 
      new Date(flyer.createdAt) >= periodMap[selectedPeriod]
    );

    if (filteredFlyers.length === 0) return null;

    const totalImpressions = filteredFlyers.reduce((sum, flyer) => sum + flyer.analytics.impressions, 0);
    const totalClicks = filteredFlyers.reduce((sum, flyer) => sum + flyer.analytics.clicks, 0);
    const totalConversions = filteredFlyers.reduce((sum, flyer) => sum + flyer.analytics.conversions, 0);
    const totalSpent = filteredFlyers.reduce((sum, flyer) => sum + flyer.budget.spent, 0);

    const avgCTR = totalImpressions > 0 ? (totalClicks / totalImpressions) * 100 : 0;
    const avgCPC = totalClicks > 0 ? totalSpent / totalClicks : 0;
    const avgCPM = totalImpressions > 0 ? (totalSpent / totalImpressions) * 1000 : 0;

    // 업종별 성과
    const performanceByType = filteredFlyers.reduce((acc, flyer) => {
      if (!acc[flyer.businessType]) {
        acc[flyer.businessType] = {
          count: 0,
          impressions: 0,
          clicks: 0,
          conversions: 0,
          spent: 0,
        };
      }
      
      acc[flyer.businessType].count++;
      acc[flyer.businessType].impressions += flyer.analytics.impressions;
      acc[flyer.businessType].clicks += flyer.analytics.clicks;
      acc[flyer.businessType].conversions += flyer.analytics.conversions;
      acc[flyer.businessType].spent += flyer.budget.spent;
      
      return acc;
    }, {} as Record<string, any>);

    // 상태별 성과
    const performanceByStatus = filteredFlyers.reduce((acc, flyer) => {
      if (!acc[flyer.status]) {
        acc[flyer.status] = {
          count: 0,
          impressions: 0,
          clicks: 0,
          conversions: 0,
          spent: 0,
        };
      }
      
      acc[flyer.status].count++;
      acc[flyer.status].impressions += flyer.analytics.impressions;
      acc[flyer.status].clicks += flyer.analytics.clicks;
      acc[flyer.status].conversions += flyer.analytics.conversions;
      acc[flyer.status].spent += flyer.budget.spent;
      
      return acc;
    }, {} as Record<string, any>);

    return {
      totalImpressions,
      totalClicks,
      totalConversions,
      totalSpent,
      avgCTR,
      avgCPC,
      avgCPM,
      performanceByType,
      performanceByStatus,
      flyerCount: filteredFlyers.length,
    };
  }, [flyers, selectedPeriod]);

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('ko-KR').format(amount);
  };

  const formatNumber = (num: number) => {
    return new Intl.NumberFormat('ko-KR').format(num);
  };

  if (flyers.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="text-6xl mb-4">📊</div>
        <h3 className="text-[var(--font-size-title3)] font-medium text-[var(--color-text)] mb-2">
          분석할 데이터가 없습니다
        </h3>
        <p className="text-[var(--color-text-secondary)] mb-6">
          전단지를 생성하고 실행하면 분석 데이터를 확인할 수 있습니다
        </p>
        <Button variant="primary" size="lg">
          전단지 생성하기
        </Button>
      </div>
    );
  }

  if (!analyticsData) {
    return (
      <div className="text-center py-12">
        <div className="text-6xl mb-4">📈</div>
        <h3 className="text-[var(--font-size-title3)] font-medium text-[var(--color-text)] mb-2">
          선택한 기간에 데이터가 없습니다
        </h3>
        <p className="text-[var(--color-text-secondary)]">
          다른 기간을 선택하거나 더 많은 전단지를 생성해보세요
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* 기간 선택 */}
      <Card variant="outlined">
        <CardContent className="p-6">
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
            <div>
              <h3 className="text-[var(--font-size-title3)] font-semibold text-[var(--color-text)] mb-2">
                분석 기간
              </h3>
              <p className="text-[var(--color-text-secondary)] text-sm">
                {selectedPeriod === '7d' && '최근 7일'}
                {selectedPeriod === '30d' && '최근 30일'}
                {selectedPeriod === '90d' && '최근 90일'}
                {selectedPeriod === 'all' && '전체 기간'}
              </p>
            </div>
            
            <div className="flex bg-[var(--color-surface)] rounded-[var(--radius-lg)] p-1">
              {(['7d', '30d', '90d', 'all'] as const).map((period) => (
                <button
                  key={period}
                  onClick={() => setSelectedPeriod(period)}
                  className={`px-4 py-2 rounded-[var(--radius-md)] text-sm font-medium transition-all duration-200 ${
                    selectedPeriod === period
                      ? 'bg-[var(--color-primary-brand)] text-white'
                      : 'text-[var(--color-text-secondary)] hover:text-[var(--color-text)] hover:bg-[var(--color-surface-darker)]'
                  }`}
                >
                  {period === '7d' && '7일'}
                  {period === '30d' && '30일'}
                  {period === '90d' && '90일'}
                  {period === 'all' && '전체'}
                </button>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* 주요 지표 */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card variant="elevated" className="text-center p-6">
          <div className="text-[var(--font-size-title4)] font-bold text-[var(--color-primary-brand)] mb-2">
            {formatNumber(analyticsData.totalImpressions)}
          </div>
          <div className="text-sm text-[var(--color-text-secondary)]">총 조회수</div>
        </Card>
        
        <Card variant="elevated" className="text-center p-6">
          <div className="text-[var(--font-size-title4)] font-bold text-[var(--color-primary-green)] mb-2">
            {formatNumber(analyticsData.totalClicks)}
          </div>
          <div className="text-sm text-[var(--color-text-secondary)]">총 클릭수</div>
        </Card>
        
        <Card variant="elevated" className="text-center p-6">
          <div className="text-[var(--font-size-title4)] font-bold text-[var(--color-primary-blue)] mb-2">
            {formatNumber(analyticsData.totalConversions)}
          </div>
          <div className="text-sm text-[var(--color-text-secondary)]">총 전환수</div>
        </Card>
        
        <Card variant="elevated" className="text-center p-6">
          <div className="text-[var(--font-size-title4)] font-bold text-[var(--color-primary-orange)] mb-2">
            {formatCurrency(analyticsData.totalSpent)}
          </div>
          <div className="text-sm text-[var(--color-text-secondary)]">총 지출</div>
        </Card>
      </div>

      {/* 성과 지표 */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card variant="outlined" className="text-center p-6">
          <div className="text-[var(--font-size-title3)] font-bold text-[var(--color-text)] mb-2">
            {analyticsData.avgCTR.toFixed(2)}%
          </div>
          <div className="text-sm text-[var(--color-text-secondary)]">평균 CTR</div>
        </Card>
        
        <Card variant="outlined" className="text-center p-6">
          <div className="text-[var(--font-size-title3)] font-bold text-[var(--color-text)] mb-2">
            {formatCurrency(analyticsData.avgCPC)}
          </div>
          <div className="text-sm text-[var(--color-text-secondary)]">평균 CPC</div>
        </Card>
        
        <Card variant="outlined" className="text-center p-6">
          <div className="text-[var(--font-size-title3)] font-bold text-[var(--color-text)] mb-2">
            {formatCurrency(analyticsData.avgCPM)}
          </div>
          <div className="text-sm text-[var(--color-text-secondary)]">평균 CPM</div>
        </Card>
      </div>

      {/* 업종별 성과 */}
      <Card variant="elevated">
        <CardHeader>
          <CardTitle>업종별 성과</CardTitle>
          <CardDescription>비즈니스 유형별 마케팅 성과를 비교해보세요</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {Object.entries(analyticsData.performanceByType).map(([type, data]: [string, any]) => (
              <div key={type} className="flex items-center justify-between p-4 bg-[var(--color-surface)] rounded-[var(--radius-lg)]">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-[var(--color-primary-brand)] rounded-full"></div>
                  <span className="font-medium text-[var(--color-text)] capitalize">{type}</span>
                  <span className="text-sm text-[var(--color-text-secondary)]">({data.count}개)</span>
                </div>
                <div className="flex space-x-6 text-sm">
                  <div>
                    <span className="text-[var(--color-text-secondary)]">조회수:</span>
                    <span className="ml-2 font-medium text-[var(--color-text)]">{formatNumber(data.impressions)}</span>
                  </div>
                  <div>
                    <span className="text-[var(--color-text-secondary)]">클릭수:</span>
                    <span className="ml-2 font-medium text-[var(--color-text)]">{formatNumber(data.clicks)}</span>
                  </div>
                  <div>
                    <span className="text-[var(--color-text-secondary)]">전환수:</span>
                    <span className="ml-2 font-medium text-[var(--color-text)]">{formatNumber(data.conversions)}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* 상태별 성과 */}
      <Card variant="elevated">
        <CardHeader>
          <CardTitle>상태별 성과</CardTitle>
          <CardDescription>전단지 상태별 마케팅 성과를 확인해보세요</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {Object.entries(analyticsData.performanceByStatus).map(([status, data]: [string, any]) => (
              <div key={status} className="flex items-center justify-between p-4 bg-[var(--color-surface)] rounded-[var(--radius-lg)]">
                <div className="flex items-center space-x-3">
                  <div className={`w-3 h-3 rounded-full ${
                    status === 'active' ? 'bg-[var(--color-success-base)]' :
                    status === 'paused' ? 'bg-[var(--color-warning-base)]' :
                    status === 'completed' ? 'bg-[var(--color-primary-blue)]' :
                    'bg-[var(--color-surface-medium)]'
                  }`}></div>
                  <span className="font-medium text-[var(--color-text)] capitalize">
                    {status === 'active' ? '활성' :
                     status === 'paused' ? '일시정지' :
                     status === 'completed' ? '완료' :
                     status === 'draft' ? '초안' : status}
                  </span>
                  <span className="text-sm text-[var(--color-text-secondary)]">({data.count}개)</span>
                </div>
                <div className="flex space-x-6 text-sm">
                  <div>
                    <span className="text-[var(--color-text-secondary)]">조회수:</span>
                    <span className="ml-2 font-medium text-[var(--color-text)]">{formatNumber(data.impressions)}</span>
                  </div>
                  <div>
                    <span className="text-[var(--color-text-secondary)]">클릭수:</span>
                    <span className="ml-2 font-medium text-[var(--color-text)]">{formatNumber(data.clicks)}</span>
                  </div>
                  <div>
                    <span className="text-[var(--color-text-secondary)]">전환수:</span>
                    <span className="ml-2 font-medium text-[var(--color-text)]">{formatNumber(data.conversions)}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
