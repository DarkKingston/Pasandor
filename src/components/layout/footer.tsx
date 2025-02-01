'use client';

import { useState } from "react";
import Image from "next/image";
import footer from "./footer.module.scss"
import Link from 'next/link'

export default function Footer() {
    const [activeLang, setActiveLang] = useState("RUS");

    return (
        <div className={footer.footer}>
            <div className={footer.new_year} style={{ left: "-629px", top: "-42px" }}></div>
            <div className={footer.new_year} style={{ left: "89px", top: "-42px", zIndex: "2" }}></div>
            <div className={footer.new_year} style={{ left: "825px", top: "-39px", zIndex: "1" }}></div>
            <div className={footer.new_year} style={{ left: "1526px", top: "-39px", zIndex: "2" }}></div>
            <div className="container">
                <div className={footer.wrapper}>

                    <div className={footer.box}>
                        <div className={footer.box_wrapper}>
                            <div className={footer.info}>
                                <Link href="/" className={footer.logo}>
                                    <svg width="150" height="70" viewBox="10 10 200 90" xmlns="http://www.w3.org/2000/svg">
                                        <g id="crm-icon">
                                            <circle cx="30" cy="35" r="12" fill="#007AFF"/>
                                            <circle cx="60" cy="20" r="6" fill="#007AFF"/>
                                            <circle cx="60" cy="50" r="6" fill="#007AFF"/>
                                            <line x1="30" y1="35" x2="60" y2="20" stroke="#007AFF" strokeWidth="2"/>
                                            <line x1="30" y1="35" x2="60" y2="50" stroke="#007AFF" strokeWidth="2"/>
                                            <line x1="60" y1="20" x2="60" y2="50" stroke="#007AFF" strokeWidth="2"/>
                                        </g>
                                        <g id="logo-text" fill="#fff" fontFamily="Arial, sans-serif" fontSize="20" fontWeight="bold">
                                            <text x="80" y="42">P</text>
                                            <text x="95" y="42">A</text>
                                            <text x="110" y="42">S</text>
                                            <text x="125" y="42">A</text>
                                            <text x="140" y="42">N</text>
                                            <text x="155" y="42">D</text>
                                            <text x="170" y="42">O</text>
                                            <text x="185" y="42">R</text>
                                        </g>
                                    </svg>
                                </Link>
                                <div className={footer.item}>
                                    <div className={footer.title}>
                                        Контакты
                                    </div>
                                    <Link href="tel:00000000000" className={footer.contact_item}>
                                    <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="13" height="14" viewBox="0 0 13 14" fill="none"> <g clipPath="url(#clip0_13_16294)"> <path d="M8.66675 1.51636V4.76636H11.9167" stroke="white" strokeWidth="1.08333" strokeLinecap="round" strokeLinejoin="round"/> <path d="M12.4584 0.974854L8.66675 4.76652" stroke="white" strokeWidth="1.08333" strokeLinecap="round" strokeLinejoin="round"/> <path d="M11.9165 9.59808V11.2231C11.9171 11.3739 11.8862 11.5233 11.8258 11.6615C11.7654 11.7997 11.6767 11.9238 11.5656 12.0258C11.4544 12.1277 11.3232 12.2054 11.1803 12.2537C11.0374 12.302 10.8859 12.32 10.7357 12.3064C9.0689 12.1253 7.46782 11.5557 6.06111 10.6435C4.75235 9.81185 3.64275 8.70225 2.81111 7.39349C1.89568 5.9804 1.32599 4.37153 1.1482 2.69724C1.13466 2.54745 1.15246 2.39649 1.20047 2.25396C1.24847 2.11142 1.32563 1.98045 1.42703 1.86937C1.52842 1.75829 1.65184 1.66954 1.78942 1.60878C1.92699 1.54801 2.07571 1.51655 2.22611 1.51641H3.85111C4.11399 1.51382 4.36883 1.60691 4.56815 1.77832C4.76747 1.94974 4.89765 2.18778 4.93445 2.44808C5.00303 2.96811 5.13023 3.47872 5.31361 3.97016C5.38649 4.16404 5.40226 4.37474 5.35906 4.5773C5.31586 4.77987 5.2155 4.9658 5.06986 5.11308L4.38195 5.80099C5.15304 7.15708 6.27586 8.2799 7.63195 9.05099L8.31986 8.36308C8.46714 8.21744 8.65307 8.11708 8.85564 8.07388C9.0582 8.03068 9.2689 8.04645 9.46278 8.11933C9.95422 8.30271 10.4648 8.42991 10.9849 8.49849C11.248 8.53561 11.4883 8.66815 11.6601 8.87089C11.8318 9.07363 11.9231 9.33243 11.9165 9.59808Z" stroke="white" strokeWidth="1.08333" strokeLinecap="round" strokeLinejoin="round"/> </g> <defs> <clipPath id="clip0_13_16294"> <rect width="13" height="13" fill="white" transform="translate(0 0.433105)"/> </clipPath> </defs></svg>
                                    </span>
                                        0 000 000-00-00
                                    </Link>
                                    <Link href="mailto:support@pasandor.com" className={footer.contact_item}>
                                    <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="13" height="14" viewBox="0 0 13 14" fill="none"> <path d="M2.16659 2.59985H10.8333C11.4291 2.59985 11.9166 3.08735 11.9166 3.68319V10.1832C11.9166 10.779 11.4291 11.2665 10.8333 11.2665H2.16659C1.57075 11.2665 1.08325 10.779 1.08325 10.1832V3.68319C1.08325 3.08735 1.57075 2.59985 2.16659 2.59985Z" stroke="white" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/> <path d="M11.9166 3.68311L6.49992 7.47477L1.08325 3.68311" stroke="white" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/></svg>
                                    </span>
                                        support@pasandor.com
                                    </Link>
                                </div>
                            </div>
                            <div className={footer.menu}>
                                <div className={`${footer.title}`}>Компания</div>
                                <Link href='#' className={footer.menu_item}>О нас</Link>
                                <Link href='#' className={footer.menu_item}>Партнерам</Link>
                                <Link href='#' className={footer.menu_item}>Разработчика</Link>
                                <Link href='#' className={footer.menu_item}>Контакты и реквизиты</Link>
                                <Link href='#' className={footer.menu_item}>Цены</Link>
                            </div>
                            <div className={footer.menu}>
                                <div className={`${footer.title}`}>Возможности</div>
                                <Link href='#' className={footer.menu_item}>Онлайн-запись</Link>
                                <Link href='#' className={footer.menu_item}>Электронный журнал</Link>
                                <Link href='#' className={footer.menu_item}>Уведомления</Link>
                                <Link href='#' className={footer.menu_item}>Аналитика и отчеты</Link>
                                <Link href='#' className={footer.menu_item}>Складской учет</Link>
                                <Link href='#' className={footer.menu_item}>Онлайн чаевые</Link>
                                <Link href='#' className={footer.menu_item}>Расчет зарплаты</Link>
                            </div>
                            <div className={footer.menu}>
                                <div className={`${footer.title}`}>Для любого бизнеса</div>
                                <Link href='#' className={footer.menu_item}>Красота</Link>
                                <Link href='#' className={footer.menu_item}>Медицина</Link>
                                <Link href='#' className={footer.menu_item}>Спорт</Link>
                                <Link href='#' className={footer.menu_item}>Досуг и отдых</Link>
                                <Link href='#' className={footer.menu_item}>Образование</Link>
                                <Link href='#' className={footer.menu_item}>Авто</Link>
                                <Link href='#' className={footer.menu_item}>Бытовые услуги</Link>
                                <Link href='#' className={footer.menu_item}>Розница</Link>
                            </div>
                            <div className={footer.menu}>
                                <div className={`${footer.title}`}>Правовая информация</div>
                                <Link href='#' className={footer.menu_item}>Пользовательское соглашение</Link>
                                <Link href='#' className={footer.menu_item}>Конфиденциальность</Link>
                                <Link href='#' className={footer.menu_item}>Использование cookie</Link>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className={footer.copyright}>&copy; PASANDOR — 2025</div>
                        <div className={footer.line}></div>
                        <div className={footer.action}>
                            <div className={footer.socials}>
                                <div className={footer.socials_item}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="26" viewBox="0 0 25 26" fill="none"> <g clipPath="url(#clip0_183_30402)"> <path fillRule="evenodd" clipRule="evenodd" d="M12.5 25.1328C19.4035 25.1328 25 19.5363 25 12.6328C25 5.72931 19.4035 0.132812 12.5 0.132812C5.5965 0.132812 0 5.72931 0 12.6328C0 19.5363 5.5965 25.1328 12.5 25.1328ZM17.9942 8.11881C18.0907 7.02381 16.9342 7.47481 16.9342 7.47481C16.0805 7.82831 15.2 8.18731 14.31 8.55031C11.55 9.67606 8.699 10.8391 6.27025 11.9838C4.95325 12.4668 5.72425 12.9498 5.72425 12.9498L7.812 13.5941C8.77575 13.8841 9.2895 13.5618 9.2895 13.5618L13.7865 10.5023C15.3925 9.40731 15.007 10.3091 14.6215 10.6956L11.249 13.9161C10.735 14.3671 10.992 14.7536 11.2168 14.9468C11.8542 15.5091 13.4218 16.5378 14.106 16.9868C14.284 17.1036 14.4023 17.1813 14.429 17.2013C14.5895 17.3301 15.4567 17.9098 16.035 17.7811C16.6133 17.6521 16.6775 16.9113 16.6775 16.9113L17.4482 11.8548C17.5637 10.9771 17.6965 10.1333 17.8025 9.45931C17.9025 8.82281 17.9788 8.33806 17.9942 8.11881Z" fill="#525252"/> </g> <defs> <clipPath id="clip0_183_30402"> <rect width="25" height="25" fill="white" transform="translate(0 0.132812)"/> </clipPath> </defs></svg>
                                </div>
                                <div className={footer.socials_item}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="26" viewBox="0 0 25 26" fill="none"> <g clipPath="url(#clip0_183_30408)"> <path fillRule="evenodd" clipRule="evenodd" d="M12.5 25.1328C19.4035 25.1328 25 19.5363 25 12.6328C25 5.72931 19.4035 0.132812 12.5 0.132812C5.5965 0.132812 0 5.72931 0 12.6328C0 19.5363 5.5965 25.1328 12.5 25.1328ZM16.975 8.28931C17.9345 8.37581 18.475 8.96306 18.5935 9.89881C18.6765 10.5518 18.75 11.4868 18.75 12.4926C18.75 14.2586 18.5935 15.2796 18.5935 15.2796C18.4465 16.2116 17.996 16.7176 17.0485 16.8246C15.9898 16.9446 13.6085 16.9996 12.5505 16.9996C11.4555 16.9996 9.24125 16.9536 8.1355 16.8616C7.1855 16.7823 6.537 16.2516 6.4065 15.3071C6.3115 14.6191 6.25 13.8016 6.25 12.5016C6.25 11.0546 6.30225 10.4421 6.425 9.78831C6.59975 8.85531 7.045 8.40331 8.062 8.29831C9.129 8.18806 10.1375 8.13281 12.3942 8.13281C13.4975 8.13281 15.8763 8.18981 16.975 8.28931ZM11.171 10.7296V14.3231L14.5925 12.5078L11.171 10.7296Z" fill="#525252"/> </g> <defs> <clipPath id="clip0_183_30408"> <rect width="25" height="25" fill="white" transform="translate(0 0.132812)"/> </clipPath> </defs></svg>
                                </div>
                            </div>
                            <div className={footer.langs}>
                                <div
                                    className={`${footer.lang} ${activeLang === "RUS" ? footer.lang_active : ""}`}
                                    onClick={() => setActiveLang("RUS")}
                                >
                                    RUS
                                </div>
                                <div
                                    className={`${footer.lang} ${activeLang === "ENG" ? footer.lang_active : ""}`}
                                    onClick={() => setActiveLang("ENG")}
                                >
                                    ENG
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
