
import { siteConfig } from '@/lib/config'
import React, { useState, useEffect } from 'react'

/**
 * 顶部公告栏（淡入淡出文字切换）
 */
const NoticeBar = () => {

  const notices = [
    siteConfig('SHOPTOFLY_TOP_WORD1') || '🚀 Welcome to ShopToFly',
    siteConfig('SHOPTOFLY_TOP_WORD2') ||'🌍 Cross-border eCommerce Tech Support',
  ]

  const [index, setIndex] = useState(0)
  const [fade, setFade] = useState(true)
  

  useEffect(() => {
    const interval = setInterval(() => {
      // 先淡出
      setFade(false)
      // 延迟切换文字后再淡入
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % notices.length)
        setFade(true)
      }, 500)
    }, 6000) //每3秒切换一次
    return () => clearInterval(interval)
  }, [notices.length])

  return (
    // from-indigo-500 via-purple-500 to-pink-500 #9bc459
    <div className="relative  h-8  overflow-hidden bg-gradient-to-r bg-[#9bc459] text-white text-sm font-medium flex items-center justify-center">
      <span
        className={`transition-opacity duration-500 ${fade ? 'opacity-100' : 'opacity-0'}`}
        key={index}
      >
        {notices[index]}
      </span>
    </div>
  )
}

export default NoticeBar

