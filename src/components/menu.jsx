import React, {useState} from 'react';
import css from './menu.module.css'
import {
    LogoIcon,
    AvatarIcon,
    CloseIcon,
    ProfileIcon,
    ProductIcon,
    CategoryIcon,
    SettingIcon, LogoutIcon,
} from "./icons/iconsSvg.jsx";


import {NavLink} from "react-router-dom";

function Menu(props) {
 const [isMenuOpen, setIsMenuOpen] =    useState(true)

    function toggleMenu(){
            setIsMenuOpen(!isMenuOpen)
    }

    return (
        <>
            {!isMenuOpen  && <div className={css.closedMenuButton} onClick={toggleMenu}>
                <CloseIcon />
            </div>}

            <div className={`${css.wrapper} ${isMenuOpen ? css.open : css.close}`} >
                <div className={css.logoWrapper}>

                    <div className={css.logoContainer}>
                        <LogoIcon />
                        <span>
                       Application Name
                    </span>
                    </div>


                    <div className={css.closeBtnContainer} onClick={toggleMenu}>
                        <CloseIcon />
                    </div>

                    <div>
                    </div>
                </div>


                {/*профиль*/}
                <div className={css.logoWrapper}>
                    <div className={css.logoContainer}>
                    <span className={css.avatar}>
                        <AvatarIcon />
                    </span>

                        <span>
                      <ul className={css.name}>Asan</ul>
                      <ul className={css.email}>akunov313131@gmail.com</ul>
                    </span>
                    </div>


                    <div className={css.closeBtnContainer}>
                        <ProfileIcon />
                    </div>

                    <div>
                    </div>
                </div>

                <div className={css.navigations}>
                    <li className={css.navigationContainer}>
                        <NavLink to={'/category'} className={css.category}>
                            <CategoryIcon />
                            <ul>Котегории</ul>
                        </NavLink>
                        <NavLink to={'/product'} className={css.category}>
                            <ProductIcon />
                            <ul>Мои товары</ul>
                        </NavLink>
                        <NavLink to={'/settings'} className={css.category}>
                            <SettingIcon />
                            <ul>Настройки</ul>
                        </NavLink>


                    </li>


                </div>


                <div className={css.logout}>
                    <LogoutIcon />
                    <ul>Выйти</ul>

                </div>
            </div>



        </>

    );
}

export default Menu;