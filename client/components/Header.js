import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { FiArrowUpRight } from 'react-icons/fi'
import { AiOutlineDown } from 'react-icons/ai'
import { HiOutlineDotsVertical } from 'react-icons/hi'
import ethLogo from '../assets/eth.png'
import uniswapLogo from '../assets/uniswap.png'

const style = {}

const Header = () => {
  const [selectedNav, setSelectedNav] = useState('swap')
  return (
    <div className={style.wrapper}>
      <div className={style.headerLogo}>
        <Image src={uniswapLogo} alt="uniswap" height={40} width={40} />
      </div>
      <div className={style.nav}>
        <div className={style.navItemsContainer}>
          {/* Swap */}
          <div
            onClick={() => setSelectedNav('swap')}
            className={`${style.navItem} ${
              selectedNav === 'swap' && style.activeNavItem
            } `}
          >
            Swap
          </div>

          {/* Pool */}
          <div
            onClick={() => setSelectedNav('pool')}
            className={`${style.navItem} ${
              selectedNav === 'pool' && style.activeNavItem
            } `}
          >
            Pool
          </div>
          {/* Vote */}
          <div
            onClick={() => setSelectedNav('Vote')}
            className={`${style.navItem} ${
              selectedNav === 'Vote' && style.activeNavItem
            } `}
          >
            Vote
          </div>

          {/* Charts */}
          <a
            href="https://info.uniswap.org/#/"
            target="_blank"
            rel="noreferrer"
          >
            <div className={style.navItem}>
              Charts <FiArrowUpRight />
            </div>
          </a>
        </div>
      </div>

      {/* Buttons container */}
    </div>
  )
}

export default Header
