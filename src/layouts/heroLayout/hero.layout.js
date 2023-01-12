app.directive("hero", function(){

    return {

        template : `
        
        <div class="container col-xxl-8 px-2 py-2 mb-5">
            <div class="row flex-lg-row-reverse align-items-center g-5 py-4">
                <div class="col-10 col-sm-8 col-lg-6">
                    <img src="./src/images/grover2.png" class="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" 
                    loading="lazy">
                </div>

                <div class="col-lg-5">
                <div class="container">

                    <span class="rounded-pill py-2 px-3" style="background-color:#fef5f5;">
                        <b><font color="#f65d5e">More than faster <i class="fa fa-flash"></i></font></b>
                    </span>

                    <h1 class="display-5 fw-bold lh-1 mb-3 mt-4">
                        Groceries delivered in as little as <font color="#f65d5e">2 hours</font>
                    </h1>
                    <p>
                        Grover assures fresh grocery every morning to your family without getting out this pandemic.
                    </p>

                    <div class="d-grid gap-2 d-md-flex justify-content-md-start">
                        <button type="button" class="btn btn-md text-light" style="background-color:#f54748">
                            <b>Order Now</b>
                        </button>
                        <button type="button" class="btn btn-white btn-md text-dark">
                            <b><i class="fa fa-chevron-right me-3 ms-2"></i> Order Process</b>
                        </button>
                    </div>

                </div>
                </div>

            </div>

        </div>
        
        `

    }

});