import React, { useState } from 'react';
import Head from 'next/head';
import { Navbar } from '../components/ui/Navbar';
import { Footer } from '../components/ui/Footer';
import { Button } from '../components/ui/Button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '../components/ui/Card';

export default function PricingPage() {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  const plans = [
    {
      name: 'Starter',
      description: '소규모 비즈니스를 위한 기본 기능',
      price: { monthly: 29000, yearly: 290000 },
      features: [
        '월 100개 전단지 제작',
        '기본 템플릿 20개',
        '기본 분석 리포트',
        '이메일 지원',
        '모바일 최적화'
      ],
      popular: false,
      icon: '🚀',
      color: 'from-[var(--color-primary-blue)] to-[var(--color-primary-blue)]/80'
    },
    {
      name: 'Professional',
      description: '성장하는 비즈니스를 위한 고급 기능',
      price: { monthly: 59000, yearly: 590000 },
      features: [
        '월 500개 전단지 제작',
        '프리미엄 템플릿 100개+',
        '고급 분석 및 인사이트',
        'AI 기반 타겟팅',
        '우선 지원',
        'API 연동',
        '팀 협업 기능'
      ],
      popular: true,
      icon: '⭐',
      color: 'from-[var(--color-primary-brand)] to-[var(--color-primary-blue)]'
    },
    {
      name: 'Enterprise',
      description: '대규모 비즈니스를 위한 맞춤형 솔루션',
      price: { monthly: 99000, yearly: 990000 },
      features: [
        '무제한 전단지 제작',
        '모든 템플릿 접근',
        '맞춤형 분석 대시보드',
        '전담 매니저',
        '화이트 라벨 솔루션',
        '고급 보안 기능',
        'SLA 보장'
      ],
      popular: false,
      icon: '🏢',
      color: 'from-[var(--color-primary-green)] to-[var(--color-primary-green)]/80'
    }
  ];

  const savings = billingCycle === 'yearly' ? 20 : 0;

  return (
    <div data-theme={theme} className="min-h-screen bg-[var(--color-background)] text-[var(--color-text)]">
      <Head>
        <title>가격 - thisisflyers</title>
        <meta name="description" content="thisisflyers의 투명하고 합리적인 AI 마케팅 가격 정책을 확인하세요" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      {/* Navigation */}
      <Navbar variant="glass" />

      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-[var(--color-primary-brand)] to-[var(--color-primary-blue)]">
        <div className="max-w-[var(--page-max-width)] mx-auto px-[var(--page-padding)] text-center">
          <h1 className="text-[var(--font-size-title6)] font-bold text-white mb-6">
            투명하고 합리적인 가격
          </h1>
          <p className="text-[var(--font-size-large)] text-white/90 max-w-3xl mx-auto">
            비즈니스 규모에 맞는 최적의 플랜을 선택하세요. 
            연간 결제 시 20% 할인 혜택을 제공합니다.
          </p>
        </div>
      </section>

      {/* Billing Toggle */}
      <section className="py-12">
        <div className="max-w-[var(--page-max-width)] mx-auto px-[var(--page-padding)]">
          <div className="flex justify-center">
            <div className="bg-[var(--color-surface)] rounded-[var(--radius-lg)] p-1 flex">
              <button
                onClick={() => setBillingCycle('monthly')}
                className={`px-6 py-2 rounded-[var(--radius-md)] font-medium transition-all duration-200 ${
                  billingCycle === 'monthly'
                    ? 'bg-[var(--color-primary-brand)] text-white'
                    : 'text-[var(--color-text-secondary)] hover:text-[var(--color-text)]'
                }`}
              >
                월간 결제
              </button>
              <button
                onClick={() => setBillingCycle('yearly')}
                className={`px-6 py-2 rounded-[var(--radius-md)] font-medium transition-all duration-200 ${
                  billingCycle === 'yearly'
                    ? 'bg-[var(--color-primary-brand)] text-white'
                    : 'text-[var(--color-text-secondary)] hover:text-[var(--color-text)]'
                }`}
              >
                연간 결제
                {billingCycle === 'yearly' && (
                  <span className="ml-2 text-xs bg-[var(--color-primary-green)] text-white px-2 py-1 rounded-full">
                    20% 할인
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-24">
        <div className="max-w-[var(--page-max-width)] mx-auto px-[var(--page-padding)]">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan) => (
              <Card 
                key={plan.name} 
                variant={plan.popular ? "elevated" : "default"}
                className={`relative overflow-hidden ${plan.popular ? 'ring-2 ring-[var(--color-primary-brand)]' : ''}`}
              >
                {plan.popular && (
                  <div className="absolute top-0 right-0 bg-[var(--color-primary-brand)] text-white text-xs font-medium px-3 py-1 rounded-bl-[var(--radius-lg)]">
                    인기
                  </div>
                )}
                
                <CardHeader className="text-center pb-6">
                  <div className={`w-16 h-16 bg-gradient-to-r ${plan.color} rounded-[var(--radius-full)] flex items-center justify-center mx-auto mb-4`}>
                    <span className="text-white text-2xl">{plan.icon}</span>
                  </div>
                  <CardTitle className="text-[var(--font-size-title3)]">{plan.name}</CardTitle>
                  <CardDescription className="text-base">
                    {plan.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="text-center pb-6">
                  <div className="mb-6">
                    <div className="flex items-baseline justify-center">
                      <span className="text-[var(--font-size-title5)] font-bold">
                        {billingCycle === 'monthly' ? plan.price.monthly.toLocaleString() : plan.price.yearly.toLocaleString()}
                      </span>
                      <span className="text-[var(--font-size-large)] text-[var(--color-text-secondary)] ml-2">
                        원
                      </span>
                    </div>
                    <div className="text-sm text-[var(--color-text-secondary)]">
                      {billingCycle === 'monthly' ? '월' : '년'} 단위
                    </div>
                  </div>

                  <ul className="space-y-3 text-left">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-sm">
                        <span className="w-2 h-2 bg-[var(--color-primary-brand)] rounded-full mr-3 flex-shrink-0"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>

                <CardFooter className="pt-0">
                  <a href="/app" className="w-full">
                    <Button 
                      variant={plan.popular ? "primary" : "secondary"} 
                      size="lg" 
                      className="w-full"
                    >
                      {plan.name === 'Enterprise' ? '문의하기' : '시작하기'}
                    </Button>
                  </a>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-[var(--color-surface)]">
        <div className="max-w-[var(--page-max-width)] mx-auto px-[var(--page-padding)]">
          <div className="text-center mb-16">
            <h2 className="text-[var(--font-size-title5)] font-bold mb-4">
              자주 묻는 질문
            </h2>
            <p className="text-[var(--font-size-large)] text-[var(--color-text-secondary)] max-w-2xl mx-auto">
              고객들이 자주 묻는 질문들에 대한 답변입니다
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card variant="outlined">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-3">무료 체험 기간이 있나요?</h3>
                <p className="text-[var(--color-text-secondary)] text-sm">
                  네, 모든 플랜에 대해 14일 무료 체험을 제공합니다. 
                  신용카드 정보 없이도 바로 시작할 수 있습니다.
                </p>
              </CardContent>
            </Card>

            <Card variant="outlined">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-3">플랜을 언제든지 변경할 수 있나요?</h3>
                <p className="text-[var(--color-text-secondary)] text-sm">
                  언제든지 플랜을 업그레이드하거나 다운그레이드할 수 있습니다. 
                  변경은 즉시 적용되며, 비용은 일할 계산됩니다.
                </p>
              </CardContent>
            </Card>

            <Card variant="outlined">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-3">환불 정책은 어떻게 되나요?</h3>
                <p className="text-[var(--color-text-secondary)] text-sm">
                  30일 이내에 100% 환불을 보장합니다. 
                  서비스에 만족하지 못하시면 언제든지 환불 요청을 할 수 있습니다.
                </p>
              </CardContent>
            </Card>

            <Card variant="outlined">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-3">기술 지원은 어떻게 받을 수 있나요?</h3>
                <p className="text-[var(--color-text-secondary)] text-sm">
                  이메일, 채팅, 전화를 통해 기술 지원을 받을 수 있습니다. 
                  Professional 플랜 이상은 우선 지원을 제공합니다.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-[var(--color-primary-brand)] to-[var(--color-primary-blue)]">
        <div className="max-w-[var(--page-max-width)] mx-auto px-[var(--page-padding)] text-center">
          <h2 className="text-[var(--font-size-title5)] font-bold text-white mb-6">
            지금 바로 시작하세요
          </h2>
          <p className="text-[var(--font-size-large)] text-white/90 mb-8 max-w-2xl mx-auto">
            14일 무료 체험으로 thisisflyers의 강력한 기능을 경험해보세요
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/app" className="inline-block">
              <Button variant="secondary" size="lg">
                무료 체험 시작
              </Button>
            </a>
            <a href="/services" className="inline-block">
              <Button variant="ghost" size="lg" className="text-white border-white hover:bg-white/10">
                서비스 자세히 보기
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer variant="extended" />

      {/* Theme Toggle */}
      <div className="fixed bottom-6 left-6 z-[var(--z-tooltip)]">
        <Button variant="ghost" onClick={toggleTheme} className="rounded-full w-12 h-12 p-0">
          {theme === 'dark' ? '🌞' : '🌙'}
        </Button>
      </div>
    </div>
  );
}
