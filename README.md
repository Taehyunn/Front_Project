
# UXUI Team 협업을 통한 Project

## 요약
Y Combinator에서 운영하고 있는 소셜 뉴스 웹사이트 해커뉴스의 글을 읽을 수 있는 모바일 전용 Reader 사이트를 개발합니다.  
Top, New, Show, Ask, Jobs 총 5가지 주제 별로 글 목록 조회가 가능하며 연결된 글의 내용과 글에 연결된 코멘트와 작성자의 정보를 볼 수 있습니다.

### 주제

해커뉴스 Reader 사이트 개발

### UI/UX
 - 소속된 조의 디자이너분들이 Figma에 만들어주신디자인 시안을 기반으로 UI/UX를 구현해주세요.  
 - 화면은 모바일에 맞춰 구현하며 태블릿 이상의 크기는 가용한 일정 안에서 자유롭게 처리해주세요.  
 - 피그마에서 왼쪽 상단의 Pages에서 최종 시안이 맞는지 디자이너분들에게 확인 후 작업해주세요.

### 기술적 요구사항
 - 프로그래밍 언어 : JavaScript 필수 사용
 - UI 라이브러리 : React 필수 사용
 - 스타일링 : 별도의 제약은 없으며 필요시 원하는 도구를 선택 (CSS, CSS Modules, CSS in JS 등)
 - 상태 관리 라이브러리 : 별도의 제약은 없으며 필요시 원하는 도구를 선택
 - 빌드 도구 : Create React App 또는 Next.js 2가지 중 1가지 선택
 - 라우트 : Next.js를 선택하지 않았다면 React Router 사용, 선택했다면 Next.js의 라우트 활용
 - 배포 (선택사항) : CodeSandbox에 있는 코드를 GitHub으로 export해서 Vercel 활용을 권장
 - GitHub 계정으로 로그인 후 CodeSandbox에 있는 코드를 GitHub 저장소로 연동 가능
 - 해당 링크의 Creating a Repository 섹션 참고

### API
해커 뉴스 공식 API를 활용하며 해당 GitHub 링크를 통해 문서를 볼 수 있습니다.
API 주소는 기본적으로 https://hacker-news.firebaseio.com/v0/ 를 기준으로 요청합니다.
API 경로별 설명
정확한 설명은 위에 연결한 GitHub 링크를 참조해주세요.

- Top 주제의 글 목록 조회하기 : https://hacker-news.firebaseio.com/v0/topstories.json  
- New 주제의 글 목록 조회하기 : https://hacker-news.firebaseio.com/v0/newstories.json  
- Ask 주제의 글 목록 조회하기 : https://hacker-news.firebaseio.com/v0/askstories.json  
- Show 주제의 글 목록 조회하기 : https://hacker-news.firebaseio.com/v0/showstories.json  
- Job 주제의 글 목록 조회하기 : https://hacker-news.firebaseio.com/v0/jobstories.json  
- 아이템 정보 조회하기 : https://hacker-news.firebaseio.com/v0/item/:id.json  
- 글, 코멘트의 내용은 해당 API를 활용해 요청하며 :id는 아이템 아이디로 대체해서 요청  
- 유저 정보 조회하기 : https://hacker-news.firebaseio.com/v0/user/:id.json  
- :id는 유저 아이디로 대체해서 요청  
