import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import NavItems from "@/components/NavItems";

const NavBar = () => {
    return (
        <nav className="navbar">
<Link href="/">
<div className="flex item-center gap-2.5 cursor-pointer">
<Image
    src="/images/logo.svg"
    alt="logo"
    width={46}
    height={44}
/>
</div>
</Link>
  <div className="flex item-center gap-8 ">
<NavItems />
      <p>Sign In</p>
  </div>
        </nav>
    )
}
export default NavBar
