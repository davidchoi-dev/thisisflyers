import React, { useState } from 'react';
import { FlyerData, BUSINESS_TYPES } from '../types/FlyerTypes';
import { Button } from './ui/Button';
import { Input } from './ui/Input';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from './ui/Card';

interface FlyerListProps {
  flyers: FlyerData[];
  onDeleteFlyer: (id: string) => void;
}

export const FlyerList: React.FC<FlyerListProps> = ({ flyers, onDeleteFlyer }) => {
  const [filterStatus, setFilterStatus] = useState<FlyerData['status'] | 'all'>('all');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredFlyers = flyers.filter(flyer => {
    const matchesStatus = filterStatus === 'all' || flyer.status === filterStatus;
    const matchesSearch = flyer.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         flyer.businessName.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesStatus && matchesSearch;
  });

  const getStatusColor = (status: FlyerData['status']) => {
    switch (status) {
      case 'draft': return 'bg-[var(--color-surface-medium)] text-[var(--color-text-secondary)]';
      case 'active': return 'bg-[var(--color-success-base)]/10 text-[var(--color-success-base)]';
      case 'paused': return 'bg-[var(--color-warning-base)]/10 text-[var(--color-warning-base)]';
      case 'completed': return 'bg-[var(--color-primary-blue)]/10 text-[var(--color-primary-blue)]';
      default: return 'bg-[var(--color-surface-medium)] text-[var(--color-text-secondary)]';
    }
  };

  const getStatusLabel = (status: FlyerData['status']) => {
    switch (status) {
      case 'draft': return '초안';
      case 'active': return '활성';
      case 'paused': return '일시정지';
      case 'completed': return '완료';
      default: return '알 수 없음';
    }
  };

  const getBusinessTypeLabel = (type: FlyerData['businessType']) => {
    return BUSINESS_TYPES.find(t => t.value === type)?.label || type;
  };

  const formatDate = (date: Date) => {
    return new Date(date).toLocaleDateString('ko-KR');
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('ko-KR').format(amount);
  };

  if (flyers.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="text-6xl mb-4">📄</div>
        <h3 className="text-[var(--font-size-title3)] font-medium text-[var(--color-text)] mb-2">
          아직 생성된 전단지가 없습니다
        </h3>
        <p className="text-[var(--color-text-secondary)] mb-6">
          첫 번째 전단지를 생성하여 고객들에게 홍보를 시작해보세요!
        </p>
        <Button variant="primary" size="lg">
          전단지 생성하기
        </Button>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* 필터 및 검색 */}
      <Card variant="outlined">
        <CardContent className="p-6">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <Input
                placeholder="전단지 제목이나 업체명으로 검색..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                leftIcon={<span>🔍</span>}
              />
            </div>
            
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value as FlyerData['status'] | 'all')}
              className="px-4 py-2 bg-[var(--color-surface)] border border-[var(--color-border)] rounded-[var(--radius-md)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary-brand)] focus:border-[var(--color-primary-brand)] transition-all duration-200"
            >
              <option value="all">모든 상태</option>
              <option value="draft">초안</option>
              <option value="active">활성</option>
              <option value="paused">일시정지</option>
              <option value="completed">완료</option>
            </select>
          </div>
        </CardContent>
      </Card>

      {/* 통계 요약 */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card variant="outlined" className="text-center p-4">
          <div className="text-[var(--font-size-title4)] font-bold text-[var(--color-primary-brand)]">
            {flyers.length}
          </div>
          <div className="text-sm text-[var(--color-text-secondary)]">총 전단지</div>
        </Card>
        
        <Card variant="outlined" className="text-center p-4">
          <div className="text-[var(--font-size-title4)] font-bold text-[var(--color-success-base)]">
            {flyers.filter(f => f.status === 'active').length}
          </div>
          <div className="text-sm text-[var(--color-text-secondary)]">활성</div>
        </Card>
        
        <Card variant="outlined" className="text-center p-4">
          <div className="text-[var(--font-size-title4)] font-bold text-[var(--color-warning-base)]">
            {flyers.filter(f => f.status === 'paused').length}
          </div>
          <div className="text-sm text-[var(--color-text-secondary)]">일시정지</div>
        </Card>
        
        <Card variant="outlined" className="text-center p-4">
          <div className="text-[var(--font-size-title4)] font-bold text-[var(--color-primary-blue)]">
            {flyers.filter(f => f.status === 'completed').length}
          </div>
          <div className="text-sm text-[var(--color-text-secondary)]">완료</div>
        </Card>
      </div>

      {/* 전단지 목록 */}
      <div className="space-y-4">
        {filteredFlyers.map((flyer) => (
          <Card key={flyer.id} variant="elevated" className="hover:shadow-lg transition-all duration-200">
            <CardContent className="p-6">
              <div className="flex flex-col lg:flex-row lg:items-center justify-between space-y-4 lg:space-y-0">
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-[var(--font-size-title2)] font-semibold text-[var(--color-text)] mb-1">
                        {flyer.title}
                      </h3>
                      <p className="text-[var(--color-text-secondary)] mb-2">
                        {flyer.businessName} • {getBusinessTypeLabel(flyer.businessType)}
                      </p>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(flyer.status)}`}>
                      {getStatusLabel(flyer.status)}
                    </span>
                  </div>
                  
                  <p className="text-[var(--color-text-secondary)] text-sm mb-3">
                    {flyer.description}
                  </p>
                  
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                    <div>
                      <span className="text-[var(--color-text-secondary)]">위치:</span>
                      <span className="ml-2 text-[var(--color-text)]">{flyer.location.address}</span>
                    </div>
                    <div>
                      <span className="text-[var(--color-text-secondary)]">예산:</span>
                      <span className="ml-2 text-[var(--color-text)]">
                        {formatCurrency(flyer.budget.dailyBudget)}원/일
                      </span>
                    </div>
                    <div>
                      <span className="text-[var(--color-text-secondary)]">시작일:</span>
                      <span className="ml-2 text-[var(--color-text)]">
                        {formatDate(flyer.schedule.startDate)}
                      </span>
                    </div>
                    <div>
                      <span className="text-[var(--color-text-secondary)]">종료일:</span>
                      <span className="ml-2 text-[var(--color-text)]">
                        {formatDate(flyer.schedule.endDate)}
                      </span>
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-2">
                  <Button variant="ghost" size="sm">
                    편집
                  </Button>
                  <Button variant="ghost" size="sm">
                    미리보기
                  </Button>
                  <Button 
                    variant="ghost" 
                    size="sm"
                    onClick={() => onDeleteFlyer(flyer.id)}
                    className="text-[var(--color-error-base)] hover:bg-[var(--color-error-base)]/10"
                  >
                    삭제
                  </Button>
                </div>
              </div>
              
              {/* 분석 데이터 */}
              <div className="mt-4 pt-4 border-t border-[var(--color-border)]">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                  <div className="text-center">
                    <div className="text-[var(--font-size-title2)] font-semibold text-[var(--color-text)]">
                      {flyer.analytics.impressions.toLocaleString()}
                    </div>
                    <div className="text-[var(--color-text-secondary)]">조회수</div>
                  </div>
                  <div className="text-center">
                    <div className="text-[var(--font-size-title2)] font-semibold text-[var(--color-text)]">
                      {flyer.analytics.clicks.toLocaleString()}
                    </div>
                    <div className="text-[var(--color-text-secondary)]">클릭수</div>
                  </div>
                  <div className="text-center">
                    <div className="text-[var(--font-size-title2)] font-semibold text-[var(--color-text)]">
                      {flyer.analytics.conversions.toLocaleString()}
                    </div>
                    <div className="text-[var(--color-text-secondary)]">전환수</div>
                  </div>
                  <div className="text-center">
                    <div className="text-[var(--font-size-title2)] font-semibold text-[var(--color-text)]">
                      {flyer.analytics.ctr.toFixed(2)}%
                    </div>
                    <div className="text-[var(--color-text-secondary)]">CTR</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};
