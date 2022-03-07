import axios from 'axios'

interface Post {
  userId: number,
  id: number,
  title: string,
  body: string
}
const url = "https://jsonplaceholder.typicode.com/posts/22"

const fetchData = async <T>() => {
  return await axios.get(url).then((res) => {
    const data = res.data as Post
    const userId = data.userId
    const title = data.title
    const body = data.body
    // showData(userId,title,body)
  })
}
fetchData()

const showData = (id: number, title: string, body: string) => {
  console.log(`
    the user with ID :${id},
    have a post with title ${title},
    and it said ${body}
    `)
}

interface UserAccount {
  id: number;
  name: string;
  logResult: () => string
}

class Account {
  id: number;
  name: string;
  constructor(id: number, name: string) {
    this.id = id
    this.name = name;
  }
  logResult() {
    return `user had ID ${this.id} have a name called ${this.name}`
  }

}


const newAccount: UserAccount = new Account(1, "Phuc")

console.log(newAccount.logResult())
const Fnc = (b: string, x: string): string => {
  return b + x
}
const weatherToday = {
  time: new Date(),
  weather: "rainy"
}
const logWeather = (f: { time: Date, weather: string }): void => {
  console.log(f.weather, f.time)
}
logWeather(weatherToday,)

interface Checker {
  id: number;
  name: string;
  status: boolean;
  check(): string
}
const person: Checker = {
  id: 111,
  name: "Sam",
  status: true,
  check(): string {
    return this.status ? "checked" : "not yet!!!!";
  }
}

const DetectPerson = (person: Checker): void => {
  console.log(person.id)
  console.log(person.name)
  console.log(person.status)
  console.log(person.check())
}
DetectPerson(person)
class CallFunction {
  public strip() {
    return console.log("strip")
  }

  private momo() {
    return console.log("momo")
  }

  runFnMomo() {
    return this.momo()
  }
}

class extendFunction extends CallFunction {
  setBack: (value: number) => void;
  constructor(setBack: (v: number) => void) {
    super()
    this.setBack = setBack
  }
  paynow() {
    this.setBack = (number): void => {
      console.log(number)
    }
  }
}
const setHandleSetBack = (num: number) => {
  console.log(num + 2)
}
const fistCalled = new CallFunction()
const secondCall = new extendFunction(setHandleSetBack)
console.log(secondCall.setBack(3), secondCall.paynow(), fistCalled.runFnMomo())
console.log("Please resolved,resolve 1,resolve 2,resolve 3,resolve 4")
console.log("Please resolved,resolve 1,resolve 2,resolve 3")
