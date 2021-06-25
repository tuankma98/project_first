
var header = document.getElementById('header');
console.log(header);
var mobileMenu = document.getElementById('mobile-menu');
console.log(mobileMenu);

var headerHeight = header.clientHeight;  // in ra chiều cao của header

// closed open mobile menu
mobileMenu.onclick = function() {
    var isClosed = header.clientHeight === headerHeight; // so sanh
    if(isClosed) {
        header.style.height = 'auto';  // đúng in ra = chiều cao
    }else {
        header.style.height = null; // hidden menu
    }
}

// closed menu item when event onclick
var menuItems = document.querySelectorAll('#nav li a[href *="#"]');  // seclect all card a have href='#'
console.log(menuItems);

for(var i =0; i<menuItems.length; i++) {
   var menuItem = menuItems[i];
   
   menuItem.onclick = function(event) {
       // this là chính nó.. là menuItem
    var isParentMenu = (this.nextElementSibling && this.nextElementSibling.classList.contains('subnav'));
        // sibling là anh chị em.. (tìm anh chị em của thẻ a nếu có thẻ nào thì sẽ select vào thẻ đó)

    if(isParentMenu){
        event.preventDefault();  // bỏ qua mặc định ban đầu của nó
    }else{
        header.style.height = null;
    }
}
}
