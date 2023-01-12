app.directive("heroFour", function(){

    return {

        template : `
        
        <div class="container col-xxl-8 px-2 py-2 mb-5">
            <div class="row flex-lg-row-reverse align-items-center g-5 py-4">
                <div class="col-10 col-sm-8 col-lg-6">
                    <img src="./src/images/grover7.png" class="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" 
                    loading="lazy">
                </div>

                <div class="col-lg-5">
                <div class="container">

                    <span>
                        <b><font color="#fac35c">HOME DELIVERY </font></b>
                    </span>

                    <h1 class="display-5 fw-bold lh-1 mb-3 mt-2">
                        Sit At Home We Will Take Care Of Your Order
                    </h1>

                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, non maiores, ratione libero iusto.
                    </p>

                    <div class="d-grid gap-2 d-md-flex justify-content-md-start">
                        <button type="button" class="btn btn-lg btn-outline-danger">
                            Explore Now
                        </button>
                    </div>

                </div>
                </div>

            </div>
            
        </div>
        
        `

    }

});