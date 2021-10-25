import React from 'react';
import ReactDOM from 'react-dom';



const Footer =()=>{

return(
	<>
		<section className="Footercls">
			<div className="container-fluid">
				<div className="row">
					<div className="col-12 col-lg-9 col-xl-9 col-md-12 ">
						<p className="copy_text_user">Copyright ©  2010-2021 <span>Decimal Point Analytics</span> All rights reserved.</p>
					</div>	
					<div className="col-12 col-lg-3 col-xl-3 col-md-12 ">
					<ul className="socialMedia">
					<li><a href=""><i className="icofont-facebook"></i></a></li>
					<li><a href=""><i className="icofont-twitter"></i></a></li>
					<li><a href=""><i className="icofont-linkedin"></i></a></li>
					</ul>

					</div>
				</div>
			</div>
		</section>

	</>
	)


}
export default Footer;
