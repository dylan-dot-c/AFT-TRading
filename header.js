const header = document.getElementById('nav');

function changeMode() {
    let currentMode = document.documentElement.dataset.theme
    
    document.documentElement.dataset.theme = (currentMode == 'light') ? 'dark' : 'light';
}
header.innerHTML =
 `  <div>
    <a href="index.html"><img src="/images/logo.png" alt=""></a>
    </div>
    <div class="links">
        <ul>
            <li><a href="index.html">Home</a></li>
            <li><a href="products.html">Products <i class="fa-solid fa-angle-down"></i></a>  </li>
            <li><a href="aboutus.html">About</a> </li>
            <li><a href="contachus.html">Contact</a></li>
            <li><button id="change" onclick="changeMode()">Change Mode</button></li>
            
        </ul>
        
    </div>
    
    <button>Sign Up</button>
    
    
    <div class="mobile--menu" id="mobile" onclick="toggle()"><i class="fa-solid fa-bars"></i></div>`