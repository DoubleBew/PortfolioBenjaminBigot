import { NextResponse } from 'next/server';

type CountikStats = {
  followerCount?: number;
  heartCount?: number;
};

function formatCount(count: number): string {
  return count >= 1000 ? `${(count / 1000).toFixed(1)}K` : String(count);
}

export async function GET() {
  const stats = {
    tiktok: {
      handle: '@jour.de.stade',
      followers: '2.4K',
      likes: '128.5K',
    },
    instagram: {
      handle: '@jour_de_stade',
      followers: '1.2K',
      trend: '+15% ce mois',
    },
    isLive: true,
    updatedAt: new Date().toISOString(),
  };

  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 2000);

  try {
    const ttRes = await fetch('https://countik.com/api/user/exist/jour.de.stade', {
      headers: { 'User-Agent': 'Mozilla/5.0' },
      signal: controller.signal,
      next: { revalidate: 300 },
    });

    if (ttRes.ok) {
      const ttData = (await ttRes.json()) as CountikStats;
      if (typeof ttData.followerCount === 'number' && ttData.followerCount >= 0) {
        stats.tiktok.followers = formatCount(ttData.followerCount);
      }
      if (typeof ttData.heartCount === 'number' && ttData.heartCount >= 0) {
        stats.tiktok.likes = formatCount(ttData.heartCount);
      }
    }

    return NextResponse.json(stats);
  } catch {
    return NextResponse.json(stats);
  } finally {
    clearTimeout(timeoutId);
  }
}
