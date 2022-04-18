import { Md5 } from "ts-md5";

const data: Date = new Date();
export const ts: number = data.getTime();
export const hash: string = Md5.hashStr(
  `${ts}${process.env.REACT_APP_PRIVATE_KEY}${process.env.REACT_APP_PUBLIC_KEY}`
);
