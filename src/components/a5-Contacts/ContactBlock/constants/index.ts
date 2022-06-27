import {faMailForward, faMapMarkedAlt, faPhoneAlt} from "@fortawesome/free-solid-svg-icons";
import {faGithub, faLinkedin, faTelegramPlane} from "@fortawesome/free-brands-svg-icons";
import {ContactsItem} from "components/a5-Contacts/ContactBlock/types";

export const contact: ContactsItem[] = [
    {title: 'phone', text: '+375 29 841 39 53', icon: faPhoneAlt},
    {title: 'telegram', text: 'Go to telegram', icon: faTelegramPlane},
    {title: 'linkedIn', text: 'Go to linkedIn', icon: faLinkedin},
    {title: 'mail', text: 'Go to mail', icon: faMailForward},
    {title: 'github', text: 'Go to github', icon: faGithub},
    {title: 'address', text: 'Minsk, Belarus', icon: faMapMarkedAlt},
]