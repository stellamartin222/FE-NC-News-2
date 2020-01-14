import React from 'react'
import HeaderTitle from './HeaderTitle'
import HeaderUser from './HeaderUser'

export default function Header() {
    return (
        <header className="headerBox">
          <HeaderTitle/>
          <HeaderUser/>  
        </header>
    )
}
