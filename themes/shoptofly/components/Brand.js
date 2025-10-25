/* eslint-disable @next/next/no-img-element */

import { siteConfig } from '@/lib/config'

/**
 * 合作伙伴
 * @returns
 */
export const Brand = () => {
  const brands = siteConfig('STARTER_BRANDS')
  return (
    <>
      {/* <!-- ====== Brands Section Start --> */}
      <section className='py-20 bg-[#f6f1eb] dark:bg-dark'>
        <div className='container px-4'>
          <div className='-mx-4 flex flex-wrap items-center justify-center gap-8 xl:gap-11 overflow-hidden'>
            {brands?.map((item, index) => {
              return (
                <a key={index} href={item.URL}>
                  <img
                    src={item.IMAGE}
                    alt={item.TITLE}
                    className='w-40 h-10 dark:hidden'
                  />
                  <img 
                    src={item.IMAGE_WHITE}
                    alt={item.TITLE}
                    className='w-40 h-10 hidden dark:block'
                  />
                </a>
              )
            })}
          </div>
        </div>
      </section>
      {/* <!-- ====== Brands Section End --> */}
    </>
  )
}
