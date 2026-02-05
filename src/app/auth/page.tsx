"use client";

import { useEffect, useState } from "react";

import { useRouter, useSearchParams } from "next/navigation";

export default function AuthPage() {
  const [status, setStatus] = useState<"loading" | "success" | "error">(
    "loading"
  );
  const [message, setMessage] = useState("인증 처리 중...");
  const searchParams = useSearchParams();
  const router = useRouter();

  useEffect(() => {
    const handleAuth = async () => {
      const code = searchParams.get("code");
      const error = searchParams.get("error");

      if (error) {
        setStatus("error");
        setMessage(`인증 오류: ${error}`);
        return;
      }

      if (!code) {
        setStatus("error");
        setMessage("인증 코드가 없습니다.");
        return;
      }

      try {
        // 토큰 교환 요청
        const response = await fetch("/api/auth/threads", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ code }),
        });

        const data = await response.json();

        if (response.ok) {
          setStatus("success");
          setMessage("인증 성공! 메인 페이지로 이동합니다...");

          // 토큰을 localStorage에 저장
          if (data.access_token) {
            localStorage.setItem("threads_access_token", data.access_token);
            localStorage.setItem(
              "threads_refresh_token",
              data.refresh_token || ""
            );
          }

          // 2초 후 메인 페이지로 이동
          setTimeout(() => {
            router.push("/");
          }, 2000);
        } else {
          setStatus("error");
          setMessage(`인증 실패: ${data.error || "알 수 없는 오류"}`);
        }
      } catch (error) {
        console.error("Auth error:", error);
        setStatus("error");
        setMessage("네트워크 오류가 발생했습니다.");
      }
    };

    handleAuth();
  }, [searchParams, router]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50">
      <div className="w-full max-w-md rounded-lg bg-white p-8 shadow-md">
        <div className="text-center">
          {status === "loading" && (
            <div className="mx-auto mb-4 h-12 w-12 animate-spin rounded-full border-b-2 border-blue-600"></div>
          )}

          {status === "success" && (
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
              <svg
                className="h-6 w-6 text-green-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
          )}

          {status === "error" && (
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-red-100">
              <svg
                className="h-6 w-6 text-red-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </div>
          )}

          <h1 className="mb-2 text-2xl font-bold text-gray-900">
            Threads 인증
          </h1>

          <p className="mb-6 text-gray-600">{message}</p>

          {status === "error" && (
            <button
              onClick={() => router.push("/")}
              className="w-full rounded-md bg-blue-600 px-4 py-2 text-white transition-colors hover:bg-blue-700"
            >
              메인 페이지로 돌아가기
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
