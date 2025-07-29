import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const notionUrl = `https://api.notion.com/v1/databases/${process.env.NEXT_PUBLIC_NOTION_PAGE_ID}/query`;

  try {
    const response = await axios.post(
      notionUrl,
      {}, // body 내용 (필요 시 수정)
      {
        headers: {
          "Authorization": `Bearer ${process.env.NEXT_PUBLIC_NOTION_API_KEY}`,
          "Notion-Version": "2022-06-28",
          "Content-Type": "application/json",
        },
      }
    );

    res.status(200).json(response.data);
  } catch (error: any) {
    console.error("❌ Notion API Error:", error.response?.data || error.message);
    res.status(error.response?.status || 500).json({ error: "Failed to fetch data from Notion" });
  }
}