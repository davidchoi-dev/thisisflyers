import React from 'react';
import { cn } from '../../utils/cn';
import { Button } from './Button';

export interface HeroProps {
  variant?: 'default' | 'centered' | 'split';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  backgroundImage?: string;
  overlay?: boolean;
  className?: string;
}

export const Hero: React.FC<HeroProps> = ({
  variant = 'default',
  size = 'lg',
  backgroundImage,
  overlay = false,
  className
}) => {
  const sizeClasses = {
    sm: 'py-16',
    md: 'py-20',
    lg: 'py-24',
    xl: 'py-32'
  };

  const variantClasses = {
    default: 'text-left',
    centered: 'text-center',
    split: 'text-left'
  };

  const contentSizeClasses = {
    sm: 'max-w-2xl',
    md: 'max-w-3xl',
    lg: 'max-w-4xl',
    xl: 'max-w-5xl'
  };

  return (
    <section className={cn(
      'relative w-full',
      sizeClasses[size],
      className
    )}>
      {/* Background Image */}
      {backgroundImage && (
        <div className="absolute inset-0 z-0">
          <img
            src={backgroundImage}
            alt="Hero background"
            className="w-full h-full object-cover"
          />
          {overlay && (
            <div className="absolute inset-0 bg-black/40" />
          )}
        </div>
      )}

      {/* Content */}
      <div className={cn(
        'relative z-10 max-w-[var(--page-max-width)] mx-auto px-[var(--page-padding)]',
        variant === 'centered' ? 'text-center' : ''
      )}>
        {variant === 'split' ? (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-[var(--color-primary-brand)]/10 text-[var(--color-primary-brand)] text-sm font-medium">
                🚀 새로운 서비스
              </div>
              <h1 className="text-[var(--font-size-title6)] lg:text-[var(--font-size-title7)] font-bold text-[var(--color-text)] leading-tight">
                지역 비즈니스를 위한<br />
                <span className="text-[var(--color-primary-brand)]">AI 마케팅 플랫폼</span>
              </h1>
              <p className="text-[var(--font-size-large)] text-[var(--color-text-secondary)] leading-relaxed">
                thisisflyers는 지역 비즈니스의 마케팅을 혁신하는 AI 기반 디지털 플랫폼입니다. 
                스마트 타겟팅과 실시간 분석으로 고객과의 연결을 강화하고 매출을 증대시킬 수 있습니다.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="/app" className="inline-block">
                  <Button variant="primary" size="lg">
                    무료로 시작하기
                  </Button>
                </a>
                <Button variant="ghost" size="lg">
                  데모 보기
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="relative z-10">
                <img
                  src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=600&h=400&fit=crop"
                  alt="AI 마케팅 플랫폼 일러스트레이션"
                  className="w-full h-auto rounded-[var(--radius-xl)] shadow-2xl"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-full h-full bg-[var(--color-primary-brand)]/20 rounded-[var(--radius-xl)] -z-10"></div>
            </div>
          </div>
        ) : (
          <div className={cn(
            'space-y-6',
            variant === 'centered' ? 'mx-auto' : '',
            contentSizeClasses[size]
          )}>
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-[var(--color-primary-brand)]/10 text-[var(--color-primary-brand)] text-sm font-medium">
              🚀 새로운 서비스
            </div>
            <h1 className="text-[var(--font-size-title6)] lg:text-[var(--font-size-title7)] font-bold text-[var(--color-text)] leading-tight">
              지역 비즈니스를 위한<br />
              <span className="text-[var(--color-primary-brand)]">AI 마케팅 플랫폼</span>
            </h1>
            <p className="text-[var(--font-size-large)] text-[var(--color-text-secondary)] leading-relaxed">
              thisisflyers는 지역 비즈니스의 마케팅을 혁신하는 AI 기반 디지털 플랫폼입니다. 
              스마트 타겟팅과 실시간 분석으로 고객과의 연결을 강화하고 매출을 증대시킬 수 있습니다.
            </p>
            <div className={cn(
              'flex flex-col sm:flex-row gap-4',
              variant === 'centered' ? 'justify-center' : ''
            )}>
              <a href="/app" className="inline-block">
                <Button variant="primary" size="lg">
                  무료로 시작하기
                </Button>
              </a>
              <Button variant="ghost" size="lg">
                데모 보기
              </Button>
            </div>
          </div>
        )}
      </div>

      {/* Stats Section */}
      <div className="relative z-10 mt-16">
        <div className="max-w-[var(--page-max-width)] mx-auto px-[var(--page-padding)]">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className={cn(
              'text-center',
              variant === 'centered' ? '' : 'md:text-left'
            )}>
              <div className="text-[var(--font-size-title4)] font-bold text-[var(--color-text)]">1,000+</div>
              <div className="text-[var(--font-size-small)] text-[var(--color-text-secondary)]">활성 비즈니스</div>
            </div>
            <div className={cn(
              'text-center',
              variant === 'centered' ? '' : 'md:text-left'
            )}>
              <div className="text-[var(--font-size-title4)] font-bold text-[var(--color-text)]">50,000+</div>
              <div className="text-[var(--font-size-small)] text-[var(--color-text-secondary)]">성공한 캠페인</div>
            </div>
            <div className={cn(
              'text-center',
              variant === 'centered' ? '' : 'md:text-left'
            )}>
              <div className="text-[var(--font-size-title4)] font-bold text-[var(--color-text)]">98%</div>
              <div className="text-[var(--font-size-small)] text-[var(--color-text-secondary)]">고객 만족도</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
