import React from 'react';
import ReactDOM from 'react-dom';

import { Link } from "react-router-dom";

const Blogdetails =()=>{

return(
	<>
	<section className="blog-detailsBox">
		<div className="container-fluid">
			<div className="row">
				<div className="col-12 col-xl-9 col-md-12 col-lg-9">
					<div className="blog-details">
						<img src="assets/images/blog-1.jpg" className="img-fluid"/>
					</div>
					<h3>Why do we use it?</h3>
					<p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>

					<p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
					<p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
					<p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
				</div>
				<div className="col-12 col-xl-3 col-md-12 col-lg-3">
					<div className="recentBlog">
					<h4>Related Blog</h4>
							<div className="related">
								<div className="row nomargin">
									<div className="col-12 col-xl-4 col-md-12 col-lg-4 nopadding">
									<Link to="/blogdetails">
										<img src="assets/images/blog-3.jpg" className="img-fluid"/>
										</Link>
									</div>
									<div className="col-12 col-xl-8 col-md-12 col-lg-8">
									<Link to="/blogdetails">
										<h5>It is a long established fact that a reader will be distracted</h5>
										</Link>
									</div>

								</div>
							</div>
							<div className="related">
								<div className="row nomargin">
									<div className="col-12 col-xl-4 col-md-12 col-lg-4 nopadding">
									<Link to="/blogdetails">
										<img src="assets/images/blog-3.jpg" className="img-fluid"/>
										</Link>
									</div>
									<div className="col-12 col-xl-8 col-md-12 col-lg-8">
									<Link to="/blogdetails">
										<h5>It is a long established fact that a reader will be distracted</h5>
										</Link>
									</div>

								</div>
							</div>
							<div className="related">
								<div className="row nomargin">
									<div className="col-12 col-xl-4 col-md-12 col-lg-4 nopadding">
									<Link to="/blogdetails">
										<img src="assets/images/blog-3.jpg" className="img-fluid"/>
										</Link>
									</div>
									<div className="col-12 col-xl-8 col-md-12 col-lg-8">
									<Link to="/blogdetails">
										<h5>It is a long established fact that a reader will be distracted</h5>
										</Link>
									</div>

								</div>
							</div>
							<div className="related">
								<div className="row nomargin">
									<div className="col-12 col-xl-4 col-md-12 col-lg-4 nopadding">
									<Link to="/blogdetails">
										<img src="assets/images/blog-3.jpg" className="img-fluid"/>
										</Link>
									</div>
									<div className="col-12 col-xl-8 col-md-12 col-lg-8">
									<Link to="/blogdetails">
										<h5>It is a long established fact that a reader will be distracted</h5>
										</Link>
									</div>

								</div>
							</div>
							<div className="related">
								<div className="row nomargin">
									<div className="col-12 col-xl-4 col-md-12 col-lg-4 nopadding">
									<Link to="/blogdetails">
										<img src="assets/images/blog-3.jpg" className="img-fluid"/>
										</Link>
									</div>
									<div className="col-12 col-xl-8 col-md-12 col-lg-8">
									<Link to="/blogdetails">
										<h5>It is a long established fact that a reader will be distracted</h5>
										</Link>
									</div>

								</div>
							</div>
					</div>
				</div>
			</div>
		</div>
	</section>
	</>

	)

}
export default Blogdetails;