import { Saira_Stencil_One } from 'next/font/google'
import Image from 'next/image'
import Link from 'next/link'

const sairaStencilOne = Saira_Stencil_One({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-saira',
})

export function Header() {
  return (
    <>
      <header className="bg-white">
        <div className="container mx-auto grid md:flex py-2 px-4  md:px-4  items-center md:h-20">
          <Link
            href="/"
            className={`${sairaStencilOne.className} text-dark-grey  text-4xl flex-none md:flex-1`}
          >
            <span className="text-dark-grey  text-4xl flex-none md:flex-1">
              capputeeno
            </span>
          </Link>
          <div className="md:order-3 text-right">
            <button className="ml-8 relative ">
              <span
                className="text-white after:-bottom-2.5 after:-right-2  after:content-[attr(data-count)] after:absolute after:bg-red after:w-4 after:h-4 after:text-[10px] after:rounded-full"
                data-count="8"
              />

              <Image
                src={'/assets/icons/shopping-bag-icon.svg'}
                alt="Search icon"
                width={20}
                height={20}
              />
            </button>
          </div>

          <div className="col-span-2  md:order-2 flex mt-4 md:mt-0">
            <input
              type="search"
              className="bg-gray-light text-black h-11 px-4 lg:w-80 max-w-xs flex-1 rounded-s-lg"
              placeholder="Procurando por algo específico?"
            />
            <button className="bg-gray-light text-black h-11 px-4 rounded-e-lg">
              <Image
                src={'/assets/icons/search-icon.svg'}
                alt="Search icon"
                width={20}
                height={20}
              />
            </button>
          </div>
        </div>
      </header>
    </>
  )
}
