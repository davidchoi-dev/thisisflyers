export interface FlyerData {
  id: string;
  title: string;
  description: string;
  businessName: string;
  businessType: 'restaurant' | 'cafe' | 'retail' | 'service' | 'other';
  location: {
    address: string;
    latitude: number;
    longitude: number;
    radius: number; // km 단위
  };
  content: {
    imageUrl?: string;
    text: string;
    callToAction: string;
    offer?: string;
  };
  targeting: {
    ageRange: [number, number];
    interests: string[];
    maxDistance: number; // km 단위
  };
  budget: {
    dailyBudget: number;
    totalBudget: number;
    spent: number;
  };
  schedule: {
    startDate: Date;
    endDate: Date;
    activeHours: {
      start: string; // HH:MM 형식
      end: string;   // HH:MM 형식
    };
  };
  status: 'draft' | 'active' | 'paused' | 'completed';
  createdAt: Date;
  updatedAt: Date;
  analytics: {
    impressions: number;
    clicks: number;
    conversions: number;
    ctr: number; // Click Through Rate
    cpc: number; // Cost Per Click
    cpm: number; // Cost Per Mille (1000 impressions)
  };
}

export interface FlyerFormData {
  title: string;
  description: string;
  businessName: string;
  businessType: FlyerData['businessType'];
  address: string;
  radius: number;
  text: string;
  callToAction: string;
  offer?: string;
  ageRange: [number, number];
  interests: string[];
  maxDistance: number;
  dailyBudget: number;
  totalBudget: number;
  startDate: string;
  endDate: string;
  startTime: string;
  endTime: string;
}

export interface LocationData {
  address: string;
  latitude: number;
  longitude: number;
  formattedAddress: string;
}

export interface BusinessType {
  value: FlyerData['businessType'];
  label: string;
  icon: string;
}

export const BUSINESS_TYPES: BusinessType[] = [
  { value: 'restaurant', label: '음식점', icon: '🍽️' },
  { value: 'cafe', label: '카페', icon: '☕' },
  { value: 'retail', label: '소매점', icon: '🛍️' },
  { value: 'service', label: '서비스업', icon: '🔧' },
  { value: 'other', label: '기타', icon: '🏪' },
];

export interface InterestTag {
  value: string;
  label: string;
  category: string;
}

export const INTEREST_TAGS: InterestTag[] = [
  { value: 'food', label: '음식', category: 'lifestyle' },
  { value: 'coffee', label: '커피', category: 'lifestyle' },
  { value: 'shopping', label: '쇼핑', category: 'lifestyle' },
  { value: 'beauty', label: '뷰티', category: 'lifestyle' },
  { value: 'fitness', label: '피트니스', category: 'health' },
  { value: 'education', label: '교육', category: 'career' },
  { value: 'entertainment', label: '엔터테인먼트', category: 'lifestyle' },
  { value: 'travel', label: '여행', category: 'lifestyle' },
  { value: 'technology', label: '기술', category: 'career' },
  { value: 'finance', label: '금융', category: 'career' },
];
