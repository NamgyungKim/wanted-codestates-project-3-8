## 🚀 배포 링크

https://wanted-preonboarding-team3-doublenc.netlify.app/

## 💿 실행 방법

```cmd
$ git clone https://github.com/pre-onboarding-team3/wanted-codestates-project-3-8.git

$ npm install

$ npm run start
```

## 😎 3팀

- 이산하 : 무한 스크롤 구현, 배포, (팀장)
- 김경봉 : Redux 관리, 데이터 CRUD
- 김남경 : styled-components 구조, (페이지,컴포넌트,라우터) 구현
- 김형욱 : 무한 스크롤 구현, 검색 기능 구현
- 노학민 : 검색 debounce, 메시지 피드백 기능
- 도지현 : Redux 관리, 데이터 CRUD
- 양윤성 : 무한 스크롤 구현, Redux 관리, API 조회, CORS 이슈 해결, 배포

## 🎇사용 기술스택

- Javascript
- React
- Redux
- Redux-Promise
- styled-components
- Axios

## 👩‍💻구현

### API 호출 & 무한 스크롤

![api호출_무한스크롤](https://images.velog.io/images/yunsungyang-omc/post/fe45840a-2148-48cf-a9f0-854e70b26e20/Mar-06-2022%2023-57-26.gif)

- axios를 사용해 데이터를 가져왔습니다.
  
- API 호출 최적화(intersection observer): Intersection observer를 이용해서 무한스크롤을 구현했습니다. scroll 이벤트를 통한 방법보다 api 호출 회수를 효율적으로 최적화할 수 있었습니다. 

### 선택한 장소 저장기능

![CRUD](https://user-images.githubusercontent.com/82519180/156702527-2c492f4f-6349-43df-9a78-bd943400b4f3.gif)

- 선택 장소 CRUD

- 로컬스토리지: 로컬 스토리지에 유저가 선택한 장소를 유저가 작성한 메모와 함께 저장할 수 있게 구현했습니다.
  유저가 저장한 목록을 클릭하면 저장한 목록의 메모를 수정하거나 저장한 목록을 삭제할 수 있습니다.

### 검색

![검색](https://user-images.githubusercontent.com/82519180/156702568-d034f8ef-5db1-4cd0-8606-208b5c4b5d31.gif)

- 저장된 목록이 많아서 유저가 원하는 목록을 찾기 힘든 경우가 있을 수 있기 때문에 유저가 검색해서 원하는 목록을 볼 수 있게 구현했습니다.

- Debounce : 검색어 입력시 글자를 작성할 때 마다 검색기능이 작동되는 것이 아니라 검색어 입력 후 일정시간이 지나면 검색기능이 작동하도록 debounce 기능을 구현했습니다.
