import React, { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    // 메인 페이지 접속 시 랜딩페이지로 리다이렉트
    router.push('/landing');
  }, [router]);

  // 리다이렉트 중일 때 표시할 로딩 화면
  return (
    <div className="min-h-screen bg-[var(--color-background)] flex items-center justify-center">
      <div className="text-center">
        <div className="w-16 h-16 bg-[var(--color-primary-brand)] rounded-[var(--radius-lg)] flex items-center justify-center mx-auto mb-4">
          <span className="text-white font-bold text-2xl">T</span>
        </div>
        <h1 className="text-2xl font-bold text-[var(--color-text)] mb-2">thisisflyers</h1>
        <p className="text-[var(--color-text-secondary)]">로딩 중...</p>
      </div>
    </div>
  );
}
