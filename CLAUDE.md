# CLAUDE.md

이 파일은 Claude Code가 이 프로젝트에서 작업할 때 참고하는 지침입니다.

## 프로젝트 개요

- **프로젝트명**: AmazingPilates (듀얼 사이트 모노레포)
- **사이트 1**: Wonder Pilates (경이로운 필라테스) - `apps/wonder-pilates`
- **사이트 2**: K Classic Pilates (자격증 과정) - `apps/k-classic-pilates`
- **기술 스택**: Next.js 15, Tailwind CSS, Turborepo, pnpm

## 개발 규칙

### Git 커밋 규칙

**개발 완료 후 반드시 상세한 커밋 메시지로 Git 커밋할 것.**

커밋 메시지 형식:
```
<type>(<scope>): <subject>

- 변경사항 1
- 변경사항 2
- 변경사항 3

🤖 Generated with [Claude Code](https://claude.com/claude-code)

Co-Authored-By: Claude Opus 4.5 <noreply@anthropic.com>
```

타입:
- `feat`: 새 기능
- `fix`: 버그 수정
- `refactor`: 리팩토링
- `style`: 스타일/디자인 변경
- `docs`: 문서 수정
- `chore`: 기타 작업

스코프:
- `wonder-pilates`: 경이로운 필라테스 사이트
- `k-classic-pilates`: K클래식 사이트
- `shared`: 공유 패키지

### 콘텐츠 관리

- 모든 편집 가능한 텍스트는 `/src/content/` 폴더의 SSOT 파일에서 관리
- 컴포넌트에 하드코딩 금지
- i18n-ready 구조 유지: `{ kr: string, en: string }`

### 개발 명령어

```bash
# Wonder Pilates 개발 서버
pnpm dev:wp

# K Classic Pilates 개발 서버
pnpm dev:kc

# 빌드
pnpm build
```

## 현재 상태

### Wonder Pilates (경이로운 필라테스)
- ✅ 홈페이지 UI 구현 완료
- ✅ SSOT 패턴 적용 (`/src/content/home.ts`)
- ⏳ 실제 연락처/주소 정보 대기 중
- ⏳ 지도 iframe 연동 대기 중

### K Classic Pilates
- ⏳ 개발 예정
