import AcmeLogo from '@/app/ui/acme-logo';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { lusitana } from '@/app/ui/fonts';
import Image from 'next/image'

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col p-6">
      <div className="flex h-20 shrink-0 items-end rounded-lg bg-blue-500 p-4 md:h-52">
        <AcmeLogo />
      </div>
      <div className="mt-4 flex grow flex-col gap-4 md:flex-row">

        <div className="flex flex-col justify-center gap-6 rounded-lg bg-gray-50 px-6 py-10 md:w-1/2 md:px-20">
          <p className={`text-xl text-gray-800 md:text-4xl md:leading-normal`}>
            <strong>Welcome to Acme.</strong>
            <br/>
          <span className={`text-gray-600 tracking-widest text-xl md:text-2xl ${lusitana.className}`}>This is e-commerce platform for order a product</span>
          </p>
          <a
            className="flex items-center gap-5 self-start rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base"
            href="/login"
          >
            <span className={`${lusitana.className} text-lg font-medium`}>Log in</span> <ArrowRightIcon className="w-5 md:w-6" />
          </a>
        </div>

        <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
          <Image 
          src='/hero-desktop.png'
          alt='hero images for homepage on dekstop'
          width={800}
          height={760}
          className='object-cover hidden md:block'/>
          <Image 
          src='/hero-mobile.png'
          alt='hero images for homepage on mobile'
          width={560}
          height={620}
          className='object-cover block md:hidden'/>
        </div>
      </div>
    </main>
  );
}
