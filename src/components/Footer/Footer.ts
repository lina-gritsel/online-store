import styles from './Footer.module.scss'
import Logo from '../../assets/svg/rs-school.svg'

export const Footer = (): string => {
  return `
      <footer class=${styles.footer}>
        <div class=${styles.wrapper}>
          <a href='#/' class=${styles.logo}>Interior.</a>
          <div class=${styles.menu}>Menu
            <a href='#/' class=${styles.menu__item}>Home</a>
            <a href='#/catalog' class=${styles.menu__item}>Catalog</a>
            <a href='' class=${styles.menu__item}>Cart</a>
          </div>
          <div class=${styles.contacts}>Contacts
            <a href="https://github.com/lina-gritsel" target='_blank'>
              <span class="${styles.github__link}">Lina</span>
            </a>
            <a href="https://github.com/Pashashchuka" target='_blank'>
              <span class="${styles.github__link}">Pasha</span>
            </a>
          </div>
          <div class=${styles.second__logo}>
            <a href="https://rs.school/js/">
              <img src=${Logo} alt="logo" />
            </a>
          </div>
        </div>
      </footer>
    `
}
