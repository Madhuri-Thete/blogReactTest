import React from 'react';
import ReactDOM from 'react-dom';

import { Link } from "react-router-dom";

const Createpost =()=>{

return(
	<>
		<section className="createpost_box">
			<div className="container-fluid">
				<div className="row">
					<div  className="col-12 col-xl-12 col-md-12 col-lg-12">
						<div className="contentBox">
						  
						   <p className="wel_title">Create Your Post</p>
						   <div className="form-group"><label className="label_input">Title</label>
						   <input type="text" name="username" className="form-control custom-control"/>
						   </div>
						   <div className="form-group"><label className="label_input">Description</label>
						  
						   <textarea className="form-control " rows="10" cols="10"></textarea>
						   </div>
						  
						   <div className="form-group pos_rel">
						   		<label className="label_input">Image</label>
						       <input type="file" />
						       <button type="button" className="uploadbtn"><i className="fa fa-cloud-upload" aria-hidden="true"></i> Upload Blog Image</button>
						   </div>
						   <div className="form-group"><Link className="createbtn2" to="/blog">Create Post</Link></div>
						  
						</div>
					</div>
				</div>
			</div>
		</section>
	</>

	)

}
export default Createpost;