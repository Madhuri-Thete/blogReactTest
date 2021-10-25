
import React from 'react';
import ReactDOM from 'react-dom';



const Home =()=>{

return(
	<>
	 <section className=" header Home_top" id="top">
<div className="">
    <div className="container-fluid nopadding">   

    <div className="row nomargin">
      <div className="col-12 col-lg-12 col-xl-12 col-md-12">
      <p className="subtitle">"What is Lorem Ipsum?"</p>
      

         <h1 className="wow fadeInDown typewrite title_name" data-wow-duration="2500ms"   data-period="2000" data-type='[ "Welcome to Our Site"]'><span className="wrap"></span> </h1> 
         
        <p className="subtitle">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
       
        <p className="text-center"><a className="scroll_arrow" href="#id_1"><i className="fa fa-angle-double-down" aria-hidden="true"></i></a></p>
      </div>  
    </div>         
       
    
    </div>
<div className="inner-header flex">


</div>


<div className="waveContent">
<svg className="waves" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
viewBox="0 24 150 28" preserveAspectRatio="none" shape-rendering="auto">
<defs>
<path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
</defs>
<g className="parallax">
<use xlinkHref="#gentle-wave" x="48" y="0" fill="rgba(255,255,255,0.7" />
<use xlinkHref="#gentle-wave" x="48" y="3" fill="rgba(255,255,255,0.5)" />
<use xlinkHref="#gentle-wave" x="48" y="5" fill="rgba(255,255,255,0.3)" />
<use xlinkHref="#gentle-wave" x="48" y="7" fill="#fff" />
</g>
</svg>
</div>
</div>
</section>
	 
	<section className="Home_two wow fadeInDown" id="id_1">
    <div className="container-fluid nopadding">   

        <div className="row nomargin">
            <div className="col-12 col-lg-12 col-xl-12 col-md-12">
            
                <p className="Hometitle">About Us</p>
            </div>


         
        </div>

        <div className="row nomargin">
            <div className="col-12 col-lg-4 col-xl-4 col-md-4">
                <div className="client_review home_review">
                    <div>
                    <p><i className="fa fa-file-code-o" aria-hidden="true"></i></p>
                    <h3>Lorem Ipsum is simply dummy text of the printing and typesetting industry</h3>
                    </div>
                </div>

            </div>
            <div className="col-12 col-lg-4 col-xl-4 col-md-4">
                <div className="client_review home_review">
                    <div>
                    <p><i className="fa fa-file-code-o" aria-hidden="true"></i></p>
                    <h3>Lorem Ipsum is simply dummy text of the printing and typesetting industry</h3>
                    </div>
                </div>

            </div>

            <div className="col-12 col-lg-4 col-xl-4 col-md-4">
                <div className="client_review home_review">
                    <div>
                    <p><i className="fa fa-file-code-o" aria-hidden="true"></i></p>
                    <h3>Lorem Ipsum is simply dummy text of the printing and typesetting industry</h3>
                    </div>
                </div>

            </div>


        </div>
         
    </div>
</section>


<section className="content_box">
	 	<div className="container-fluid">
	 		<div className="row">
	 			<div  className="col-12 col-xl-12 col-md-12 col-lg-12">
	 		
                <p className="Hometitle">HOW IT WORKS</p>
	 				
	 				
	 			</div>
	 		</div>

	 		<div className="row">
	 			<div className="col-12 col-xl-6 col-md-12 col-lg-6">
	 				<p className="howto_text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
	 				<p className="howto_text">when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
	 				<p className="howto_text">when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
	 			</div>
	 			<div className="col-12 col-xl-6 col-md-12 col-lg-6">
	 				<img src="assets/images/Artificial-Intelligence-5.jpg" className="img-fluid howto_image"/>
	 			</div>
	 		</div>
	 	</div>
	 </section>

	</>
	)
}
export default Home;