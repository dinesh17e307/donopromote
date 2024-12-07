import Link from 'next/link';
import React, { FunctionComponent } from 'react';
import styles from './Navbar.module.css'
type props = {
    navOptions: readonly {title:string,link:string}[];
}
const NavBar: FunctionComponent<props> = ({ navOptions }) => {
    return (
        <div className={styles.navbar}>
            <ul className={styles.listview}>
                {navOptions?.map(option => {
                    return (
                        <li className={styles.option} key={option.title}>
                            <Link href={option.link}>
                                <p>{option?.title}</p>
                            </Link>
                        </li>
                    )
                })
                }
            </ul>
        </div>
    );
}

export default NavBar;