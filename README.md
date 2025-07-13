# Blog Community

최신 트렌드의 UI/UX와 다양한 기능을 갖춘 블로그/커뮤니티 웹앱입니다.
<img width="2797" height="1316" alt="image" src="https://github.com/user-attachments/assets/55eed1fd-5e98-4c02-9c0e-da9eb3b38716" />
<img width="2829" height="1298" alt="image" src="https://github.com/user-attachments/assets/ab6571a6-c93d-4118-9b65-824e6fcb0a64" />


## 주요 특징
- **2025 트렌드 반영**: 글래스모피즘, 미니멀, 그라데이션, 반응형 등 최신 디자인 적용
- **인기글/포트폴리오/ABOUT** 등 다양한 페이지 제공
- **소셜 로그인 UI** (Google, 카카오 등)
- **회원가입/로그인/비밀번호 재설정** 등 인증 관련 UX 강화
- **MUI(Material UI) 기반 컴포넌트**
- **TypeScript** 기반 안정적 개발

## 기술 스택
- React 18+
- TypeScript
- Vite
- Material UI (MUI)
- Framer Motion (애니메이션)
- Supabase (인증/DB)
- Pretendard, Inter (폰트)

## 설치 및 실행
```bash
# 1. 저장소 클론
$ git clone <레포주소>
$ cd Blog

# 2. 패키지 설치
$ npm install

# 3. 개발 서버 실행
$ npm run dev
```

## 폴더 구조 (예시)
```
Blog/
  src/
    components/   # UI 컴포넌트
    pages/        # 각종 페이지 (Home, Login, Signup, ...)
    data/         # mock 데이터
    store/        # 상태관리
    lib/          # 외부 라이브러리 래퍼
    index.css     # 글로벌 스타일
  README.md
```

## 커스텀 스타일링
- **index.css**에서 글로벌 폰트, 배경, 스크롤바, 카드 등 최신 트렌드 스타일 적용
- 각 페이지별로 MUI의 sx prop, Paper, Button, TextField 등으로 세밀한 스타일 조정
- 소셜 로그인, 카드, 버튼 등은 실제 서비스 UI와 유사하게 구현

## 기여 방법
1. 이슈/PR 등록 전 `main` 브랜치 최신화 권장
2. 커밋 메시지는 명확하게 작성
3. 코드 스타일/포맷팅 통일
4. 신규 기능/버그 수정 시 테스트 필수

## 문의
- 개선 제안, 버그 신고, 협업 문의는 이슈 또는 PR로 남겨주세요.
