import { NextResponse } from 'next/server';

export const revalidate = 300;

type CountikUserStats = {
  followerCount?: number;
  heartCount?: number;
};

const fallbackStats = {
  tiktok: {
    handle: '@jour.de.stade',
    views: '128.5K+',
    followers: 'Indisponible',
    engagement: 'Élevé',
  },
  instagram: {
    handle: '@jour_de_stade',
    trend: 'En hausse',
    status: 'Actif',
  },
};

function formatCount(value: unknown): string | null {
  if (typeof value !== 'number' || !Number.isFinite(value) || value < 0) {
    return null;
  }

  return value >= 1000 ? `${(value / 1000).toFixed(1)}K` : String(value);
}

export async function GET() {
  try {
    const response = await fetch('https://countik.com/api/user/exist/jour.de.stade', {
      next: { revalidate: 300 },
    });

    if (!response.ok) {
      throw new Error(`Countik returned HTTP ${response.status}`);
    }

    const data = (await response.json()) as CountikUserStats;
    const followers = formatCount(data.followerCount);
    const likes = formatCount(data.heartCount);
    const isLive = Boolean(followers || likes);

    return NextResponse.json({
      tiktok: {
        handle: '@jour.de.stade',
        views: likes ?? fallbackStats.tiktok.views,
        followers: followers ?? fallbackStats.tiktok.followers,
        engagement: fallbackStats.tiktok.engagement,
      },
      instagram: fallbackStats.instagram,
      isLive,
      updatedAt: new Date().toISOString(),
      ...(!isLive && { error: 'Countik returned no usable TikTok stats.' }),
    });
  } catch (error) {
    console.error('Unable to retrieve Jour de Stade social stats:', error);

    return NextResponse.json({
      ...fallbackStats,
      isLive: false,
      updatedAt: new Date().toISOString(),
      error: 'Live TikTok stats are currently unavailable.',
    });
  }
}
