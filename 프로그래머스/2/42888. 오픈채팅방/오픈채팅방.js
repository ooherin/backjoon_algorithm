const users = {};

const makeMessage = (name, type) => {
  switch (type) {
    case "Enter":
      return `${name}님이 들어왔습니다.`;
    default:
      return `${name}님이 나갔습니다.`;
  }
};
const userState = {};

function solution(records) {
  //키는 id 값은 name
  const messages = [];

  records.forEach((record) => {
    const [type, id, name] = record.split(" ");

    const storedName = userState[id];

    if (type === "Enter") {
      userState[id] = name;
      // messages.push(makeMessage(name, type));
    }
    // if (type === "Leave") {
    //   messages.push(makeMessage(storedName, type));
    // }
    if (type === "Change") {
      userState[id] = name;
    }
  });

  records.forEach((record) => {
    const [type, id, name] = record.split(" ");
    const currentName = userState[id];

    if (type === "Enter" || type === "Leave") {
      messages.push(makeMessage(currentName, type));
    }
  });

  //메세지를 푸시하면 표시하는 기능

  return messages;
}

const testRecord = [
  "Enter uid1234 Muzi",
  "Enter uid4567 Prodo",
  "Leave uid1234",
  "Enter uid1234 Prodo",
  "Change uid4567 Ryan",
];

//유저상태를 저장하는 객체 필요
//객체의 키 값은 변하지 않은 id이다. 
//명령어에 따라 바뀐다. 

//명령에 따라서 메세지를 매핑한다.
