app.directive("heading", function(){

    return {

        template : `
        
        <nav class="navbar navbar-expand-md bg-white mt-3">
            <div class="container">
                <a class="navbar-brand text-dark" href="#">
                
                    <img src="./src/images/grover-logo.png" height="40px" width="40px"/> <b>Grover</b>

                </a>

                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample04" aria-controls="navbarsExample04" aria-expanded="false" aria-label="Toggle navigation">
                    <i class="fa fa-navicon "></i>
                </button>
                

                <div class="collapse navbar-collapse" id="navbarsExample04">
                    
                    <ul class="navbar-nav mx-auto mb-md-0" style="width:150px;">

                        <li class="nav-item pe-3">
                            <a class="nav-link active" aria-current="page" href="#" style="color:#f65d5e"><b>Home</b></a>
                        </li>

                        <li class="nav-item pe-3">
                            <a class="nav-link text-dark" href="#"><b>Menu</b></a>
                        </li>

                        <li class="nav-item pe-3">
                            <a class="nav-link text-dark" href="#"><b>Service</b></a>
                        </li>

                        <li class="nav-item">
                            <a class="nav-link text-dark" href="#"><b>Shop</b></a>
                        </li>

                    </ul>
                    
                    <form>
                        
                        <input type="text" class="form-control form-control-md shadow-sm bg-white rounded-4" 
                        id="floatingInput" placeholder="Search">
                        
                    </form>

                </div>
            </div>

        </nav>
        
        `

    }

});