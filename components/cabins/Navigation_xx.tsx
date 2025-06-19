'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import React from 'react';

const links = [
  {
    id: 'cabins',
    title: 'Cabins_xx',
    href: '/cabins',
  },
  {
    id: 'about',
    title: 'About_xx',
    href: '/about', // 修正 href 為獨立路徑
  },
  {
    id: 'guest',
    title: 'GuestArea_xx',
    href: '/guest-area', // 修正 href 為獨立路徑
  },
];

const Navigation_xx = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) => {
  const pathname = usePathname();

  return (
    <nav className={cn('flex items-center space-x-4 lg:space-x-6', className)} {...props}>
      {links.map((item) => (
        <Link
          key={item.id} // 避免使用 href 作為 key
          href={item.href}
          className={cn(
            'text-sm font-medium transition-colors hover:text-primary',
            pathname === item.href ? 'text-primary' : 'text-muted-foreground'
          )}
        >
          {item.title}
        </Link>
      ))}
    </nav>
  );
};

export default Navigation_xx;