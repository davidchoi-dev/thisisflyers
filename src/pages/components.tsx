import React, { useState } from 'react';
import Head from 'next/head';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter, ImageCard, ImageCardGrid } from '../components/ui/Card';
import { Navbar } from '../components/ui/Navbar';
import { Hero } from '../components/ui/Hero';
import { Footer } from '../components/ui/Footer';

export default function ComponentsPage() {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <>
      <Head>
        <title>컴포넌트 라이브러리 - thisisflyers</title>
        <meta name="description" content="thisisflyers 프로젝트의 UI 컴포넌트 라이브러리" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      
      <div data-theme={theme} className="min-h-screen bg-[var(--color-background)] text-[var(--color-text)]">
        {/* Header */}
        <header className="sticky top-0 z-[var(--z-docked)] bg-[var(--color-surface)]/80 backdrop-blur-[var(--blur-header)] border-b border-[var(--color-border)]">
          <div className="max-w-[var(--page-max-width)] mx-auto px-[var(--page-padding)] h-[var(--header-height)] flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-8 h-8 bg-[var(--color-primary-brand)] rounded-[var(--radius-md)] flex items-center justify-center">
                <span className="text-white font-bold text-sm">T</span>
              </div>
              <div>
                <h1 className="text-lg font-semibold">thisisflyers</h1>
                <p className="text-sm text-[var(--color-text-secondary)]">컴포넌트 라이브러리</p>
              </div>
            </div>
            
            <Button variant="ghost" onClick={toggleTheme}>
              {theme === 'dark' ? '🌞' : '🌙'}
            </Button>
          </div>
        </header>

        {/* Main Content */}
        <main className="max-w-[var(--page-max-width)] mx-auto px-[var(--page-padding)] py-8">
          <div className="space-y-8">
            {/* Page Header */}
            <div>
              <h1 className="text-[var(--font-size-title5)] font-bold mb-2">컴포넌트 라이브러리</h1>
              <p className="text-[var(--font-size-large)] text-[var(--color-text-secondary)]">
                Linear.app 테마를 기반으로 한 일관된 UI 컴포넌트 시스템
              </p>
            </div>

            {/* Buttons Section */}
            <section>
              <h2 className="text-[var(--font-size-title3)] font-semibold mb-6">버튼 (Button)</h2>
              
              <Card>
                <CardHeader>
                  <CardTitle>버튼 변형</CardTitle>
                  <CardDescription>다양한 스타일과 크기의 버튼 컴포넌트</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {/* Variants */}
                    <div>
                      <h4 className="text-sm font-medium mb-3">변형 (Variants)</h4>
                      <div className="flex flex-wrap gap-3">
                        <Button variant="primary">Primary</Button>
                        <Button variant="secondary">Secondary</Button>
                        <Button variant="ghost">Ghost</Button>
                      </div>
                    </div>

                    {/* Sizes */}
                    <div>
                      <h4 className="text-sm font-medium mb-3">크기 (Sizes)</h4>
                      <div className="flex flex-wrap items-center gap-3">
                        <Button size="sm">Small</Button>
                        <Button size="md">Medium</Button>
                        <Button size="lg">Large</Button>
                      </div>
                    </div>

                    {/* States */}
                    <div>
                      <h4 className="text-sm font-medium mb-3">상태 (States)</h4>
                      <div className="flex flex-wrap gap-3">
                        <Button loading>Loading</Button>
                        <Button disabled>Disabled</Button>
                        <Button variant="primary" icon="🚀" iconPosition="left">
                          With Icon
                        </Button>
                        <Button variant="secondary" icon="→" iconPosition="right">
                          With Icon
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Inputs Section */}
            <section>
              <h2 className="text-[var(--font-size-title3)] font-semibold mb-6">입력 (Input)</h2>
              
              <Card>
                <CardHeader>
                  <CardTitle>입력 필드</CardTitle>
                  <CardDescription>다양한 스타일과 상태의 입력 컴포넌트</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <Input label="기본 입력" placeholder="기본 입력 필드입니다" />
                      <Input label="에러 상태" placeholder="에러가 있는 입력" error="이 필드는 필수입니다" variant="error" />
                      <Input label="성공 상태" placeholder="성공한 입력" variant="success" />
                    </div>
                    
                    <div className="space-y-4">
                      <Input 
                        label="아이콘이 있는 입력" 
                        placeholder="왼쪽 아이콘" 
                        leftIcon={<span>🔍</span>}
                      />
                      <Input 
                        label="오른쪽 아이콘" 
                        placeholder="오른쪽 아이콘" 
                        rightIcon={<span>✓</span>}
                      />
                      <Input 
                        label="도움말 텍스트" 
                        placeholder="도움말이 있는 입력" 
                        helperText="이 필드는 선택사항입니다"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Cards Section */}
            <section>
              <h2 className="text-[var(--font-size-title3)] font-semibold mb-6">카드 (Card)</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>기본 카드</CardTitle>
                    <CardDescription>기본 스타일의 카드 컴포넌트</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-[var(--color-text-secondary)]">
                      이 카드는 기본적인 스타일을 가지고 있습니다.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Button variant="primary" size="sm">액션</Button>
                  </CardFooter>
                </Card>

                <Card variant="elevated">
                  <CardHeader>
                    <CardTitle>강조된 카드</CardTitle>
                    <CardDescription>그림자가 있는 카드</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-[var(--color-text-secondary)]">
                      이 카드는 그림자 효과로 강조되어 있습니다.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Button variant="secondary" size="sm">액션</Button>
                  </CardFooter>
                </Card>

                <Card variant="outlined" padding="lg">
                  <CardHeader>
                    <CardTitle>테두리 카드</CardTitle>
                    <CardDescription>테두리가 강조된 카드</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-[var(--color-text-secondary)]">
                      이 카드는 테두리로 구분됩니다.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Button variant="ghost" size="sm">액션</Button>
                  </CardFooter>
                </Card>
              </div>
            </section>

            {/* ImageCard Section */}
            <section>
              <h2 className="text-[var(--font-size-title3)] font-semibold mb-6">이미지 카드 (ImageCard)</h2>
              
              <div className="space-y-8">
                {/* Single ImageCard Examples */}
                <div>
                  <h4 className="text-sm font-medium mb-4">단일 이미지 카드</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <ImageCard
                      imageSrc="https://images.unsplash.com/photo-1504674900242-87fec7fbc09a?w=400&h=300&fit=crop"
                      imageAlt="음식 이미지"
                      title="맛있는 음식"
                      description="신선한 재료로 만든 건강한 요리"
                      footer={<Button variant="primary" size="sm">자세히 보기</Button>}
                    />
                    
                    <ImageCard
                      imageSrc="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=400&h=300&fit=crop"
                      imageAlt="카페 이미지"
                      title="아늑한 카페"
                      description="편안한 분위기에서 즐기는 커피"
                      imageHeight="lg"
                      showOverlay
                      overlayContent={<span className="text-white text-lg font-semibold">✨</span>}
                    />
                    
                    <ImageCard
                      imageSrc="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=300&fit=crop"
                      imageAlt="레스토랑 이미지"
                      title="고급 레스토랑"
                      description="특별한 날을 위한 프리미엄 다이닝"
                      variant="elevated"
                      imageHeight="xl"
                    />
                  </div>
                </div>

                {/* ImageCardGrid Example */}
                <div>
                  <h4 className="text-sm font-medium mb-4">이미지 카드 그리드</h4>
                  <ImageCardGrid
                    cards={[
                      {
                        id: '1',
                        imageSrc: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=300&fit=crop',
                        imageAlt: '피자',
                        title: '마르게리타 피자',
                        description: '신선한 모짜렐라와 바질'
                      },
                      {
                        id: '2',
                        imageSrc: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=400&h=300&fit=crop',
                        imageAlt: '샐러드',
                        title: '그린 샐러드',
                        description: '신선한 채소와 드레싱'
                      },
                      {
                        id: '3',
                        imageSrc: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop',
                        imageAlt: '파스타',
                        title: '크림 파스타',
                        description: '부드러운 크림 소스'
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

                {/* ImageCard Variants */}
                <div>
                  <h4 className="text-sm font-medium mb-4">이미지 카드 변형</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <ImageCard
                      imageSrc="https://images.unsplash.com/photo-1551218808-94e220e084d2?w=400&h=300&fit=crop"
                      imageAlt="커피"
                      title="아메리카노"
                      description="깊고 진한 커피의 맛"
                      variant="outlined"
                      imageHeight="sm"
                      imageFit="contain"
                    />
                    
                    <ImageCard
                      imageSrc="https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=300&fit=crop"
                      imageAlt="피자"
                      title="페퍼로니 피자"
                      description="매콤한 페퍼로니와 치즈"
                      variant="elevated"
                      imageHeight="md"
                      showOverlay
                      overlayContent={
                        <div className="text-center text-white">
                          <div className="text-2xl mb-2">🔥</div>
                          <div className="text-sm font-medium">HOT!</div>
                        </div>
                      }
                    />
                  </div>
                </div>
              </div>
            </section>

            {/* Navbar Section */}
            <section>
              <h2 className="text-[var(--font-size-title3)] font-semibold mb-6">네비게이션 바 (Navbar)</h2>
              
              <div className="space-y-8">
                {/* Default Navbar */}
                <div>
                  <h4 className="text-sm font-medium mb-4">기본 네비게이션 바</h4>
                  <div className="border border-[var(--color-border)] rounded-[var(--radius-lg)] overflow-hidden">
                    <Navbar variant="default" />
                  </div>
                </div>

                {/* Glass Navbar */}
                <div>
                  <h4 className="text-sm font-medium mb-4">글래스 효과 네비게이션 바</h4>
                  <div className="border border-[var(--color-border)] rounded-[var(--radius-lg)] overflow-hidden">
                    <Navbar variant="glass" />
                  </div>
                </div>

                {/* Transparent Navbar */}
                <div>
                  <h4 className="text-sm font-medium mb-4">투명 네비게이션 바</h4>
                  <div className="bg-gradient-to-r from-[var(--color-primary-brand)] to-[var(--color-primary-blue)] p-8 rounded-[var(--radius-lg)]">
                    <Navbar variant="transparent" />
                  </div>
                </div>
              </div>
            </section>

            {/* Hero Section */}
            <section>
              <h2 className="text-[var(--font-size-title3)] font-semibold mb-6">히어로 섹션 (Hero)</h2>
              
              <div className="space-y-12">
                {/* Default Hero */}
                <div>
                  <h4 className="text-sm font-medium mb-4">기본 히어로 섹션</h4>
                  <div className="border border-[var(--color-border)] rounded-[var(--radius-lg)] overflow-hidden">
                    <Hero variant="default" size="lg" />
                  </div>
                </div>

                {/* Centered Hero */}
                <div>
                  <h4 className="text-sm font-medium mb-4">중앙 정렬 히어로 섹션</h4>
                  <div className="border border-[var(--color-border)] rounded-[var(--radius-lg)] overflow-hidden">
                    <Hero variant="centered" size="md" />
                  </div>
                </div>

                {/* Split Hero */}
                <div>
                  <h4 className="text-sm font-medium mb-4">분할 히어로 섹션</h4>
                  <div className="border border-[var(--color-border)] rounded-[var(--radius-lg)] overflow-hidden">
                    <Hero variant="split" size="xl" />
                  </div>
                </div>

                {/* Hero with Background */}
                <div>
                  <h4 className="text-sm font-medium mb-4">배경 이미지가 있는 히어로 섹션</h4>
                  <div className="border border-[var(--color-border)] rounded-[var(--radius-lg)] overflow-hidden">
                    <Hero 
                      variant="centered" 
                      size="lg"
                      backgroundImage="https://images.unsplash.com/photo-1504674900242-87fec7fbc09a?w=1200&h=600&fit=crop"
                      overlay
                    />
                  </div>
                </div>
              </div>
            </section>

            {/* Footer Section */}
            <section>
              <h2 className="text-[var(--font-size-title3)] font-semibold mb-6">푸터 (Footer)</h2>
              
              <div className="space-y-8">
                {/* Default Footer */}
                <div>
                  <h4 className="text-sm font-medium mb-4">기본 푸터</h4>
                  <div className="border border-[var(--color-border)] rounded-[var(--radius-lg)] overflow-hidden">
                    <Footer variant="default" />
                  </div>
                </div>

                {/* Minimal Footer */}
                <div>
                  <h4 className="text-sm font-medium mb-4">미니멀 푸터</h4>
                  <div className="border border-[var(--color-border)] rounded-[var(--radius-lg)] overflow-hidden">
                    <Footer variant="minimal" />
                  </div>
                </div>

                {/* Extended Footer */}
                <div>
                  <h4 className="text-sm font-medium mb-4">확장 푸터</h4>
                  <div className="border border-[var(--color-border)] rounded-[var(--radius-lg)] overflow-hidden">
                    <Footer variant="extended" />
                  </div>
                </div>
              </div>
            </section>

            {/* Color Palette Section */}
            <section>
              <h2 className="text-[var(--font-size-title3)] font-semibold mb-6">색상 팔레트</h2>
              
              <Card>
                <CardHeader>
                  <CardTitle>Linear.app 테마 색상</CardTitle>
                  <CardDescription>프로젝트에서 사용되는 모든 색상</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {/* Primary Colors */}
                    <div>
                      <h4 className="text-sm font-medium mb-3">주요 색상</h4>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                        <div className="space-y-2">
                          <div className="w-full h-16 bg-[var(--color-primary-brand)] rounded-[var(--radius-md)]"></div>
                          <p className="text-xs text-center">Brand</p>
                        </div>
                        <div className="space-y-2">
                          <div className="w-full h-16 bg-[var(--color-primary-blue)] rounded-[var(--radius-md)]"></div>
                          <p className="text-xs text-center">Blue</p>
                        </div>
                        <div className="space-y-2">
                          <div className="w-full h-16 bg-[var(--color-primary-green)] rounded-[var(--radius-md)]"></div>
                          <p className="text-xs text-center">Green</p>
                        </div>
                        <div className="space-y-2">
                          <div className="w-full h-16 bg-[var(--color-primary-red)] rounded-[var(--radius-md)]"></div>
                          <p className="text-xs text-center">Red</p>
                        </div>
                      </div>
                    </div>

                    {/* Semantic Colors */}
                    <div>
                      <h4 className="text-sm font-medium mb-3">의미론적 색상</h4>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                        <div className="space-y-2">
                          <div className="w-full h-16 bg-[var(--color-success-base)] rounded-[var(--radius-md)]"></div>
                          <p className="text-xs text-center">Success</p>
                        </div>
                        <div className="space-y-2">
                          <div className="w-full h-16 bg-[var(--color-warning-base)] rounded-[var(--radius-md)]"></div>
                          <p className="text-xs text-center">Warning</p>
                        </div>
                        <div className="space-y-2">
                          <div className="w-full h-16 bg-[var(--color-error-base)] rounded-[var(--radius-md)]"></div>
                          <p className="text-xs text-center">Error</p>
                        </div>
                        <div className="space-y-2">
                          <div className="w-full h-16 bg-[var(--color-info-base)] rounded-[var(--radius-md)]"></div>
                          <p className="text-xs text-center">Info</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Typography Section */}
            <section>
              <h2 className="text-[var(--font-size-title3)] font-semibold mb-6">타이포그래피</h2>
              
              <Card>
                <CardHeader>
                  <CardTitle>텍스트 스타일</CardTitle>
                  <CardDescription>프로젝트에서 사용되는 모든 텍스트 스타일</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h1 className="text-[var(--font-size-title9)] font-bold mb-2">Title 9 - 가장 큰 제목</h1>
                      <h2 className="text-[var(--font-size-title6)] font-bold mb-2">Title 6 - 큰 제목</h2>
                      <h3 className="text-[var(--font-size-title4)] font-semibold mb-2">Title 4 - 중간 제목</h3>
                      <h4 className="text-[var(--font-size-title2)] font-medium mb-2">Title 2 - 작은 제목</h4>
                      <p className="text-[var(--font-size-large)] mb-2">Large - 큰 본문 텍스트</p>
                      <p className="text-[var(--font-size-regular)] mb-2">Regular - 기본 본문 텍스트</p>
                      <p className="text-[var(--font-size-small)] mb-2">Small - 작은 텍스트</p>
                      <p className="text-[var(--font-size-mini)] text-[var(--color-text-secondary)]">Mini - 가장 작은 텍스트</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </section>
          </div>
        </main>
      </div>
    </>
  );
}
