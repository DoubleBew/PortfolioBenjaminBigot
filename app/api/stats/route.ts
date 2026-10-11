import { NextResponse } from 'next/server';

type CountikStats = {
  followerCount?: number;
  heartCount?: number;
};

export async function GET() {
  const fallbackStats = {
    tiktok: {
      handle: '@jour.de.stade',
      views: '128.5K+',
      followers: 'En direct',
      likes: 'En direct',
    },
    instagram: {
      handle: '@jour_de_stade',
      followers: 'En direct',
      trend: 'En croissance',
    },
    isLive: true,
    updatedAt: new Date().toISOString(),
  };

  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 2500);

  try {
    const ttRes = await fetch('https://countik.com/api/user/exist/jour.de.stade', {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
      },
      signal: controller.signal,
      next: { revalidate: 300 },
    });

    if (ttRes.ok) {
      const ttData = (await ttRes.json()) as CountikStats;
      if (typeof ttData.followerCount === 'number' && ttData.followerCount > 0) {
        fallbackStats.tiktok.followers = `${(ttData.followerCount / 1000).toFixed(1)}K`;
      }
      if (typeof ttData.heartCount === 'number' && ttData.heartCount > 0) {
        fallbackStats.tiktok.likes = `${(ttData.heartCount / 1000).toFixed(1)}K`;
      }
    }

    return NextResponse.json(fallbackStats);
  } catch {
    return NextResponse.json(fallbackStats);
  } finally {
    clearTimeout(timeoutId);
  }
}
