import React, { useState } from 'react';
import Head from 'next/head';
import { Navbar } from '../components/ui/Navbar';
import { Hero } from '../components/ui/Hero';
import { Footer } from '../components/ui/Footer';
import { Button } from '../components/ui/Button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '../components/ui/Card';
import { ImageCard, ImageCardGrid } from '../components/ui/Card';

export default function LandingPage() {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <div data-theme={theme} className="min-h-screen bg-[var(--color-background)] text-[var(--color-text)]">
      <Head>
        <title>thisisflyers - AI 기반 디지털 마케팅 플랫폼</title>
        <meta name="description" content="지역 비즈니스를 위한 AI 기반 디지털 마케팅 플랫폼" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      {/* Navigation */}
      <Navbar variant="glass" />

      {/* Hero Section */}
      <Hero 
        variant="split" 
        size="xl"
        backgroundImage="https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=1200&h=800&fit=crop"
        overlay
      />

      {/* Features Section */}
      <section className="py-24 bg-[var(--color-surface)]">
        <div className="max-w-[var(--page-max-width)] mx-auto px-[var(--page-padding)]">
          <div className="text-center mb-16">
            <h2 className="text-[var(--font-size-title5)] font-bold mb-4">
              왜 thisisflyers를 선택해야 할까요?
            </h2>
            <p className="text-[var(--font-size-large)] text-[var(--color-text-secondary)] max-w-2xl mx-auto">
              지역 비즈니스의 마케팅을 혁신하는 핵심 기능들을 제공합니다
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card variant="elevated" className="text-center p-8">
              <div className="w-16 h-16 bg-[var(--color-primary-brand)]/10 rounded-[var(--radius-full)] flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">🎨</span>
              </div>
              <CardTitle className="mb-4">직관적인 디자인</CardTitle>
              <CardDescription>
                전문 디자이너가 제작한 템플릿으로 누구나 쉽게 아름다운 전단지를 만들 수 있습니다
              </CardDescription>
            </Card>

            <Card variant="elevated" className="text-center p-8">
              <div className="w-16 h-16 bg-[var(--color-primary-green)]/10 rounded-[var(--radius-full)] flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">📱</span>
              </div>
              <CardTitle className="mb-4">모바일 최적화</CardTitle>
              <CardDescription>
                모든 디바이스에서 완벽하게 표시되는 반응형 전단지로 고객 경험을 향상시킵니다
              </CardDescription>
            </Card>

            <Card variant="elevated" className="text-center p-8">
              <div className="w-16 h-16 bg-[var(--color-primary-blue)]/10 rounded-[var(--radius-full)] flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">📊</span>
              </div>
              <CardTitle className="mb-4">실시간 분석</CardTitle>
              <CardDescription>
                전단지 성과를 실시간으로 추적하고 고객 반응을 분석하여 마케팅 전략을 개선합니다
              </CardDescription>
            </Card>
          </div>
        </div>
      </section>

      {/* Showcase Section */}
      <section className="py-24">
        <div className="max-w-[var(--page-max-width)] mx-auto px-[var(--page-padding)]">
          <div className="text-center mb-16">
            <h2 className="text-[var(--font-size-title5)] font-bold mb-4">
              성공 사례
            </h2>
            <p className="text-[var(--font-size-large)] text-[var(--color-text-secondary)] max-w-2xl mx-auto">
              이미 많은 비즈니스가 thisisflyers로 성공을 거두고 있습니다
            </p>
          </div>

          <ImageCardGrid
            cards={[
              {
                id: '1',
                imageSrc: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=300&fit=crop',
                imageAlt: '피자집 성공 사례',
                title: '맛있는 피자집',
                description: '월 매출 30% 증가'
              },
              {
                id: '2',
                imageSrc: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=400&h=300&fit=crop',
                imageAlt: '카페 성공 사례',
                title: '아늑한 카페',
                description: '고객 방문률 50% 향상'
              },
              {
                id: '3',
                imageSrc: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=300&fit=crop',
                imageAlt: '레스토랑 성공 사례',
                title: '고급 레스토랑',
                description: '예약률 80% 증가'
              },
              {
                id: '4',
                imageSrc: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=400&h=300&fit=crop',
                imageAlt: '스테이크',
                title: '립 스테이크',
                description: '완벽하게 구운 고기'
              }
            ]}
            columns={4}
            gap="md"
          />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-[var(--color-primary-brand)] to-[var(--color-primary-blue)]">
        <div className="max-w-[var(--page-max-width)] mx-auto px-[var(--page-padding)] text-center">
          <h2 className="text-[var(--font-size-title5)] font-bold text-white mb-6">
            AI 마케팅의 미래를 경험하세요
          </h2>
          <p className="text-[var(--font-size-large)] text-white/90 mb-8 max-w-2xl mx-auto">
            thisisflyers와 함께 지역 비즈니스의 마케팅을 혁신하고 성장을 가속화하세요
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/app" className="inline-block">
              <Button variant="secondary" size="lg">
                무료 체험 시작
              </Button>
            </a>
            <Button variant="ghost" size="lg" className="text-white border-white hover:bg-white/10">
              데모 보기
            </Button>
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

      {/* Component Library Link */}
      <div className="fixed bottom-6 right-6 z-[var(--z-tooltip)]">
        <a
          href="/components"
          className="inline-flex items-center px-4 py-2 bg-[var(--color-surface-medium)] text-[var(--color-background-primary)] rounded-[var(--radius-lg)] shadow-lg hover:bg-[var(--color-surface-medium)]/90 transition-all duration-200 hover:scale-105"
        >
          <span className="mr-2">🎨</span>
          컴포넌트
        </a>
      </div>
    </div>
  );
}
