import Link from 'next/link';
import { RaiziaLogo } from './Icons';
import SideMobile from './SideMobile';
import LoginButtons from './LoginButtons';

export type Buttons = {
  title: string;
  link: string;
}

interface NavigationProps {
  rigthButtons: Buttons[];
  middleButtons: Buttons[];
}

function Navigation({ rigthButtons, middleButtons }: NavigationProps) {

  return (
    <>
      <nav className='bg-transparent hidden xl:grid grid-cols-[200px_minmax(350px,_1fr)_550px] py-8 px-8 text-lvory z-20 items-center'>
        <Link href='/'>
          <RaiziaLogo className={'w-32'} />
        </Link>
        <ul className='flex flex-row gap-3 justify-start items-center'>
          {middleButtons.map((button) => (
            <li key={button.title} className='hover:opacity-90 transition-all text-lg'>
              <Link href={button.link}>
                {button.title}
              </Link>
            </li>
          ))}
        </ul>
        <LoginButtons rigthButtons={rigthButtons} />
      </nav>
      <SideMobile buttons={rigthButtons} />
    </>
  )
}

export default Navigation;
