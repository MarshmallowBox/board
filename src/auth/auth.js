//인증 서버의 데이터 베이스 역할이라 가정
const users = [
    { email: "kim@test.com", password: "123", name: "Kim" },
    { email: "lee@test.com", password: "456", name: "Lee" },
    { email: "park@test.com", password: "789", name: "Park" },
    { email: "asdf", password: "asdf", name: "asdf" }
  ];
  
  //인자로 넘어온 email과 password로 데이터베이스를 조회
  //사용작 조회가 되지 않으면 예외를 던지고 조회가 되면 사용자 반환
  export function signIn({ email, password }) {
    const user = users.find(
      (user) => user.email === email && user.password === password
    );
    if (user === undefined) throw new Error();
    return user;
  }
  