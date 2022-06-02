import {v1} from "uuid";
import {ExperienceItemType} from "../types";

export const experience: ExperienceItemType[] = [
    {
        id: v1(),
        company: 'https://it-incubator.by/React-online.html',
        title: 'Front-end (React/Redux/Typescript)',
        description: 'IT-incubator, 2021'
    },
    {
        id: v1(),
        company: 'https://htmlacademy.ru/',
        title: 'JavaScript for beginners',
        description: 'HTML Academy, 2021'
    },
    {
        id: v1(),
        company: 'https://htmlacademy.ru/',
        title: 'Professional HTML &CSS. Responsive layout and automation',
        description: 'HTML Academy, 2021'
    },
    {
        id: v1(),
        company: 'https://ispeak-school.by/',
        title: 'iSpeak',
        description: 'English courses'
    },
    {
        id: v1(),
        company: 'https://en.bntu.by/',
        title: 'Belarusian National Technical University',
        description: 'Design engineer / Process engineer'
    },
]