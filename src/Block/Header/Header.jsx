import logo from '../../assets/img/Logo.svg';
import { ConfigProvider, Select } from 'antd';
import './Header.scss';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import useUser from '../../hooks/useUser';
import { useLogout } from '../../hooks/useLogout';
function Header() {
  const [isChecked, setIsChecked] = useState(false);
  const {user, isLoading} = useUser();
  const {logout} = useLogout()
  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
    if (isChecked === false) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
  };

  useEffect(() => {
    const handleMenuItemClick = () => {
      setIsChecked(false);
      document.body.classList.remove('no-scroll');
    };

    const menuBtns = document.querySelectorAll('.menu-btn');
    menuBtns.forEach((btn) =>
      btn.addEventListener('click', handleMenuItemClick)
    );

    return () => {
      menuBtns.forEach((btn) =>
        btn.removeEventListener('click', handleMenuItemClick)
      );
    };
  }, [isChecked]);

  const scrollToSection = (sectionName) => {
    const section = document.querySelector(sectionName);
    if (section) {
      const topOffset = section.offsetTop - 200;
      window.scrollTo({ top: topOffset, behavior: 'smooth' });
    }
  };

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <div className="container">
        <div className="container_header">
          <h1 className="container_header-head">
            <a
              href=""
              style={{
                textDecoration: 'none',
                color: '#fff',
              }}
            >
              AIPRO
            </a>
          </h1>
          <img src={logo} alt="" className="container_header-img" />
        </div>
        <div className={`container_header-nav`}>
          <div className="navigation-container">
            <ul className="navigation-container__links">
              <li>
                <button onClick={() => scrollToSection('#Home')}>Home</button>
              </li>
              <li>
                <button onClick={() => scrollToSection('#BePartner')}>
                  Be Partner
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('#Steps')}>Steps</button>
              </li>
              <li>
                <button onClick={() => scrollToSection('#WhyChooseUs')}>
                  Why choose us ?
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('#Partnership')}>
                  Partnership
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('#Faq')}>FAQ</button>
              </li>
            </ul>
          </div>
        </div>
        <div className="container__buttons">
          {user ? (
            <button onClick={logout} className="container_buttons-log">Logout</button>
          ) : (
            <>
             <Link to={'login'} className="container_buttons-log">Log in</Link>
            <Link to={'signup'} className="container_buttons-log active">Sign Up</Link>
            </>
          )}
         
          <div className="container_buttons-select">
            <ConfigProvider
              theme={{
                token: {
                  colorBorder: 'none',
                  colorText: 'rgb(192, 0, 240)',
                },
              }}
            >
              <Select
                defaultValue={'En'}
                popupClassName="change-lang"
                options={[
                  {
                    value: 'en',
                    label: 'En',
                  },
                  {
                    value: 'ua',
                    label: 'Ua',
                  },
                  {
                    value: 'ru',
                    label: 'Ru',
                  },
                ]}
              />
            </ConfigProvider>
          </div>
        </div>
      </div>

      <div className="adaptive-header">
        <div className="burger-menu">
          <ul className="burger-menu__b">
            <nav role="navigation">
              <div id="menuToggle">
                <input
                  type="checkbox"
                  checked={isChecked}
                  onChange={handleCheckboxChange}
                />

                <span></span>
                <span></span>
                <span></span>

                <ul id="menu" style={{ '--window-width': `${windowWidth}px` }}>
                  <li>
                    <button
                      onClick={() => scrollToSection('#Home')}
                      className="menu-btn"
                    >
                      Home
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => scrollToSection('#BePartner')}
                      className="menu-btn"
                    >
                      Be Partner
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => scrollToSection('#Steps')}
                      className="menu-btn"
                    >
                      Steps
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => scrollToSection('#WhyChooseUs')}
                      className="menu-btn"
                    >
                      Why choose us ?
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => scrollToSection('#Partnership')}
                      className="menu-btn"
                    >
                      Partnership
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => scrollToSection('#Faq')}
                      className="menu-btn"
                    >
                      FAQ
                    </button>
                  </li>

                  <li>
                    <div className="container__buttons">
                      <button className="container_buttons-log">Log in</button>
                      <button className="container_buttons-log active">
                        Sign Up
                      </button>
                    </div>
                    {/* <li>
                      <div className="container_buttons-select">
                        <ConfigProvider
                          theme={{
                            token: {
                              // colorBorder: 'none',
                              colorBgContainer: 'red',
                              // colorText: 'rgb(192, 0, 240)',
                            },
                          }}
                        >
                          <Select
                            defaultValue={'En'}
                            popupClassName="change-lang"
                            options={[
                              {
                                value: 'en',
                                label: 'En',
                              },
                              {
                                value: 'ua',
                                label: 'Ua',
                              },
                              {
                                value: 'ru',
                                label: 'Ru',
                              },
                            ]}
                          />
                        </ConfigProvider>
                      </div>
                    </li> */}
                  </li>
                </ul>
              </div>
            </nav>
          </ul>
        </div>
        <div className="container_header">
          <h1 className="container_header-head">
            <a
              href=""
              style={{
                textDecoration: 'none',
                color: '#fff',
              }}
            >
              AIPRO
            </a>
          </h1>
          <img src={logo} alt="" className="container_header-img" />
        </div>
      </div>
    </>
  );
}

export default Header;
