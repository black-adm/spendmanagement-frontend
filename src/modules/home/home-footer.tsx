import { DollarSign, Facebook, Github, Instagram, Linkedin } from 'lucide-react'
import Link from 'next/link'
import { HomeContact } from './home-contact'

export function HomeFooter() {
  return (
    <>
      <div className="max-w-full mx-auto pt-12">
        <footer
          className="p-4 bg-white shadow md:px-28 md:py-8"
          style={{
            backgroundImage: `url('https://static.vecteezy.com/ti/vetor-gratis/p3/370071-mao-colorida-pintada-em-aquarela-de-fundo-pinceladas-de-aquarela-verde-textura-e-fundo-abstratos-da-aguarela-para-o-projeto-fundo-aquarela-sobre-papel-texturizado-vetor.jpg')`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
          }}
        >
          <Link
            href="/"
            className="pb-8 inline-flex items-center gap-2 text-xl font-bold text-medium-orange md:text-2xl"
            aria-label="logo"
          >
            <DollarSign className="size-6 text-primary-green" />
            Spendmanagement
          </Link>

          <div className="sm:flex sm:items-center sm:justify-between">
            <HomeContact />

            <ul className="flex flex-wrap justify-start sm:justify-end space-x-6 items-center ml-4 pt-16 sm:ml-0 sm:mb-0 sm:mt-0">
              <li>
                <a
                  href="https://github.com/fmattioli"
                  target="_blank"
                  className="mr-4 text-sm text-black hover:text-stone-900 md:mr-6"
                >
                  <Github className="size-5" />
                </a>
              </li>

              <li>
                <a
                  href="https://www.facebook.com/felipe.mattioli"
                  target="_blank"
                  className="mr-4 text-sm text-[#4267B2] hover:text-blue-400 hover:underline md:mr-6"
                >
                  <Facebook className="size-5" />
                </a>
              </li>

              <li>
                <a
                  href="https://www.instagram.com/mattiolideveloper/?g=5"
                  target="_blank"
                  className="mr-4 text-sm text-[#e95950] hover:text-[#cd486b] hover:underline md:mr-6"
                >
                  <Instagram className="size-5" />
                </a>
              </li>

              <li>
                <a
                  href="https://pt.linkedin.com/in/felipemattioli"
                  target="_blank"
                  className="mr-4 text-sm text-sky-500 hover:text-sky-400 hover:underline md:mr-6"
                >
                  <Linkedin className="size-5" />
                </a>
              </li>
            </ul>
          </div>
          <hr className="my-6 border-b-light-orange sm:mx-auto lg:my-8" />
          <span className="flex items-center justify-center">
            <p className="text-xs sm:text-sm text-primary-black font-medium text-center pb-4 sm:pb-0">
              Spendmanagement © 2023 - Todos os direitos reservados.
              <br />
              Guarulhos - SP, Brasil.
            </p>
          </span>
        </footer>
      </div>
    </>
  )
}
