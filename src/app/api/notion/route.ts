import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const response = await fetch(
      `https://api.notion.com/v1/databases/${process.env.NEXT_PUBLIC_NOTION_PAGE_ID}/query`,
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_NOTION_API_KEY}`,
          'Content-Type': 'application/json',
          'Notion-Version': '2022-06-28',
        },
        body: JSON.stringify(body),
      }
    );

    if (!response.ok) {
      throw new Error(`Notion API responded with status: ${response.status}`);
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error('Notion API Error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch from Notion API' },
      { status: 500 }
    );
  }
}
