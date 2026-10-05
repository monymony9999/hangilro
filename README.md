# 한길로 배포 가이드 (휴대폰만으로 가능)

구성: **GitHub Pages**(사이트 올리기, 무료) + **Firebase**(구글 로그인, 공유·실시간 편집, AI 테마, 무료 Spark 플랜)

## 1. Firebase 만들기 (console.firebase.google.com)
1. 프로젝트 만들기 → 이름 `hangilro` (애널리틱스는 꺼도 됩니다)
2. **Authentication** → 시작하기 → 로그인 방법 → **Google** 사용 설정
3. **Authentication → 설정 → 승인된 도메인**에 `내아이디.github.io` 추가
4. **Firestore Database** → 데이터베이스 만들기 → **프로덕션 모드**, 위치 `asia-northeast3 (서울)`
5. Firestore → **규칙** 탭 → `firestore.rules` 내용을 통째로 붙여넣고 **게시**
6. **AI Logic** → 시작하기 → **Gemini Developer API** 선택 (결제 수단 불필요)
7. 프로젝트 설정(톱니바퀴) → 내 앱 → **웹 앱(</>)** 추가 → 나오는 `firebaseConfig` 값 복사

## 2. 설정 파일에 붙여넣기
`firebase-config.js` 의 `apiKey ~ appId` 6줄을 복사한 값으로 바꿉니다.

## 3. GitHub Pages로 올리기 (github.com)
1. 새 저장소 만들기 → 이름 `hangilro`, **Public**
2. **Add file → Upload files** 로 이 폴더의 파일 8개를 모두 올리고 Commit
3. **Settings → Pages → Branch: main / (root) → Save**
4. 1~2분 뒤 `https://내아이디.github.io/hangilro/` 에서 열립니다

## 4. 확인
- 사이트를 열고 **설정 → Google로 계속하기**
- 계획에서 링크 아이콘으로 공유 코드를 만들고, 다른 계정에서 코드로 참여

## 막혔을 때
- 로그인 창이 안 뜸 → 승인된 도메인에 주소를 넣었는지 확인
- 공유가 안 됨 → Firestore 규칙을 게시했는지, 로그인했는지 확인
- AI 테마가 기본 테마로 나옴 → AI Logic 설정 확인, `firebase-config.js` 의 `models` 이름을 콘솔에 나온 현재 이름으로 변경
- 아무 기능도 안 켜짐 → `sdk` 버전 숫자를 Firebase 문서의 최신 버전으로 변경

## 무료 한도 (Spark)
Firestore: 저장 1GiB, 하루 읽기 5만 · 쓰기 2만. 넘으면 다음 날까지 일시적으로 막히며 요금은 나오지 않습니다.
