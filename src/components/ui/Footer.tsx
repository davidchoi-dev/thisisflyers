import React from 'react';
import { cn } from '../../utils/cn';
import { Button } from './Button';

export interface FooterProps {
  variant?: 'default' | 'minimal' | 'extended';
  className?: string;
}

export const Footer: React.FC<FooterProps> = ({
  variant = 'default',
  className
}) => {
  const currentYear = new Date().getFullYear();

  if (variant === 'minimal') {
    return (
      <footer className={cn('w-full border-t border-[var(--color-border)] py-8', className)}>
        <div className="max-w-[var(--page-max-width)] mx-auto px-[var(--page-padding)]">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-[var(--color-primary-brand)] rounded-[var(--radius-md)] flex items-center justify-center">
                <span className="text-[var(--color-text-inverse)] font-bold text-sm">T</span>
              </div>
              <span className="text-[var(--color-text)] font-semibold">thisisflyers</span>
            </div>
            <div className="text-sm text-[var(--color-text-secondary)]">
              © {currentYear} thisisflyers. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    );
  }

  if (variant === 'extended') {
    return (
      <footer className={cn('w-full border-t border-[var(--color-border)] bg-[var(--color-surface-darker)]', className)}>
        <div className="max-w-[var(--page-max-width)] mx-auto px-[var(--page-padding)]">
          {/* Main Footer Content */}
          <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-[var(--color-primary-brand)] rounded-[var(--radius-md)] flex items-center justify-center">
                  <span className="text-[var(--color-text-inverse)] font-bold text-xl">T</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[var(--color-text)]">thisisflyers</h3>
                  <p className="text-sm text-[var(--color-text-secondary)]">AI 기반 디지털 마케팅 플랫폼</p>
                </div>
              </div>
              <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
                지역 비즈니스의 디지털 마케팅을 혁신하는 AI 플랫폼입니다.
              </p>
              <div className="flex space-x-4">
                <Button variant="ghost" size="sm" className="p-2">
                  <span className="sr-only">Facebook</span>
                  📘
                </Button>
                <Button variant="ghost" size="sm" className="p-2">
                  <span className="sr-only">Twitter</span>
                  🐦
                </Button>
                <Button variant="ghost" size="sm" className="p-2">
                  <span className="sr-only">Instagram</span>
                  📷
                </Button>
                <Button variant="ghost" size="sm" className="p-2">
                  <span className="sr-only">LinkedIn</span>
                  💼
                </Button>
              </div>
            </div>

            {/* Product */}
            <div className="space-y-4">
              <h4 className="text-sm font-semibold text-[var(--color-text)] uppercase tracking-wider">제품</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-text)] transition-colors">
                    마케팅 콘텐츠 제작
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-text)] transition-colors">
                    템플릿 갤러리
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-text)] transition-colors">
                    분석 대시보드
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-text)] transition-colors">
                    API 연동
                  </a>
                </li>
              </ul>
            </div>

            {/* Company */}
            <div className="space-y-4">
              <h4 className="text-sm font-semibold text-[var(--color-text)] uppercase tracking-wider">회사</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-text)] transition-colors">
                    회사 소개
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-text)] transition-colors">
                    팀
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-text)] transition-colors">
                    채용
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-text)] transition-colors">
                    뉴스
                  </a>
                </li>
              </ul>
            </div>

            {/* Support */}
            <div className="space-y-4">
              <h4 className="text-sm font-semibold text-[var(--color-text)] uppercase tracking-wider">지원</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-text)] transition-colors">
                    도움말 센터
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-text)] transition-colors">
                    커뮤니티
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-text)] transition-colors">
                    문의하기
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-text)] transition-colors">
                    상태 확인
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Newsletter */}
          <div className="py-8 border-t border-[var(--color-border)]">
            <div className="max-w-md">
              <h4 className="text-sm font-semibold text-[var(--color-text)] mb-3">뉴스레터 구독</h4>
              <p className="text-sm text-[var(--color-text-secondary)] mb-4">
                최신 업데이트와 팁을 받아보세요.
              </p>
              <div className="flex space-x-2">
                <input
                  type="email"
                  placeholder="이메일 주소"
                  className="flex-1 px-3 py-2 bg-[var(--color-surface)] border border-[var(--color-border)] text-[var(--color-text)] placeholder-[var(--color-text-muted)] rounded-[var(--radius-md)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary-brand)] focus:border-[var(--color-primary-brand)] transition-all duration-200"
                />
                <Button variant="primary" size="sm">
                  구독
                </Button>
              </div>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="py-8 border-t border-[var(--color-border)]">
            <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
              <div className="text-sm text-[var(--color-text-secondary)]">
                © {currentYear} thisisflyers. All rights reserved.
              </div>
              <div className="flex space-x-6 text-sm text-[var(--color-text-secondary)]">
                <a href="#" className="hover:text-[var(--color-text)] transition-colors">개인정보처리방침</a>
                <a href="#" className="hover:text-[var(--color-text)] transition-colors">이용약관</a>
                <a href="#" className="hover:text-[var(--color-text)] transition-colors">쿠키 정책</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }

  // Default variant
  return (
    <footer className={cn('w-full border-t border-[var(--color-border)] py-12', className)}>
      <div className="max-w-[var(--page-max-width)] mx-auto px-[var(--page-padding)]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-[var(--color-primary-brand)] rounded-[var(--radius-md)] flex items-center justify-center">
                <span className="text-[var(--color-text-inverse)] font-bold text-xl">T</span>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[var(--color-text)]">thisisflyers</h3>
                <p className="text-sm text-[var(--color-text-secondary)]">AI 기반 디지털 마케팅 플랫폼</p>
              </div>
            </div>
            <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
              지역 비즈니스의 디지털 마케팅을 혁신하는 AI 플랫폼입니다.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-[var(--color-text)] uppercase tracking-wider">빠른 링크</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-text)] transition-colors">
                  서비스 소개
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-text)] transition-colors">
                  가격 정책
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-text)] transition-colors">
                  도움말
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-text)] transition-colors">
                  문의하기
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-[var(--color-text)] uppercase tracking-wider">연락처</h4>
            <div className="space-y-2 text-sm text-[var(--color-text-secondary)]">
              <p>📧 hello@thisisflyers.com</p>
              <p>📞 02-1234-5678</p>
              <p>📍 서울특별시 강남구</p>
            </div>
            <div className="flex space-x-3">
              <Button variant="ghost" size="sm" className="p-2">
                📘
              </Button>
              <Button variant="ghost" size="sm" className="p-2">
                🐦
              </Button>
              <Button variant="ghost" size="sm" className="p-2">
                📷
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-8 pt-8 border-t border-[var(--color-border)] text-center">
          <p className="text-sm text-[var(--color-text-secondary)]">
            © {currentYear} thisisflyers. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
