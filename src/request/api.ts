import request from "./index";
//all the request parameter and response data need to be typed

//Verification code request
//===========================👇🏼set up the type in /api.d.ts
const CaptchaAPI = (): Promise<CaptchaAPIRes> => request.get("/api");

//login request
const LoginAPI = (params: LoginAPIReq): Promise<LoginAPIRes> =>
  request.post("/api/login", params);

export { CaptchaAPI, LoginAPI };
