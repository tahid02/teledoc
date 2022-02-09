// import { BiDonateBlood, ImNotification, SiMicrosoftaccess } from './icons';
import { BiDonateBlood } from 'react-icons/bi';
import { MdNotificationsActive } from 'react-icons/md';
import { SiMicrosoftaccess } from 'react-icons/si';

// export interface ISaveLive {
//   icon: any;
//   service: string;
//   detail: string;
// }
export const saveLives = [
  {
    icon: <BiDonateBlood />,
    iconColor: 'rgb(239 68 68)',
    service: 'Search Blood',
    detail: 'Find blood donors near your locations!',
  },
  {
    icon: <MdNotificationsActive />,
    iconColor: 'rgb(245 158 11)',
    service: 'Search notification',
    detail: 'instantly get notification about request',
  },
  {
    icon: <SiMicrosoftaccess />,
    iconColor: 'rgb(0 207 252)',
    service: 'Forever Access',
    detail: 'You can request for blood anytime',
  },
];
