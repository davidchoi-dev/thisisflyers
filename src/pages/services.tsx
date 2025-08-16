import React, { useState } from 'react';
import Head from 'next/head';
import { Navbar } from '../components/ui/Navbar';
import { Footer } from '../components/ui/Footer';
import { Button } from '../components/ui/Button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '../components/ui/Card';
import { ImageCard, ImageCardGrid } from '../components/ui/Card';

export default function ServicesPage() {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  const services = [
    {
      id: '1',
      title: 'AI 기반 타겟팅',
      description: '고객의 관심사와 위치를 분석하여 최적의 타겟을 자동으로 설정합니다',
      icon: '🎯',
      imageSrc: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop',
      features: ['데모그래픽 분석', '행동 패턴 추적', '실시간 최적화']
    },
    {
      id: '2',
      title: '전단지 디자인',
      description: '전문 디자이너가 제작한 템플릿으로 아름다운 전단지를 쉽게 만들 수 있습니다',
      icon: '🎨',
      imageSrc: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=300&fit=crop',
      features: ['100+ 템플릿', '드래그 앤 드롭', '브랜드 커스터마이징']
    },
    {
      id: '3',
      title: '실시간 분석',
      description: '전단지 성과를 실시간으로 추적하고 고객 반응을 분석합니다',
      icon: '📊',
      imageSrc: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop',
      features: ['조회수 추적', '클릭률 분석', 'ROI 측정']
    },
    {
      id: '4',
      title: '모바일 최적화',
      description: '모든 디바이스에서 완벽하게 표시되는 반응형 전단지',
      icon: '📱',
      imageSrc: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=300&fit=crop',
      features: ['반응형 디자인', '터치 최적화', '빠른 로딩']
    },
    {
      id: '5',
      title: '자동화 마케팅',
      description: '고객 행동에 따라 자동으로 마케팅 메시지를 전송합니다',
      icon: '🤖',
      imageSrc: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=400&h=300&fit=crop',
      features: ['트리거 메시지', 'A/B 테스트', '개인화 콘텐츠']
    },
    {
      id: '6',
      title: '통합 관리',
      description: '모든 마케팅 활동을 한 곳에서 통합 관리할 수 있습니다',
      icon: '🔧',
      imageSrc: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop',
      features: ['중앙 집중식 관리', '워크플로우 자동화', '팀 협업']
    }
  ];

  return (
    <div data-theme={theme} className="min-h-screen bg-[var(--color-background)] text-[var(--color-text)]">
      <Head>
        <title>서비스 - thisisflyers</title>
        <meta name="description" content="thisisflyers의 AI 기반 마케팅 서비스와 기능을 확인하세요" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      {/* Navigation */}
      <Navbar variant="glass" />

      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-[var(--color-primary-brand)] to-[var(--color-primary-blue)]">
        <div className="max-w-[var(--page-max-width)] mx-auto px-[var(--page-padding)] text-center">
          <h1 className="text-[var(--font-size-title6)] font-bold text-white mb-6">
            강력한 마케팅 도구들
          </h1>
          <p className="text-[var(--font-size-large)] text-white/90 max-w-3xl mx-auto">
            thisisflyers는 지역 비즈니스의 성공을 위한 모든 AI 마케팅 도구를 제공합니다. 
            스마트 기술과 데이터 분석을 통해 마케팅을 혁신하세요.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24">
        <div className="max-w-[var(--page-max-width)] mx-auto px-[var(--page-padding)]">
          <div className="text-center mb-16">
            <h2 className="text-[var(--font-size-title5)] font-bold mb-4">
              핵심 서비스
            </h2>
            <p className="text-[var(--font-size-large)] text-[var(--color-text-secondary)] max-w-2xl mx-auto">
              비즈니스 성장을 위한 필수적인 마케팅 도구들을 경험해보세요
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <Card key={service.id} variant="elevated" className="overflow-hidden group hover:shadow-xl transition-all duration-300">
                <div className="relative overflow-hidden">
                  <img
                    src={service.imageSrc}
                    alt={service.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4 w-12 h-12 bg-[var(--color-primary-brand)] rounded-[var(--radius-full)] flex items-center justify-center text-white text-xl">
                    {service.icon}
                  </div>
                </div>
                <CardContent className="p-6">
                  <CardTitle className="mb-3">{service.title}</CardTitle>
                  <CardDescription className="mb-4">
                    {service.description}
                  </CardDescription>
                  <ul className="space-y-2">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-sm text-[var(--color-text-secondary)]">
                        <span className="w-2 h-2 bg-[var(--color-primary-brand)] rounded-full mr-3"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6">
                    <a href="/app" className="inline-block w-full">
                      <Button variant="primary" size="sm" className="w-full">
                        시작하기
                      </Button>
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-[var(--color-surface)]">
        <div className="max-w-[var(--page-max-width)] mx-auto px-[var(--page-padding)]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-[var(--font-size-title5)] font-bold mb-6">
                왜 thisisflyers인가요?
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-[var(--color-primary-brand)]/10 rounded-[var(--radius-full)] flex items-center justify-center flex-shrink-0">
                    <span className="text-[var(--color-primary-brand)] text-lg">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">AI 기반 최적화</h3>
                    <p className="text-[var(--color-text-secondary)] text-sm">
                      머신러닝 알고리즘이 고객 행동을 분석하여 최적의 마케팅 전략을 제시합니다.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-[var(--color-primary-green)]/10 rounded-[var(--radius-full)] flex items-center justify-center flex-shrink-0">
                    <span className="text-[var(--color-primary-green)] text-lg">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">실시간 데이터</h3>
                    <p className="text-[var(--color-text-secondary)] text-sm">
                      마케팅 성과를 실시간으로 모니터링하고 즉시 전략을 조정할 수 있습니다.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-[var(--color-primary-blue)]/10 rounded-[var(--radius-full)] flex items-center justify-center flex-shrink-0">
                    <span className="text-[var(--color-primary-blue)] text-lg">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">사용자 친화적</h3>
                    <p className="text-[var(--color-text-secondary)] text-sm">
                      기술적 지식 없이도 전문적인 마케팅 캠페인을 실행할 수 있습니다.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=600&h=400&fit=crop"
                alt="서비스 특징"
                className="w-full h-auto rounded-[var(--radius-xl)] shadow-2xl"
              />
              <div className="absolute -bottom-4 -right-4 w-full h-full bg-[var(--color-primary-brand)]/20 rounded-[var(--radius-xl)] -z-10"></div>
            </div>
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
            thisisflyers의 강력한 마케팅 도구들로 비즈니스를 성장시켜보세요
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/app" className="inline-block">
              <Button variant="secondary" size="lg">
                무료로 시작하기
              </Button>
            </a>
            <a href="/pricing" className="inline-block">
              <Button variant="ghost" size="lg" className="text-white border-white hover:bg-white/10">
                가격 확인하기
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
