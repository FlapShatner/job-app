import { Position } from "../types/positions";
import { PrevEmployType } from "../types/prev";
import { Data } from "../types/exp";
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
export const employedAtom = atom(false);
export const currentEmploymentAtom = atom({
    location: '',
    duration: ''    
})
export const apAtom = atom({
    id:'ap',
    isSelect:false,
    name:'Adobe Photoshop',
    info:''
})
export const aiAtom = atom({
    id:'ai',
    isSelect:false,
    name:'Adobe Illustrator',
    info:''
})
export const wdAtom = atom({
    id:'wd',
    isSelect:false,
    name:'Web Development',
    info:''
})
export const tdAtom = atom({
    id:'3d',
    isSelect:false,
    name:'3D Modeling',
    info:''
})
export const vpAtom = atom({
    id:'vp',
    isSelect:false,
    name:'Video Production',
    info:''
})
export const nsAtom = atom({
    id:'ns',
    isSelect:false,
    name:'Network Specialist',
    info:''
})
export const smAtom = atom({
    id:'sm',
    isSelect:false,
    name:'Social Media Marketing',
    info:''
})
export const prAtom = atom({
    id:'pr',
    isSelect:false,
    name:'Public Relations',
    info:''
})
export const saAtom = atom({
    id:'sa',
    isSelect:false,
    name:'Sales',
    info:''
})

export const prevEmployAtom = atom([{
    id:'emp1',
    employer:'',
    duration:'',
    reason:'',
},
{
    id:'emp2',
    employer:'',
    duration:'',
    reason:'',
},
{
    id:'emp3',
    employer:'',
    duration:'',
    reason:'',
}])

export const pitchAtom = atom('');
export const availableAtom = atom(true);
export const conditionsAtom = atom('');

export const missingFieldsAtom = atom<string[]>([]);

export const dataAtom = atom<Data>({
    contact: {
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
    },
    selectedPositions: [],
    ageConfirm: false,
    appeal: '',
    employed: false,
    currentEmployment: {
        location: '',
        duration: ''
    },
    prevEmploy: [{
        id: 'emp1',
        employer: '',
        duration: '',
        reason: ''
    },
    {
        id: 'emp2',
        employer: '',
        duration: '',
        reason: ''
    },
    {
        id: 'emp3',
        employer: '',
        duration: '',
        reason: ''
    }],
    pitch: '',
    available: true,
    conditions: '',
    experience: {
        ap: {
            id:'ap',
            isSelect:false,
            name:'Adobe Photoshop',
            info:''
        },
        ai: {
            id:'ai',
            isSelect:false,
            name:'Adobe Illustrator',
            info:''
        },
        wd: {
            id:'wd',
            isSelect:false,
            name:'Web Development',
            info:''
        },
        td: {
            id:'3d',
            isSelect:false,
            name:'3D Modeling',
            info:''
        },
        vp: {
            id:'vp',
            isSelect:false,
            name:'Video Production',
            info:''
        },
        ns: {
            id:'ns',
            isSelect:false,
            name:'Network Specialist',
            info:''
        },
        sm: {
            id:'sm',
            isSelect:false,
            name:'Social Media Marketing',
            info:''
        },
        pr: {
            id:'pr',
            isSelect:false,
            name:'Public Relations',
            info:''
        },
        sa: {
            id:'sa',
            isSelect:false,
            name:'Sales',
            info:''
        }
    }
})