import React, { useState } from 'react';
import { cn } from '../../utils/cn';
import { Button } from './Button';

export interface NavbarProps {
  variant?: 'default' | 'transparent' | 'glass';
  sticky?: boolean;
  className?: string;
}

export const Navbar: React.FC<NavbarProps> = ({
  variant = 'default',
  sticky = true,
  className
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const baseClasses = 'w-full transition-all duration-200';
  
  const variantClasses = {
    default: 'bg-[var(--color-surface)] border-b border-[var(--color-border)]',
    transparent: 'bg-transparent',
    glass: 'bg-[var(--color-surface)]/80 backdrop-blur-[var(--blur-header)] border-b border-[var(--color-border)]'
  };

  const stickyClasses = sticky ? 'sticky top-0 z-[var(--z-docked)]' : '';

  return (
    <nav className={cn(baseClasses, variantClasses[variant], stickyClasses, className)}>
      <div className="max-w-[var(--page-max-width)] mx-auto px-[var(--page-padding)]">
        <div className="h-[var(--header-height)] flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-[var(--color-primary-brand)] rounded-[var(--radius-md)] flex items-center justify-center">
              <span className="text-white font-bold text-xl">T</span>
            </div>
            <div>
              <h1 className="text-xl font-semibold text-[var(--color-text)]">thisisflyers</h1>
              <p className="text-sm text-[var(--color-text-secondary)]">AI 기반 디지털 마케팅 플랫폼</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <a href="/landing" className="text-[var(--color-text-secondary)] hover:text-[var(--color-text)] transition-colors px-3 py-2 rounded-[var(--radius-md)] hover:bg-[var(--color-surface-darker)]">
              홈
            </a>
            <a href="/services" className="text-[var(--color-text-secondary)] hover:text-[var(--color-text)] transition-colors px-3 py-2 rounded-[var(--radius-md)] hover:bg-[var(--color-surface-darker)]">
              서비스
            </a>
            <a href="/pricing" className="text-[var(--color-text-secondary)] hover:text-[var(--color-text)] transition-colors px-3 py-2 rounded-[var(--radius-md)] hover:bg-[var(--color-surface-darker)]">
              가격
            </a>
            <a href="#" className="text-[var(--color-text-secondary)] hover:text-[var(--color-text)] transition-colors px-3 py-2 rounded-[var(--radius-md)] hover:bg-[var(--color-surface-darker)]">
              도움말
            </a>
            <a href="#" className="text-[var(--color-text-secondary)] hover:text-[var(--color-text)] transition-colors px-3 py-2 rounded-[var(--radius-md)] hover:bg-[var(--color-surface-darker)]">
              문의
            </a>
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="/app" className="inline-block">
              <Button variant="ghost" size="sm">
                마케팅 시작
              </Button>
            </a>
            <a href="/app" className="inline-block">
              <Button variant="primary" size="sm">
                시작하기
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-[var(--radius-md)] hover:bg-[var(--color-surface-darker)] transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6 text-[var(--color-text)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-[var(--color-border)] py-4 space-y-2">
            <a href="/landing" className="block px-3 py-2 text-[var(--color-text-secondary)] hover:text-[var(--color-text)] hover:bg-[var(--color-surface-darker)] rounded-[var(--radius-md)] transition-colors">
              홈
            </a>
            <a href="/services" className="block px-3 py-2 text-[var(--color-text-secondary)] hover:text-[var(--color-text)] hover:bg-[var(--color-surface-darker)] rounded-[var(--radius-md)] transition-colors">
              서비스
            </a>
            <a href="/pricing" className="block px-3 py-2 text-[var(--color-text-secondary)] hover:text-[var(--color-text)] hover:bg-[var(--color-surface-darker)] rounded-[var(--radius-md)] transition-colors">
              가격
            </a>
            <a href="#" className="block px-3 py-2 text-[var(--color-text-secondary)] hover:text-[var(--color-text)] hover:bg-[var(--color-surface-darker)] rounded-[var(--radius-md)] transition-colors">
              도움말
            </a>
            <a href="#" className="block px-3 py-2 text-[var(--color-text-secondary)] hover:text-[var(--color-text)] hover:bg-[var(--color-surface-darker)] rounded-[var(--radius-md)] transition-colors">
              문의
            </a>
            <div className="pt-4 space-y-2">
              <a href="/app" className="inline-block w-full">
                <Button variant="ghost" size="sm" className="w-full justify-center">
                  전단지 등록
                </Button>
              </a>
              <a href="/app" className="inline-block w-full">
                <Button variant="primary" size="sm" className="w-full justify-center">
                  시작하기
                </Button>
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
