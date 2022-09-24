import './Main.css'

function Main() {
	return (
		<div className="App">
			<header className="header">
				<div className="container">
					<div className="header__inner">
						<img src="../assets/images/logo.svg" alt="logo"/>
						<nav>
							<ul className="menu">
								<li className='menu-item'><a className="menu-link" href="#">Главная</a></li>
								<li className='menu-item'><a className="menu-link" href="#">Кейсы</a></li>
								<li className='menu-item'><a className="menu-link" href="#">Контакты</a></li>
							</ul>
						</nav>
					</div>
				</div>
			</header>
			<main className="main">
				<div className="container">
					Привет
				</div>
			</main>
		</div>
	);
}

export default Main