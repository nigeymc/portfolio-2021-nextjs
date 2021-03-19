import React from "react";
import Link from 'next/link';
import { useRouter } from 'next/router';

const NavLink = ({ href, children }) => {
    const router = useRouter();

    let className = children.props.className || '';
    const pathnameParts = router.pathname.split('/');

    if (router.pathname === href || `/${pathnameParts[1]}` === href) {
        className = `active ${className}`
    }

    return <Link href={href}>{React.cloneElement(children, { className })}</Link>
}

export { NavLink as default };