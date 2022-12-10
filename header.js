const header = document.getElementById('nav');

header.innerHTML =
 `<div>
    <img src="/images/logo.png" alt="">
    </div>
    <div class="links">
    <ul>
        <li><a href="index.html">Home</a></li>
        <li><div class="dropdown">
        <a href="products.html">Products <i class="fa-solid fa-angle-down"></i></a> 
        <div class="dpcontent">
            <ul>
                <li>Phones</li>
                <li>Tablets</li>
                <li>TVs</li>
                <li>Computers</li>
            </ul>
        </div>
        </div> </li>
        <li><a href="aboutus.html">About</a> </li>
        <li><a href="contachus.html">Contact</a></li>
    </ul>
    </div>
    <div>
    <button>Sign Up</button>
</div>`