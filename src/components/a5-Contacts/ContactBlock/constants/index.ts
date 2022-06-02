import {faMailForward, faMapMarkedAlt, faPhoneAlt} from "@fortawesome/free-solid-svg-icons";
import {faGithub, faLinkedin, faSkype, faTelegramPlane} from "@fortawesome/free-brands-svg-icons";
import {ContactsItem} from "../types";

export const contact: ContactsItem[] = [
    {title: 'phone', text: '+375 29 841 39 53', icon: faPhoneAlt},
    {title: 'telegram', text: 'Go to telegram', icon: faTelegramPlane},
    {title: 'linkedIn', text: 'Go to linkedIn', icon: faLinkedin},
    {title: 'mail', text: 'Go to mail', icon: faMailForward},
    {title: 'gmail', text: 'Go to Gmail', icon: faMailForward},
    {title: 'github', text: 'Go to github', icon: faGithub},
    {title: 'skype', text: 'Go to Skype', icon: faSkype},
    {title: 'address', text: 'Minsk, Belarus', icon: faMapMarkedAlt},
]