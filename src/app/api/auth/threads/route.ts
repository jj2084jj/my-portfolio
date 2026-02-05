import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { code } = await request.json();

    if (!code) {
      return NextResponse.json(
        { error: '인증 코드가 필요합니다.' },
        { status: 400 }
      );
    }

    const clientId = process.env.THREADS_CLIENT_ID;
    const clientSecret = process.env.THREADS_CLIENT_SECRET;
    const redirectUri = process.env.THREADS_REDIRECT_URI || 'https://jenny-my-portfolio.netlify.app/';

    if (!clientId || !clientSecret) {
      return NextResponse.json(
        { error: '서버 설정 오류: 환경 변수가 설정되지 않았습니다.' },
        { status: 500 }
      );
    }

    // Threads API에 토큰 교환 요청
    const tokenResponse = await fetch('https://graph.threads.net/oauth/access_token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        client_id: clientId,
        client_secret: clientSecret,
        grant_type: 'authorization_code',
        redirect_uri: redirectUri,
        code: code,
      }),
    });

    const tokenData = await tokenResponse.json();

    if (!tokenResponse.ok) {
      return NextResponse.json(
        { error: '토큰 교환 실패', details: tokenData },
        { status: 400 }
      );
    }

    // 토큰 정보를 클라이언트에 반환
    return NextResponse.json({
      access_token: tokenData.access_token,
      refresh_token: tokenData.refresh_token,
      expires_in: tokenData.expires_in,
      token_type: tokenData.token_type,
    });

  } catch (error) {
    console.error('Threads OAuth error:', error);
    return NextResponse.json(
      { error: '서버 내부 오류가 발생했습니다.' },
      { status: 500 }
    );
  }
}
