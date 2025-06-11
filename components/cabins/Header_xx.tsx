import Navigation_xx from '@/components/cabins/Navigation_xx';
import Logo_xx from '@/components/cabins/Logo_xx';
import TKUDemoDrawer_xx from '@/components/shared/header_xx/tkudemo-drawer_xx';

function Header_xx() {
  return (
    <header className='flex border-b border-primary-900 px-6 py-4 flex justify-between items-center max-w-7xl'>
      <div className='flex flex-center gap-4'>
        <Logo_xx />
      </div>
      <Navigation_xx />
    </header>
  );
}

export default Header_xx;
