# thisisflyers

AI 기반 디지털 마케팅 플랫폼으로, 지역 비즈니스의 마케팅을 혁신하는 스마트 솔루션입니다.

## 🚀 주요 기능

- **AI 기반 타겟팅**: 고객의 관심사와 위치를 분석하여 최적의 타겟을 자동으로 설정
- **전단지 디자인**: 전문 디자이너가 제작한 템플릿으로 아름다운 전단지를 쉽게 제작
- **실시간 분석**: 전단지 성과를 실시간으로 추적하고 고객 반응을 분석
- **모바일 최적화**: 모든 디바이스에서 완벽하게 표시되는 반응형 전단지
- **자동화 마케팅**: 고객 행동에 따라 자동으로 마케팅 메시지를 전송
- **통합 관리**: 모든 마케팅 활동을 한 곳에서 통합 관리

## 🛠️ 기술 스택

- **Frontend**: Next.js 14, React 18, TypeScript
- **Styling**: Tailwind CSS, CSS Variables
- **Design System**: Linear.app 테마 기반
- **State Management**: React Hooks
- **Build Tool**: Next.js Built-in

## 🎨 디자인 시스템

- **테마**: 다크/라이트 모드 지원
- **컴포넌트**: 재사용 가능한 UI 컴포넌트 라이브러리
- **색상**: 일관된 색상 팔레트와 접근성 고려
- **타이포그래피**: Inter 폰트 기반의 가독성 최적화

## 📁 프로젝트 구조

```
src/
├── components/          # 재사용 가능한 컴포넌트
│   ├── ui/             # 기본 UI 컴포넌트
│   ├── FlyerCreator.tsx    # 전단지 제작 컴포넌트
│   ├── FlyerList.tsx       # 전단지 목록 컴포넌트
│   └── Analytics.tsx       # 분석 대시보드 컴포넌트
├── pages/              # Next.js 페이지
│   ├── landing.tsx     # 랜딩 페이지
│   ├── app.tsx         # 메인 앱 페이지
│   ├── services.tsx    # 서비스 소개 페이지
│   ├── pricing.tsx     # 가격 정책 페이지
│   └── components.tsx  # 컴포넌트 라이브러리
├── styles/             # 전역 스타일
│   ├── globals.css     # 전역 CSS
│   └── theme.css       # 테마 변수
├── types/              # TypeScript 타입 정의
└── utils/              # 유틸리티 함수
```

## 🚀 시작하기

### 필수 요구사항

- Node.js 18.0.0 이상
- npm 9.0.0 이상

### 설치 및 실행

1. **저장소 클론**
   ```bash
   git clone https://github.com/yourusername/thisisflyers.git
   cd thisisflyers
   ```

2. **의존성 설치**
   ```bash
   npm install
   ```

3. **개발 서버 실행**
   ```bash
   npm run dev
   ```

4. **브라우저에서 확인**
   ```
   http://localhost:3000
   ```

### 빌드 및 배포

```bash
# 프로덕션 빌드
npm run build

# 프로덕션 서버 실행
npm start

# 린트 검사
npm run lint

# 타입 체크
npm run type-check
```

## 🎯 주요 페이지

- **`/`**: 메인 페이지 (랜딩페이지로 리다이렉트)
- **`/landing`**: 랜딩 페이지 - 서비스 소개 및 CTA
- **`/app`**: 메인 애플리케이션 - 전단지 제작 및 관리
- **`/services`**: 서비스 상세 소개
- **`/pricing`**: 가격 정책 및 플랜
- **`/components`**: UI 컴포넌트 라이브러리

## 🎨 컴포넌트 시스템

### 기본 컴포넌트
- **Button**: 다양한 변형과 크기를 지원하는 버튼
- **Input**: 폼 입력 필드와 검증
- **Card**: 콘텐츠를 담는 카드 컴포넌트
- **ImageCard**: 이미지가 포함된 카드

### 레이아웃 컴포넌트
- **Navbar**: 네비게이션 바
- **Hero**: 히어로 섹션
- **Footer**: 푸터

## 🌙 테마 시스템

- **다크 모드**: 기본 테마로 가독성과 접근성 최적화
- **라이트 모드**: 밝은 환경에서의 사용성 향상
- **CSS 변수**: 일관된 디자인 토큰 관리
- **접근성**: WCAG 가이드라인 준수

## 📱 반응형 디자인

- **모바일 우선**: 모바일 디바이스에 최적화
- **태블릿**: 중간 크기 화면 지원
- **데스크톱**: 큰 화면에서의 풍부한 경험

## 🔧 개발 환경

### 스크립트

```json
{
  "dev": "next dev",
  "build": "next build",
  "start": "next start",
  "lint": "next lint",
  "type-check": "tsc --noEmit"
}
```

### 환경 변수

```bash
# .env.local 예시
NEXT_PUBLIC_API_URL=http://localhost:3000/api
```

## 🤝 기여하기

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 라이선스

이 프로젝트는 MIT 라이선스 하에 배포됩니다. 자세한 내용은 `LICENSE` 파일을 참조하세요.

## 📞 연락처

- **프로젝트 링크**: [https://github.com/yourusername/thisisflyers](https://github.com/yourusername/thisisflyers)
- **이메일**: hello@thisisflyers.com

## 🙏 감사의 말

- [Linear.app](https://linear.app) - 디자인 시스템 영감
- [Next.js](https://nextjs.org) - React 프레임워크
- [Tailwind CSS](https://tailwindcss.com) - CSS 프레임워크
- [Inter](https://rsms.me/inter/) - 타이포그래피

---

⭐ 이 프로젝트가 도움이 되었다면 스타를 눌러주세요!
