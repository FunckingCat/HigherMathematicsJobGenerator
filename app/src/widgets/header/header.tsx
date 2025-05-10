import { type FC, useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { clsx } from 'clsx';

import { Container, Logo, Button } from 'shared/components';
import { PATHS } from 'config';
import { useAuth } from 'shared/context/authContext';

import styles from './header.module.scss';

export const Header: FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { user, logout } = useAuth();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // Состояние для выпадающего меню

  const handleLogout = () => {
    logout();
    navigate(PATHS.STUDENT); // После выхода перенаправляем на страницу студента
  };

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  return (
    <header className={clsx(styles.header)}>
      <Container className={styles.container}>
        <div className={styles.left}>
          <Logo />
          <Link to={PATHS.ABOUT}>
            <Button className={styles.aboutButton}>О программе</Button>
          </Link>
        </div>
        <div className={styles.auth}>
          {user ? (
            <div className={styles.userMenu}>
              <Button onClick={toggleDropdown} className={styles.accountButton}>
                Аккаунт
              </Button>
              {isDropdownOpen && (
                <div className={styles.dropdown}>
                  <Link to={PATHS.HOME} className={styles.dropdownItem}>
                    Настройки
                  </Link>
                  <Link to={PATHS.STUDENT} className={styles.dropdownItem}>
                    Мои решения
                  </Link>
                  <button
                    type="button"
                    onClick={handleLogout}
                    className={clsx(styles.dropdownItem, styles.logoutButton)}
                  >
                    Выход
                  </button>
                </div>
              )}
            </div>
          ) : (
            <div className={styles.guestMenu}>
              <Link to={PATHS.LOGIN}>
                <Button>Вход</Button>
              </Link>
            </div>
          )}
        </div>
      </Container>
    </header>
  );
};
