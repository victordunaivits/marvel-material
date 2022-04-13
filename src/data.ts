import { Md5 } from "ts-md5";

export const data: Date = new Date();
export const ts: number = data.getTime();
export const publicKey: string = "5ff1f65e5691411fe10ab2373e041485";
export const privateKey: string = "1f2d5b9a38886d3c869a27f266365d690f897a39";
export const hash: string = Md5.hashStr(`${ts}${privateKey}${publicKey}`);
export const baseUrl: string = `http://gateway.marvel.com/v1/public/characters?ts=${ts}&apikey=${publicKey}&hash=${hash}`;
