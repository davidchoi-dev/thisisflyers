import React from 'react';
import Head from 'next/head';
import { FlyerPlatform } from '../components/FlyerPlatform';

export default function AppPage() {
  return (
    <>
      <Head>
        <title>thisisflyers - AI 마케팅 대시보드</title>
        <meta name="description" content="thisisflyers AI 기반 마케팅 캠페인 제작 및 관리 대시보드" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <FlyerPlatform />
    </>
  );
}
