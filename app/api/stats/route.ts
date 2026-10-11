import { NextResponse } from 'next/server';

export async function GET() {
  const fallbackStats = {
    tiktok: {
      handle: '@jour.de.stade',
      views: '128.5K+',
      followers: 'En direct',
      engagement: 'Élevé',
    },
    instagram: {
      handle: '@jour_de_stade',
      trend: 'En croissance',
      status: 'Actif',
    },
    isLive: true,
    updatedAt: new Date().toISOString(),
  };

  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 2500);

  try {
    const ttRes = await fetch('https://countik.com/api/user/exist/jour.de.stade', {
      headers: {
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
      },
      signal: controller.signal,
      next: { revalidate: 300 },
    });

    if (ttRes.ok) {
      const ttData = await ttRes.json();
      if (ttData?.followerCount) {
        fallbackStats.tiktok.followers = `${(ttData.followerCount / 1000).toFixed(1)}K`;
      }
      if (ttData?.heartCount) {
        fallbackStats.tiktok.views = `${(ttData.heartCount / 1000).toFixed(1)}K+`;
      }
    }

    return NextResponse.json(fallbackStats);
  } catch {
    return NextResponse.json(fallbackStats);
  } finally {
    clearTimeout(timeoutId);
  }
}
