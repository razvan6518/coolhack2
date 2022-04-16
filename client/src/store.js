import { atom } from 'jotai';
import LoginPanel from "./components/layout/LoginPanel";

export const TOKEN = atom("");
export const NAME = atom("");
export const USER = atom({});
export const USER_ROLE = atom("");
export const SIDEBAR_CONTENT = atom(<LoginPanel/>);