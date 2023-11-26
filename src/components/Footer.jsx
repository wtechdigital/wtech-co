import Link from 'next/link'

import { Container } from '@/components/Container'
import { Logo } from '@/components/Logo'
import { NavLink } from '@/components/NavLink'

export function Footer() {
  return (
    <footer className="bg-slate-50">
      <Container>
      <div className="py-16">
  <Logo className="mx-auto h-10 w-auto" />
  <nav className="mt-10 text-s" aria-label="quick links">
    <div className="flex flex-col items-center gap-y-2 sm:flex-row sm:justify-center sm:gap-x-6">
      <NavLink href="/privacy">Privacy Policy</NavLink>
      <NavLink href="/terms">Terms & Conditions</NavLink>
      <NavLink href="/cookie">Cookie Policy</NavLink>
    </div>
  </nav>
</div>
        <div className="flex flex-col items-center border-t border-slate-400/10 py-10 sm:flex-row-reverse sm:justify-between">
          <div className="flex gap-x-6">
            <Link
              href="https://www.linkedin.com/company/wintech-digital/"
              className="group"
              aria-label="TaxPal on Twitter"
            >
              <svg
                aria-hidden="true"
                className="h-10 w-10 fill-slate-500 group-hover:fill-slate-700"
              >
                <g transform="scale(0.7)">
                <path d="M48,8H16c-4.418,0-8,3.582-8,8v32c0,4.418,3.582,8,8,8h32c4.418,0,8-3.582,8-8V16C56,11.582,52.418,8,48,8z M24,47h-5V27h5 V47z M24.029,23.009C23.382,23.669,22.538,24,21.5,24c-1.026,0-1.865-0.341-2.519-1.023S18,21.458,18,20.468 c0-1.02,0.327-1.852,0.981-2.498C19.635,17.323,20.474,17,21.5,17c1.038,0,1.882,0.323,2.529,0.969 C24.676,18.615,25,19.448,25,20.468C25,21.502,24.676,22.349,24.029,23.009z M47,47h-5V35.887C42,32.788,40.214,31,38,31 c-1.067,0-2.274,0.648-2.965,1.469S34,34.331,34,35.594V47h-5V27h5v3.164h0.078c1.472-2.435,3.613-3.644,6.426-3.652 C44.5,26.5,47,29.5,47,34.754V47z"/>
                </g>
              </svg>
            </Link>
            
          </div>
          <p className="mt-6 text-sm text-slate-500 sm:mt-0">
            Copyright &copy; {new Date().getFullYear()} WinTech Digital Marketing Agency. All Rights Reserved.
            reserved.
          </p>
        </div>
      </Container>
    </footer>
  )
}
