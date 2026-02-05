# Threads OAuth 환경 변수 설정

## 1. `.env.local` 파일 생성

프로젝트 루트에 `.env.local` 파일을 생성하고 다음 내용을 추가하세요:

```env
THREADS_CLIENT_ID=your_client_id_here
THREADS_CLIENT_SECRET=your_client_secret_here
THREADS_REDIRECT_URI=https://jenny-my-portfolio.netlify.app/
```

## 2. 환경 변수 값 얻기

1. [Meta Developers](https://developers.meta.com/)에 접속
2. 앱 생성 또는 기존 앱 선택
3. Threads API 설정
4. OAuth 설정에서 다음 정보 확인:
   - **App ID** → `THREADS_CLIENT_ID`
   - **App Secret** → `THREADS_CLIENT_SECRET`
   - **Redirect URIs** → `https://jenny-my-portfolio.netlify.app/auth` 추가

## 3. OAuth URL 예시

```
https://threads.net/oauth/authorize
?client_id=YOUR_CLIENT_ID
&redirect_uri=https://jenny-my-portfolio.netlify.app/auth
&scope=threads_basic,threads_content_publish
&response_type=code
```

## 4. 주의사항

- `.env.local` 파일은 `.gitignore`에 포함되어 있어 Git에 추적되지 않습니다
- 실제 배포 시에는 배포 플랫폼(Netlify 등)에 환경 변수를 직접 설정해야 합니다
- Client Secret은 절대 공개되면 안 됩니다
