class HeaderTpl extends HTMLElement {
    connectedCallback() {
        this.innerHTMl = `
      <section class="header">
        <div class="container top-header">
            <div class="row">
                <div class="top-header-menu col-xl-6 col-lg-6 col-md-12 col-xs-12">

                    <div class="top-header-menu-logo">
                        <div class="logo">
                            <a href="/"><img src="images/logo/logo3.png" alt="logo" /></a>
                        </div>
                        <div class="menu-links">
                            <a href="#">Каталог</a>
                            <a href="#">Справочник</a>
                            <a href="#">Контакты</a>
                        </div>
                    </div>
                    <form class="search">
                        <i class="fas fa-search"></i>
                        <input type="text" placeholder="  Поиск по сайту...">
                    </form>

                </div>

                <div class="top-empty-block col-xl-2 col-lg-2 col-md-12 col-xs-12"></div>

                <ul class="top-header-contacts col-xl-2 col-lg-2 col-md-12 col-xs-12">
                    <li class="tel">
                        <a href="tel:+78612040991">
                            <i class="fas fa-mobile-alt"></i>
                            <span class="tel-content">+7(861)204-09-91</span>
                        </a>
                    </li>
                    <li class="mail">
                        <a href="mailto:info@bazamet.ru">
                            <i class="fas fa-envelope-open-text"></i>
                            <span class="mail-content">info@bazamet.ru</span>
                        </a>
                    </li>
                </ul>

                <div class="top-header-calc col-xl-2 col-lg-2 col-md-12 col-xs-12">
                    <div class="btn-calc">
                        <a href="/catalog/calc">
                            <i class="fas fa-calculator"></i>
                            <span class="top-calc">калькулятор металлопроката</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <div class="ticker">
            <marquee loop="-1">Продажа широкого ассортимента нержавеющего и цветного металлопроката. Отечественные и иностранные производители. Прямые поставки и минимальные цены. Складское наличие - более 300 тонн. Оптовая и розничная отгрузка. Осуществляем изготовление
                металлоизделий. </marquee>
        </div>
      </section>
    `
    }
}

customElements.define('header-tpl', HeaderTpl)