
import avatar from '../../assets/svg/Avatar.svg'
import logo from '../../assets/svg/addIcon.svg'
import close from '../../assets/svg/close.svg'
import profileBtn from '../../assets/svg/profileBtn.svg'
import product from '../../assets/svg/product.svg'
import category from '../../assets/svg/category.svg'
import setting from '../../assets/svg/setting.svg'
import logout from '../../assets/svg/logout.svg'


export const LogoIcon =   () => <img src={logo}  alt=""/>
export const AvatarIcon =   () => <img src={avatar} alt=""/>
export const CloseIcon =   () => <img src={close} alt=""/>
export const ProfileIcon =   () => <img src={profileBtn} alt=""/>
export const ProductIcon =   () => <img src={product} style={{fill:"red"}} alt=""/>
export const CategoryIcon =   () => <img src={category} color={'green'} alt=""/>
export const SettingIcon =   () => <img src={setting} alt=""/>
export const LogoutIcon =   () => <img src={logout} alt=""/>

