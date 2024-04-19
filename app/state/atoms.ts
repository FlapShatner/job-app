import { Position } from "../types/positions";
import {  atom } from "jotai";

export const ageConfirmAtom = atom(false);
export const contactAtom = atom({
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  address: '',
  apt: '',
  city: '',
  state: '',
  zip: '',
  country: ''
});
export const selectedPositionsAtom = atom<Position[]>([]);
export const appealAtom = atom('');
export const apAtom = atom({
    id:'ap',
    name:'Adobe Photoshop',
    info:''
})
export const aiAtom = atom({
    id:'ai',
    name:'Adobe Illustrator',
    info:''
})
export const wdAtom = atom({
    id:'wd',
    name:'Web Development',
    info:''
})
export const tdAtom = atom({
    id:'3d',
    name:'3D Modeling',
    info:''
})
export const vpAtom = atom({
    id:'vp',
    name:'Video Production',
    info:''
})
export const nsAtom = atom({
    id:'ns',
    name:'Network Specialist',
    info:''
})
export const smAtom = atom({
    id:'sm',
    name:'Social Media Marketing',
    info:''
})
export const prAtom = atom({
    id:'pr',
    name:'Public Relations',
    info:''
})
export const saAtom = atom({
    id:'sa',
    name:'Sales',
    info:''
})


