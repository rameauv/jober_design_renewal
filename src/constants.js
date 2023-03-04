export const EMPLOYEE_LIST_MOCK = [
  {
    key: "0",
    name: "Neo",
    departure: "경영지원",
    job: "기획, 운영",
    phone: "010-1234-1234",
    email: "neo@test.io",
    invited: true
  },
  {
    key: "1",
    name: "Peter",
    departure: "디자인",
    job: "UX 디자인",
    phone: "010-1234-3213",
    email: "peter@test.io",
    invited: false
  },
  {
    key: "2",
    name: "Eloy",
    departure: "개발",
    job: "서버 개발",
    phone: "010-4343-3213",
    email: "eloy@test.io",
    invited: true
  },
  {
    key: "3",
    name: "Ted",
    departure: "개발",
    job: "프론트 개발",
    phone: "010-4413-3333",
    email: "ted@test.io",
    invited: false
  },
  {
    key: "4",
    name: "Aj",
    departure: "개발",
    job: "프론트 개발",
    phone: "010-4300-66313",
    email: "aj@test.io",
    invited: true
  }
];

export const EMPLOYEE_TABLE_COLUMNS = [
  {
    title: "이름",
    dataIndex: "name",
    key: "name",
    render: (text) => <a>{text}</a>
  },
  {
    title: "부서",
    dataIndex: "departure",
    key: "departure"
  },
  {
    title: "담당업무",
    dataIndex: "job",
    key: "job"
  },
  {
    title: "전화번호",
    dataIndex: "phone",
    key: "phone"
  },
  {
    title: "회사이메일",
    dataIndex: "email",
    key: "email"
  },
  {
    title: "정보 입력 요청",
    dataIndex: "invited",
    key: "invited",
    render: (invited) => (invited ? <a>정보 입력 요청</a> : "입력 완료")
  }
];
