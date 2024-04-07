//this file define the types of req & res
//use extension: JSON to TS
//short cut: Shift + Ctrl + Alt + V

//example:

interface CaptchaAPIRes {
  msg: string;
  img: string;
  code: number;
  enable: boolean;
  uuid: string;
}

//login req
interface LoginAPIReq {
  username: string;
  password: string;
  imgUrl: string;
  uuid: string;
}
//login res
interface LoginAPIRes {
  username: string;
  password: string;
  code: number;
  uuid: string;
  token: string;
}
