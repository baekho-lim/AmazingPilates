# Vercel 배포 설정 회고 문서

> 작성일: 2026-01-01
> 프로젝트: AmazingPilates (Wonder Pilates)

---

## 1. 계정 정보

### GitHub
| 항목 | 값 |
|------|-----|
| Username | `baekho-lim` |
| Profile | https://github.com/baekho-lim |
| Repository | https://github.com/baekho-lim/AmazingPilates |

### Vercel
| 항목 | 값 |
|------|-----|
| Username | `baekho-lim` |
| Email | `bh@baekho.io` |
| Team ID | `team_LbRgp6GkN9yADtosTC7bUg8Q` |
| Team Slug | `bh-lims-projects-ed8a611d` |
| Plan | Hobby (무료) |
| Dashboard | https://vercel.com/bh-lims-projects-ed8a611d |

---

## 2. 현재 배포 구조

### 프로젝트 정보
| 항목 | 값 |
|------|-----|
| Project Name | `wonder-pilates` |
| Project ID | `prj_VEWRYeFH5M0MIVkHsWdpfsqE2QtS` |
| Framework | Next.js 15 |
| Monorepo Manager | Turborepo |
| Node Version | 24.x |

### Production URLs
- **Primary**: https://wonder-pilates-pi.vercel.app
- **Auto-generated**: https://wonder-pilates-bh-lims-projects-ed8a611d.vercel.app

### 배포 플로우
```
[main 브랜치 push]
       ↓
[GitHub Actions 트리거]
       ↓
[Vercel CLI: vercel deploy --prod]
       ↓
[Vercel 서버에서 빌드]
  - rootDirectory: apps/wonder-pilates
  - installCommand: cd ../.. && pnpm install
  - buildCommand: pnpm build
       ↓
[Production 배포 완료]
```

### 파일 구조
```
AmazingPilates/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions 워크플로우
├── .vercel/
│   └── project.json            # Vercel 프로젝트 연결 정보
├── apps/
│   └── wonder-pilates/
│       ├── .vercel/
│       │   └── project.json    # 앱별 설정 (로컬용)
│       └── ...
└── ...
```

### GitHub Secrets
| Secret Name | 용도 |
|-------------|------|
| `VERCEL_TOKEN` | Vercel API 인증 토큰 (Full Account scope) |
| `VERCEL_ORG_ID` | team_LbRgp6GkN9yADtosTC7bUg8Q |
| `VERCEL_PROJECT_ID` | prj_VEWRYeFH5M0MIVkHsWdpfsqE2QtS |

---

## 3. 삽질 회고

### 소요 시간
- **약 10번 이상의 커밋/푸시** 시도
- **약 20분 이상** 소요 (단순 배포 설정에 비해 과도함)

### 발생한 문제들

#### 문제 1: 잘못된 Project ID 사용 (가장 큰 삽질)
```
초기 설정: prj_okjsvgEgfBOtiZNqHliHojQZt2UD (잘못됨)
실제 값:   prj_VEWRYeFH5M0MIVkHsWdpfsqE2QtS (올바름)
```
- **원인**: 이전 `vercel link` 과정에서 생성된 잘못된 project.json을 검증 없이 사용
- **증상**: "Could not retrieve Project Settings" 오류 반복
- **해결**: Vercel API로 실제 프로젝트 정보 조회 후 수정

#### 문제 2: 모노레포 빌드 전략 혼란
- **시도 1**: GitHub Actions에서 로컬 빌드 후 `--prebuilt` 배포
  - pnpm symlink 구조와 호환 안됨 → 실패
- **시도 2**: Vercel 서버 빌드 (성공)
- **원인**: pnpm 워크스페이스의 node_modules 구조 이해 부족

#### 문제 3: rootDirectory 이중 설정
```
Vercel 설정: rootDirectory = apps/wonder-pilates
워크플로우:  working-directory: apps/wonder-pilates
결과 경로:   apps/wonder-pilates/apps/wonder-pilates (오류)
```
- **원인**: 설정 간 상호작용 미고려
- **해결**: 워크플로우에서는 루트에서 실행, Vercel 설정의 rootDirectory 활용

#### 문제 4: 토큰 권한 문제
- 처음 생성한 토큰이 Team-specific scope
- Full Account scope 토큰으로 재생성 필요

---

## 4. 이상적인 지시문 (Ideal Prompt)

### 실제 지시문 (문제 있음)
```
깃 커밋하고 푸시하는데 버셀 연동 시켜. 버셀 CLI, 깃 CLI 없으면 설치해
```

### 개선된 지시문 (권장)
```markdown
## Vercel 자동 배포 설정 요청

### 프로젝트 정보
- 모노레포 구조: pnpm + Turborepo
- 배포 대상: apps/wonder-pilates (Next.js 15)
- 빌드 명령: pnpm build (apps/wonder-pilates 디렉토리에서)
- 의존성 설치: 루트에서 pnpm install 필요

### 원하는 배포 방식
- GitHub Actions를 통한 자동 배포
- main 브랜치 push 시 트리거
- Vercel 서버에서 빌드 (로컬 빌드 X)

### 사전 확인 필요 사항
1. Vercel 계정에 이미 wonder-pilates 프로젝트가 있는지 확인
2. 있다면 해당 프로젝트의 실제 projectId, orgId 조회
3. 없다면 새로 생성

### Vercel 토큰
- 토큰 생성 필요 시 알려줘 (Full Account scope로)
- 또는 기존 토큰: [토큰값 제공]

### 주의사항
- .vercel/project.json이 이미 있다면 내용 검증 필수
- vercel link로 새로 연결하지 말고 기존 프로젝트 활용
```

### 지시문 개선 포인트

| 누락된 정보 | 왜 중요한가 |
|-------------|------------|
| 모노레포 구조 명시 | 빌드/배포 전략이 달라짐 |
| 기존 Vercel 프로젝트 여부 | 새 프로젝트 vs 기존 프로젝트 연결 |
| 빌드 위치 (로컬 vs Vercel) | pnpm symlink 문제 회피 |
| 토큰 권한 범위 | Full Account 필요 여부 |
| 기존 설정 파일 검증 요청 | 잘못된 ID 사용 방지 |

---

## 5. 올바른 설정 순서 (Best Practice)

### Step 1: 현재 상태 확인
```bash
# Vercel 계정의 프로젝트 목록 확인
vercel project ls

# 또는 API로 확인
curl -H "Authorization: Bearer $TOKEN" \
  "https://api.vercel.com/v9/projects?limit=10"
```

### Step 2: 프로젝트 설정 확인/수정
```bash
# 프로젝트 상세 설정 확인
curl -H "Authorization: Bearer $TOKEN" \
  "https://api.vercel.com/v9/projects/$PROJECT_ID"

# 필요시 설정 업데이트
curl -X PATCH \
  -H "Authorization: Bearer $TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "rootDirectory": "apps/wonder-pilates",
    "installCommand": "cd ../.. && pnpm install",
    "buildCommand": "pnpm build"
  }' \
  "https://api.vercel.com/v9/projects/$PROJECT_ID"
```

### Step 3: 로컬 설정 파일 생성
```json
// .vercel/project.json (루트)
{
  "projectId": "실제_프로젝트_ID",
  "orgId": "실제_팀_ID"
}
```

### Step 4: GitHub Secrets 설정
```bash
gh secret set VERCEL_TOKEN --body "$TOKEN"
gh secret set VERCEL_ORG_ID --body "$ORG_ID"
gh secret set VERCEL_PROJECT_ID --body "$PROJECT_ID"
```

### Step 5: 워크플로우 파일 생성
```yaml
# .github/workflows/deploy.yml
name: Deploy to Vercel

on:
  push:
    branches:
      - main

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4

      - name: Install Vercel CLI
        run: npm install -g vercel@latest

      - name: Deploy to Vercel
        run: vercel deploy --prod --token=${{ secrets.VERCEL_TOKEN }} --yes
```

---

## 6. 교훈 요약

| 실수 | 교훈 |
|------|------|
| 기존 project.json 무조건 신뢰 | **API로 실제 값 검증 필수** |
| 여러 설정 동시에 변경 | **한 번에 하나씩 변경하며 테스트** |
| 에러 메시지 대충 읽기 | **"Could not retrieve Project Settings" = ID 문제** |
| 로컬 빌드 후 --prebuilt 시도 | **모노레포는 Vercel 서버 빌드가 안전** |
| 토큰 권한 확인 안함 | **Full Account scope 토큰 필요** |

---

## 7. 문제 발생 시 체크리스트

### 배포 실패 시
- [ ] `.vercel/project.json`의 projectId가 실제 프로젝트와 일치하는가?
- [ ] Vercel 토큰이 Full Account scope인가?
- [ ] rootDirectory 설정이 이중으로 되어있지 않은가?
- [ ] 모노레포의 경우 installCommand가 루트에서 실행되도록 설정되었는가?

### 빌드 실패 시
- [ ] pnpm lockfile 버전과 설치된 pnpm 버전이 호환되는가?
- [ ] Node.js 버전이 프로젝트 요구사항과 맞는가?
- [ ] 모든 workspace 의존성이 설치되었는가?

---

## 8. 관련 링크

- [Vercel CLI 문서](https://vercel.com/docs/cli)
- [Vercel + Monorepo 가이드](https://vercel.com/docs/monorepos)
- [GitHub Actions for Vercel](https://vercel.com/guides/how-can-i-use-github-actions-with-vercel)
- [Vercel API Reference](https://vercel.com/docs/rest-api)

---

*이 문서는 향후 유사한 배포 설정 시 참고용으로 작성되었습니다.*
