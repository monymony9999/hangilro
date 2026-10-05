// 한길로 설정 파일 — Firebase 프로젝트 gilro-450c7 의 웹 앱 설정값이 들어 있습니다.
// (이 값은 공개되어도 안전한 "웹 앱 식별 값"입니다. 접근 보호는 firestore.rules가 담당합니다.)
window.HANGILRO_CONFIG = {
  firebase: {
    apiKey: "AIzaSyDhyUBkRMKnuNay2xUyBF82Lu7kbq1ty38",
    authDomain: "gilro-450c7.firebaseapp.com",
    projectId: "gilro-450c7",
    storageBucket: "gilro-450c7.firebasestorage.app",
    messagingSenderId: "809616005057",
    appId: "1:809616005057:web:6d172de427037cffda0140",
    measurementId: "G-1V13DGHG5Q"
  },
  // Firebase 웹 SDK 버전 (문제가 생기면 이 숫자만 최신으로 바꿔 보세요)
  sdk: "11.10.0",
  // AI 테마에 쓰는 Gemini 모델. 앞에서부터 시도하고 안 되면 다음으로 넘어갑니다.
  // 이름이 바뀌면 Firebase 콘솔 > AI Logic 에서 현재 모델 이름을 확인해 고쳐 주세요.
  models: ["gemini-2.5-flash", "gemini-2.5-flash-lite"]
};
