import Head from 'next/head'
import Bootstrap from 'bootstrap'
import styles from '../styles/Home.module.css'

export default function Header() {
    return (
      <div className={styles.container}>
        <header class="page-header">
            <nav class="main-menu static-top navbar-dark navbar navbar-expand-lg fixed-top mb-1"><div class="container">
                    <a class="navbar-brand animated" data-animation="fadeInDown" data-animation-delay="1s" href="#head-area"><img src="theme-assets/images/logo.png" width="130px" alt="OZC logo"/></a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarCollapse">
                        <div id="navigation" class="navbar-nav ml-auto">
                            <ul class="navbar-nav mt-1">
                                <li class="nav-item animated" data-animation="fadeInDown" data-animation-delay="1.1s">
                                    <a class="nav-link" href="#about">What is OZC?</a>
                                </li>
                                <li class="nav-item animated" data-animation="fadeInDown" data-animation-delay="1.2s">
                                    <a class="nav-link" href="#problem-solution">Solution</a>
                                </li>
                                <li class="nav-item animated" data-animation="fadeInDown" data-animation-delay="1.4s">
                                    <a class="nav-link" href="#token-sale-mobile-app">Token Sale</a>
                                </li>
                                <li class="nav-item animated" data-animation="fadeInDown" data-animation-delay="1.5s">
                                    <a class="nav-link" href="#roadmap">Roadmap</a>
                                </li>
                                <li class="nav-item animated" data-animation="fadeInDown" data-animation-delay="1.5s">
                                    <a class="nav-link" href="#team">Team</a>
                                </li>
                                <li class="nav-item animated" data-animation="fadeInDown" data-animation-delay="1.5s">
                                    <a class="nav-link" href="#faq">FAQ</a>
                                </li>
                                <li class="dropdown show mr-4 animated" data-animation="fadeInDown" data-animation-delay="1.7s">
                                    <a class="dropdown-toggle" href="#" role="button" id="language" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><span class="flag-icon flag-icon-us"></span> EN</a>
                                </li>
                            </ul>
                            <span id="slide-line"></span>
                                                    <form class="form-inline mt-2 mt-md-0">
                                    <a class="btn btn-sm btn-gradient-purple btn-glow my-2 my-sm-0 animated" data-animation="fadeInDown" data-animation-delay="1.8s" href="login.html">Sign in</a>
                                </form>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
      </div>
    )
  }
  