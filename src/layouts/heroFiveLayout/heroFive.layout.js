app.directive("heroFive", function(){

    return {

        template : `

        <div style="background-color:#fef5f5;">

        <div class="container col-xxl-8 px-2 py-2 mb-5">
            <div class="row flex-lg-row-reverse align-items-center g-5 py-4">

                <div class="col-lg-5">
                <div class="container">

                    <span>
                        <b><font color="#f65d5e">Download our app</font></b>
                    </span>

                    <h1 class="display-5 fw-bold lh-1 mb-3 mt-2">
                        Get The Groceries App Order More Easily
                    </h1>

                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, non maiores, ratione.
                    </p>

                    <div class="d-grid gap-2 d-md-flex justify-content-md-start pt-4">
                        <button type="button" class="btn btn-lg btn btn-outline-secondary text-dark">
                            <i class="fa fa-apple"></i> <b>App store</b>
                        </button>
                        <button type="button" class="btn btn-lg btn btn-outline-secondary text-dark">
                            <i class="fa fa-play"></i> <b>Play store</b>
                        </button>
                    </div>

                </div>
                </div>

                <div class="col-10 col-sm-8 col-lg-6">
                    <img src="./src/images/grover10.png" class="d-block mx-lg-auto" alt="Bootstrap Themes" width="300px" height="500px" 
                    loading="lazy">
                </div>

            </div>

        </div>

        </div>
        
        `

    }

});