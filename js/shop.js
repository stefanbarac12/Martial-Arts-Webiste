//Prikazuje shop div
function prikaziShop() {
    gsap.fromTo("#right-div", { x: 500 }, { duration: 1, x: 0, ease: 'back' });
    gsap.fromTo("#left-div", { x: -500, }, { duration: 1, x: 0, ease: 'back', });

    categoriesDiv();

    let quote = document.getElementById('quote');
    quote.innerHTML = `"Only a fool does something new and thinks it will work for sure.
    <br> Only a failure refuses to try something that might not work."`;

    let rightDiv = document.getElementById('right-div');
    rightDiv.innerHTML = '';
    rightDiv.style.width = '500px';
    rightDiv.style.height = '690px';
    rightDiv.style.overflow = 'hidden';

    let shopH1 = document.createElement('h1');
    shopH1.innerHTML = 'Welcome to Jutsu Shop';
    shopH1.id = 'login-h1';
    rightDiv.appendChild(shopH1);

    let shopWelcomeText = document.createElement('div');
    shopWelcomeText.style.textAlign = 'center';
    shopWelcomeText.innerHTML = `<div>You'll be the first to hear about our new
                                collections, special offers, upcoming sales, new releases and much more!</div>`;
    rightDiv.appendChild(shopWelcomeText);

    let btnsDiv = document.createElement('div');
    btnsDiv.id = 'btns-div';
    rightDiv.appendChild(btnsDiv);

    let searchItemsInput = document.createElement('input');
    searchItemsInput.id = 'search-input';
    searchItemsInput.classList = 'input';
    searchItemsInput.placeholder = 'What are you looking for?';
    searchItemsInput.onkeydown = () => {
        searchElement();
    }
    btnsDiv.appendChild(searchItemsInput);


    let cartInfo = document.createElement('div');
    cartInfo.id = 'cart-info';
    cartInfo.innerHTML = `<i class="fas fa-cart-arrow-down"></i>
                        <span id="item-count">0</span>
                            Items - $
                        <span id="item-total">0</span>`;
    cartInfo.onclick = () => {
        gsap.fromTo("#cart-div", { x: -500, }, { duration: 1, x: 0, ease: 'back', });
        gsap.fromTo("#left-div", { x: -500, }, { duration: 1, x: 0, ease: 'back', });

        //swapuje cart div i categories div
        let leftDiv = document.getElementById('left-div');
        let cartDiv = document.getElementById('cart-div');
        let cartInfo = document.getElementById('cart-info');
        cartInfo.classList.toggle('glow');
        leftDiv.classList.toggle('hidden');
        cartDiv.classList.toggle('show-cart');
    }
    btnsDiv.appendChild(cartInfo);

    let mainDiv = document.getElementById('main-div');
    let goBackBtn2 = document.createElement('span');
    goBackBtn2.innerHTML = 'Categories';
    goBackBtn2.id = 'go-back-btn2';
    goBackBtn2.classList = 'btn-login';
    goBackBtn2.onclick = () => {
        categoriesDiv();
        mainDiv.removeChild(goBackBtn2);
        mainDiv.appendChild(adminPanel);
    }

    let adminPanel = document.createElement('span');
    adminPanel.classList = 'btn-login';
    adminPanel.id = 'admin-panel-btn';
    adminPanel.innerHTML = 'Admin Panel';
    mainDiv.appendChild(adminPanel);
    adminPanel.onclick = () => {
        addminPanelDiv();
        mainDiv.removeChild(adminPanel);
        mainDiv.appendChild(goBackBtn2);
    }

    //Prikazuje admin panel samo kad je admin ulogovan
    if (userLevel !== 1) {
        adminPanel.style.display = 'none';
    }

    let robaDiv = document.createElement('div');
    robaDiv.id = 'roba';
    rightDiv.appendChild(robaDiv);

    let sliderDiv = document.createElement('div');
    sliderDiv.id = 'slider-div';
    rightDiv.appendChild(sliderDiv);

    let slider = document.createElement('input');
    slider.id = 'slider';
    slider.type = 'range';
    slider.min = '0';
    slider.max = '990';
    slider.value = '321';
    sliderDiv.appendChild(slider);

    let output = document.createElement('h4');
    output.style.marginTop = '10px';
    output.innerHTML = 'Price: ' + slider.value + ' $' + ' - 990 $';
    sliderDiv.appendChild(output);

    slider.oninput = function () {
        output.innerHTML = 'Price: ' + slider.value + ' $' + ' - 990 $';
    }

    let filterBtn = document.createElement('h4');
    filterBtn.classList = 'btn-login';
    filterBtn.innerHTML = 'Filter';
    filterBtn.style.width = '80px';
    filterBtn.onclick = () => {
        filterElement();
    }
    sliderDiv.appendChild(filterBtn);

    prikaziRobu();
    myItemsDiv();
    showTotal();
}

//Prikazuje total u cart shopu
function showTotal() {
    const total = [];
    let items = document.querySelectorAll('.total-item-price');

    items.forEach((item) => {
        let finalItem = item.innerHTML;
        let totalSum = finalItem.slice(2, 10).trim();
        total.push(parseInt(totalSum));
    });

    const totalMoney = total.reduce((total, price) => {
        total += price;
        return total;
    }, 0);

    document.getElementById('total-price-h4').innerHTML = 'Your price in total is: $ ' + totalMoney;
    document.getElementById('item-total').innerHTML = totalMoney;
    document.getElementById('item-count').innerHTML = total.length;
}

//Prikazuje categoeis div
function categoriesDiv() {
    gsap.fromTo("#left-div", { x: -500, }, { duration: 1, x: 0, ease: 'back', });

    //Prikazuje kolicinu itema za svaki kategoriju
    const howMuchKatanas = roba.katanas.length;
    const howMuchKnifes = roba.knifes.length;
    const howMuchNunchuks = roba.nunchuks.length;
    const howMuchSais = roba.sais.length;
    const howMuchBoStaffs = roba.boStaffs.length;
    const howMuchTonfas = roba.tonfas.length;
    const howMuchCrossBows = roba.crossbows.length;
    const howMuchShurikens = roba.shurikens.length;
    const howMuchKimonos = roba.kimonos.length;
    const howMuchTshrits = roba.tshirts.length;
    const howMuchTrousers = roba.trousers.length;
    const howMuchHoodies = roba.hoodies.length;
    const howMuchJackets = roba.jackets.length;
    const howMuchShorts = roba.shorts.length;
    const howMuchPunchingBags = roba.punchingBags.length;
    const howMuchPads = roba.pads.length;
    const howMuchSpeedBalls = roba.speedBalls.length;
    const howMuchMakiwaras = roba.makiwaras.length;
    const howMuchWoodenDummy = roba.woodenDummy.length;
    const howMuchBreakingBoards = roba.breakingBoards.length;

    let leftDiv = document.getElementById('left-div');
    leftDiv.innerHTML = '';
    leftDiv.style.width = '420px';
    leftDiv.style.height = '550px';
    leftDiv.style.overflowY = 'scroll';

    let categoriesH1 = document.createElement('h1');
    categoriesH1.id = 'login-h1';
    categoriesH1.innerHTML = 'Categories';

    let everythingDiv = document.createElement('div');
    everythingDiv.innerHTML = 'EVERYTHING';
    everythingDiv.id = 'everything-div';
    everythingDiv.onclick = () => {
        everythingDiv.style.color = 'turquoise';
        prikaziRobu();
    }

    let weaponsDiv = document.createElement('details');
    weaponsDiv.id = 'weapons-div';
    weaponsDiv.open = true;
    weaponsDiv.onclick = () => {
        //
    }

    let weaponsSummary = document.createElement('summary');
    weaponsSummary.innerHTML = 'WEAPONS';
    weaponsDiv.innerHTML = `
    <p onclick="prikaziKatanas()">- Katanas & Swords</p><span>( ${howMuchKatanas} )</span>
    <p onclick="prikaziKnifes()">- Knifes & Boxers</p><span>( ${howMuchKnifes} )</span>
    <p onclick="prikaziNunchuks()">- Nunchuks</p><span>( ${howMuchNunchuks} )</span>
    <p onclick="prikaziSais()">- Sais</p><span>( ${howMuchSais} )</span>
    <p onclick="prikaziStaffs()">- Bo Staffs</p><span>( ${howMuchBoStaffs} )</span>
    <p onclick="prikaziTonfas()">- Tonfas</p><span>( ${howMuchTonfas} )</span>
    <p onclick="prikaziCrossbows()">- Crossbows</p><span>( ${howMuchCrossBows} )</span>
    <p onclick="prikaziShurinkens()">- Shurikens & Kunais</p><span>( ${howMuchShurikens} )</span>`

    let kimonosDiv = document.createElement('details');
    kimonosDiv.id = 'kimonos-div';
    kimonosDiv.onclick = () => {
        //
    }

    let kimonosSummary = document.createElement('summary');
    kimonosSummary.innerHTML = 'KIMONOS & CLOTHES';
    kimonosDiv.innerHTML = `
    <p onclick="prikaziKimonos()">- Kimonos</p><span>( ${howMuchKimonos} )</span>
    <p onclick="prikaziTshirts()">- T-shirts</p><span>( ${howMuchTshrits} )</span>
    <p onclick="prikaziTrousers()">- Trousers</p><span>( ${howMuchTrousers} )</span>
    <p onclick="prikaziHoodies()">- Hoodies</p><span>( ${howMuchHoodies} )</span>
    <p onclick="prikaziJackets()">- Jackets</p><span>( ${howMuchJackets} )</span>
    <p onclick="prikaziShorts()">- Shorts</p><span>( ${howMuchShorts} )</span>`;

    let padsDiv = document.createElement('details');
    padsDiv.id = 'pads-div';

    let padsSummary = document.createElement('summary');
    padsSummary.innerHTML = 'PADS & PUNCHING BAGS';
    padsDiv.innerHTML = `
    <p onclick="prikaziPunchingbags()">- Punching bags</p><span>( ${howMuchPunchingBags} )</span>
    <p onclick="prikaziPads()">- Pads</p><span>( ${howMuchPads} )</span>
    <p onclick="prikaziSpeedballs()">- Speedballs</p><span>( ${howMuchSpeedBalls} )</span>
    <p onclick="prikaziMakiwaras()">- Makiwaras</p><span>( ${howMuchMakiwaras} )</span>
    <p onclick="prikaziWoodenDummys()">- Wooden Dummys</p><span>( ${howMuchWoodenDummy} )</span>
    <p onclick="prikaziBreakingBoards()">- Breaking Boards</p><span>( ${howMuchBreakingBoards} )</span>`;

    let accessoriesDiv = document.createElement('div');
    accessoriesDiv.innerHTML = 'ACCESSORIES';
    accessoriesDiv.id = 'accessories-div';
    accessoriesDiv.onclick = () => {
        accessoriesDiv.style.color = 'turquoise';
        prikaziAccessories();
    }

    leftDiv.appendChild(categoriesH1);
    leftDiv.appendChild(everythingDiv);
    leftDiv.appendChild(weaponsDiv);
    weaponsDiv.appendChild(weaponsSummary);
    leftDiv.appendChild(kimonosDiv);
    kimonosDiv.appendChild(kimonosSummary);
    leftDiv.appendChild(padsDiv);
    padsDiv.appendChild(padsSummary);
    leftDiv.appendChild(accessoriesDiv);

    gsap.fromTo("details[open] ~ *", { y: 500, }, { duration: 1, y: 0, ease: 'rough', stagger: 0.2 });
}

//Prikazuje kupljenu robu
function myItemsDiv() {
    let mainDiv = document.getElementById('main-div');

    let cartDiv = document.createElement('div');
    cartDiv.id = 'cart-div';
    cartDiv.style.width = '450px';
    cartDiv.style.height = '610px';

    let porudzbeniceDiv = document.createElement('div');
    porudzbeniceDiv.id = 'porudzbenice';

    let noItemsMsg = document.createElement('div');
    noItemsMsg.innerHTML = 'No item are added to the Cart!';
    noItemsMsg.id = 'no-item-msg';

    let myItemsH1 = document.createElement('h1');
    myItemsH1.id = 'login-h1';
    myItemsH1.innerHTML = 'My Cart Items';

    let flexDiv = document.createElement('div');
    flexDiv.id = 'flex-div';

    let totalPrice = document.createElement('h4');
    totalPrice.id = 'total-price-h4';

    let clearAll = document.createElement('h4')
    clearAll.classList = 'btn-login';
    clearAll.innerHTML = 'Clear all items';
    clearAll.style.width = '120px';
    clearAll.style.margin = '0';
    clearAll.onclick = () => {
        porudzbeniceDiv.innerHTML = '';
        noItemsMsg.style.display = 'block';
        showTotal();
    }

    let flexDiv2 = document.createElement('div');
    flexDiv2.id = 'flex-div2';

    let checkOutBtn = document.createElement('span');
    checkOutBtn.innerHTML = 'Check out';
    checkOutBtn.classList = 'btn-login';
    checkOutBtn.onclick = () => {
        let porudzbenice = document.getElementById('porudzbenice');

        //Prikazuje text kad se kupe itemi i prikazuje text u elsu kad nema itema na raspolaganju
        if (porudzbenice.children.length > 0) {
            document.getElementById('warning').style.transform = 'translateX(-180px)';
            document.getElementById('warning').innerHTML = 'Thank you purchasing! Please come and visit us again!';
            setTimeout(() => {
                document.getElementById('warning').innerHTML = '';
            }, 3000);

            porudzbeniceDiv.innerHTML = '';
            noItemsMsg.style.display = 'block';
            showTotal();
        }
        else {
            document.getElementById('warning').style.transform = 'translateX(-220px)';
            document.getElementById('warning').innerHTML = 'No items in the cart! You have to add items to the cart to purchase!';
            setTimeout(() => {
                document.getElementById('warning').innerHTML = '';
            }, 3000);
        }
    }

    //vraca na prethodni page
    let goBackBtn = document.createElement('span');
    goBackBtn.innerHTML = 'Go Back';
    goBackBtn.onclick = () => {
        prikaziHomelogin();
    }
    goBackBtn.classList = 'btn-login';

    mainDiv.appendChild(cartDiv);
    cartDiv.appendChild(myItemsH1);
    cartDiv.appendChild(flexDiv);
    flexDiv.appendChild(totalPrice);
    flexDiv.appendChild(clearAll);
    cartDiv.appendChild(porudzbeniceDiv);
    cartDiv.appendChild(noItemsMsg);
    cartDiv.append(flexDiv2);
    flexDiv2.append(goBackBtn);
    flexDiv2.append(checkOutBtn);

    showTotal();
}

//Prikazuje admin panel koji samo admin moze da pristupi
function addminPanelDiv() {
    gsap.fromTo("#left-div", { x: -500, }, { duration: 1, x: 0, ease: 'back', });

    let leftDiv = document.getElementById('left-div');
    leftDiv.innerHTML = '';
    leftDiv.style.height = '540px'
    leftDiv.style.width = '300px'

    let addItemsH1 = document.createElement('h1');
    addItemsH1.innerHTML = 'Add items to Shop';
    addItemsH1.id = 'login-h1';
    leftDiv.appendChild(addItemsH1);

    let dodajRobuDiv = document.createElement('div');
    dodajRobuDiv.id = 'dodaj-robu';

    let h4Title = document.createElement('h4');
    h4Title.innerHTML = `Hey, ${userName}, Long time no see! Waazuup?`;

    let dodajSliku = document.createElement('input');
    dodajSliku.id = 'dodaj-sliku';
    dodajSliku.classList = 'input';
    dodajSliku.placeholder = 'Add a Picture';

    let dodajNaziv = document.createElement('input');
    dodajNaziv.id = 'dodaj-naziv';
    dodajNaziv.classList = 'input';
    dodajNaziv.placeholder = 'Add a Name';

    let dodajCenu = document.createElement('input');
    dodajCenu.id = 'dodaj-cenu';
    dodajCenu.classList = 'input';
    dodajCenu.placeholder = 'Add a Price';

    let delRobu = document.createElement('input');
    delRobu.id = 'delete-robu';
    delRobu.classList = 'input';
    delRobu.placeholder = 'Delete an Item';
    delRobu.style.marginTop = '30px';

    let delRobuBtn = document.createElement('button');
    delRobuBtn.innerHTML = 'Delete from Cart';
    delRobuBtn.id = 'delrobu-btn';
    delRobuBtn.onclick = () => {
        deleteRobu(this);
    }

    let addToCartBtn = document.createElement('button');
    addToCartBtn.innerHTML = 'Add to Cart';
    addToCartBtn.id = 'addtocart-btn';
    addToCartBtn.onclick = () => {
        dodajRobu();
    }

    let imageIcon = document.createElement('i');
    imageIcon.classList = 'fas fa-image';
    imageIcon.id = 'image-icon';

    let nameIcon = document.createElement('i');
    nameIcon.classList = 'fas fa-box-open';
    nameIcon.id = 'name-icon';

    let dollarIcon = document.createElement('i');
    dollarIcon.classList = 'fas fa-dollar-sign';
    dollarIcon.id = 'dollar-icon';

    let delIcon = document.createElement('i');
    delIcon.classList = 'fas fa-trash-alt';
    delIcon.id = 'del-icon';

    dodajRobuDiv.appendChild(h4Title);
    dodajRobuDiv.appendChild(dodajSliku);
    dodajRobuDiv.appendChild(dodajNaziv);
    dodajRobuDiv.appendChild(dodajCenu);
    dodajRobuDiv.appendChild(addToCartBtn);
    dodajRobuDiv.appendChild(delRobu);
    dodajRobuDiv.appendChild(delRobuBtn);
    dodajRobuDiv.appendChild(imageIcon);
    dodajRobuDiv.appendChild(nameIcon);
    dodajRobuDiv.appendChild(dollarIcon);
    dodajRobuDiv.appendChild(delIcon);
    leftDiv.appendChild(dodajRobuDiv);
}

//pravi robu i njegove kategorije u objektu
const roba = {};

roba.everything = [
    new Roba('images/shop/Katanas/amakusa_katana.jpg', 'Amakusa Katana', 150),
    new Roba('images/shop/Katanas/samurai_katana.jpg', 'Samurai Katana', 370),
    new Roba('images/shop/Katanas/thermal_katana.png', 'Thermal Katana', 530),
    new Roba('images/shop/Nunchuks/practice_nunchucks.jpg', 'Rubber Nunchucks', 10),
    new Roba('images/shop/Nunchuks/ninja_nunchuks.webp', 'Ninja Nunchucks', 25),
    new Roba('images/shop/Nunchuks/wooden_nunchucks.jpeg', 'Wooden Nunchucks', 45),
    new Roba('images/shop/Shurikens/yodaime_kunai.jpg', 'Yodaime Kunai', 20),
    new Roba('images/shop/Shurikens/ninja_kunai.jpg', 'Ninja Kunai', 12),
    new Roba('images/shop/Shurikens/dragon_kunai.jpg', 'Dragon Kunai', 15),
    new Roba('images/shop/Jackets/black_jacket.jpg', 'Black Jacket', 250),
    new Roba('images/shop/Knifes/steel_boxer.jpg', 'Steel Boxer', 14),
    new Roba('images/shop/Knifes/golden_boxer.jpg', 'Golden Boxer', 65),
    new Roba('images/shop/Knifes/spiked_boxer.jpg', 'Spiked Boxer', 22),
    new Roba('images/shop/Kimonos/kimono_karate.jpg', 'White Kimono', 120),
    new Roba('images/shop/Kimonos/black_kimono.jpg', 'Black Kimono', 132),
    new Roba('images/shop/Kimonos/blue_kimono.jpg', 'Blue Kimono', 116),
    new Roba('images/shop/Sais/black_sai.jpg', 'Black Sai', 42),
    new Roba('images/shop/Sais/octagon_sai.jpg', 'Octagon Sai', 35),
    new Roba('images/shop/Sais/manj_sai.jpg', 'Manji Sai', 55, 0),
    new Roba('images/shop/T-shirts/black-t-shirt.jpg', 'Black T-shirt', 20),
    new Roba('images/shop/T-shirts/blue_t-shirt.jpg', 'Blue T-shirt', 22),
    new Roba('images/shop/T-shirts/karate_t-shirt.png', 'Karate T-shirt', 18),
    new Roba('images/shop/T-shirts/taekwondo_t-shirt.webp', 'Taekwondo T-shirt', 20),
    new Roba('images/shop/Tonfas/wooden_tonfa.jpg', 'Wooden Tonfa', 25),
    new Roba('images/shop/Tonfas/aluminum_tonfa.jpg', 'Aluminium Tonfa', 32),
    new Roba('images/shop/Tonfas/black_tonfa.jpg', 'Black Tonfa', 28),
    new Roba('images/shop/Shorts/black_shorts.jpeg', 'Black Shorts', 32),
    new Roba('images/shop/Shorts/gray_shorts.jpg', 'Gray Shorts', 30),
    new Roba('images/shop/Shorts/red_shorts.jpg', 'Red Shorts', 30),
    new Roba('images/shop/Shorts/tiger_shorts.webp', 'Tiger Shorts', 40),
    new Roba('images/shop/Accessories/belts.jpg', 'Belts all colors', 12),
    new Roba('images/shop/Makiwaras/makiwara_1.jpg', 'Makiwara 1', 249),
    new Roba('images/shop/Makiwaras/makiwara_2.jpg', 'Makiwara 2', 189),
    new Roba('images/shop/Accessories/ninja_mask.jpg', 'Ninja Mask', 19),
    new Roba('images/shop/Breaking Boards/breaking_boards.jpg', 'Breaking Boards', 20),
    new Roba('images/shop/Hoodies/aikido_hoodie.jpg', 'Aikido Hoodie', 25),
    new Roba('images/shop/Hoodies/bruce_lee_hoodie.webp', 'Bruce Lee Hoodie', 30),
    new Roba('images/shop/Hoodies/dragon_hoodie.jpg', 'Dragon Hoodie', 32),
    new Roba('images/shop/Hoodies/girl_hoodie.jpg', 'Girl Hoodie', 22),
    new Roba('images/shop/Hoodies/judo_hoodie.jpg', 'Judo Hoodie', 21),
    new Roba('images/shop/Speed Balls/speed_ball.jpg', 'Speed Ball', 120),
    new Roba('images/shop/Hoodies/ufc_hoodie.jpg', 'UFC Hoodie', 27),
    new Roba('images/shop/Katanas/dual_tang_blade.jpg', 'Dual Tang Blade', 455),
    new Roba('images/shop/Trousers/black_trousers.jpg', 'Black Trousers', 25),
    new Roba('images/shop/Trousers/purple_trousers.jpg', 'Purple Trousers', 22),
    new Roba('images/shop/Trousers/white_trousers.jpg', 'White Trousers', 23),
    new Roba('images/shop/Trousers/red_trousers.jpeg', 'Red Trousers', 25),
    new Roba('images/shop/Katanas/ninja_tang_blades.jpg', 'Ninja Tang Blades', 525),
    new Roba('images/shop/Punching bags/black_pb.jpg', 'Black Punching bag', 132),
    new Roba('images/shop/Punching bags/red_pb.jpg', 'Black Punching bag', 142),
    new Roba('images/shop/Pads/black_pads.jpg', 'Black Pads', 42),
    new Roba('images/shop/Pads/yellow_pads.jpg', 'Yellow Pads', 42),
    new Roba('images/shop/Pads/white_pads.jpg', 'White Pads', 42),
    new Roba('images/shop/Pads/blue_pads.jpg', 'Blue Pads', 42),
    new Roba('images/shop/Shurikens/ninja_skuriken.jpg', 'Ninja Shuriken', 24, 0),
    new Roba('images/shop/Crossbows/steambow_crossbow.jpg', 'Steambow Crossbow', 928),
    new Roba('images/shop/Crossbows/compound_bow.jpg', 'Compound Bow', 129),
    new Roba('images/shop/Wooden Dummys/wooden_dummy.jpg', 'Wooden Dummy', 349),
    new Roba('images/shop/Crossbows/arrows.jpg', 'Arrows 10x', 15)
];

roba.katanas = [
    new Roba('images/shop/katanas/amakusa_katana.jpg', 'Amakusa Katana', 150),
    new Roba('images/shop/katanas/samurai_katana.jpg', 'Samurai Katana', 370),
    new Roba('images/shop/katanas/thermal_katana.png', 'Thermal Katana', 530),
    new Roba('images/shop/katanas/dual_tang_blade.jpg', 'Dual Tang Blade', 455),
    new Roba('images/shop/katanas/ninja_tang_blades.jpg', 'Ninja Tang Blades', 525),
];

roba.nunchuks = [
    new Roba('images/shop/Nunchuks/practice_nunchucks.jpg', 'Rubber Nunchucks', 10),
    new Roba('images/shop/Nunchuks/ninja_nunchuks.webp', 'Ninja Nunchucks', 25),
    new Roba('images/shop/Nunchuks/wooden_nunchucks.jpeg', 'Wooden Nunchucks', 45),
];

roba.boStaffs = [];


roba.crossbows = [
    new Roba('images/shop/Crossbows/steambow_crossbow.jpg', 'Steambow Crossbow', 928),
    new Roba('images/shop/Crossbows/compound_bow.jpg', 'Compound Bow', 129),
    new Roba('images/shop/Crossbows/arrows.jpg', 'Arrows 10x', 15)
];

roba.knifes = [
    new Roba('images/shop/Knifes/steel_boxer.jpg', 'Steel Boxer', 14),
    new Roba('images/shop/Knifes/golden_boxer.jpg', 'Golden Boxer', 65),
    new Roba('images/shop/Knifes/spiked_boxer.jpg', 'Spiked Boxer', 22),
];

roba.sais = [
    new Roba('images/shop/Sais/black_sai.jpg', 'Black Sai', 42),
    new Roba('images/shop/Sais/octagon_sai.jpg', 'Octagon Sai', 35),
    new Roba('images/shop/Sais/manj_sai.jpg', 'Manji Sai', 55, 0),
];

roba.tonfas = [
    new Roba('images/shop/Tonfas/wooden_tonfa.jpg', 'Wooden Tonfa', 25),
    new Roba('images/shop/Tonfas/aluminum_tonfa.jpg', 'Aluminium Tonfa', 32),
    new Roba('images/shop/Tonfas/black_tonfa.jpg', 'Black Tonfa', 28),
];

roba.shurikens = [
    new Roba('images/shop/Shurikens/yodaime_kunai.jpg', 'Yodaime Kunai', 20),
    new Roba('images/shop/Shurikens/ninja_skuriken.jpg', 'Ninja Shuriken', 24, 0),
    new Roba('images/shop/Shurikens/ninja_kunai.jpg', 'Ninja Kunai', 12),
    new Roba('images/shop/Shurikens/dragon_kunai.jpg', 'Dragon Kunai', 15),
];

roba.kimonos = [
    new Roba('images/shop/Kimonos/kimono_karate.jpg', 'White Kimono', 120),
    new Roba('images/shop/Kimonos/black_kimono.jpg', 'Black Kimono', 132),
    new Roba('images/shop/Kimonos/blue_kimono.jpg', 'Blue Kimono', 116),
];

roba.tshirts = [
    new Roba('images/shop/T-shirts/black-t-shirt.jpg', 'Black T-shirt', 20),
    new Roba('images/shop/T-shirts/blue_t-shirt.jpg', 'Blue T-shirt', 22),
    new Roba('images/shop/T-shirts/karate_t-shirt.png', 'Karate T-shirt', 18),
    new Roba('images/shop/T-shirts/taekwondo_t-shirt.webp', 'Taekwondo T-shirt', 20),
];

roba.trousers = [
    new Roba('images/shop/Trousers/black_trousers.jpg', 'Black Trousers', 25),
    new Roba('images/shop/Trousers/purple_trousers.jpg', 'Purple Trousers', 22),
    new Roba('images/shop/Trousers/white_trousers.jpg', 'White Trousers', 23),
    new Roba('images/shop/Trousers/red_trousers.jpeg', 'Red Trousers', 25),
];

roba.hoodies = [
    new Roba('images/shop/Hoodies/aikido_hoodie.jpg', 'Aikido Hoodie', 25),
    new Roba('images/shop/Hoodies/bruce_lee_hoodie.webp', 'Bruce Lee Hoodie', 30),
    new Roba('images/shop/Hoodies/dragon_hoodie.jpg', 'Dragon Hoodie', 32),
    new Roba('images/shop/Hoodies/girl_hoodie.jpg', 'Girl Hoodie', 22),
    new Roba('images/shop/Hoodies/judo_hoodie.jpg', 'Judo Hoodie', 21),
    new Roba('images/shop/Hoodies/ufc_hoodie.jpg', 'UFC Hoodie', 27),
];

roba.jackets = [
    new Roba('images/shop/Jackets/black_jacket.jpg', 'Black Jacket', 250),
];

roba.shorts = [
    new Roba('images/shop/Shorts/black_shorts.jpeg', 'Black Shorts', 32),
    new Roba('images/shop/Shorts/gray_shorts.jpg', 'Gray Shorts', 30),
    new Roba('images/shop/Shorts/red_shorts.jpg', 'Red Shorts', 30),
    new Roba('images/shop/Shorts/tiger_shorts.webp', 'Tiger Shorts', 40),
];

roba.punchingBags = [
    new Roba('images/shop/Punching bags/black_pb.jpg', 'Black Punching bag', 132),
    new Roba('images/shop/Punching bags/red_pb.jpg', 'Black Punching bag', 142),
];

roba.pads = [
    new Roba('images/shop/Pads/black_pads.jpg', 'Black Pads', 42),
    new Roba('images/shop/Pads/yellow_pads.jpg', 'Yellow Pads', 42),
    new Roba('images/shop/Pads/white_pads.jpg', 'White Pads', 42),
    new Roba('images/shop/Pads/blue_pads.jpg', 'Blue Pads', 42),
];

roba.speedBalls = [
    new Roba('images/shop/Speed Balls/speed_ball.jpg', 'Speed Ball', 120),
];

roba.makiwaras = [
    new Roba('images/shop/Makiwaras/makiwara_1.jpg', 'Makiwara 1', 249),
    new Roba('images/shop/Makiwaras/makiwara_2.jpg', 'Makiwara 2', 189),
];

roba.woodenDummy = [
    new Roba('images/shop/Wooden Dummys/wooden_dummy.jpg', 'Wooden Dummy', 349),
];

roba.breakingBoards = [
    new Roba('images/shop/Breaking Boards/breaking_boards.jpg', 'Breaking Boards', 20),
];

roba.accessories = [
    new Roba('images/shop/Accessories/belts.jpg', 'Belts all colors', 12),
    new Roba('images/shop/Accessories/ninja_mask.jpg', 'Ninja Mask', 19),
];

//Pravi Roba konstruktor funkciju
function Roba(slika, naziv, cena) {
    this.slika = slika;
    this.naziv = naziv;
    this.cena = cena;
    this.kolicina = 1;

    this.spanKolicina = null;

    this.prikaziSe = function () {
        let table = document.createElement('table');
        table.classList = 'trenutna-roba';

        let tr = document.createElement('tr');

        let tdSlika = document.createElement('td');
        let slika = document.createElement('img');
        slika.src = this.slika;
        slika.classList = 'slika-roba';
        slika.onclick = () => {
            slika.classList.toggle('resize');
        }

        let tdNaziv = document.createElement('td');
        tdNaziv.innerHTML = this.naziv;
        tdNaziv.style.color = 'rgba(0, 255, 229, 0.418)';

        let tdCena = document.createElement('td');
        tdCena.classList = 'cena-itema';
        tdCena.innerHTML = '$ ' + this.cena

        let tdKolicina = document.createElement('td');

        this.spanKolicina = document.createElement("span");
        this.spanKolicina.innerHTML = this.kolicina;

        let tdAdd = document.createElement('td');
        tdAdd.innerHTML = '<i class="fas fa-plus-square"></i>';
        tdAdd.style.cursor = 'pointer';
        tdAdd.style.color = 'rgba(0, 255, 229, 0.418)';
        tdAdd.onclick = () => {
            if (this.kolicina >= 10) {
                return;
            }

            this.kolicina++;
            this.spanKolicina.innerHTML = this.kolicina;
            tdUkupno.innerHTML = '$ ' + this.kolicina * this.cena;
        }

        let tdSub = document.createElement('td');
        tdSub.innerHTML = '<i class="fas fa-minus-square"></i>';
        tdSub.style.cursor = 'pointer';
        tdSub.style.color = 'rgba(0, 255, 229, 0.418)';
        tdSub.onclick = () => {
            if (this.kolicina <= 1) {
                return;
            }

            this.kolicina--;
            this.spanKolicina.innerHTML = this.kolicina;
            tdUkupno.innerHTML = '$ ' + this.kolicina * this.cena;
        }

        let tdUkupno = document.createElement('td');
        tdUkupno.innerHTML = '$ ' + this.kolicina * this.cena;

        let tdPoruci = document.createElement('td');
        let btnPoruci = document.createElement('span');
        btnPoruci.classList = 'poruci-btn';
        btnPoruci.innerHTML = `<i class="fas fa-cart-plus"></span>`;
        btnPoruci.onclick = (e) => {
            if (e.target.parentElement.classList.contains('poruci-btn')) {
                const porucenaRoba = {};

                let image = e.target.parentElement.parentElement.
                    parentElement.firstElementChild.firstElementChild.src;

                let name = e.target.parentElement.parentElement.
                    parentElement.firstElementChild.nextElementSibling.innerHTML;

                let price = e.target.parentElement.parentElement.parentElement.
                    firstElementChild.nextElementSibling.nextElementSibling.innerHTML;

                let finalPrice = price.slice(2, 10).trim();

                let qantity = e.target.parentElement.parentElement.parentElement.
                    firstElementChild.nextElementSibling.nextElementSibling.
                    nextElementSibling.nextElementSibling.firstElementChild.innerHTML;

                let sum = e.target.parentElement.parentElement.parentElement.
                    lastElementChild.previousElementSibling.innerHTML;

                let finalSum = sum.slice(2, 10).trim();

                porucenaRoba.image = image;
                porucenaRoba.name = name;
                porucenaRoba.price = parseInt(finalPrice);
                porucenaRoba.qantity = parseInt(qantity);
                porucenaRoba.finalSum = parseInt(finalSum);

                let porucenaRobaTable = document.createElement('table');
                let tr = document.createElement('tr');

                let tdSlika = document.createElement('td');
                let slika = document.createElement('img');
                slika.classList = 'slika-porucena-roba';
                slika.src = porucenaRoba.image;

                let tdName = document.createElement('td');
                tdName.innerHTML = porucenaRoba.name;
                tdName.style.color = 'rgba(0, 255, 229, 0.418)';

                let tdPrice = document.createElement('td');
                tdPrice.classList = "cart-item-price";
                tdPrice.innerHTML = '$ ' + porucenaRoba.price;

                let tdKolicina = document.createElement('td');
                tdKolicina.innerHTML = porucenaRoba.qantity + ' x';

                let tdSuma = document.createElement('td');
                tdSuma.innerHTML = '$ ' + porucenaRoba.finalSum;
                tdSuma.classList = 'total-item-price';

                let tdDelete = document.createElement('td');
                tdDelete.innerHTML = '<i class="fas fa-trash-alt"></i>';
                tdDelete.classList = 'porucena-roba-del-btn';
                tdDelete.onclick = () => {
                    tdDelete.parentElement.parentElement.remove();
                    if (document.getElementById('porudzbenice').children.length == 0) {
                        document.getElementById('no-item-msg').style.display = 'block';
                    }

                    showTotal();
                }

                let porudzbenice = document.getElementById('porudzbenice');

                porudzbenice.appendChild(porucenaRobaTable);
                porucenaRobaTable.appendChild(tr);
                tr.appendChild(tdSlika);
                tdSlika.appendChild(slika);
                tr.appendChild(tdName);
                tr.appendChild(tdPrice);
                tr.appendChild(tdKolicina);
                tr.appendChild(tdSuma);
                tr.appendChild(tdDelete);

                for (let i = 0; i < roba.length; i++) {
                    roba[i].podesiKolicinu(1);
                }

                if (porudzbenice.children.length > 0) {
                    let noItemsMsg = document.getElementById('no-item-msg');
                    noItemsMsg.style.display = 'none';
                }
                showTotal();
            }
        }

        this.podesiKolicinu = function (novaKolicina) {
            this.kolicina = novaKolicina;
            this.spanKolicina.innerHTML = novaKolicina;
        }

        tr.appendChild(tdSlika);
        tdSlika.appendChild(slika);
        tr.appendChild(tdNaziv);
        tr.appendChild(tdCena);
        tr.appendChild(tdAdd);
        tr.appendChild(tdKolicina);
        tdKolicina.appendChild(this.spanKolicina);
        tr.appendChild(tdSub);
        tr.appendChild(tdUkupno);
        tr.appendChild(tdPoruci);
        tdPoruci.appendChild(btnPoruci);
        table.appendChild(tr);

        return table;
    }
}

//Uklanja tirkiznu boju sa everything robe diva
function removeTurqoiseFromDivEverything() {
    let everythingDiv = document.getElementById('everything-div');
    everythingDiv.style.color = 'rgba(0, 255, 229, 0.418)';
}

//Uklanja tirkiznu boju sa weapons robe diva
function removeTurqoiseFromDivWeapons() {
    let weaponsDiv = document.getElementById('weapons-div');
    let deca = weaponsDiv.children;

    for (let i = 0; i < deca.length; i++) {
        deca[i].classList.remove('turquoise');
    }
}

//Uklanja tirkiznu boju sa kimonos robe diva
function removeTurqoiseFromDivKimonos() {
    let kimonosDiv = document.getElementById('kimonos-div');
    let deca = kimonosDiv.children;

    for (let i = 0; i < deca.length; i++) {
        deca[i].classList.remove('turquoise');
    }
}

//Uklanja tirkiznu boju sa pads robe diva
function removeTurqoiseFromDivPads() {
    let padsDiv = document.getElementById('pads-div');
    let deca = padsDiv.children;

    for (let i = 0; i < deca.length; i++) {
        deca[i].classList.remove('turquoise');
    }
}

//Uklanja tirkiznu boju sa accessories robe diva
function removeTurqoiseFromDivAccessories() {
    let accessoriesDiv = document.getElementById('accessories-div');
    accessoriesDiv.style.color = 'rgba(0, 255, 229, 0.418)';
}

function prikaziRobu() {
    gsap.fromTo("#right-div", { x: 500 }, { duration: 1, x: 0, ease: 'back' });

    let robaDiv = document.getElementById('roba');
    robaDiv.innerHTML = '';

    for (let i = 0; i < roba.everything.length; i++) {
        robaDiv.appendChild(roba.everything[i].prikaziSe());
    }

    let everythingDiv = document.getElementById('everything-div');
    let weaponsDiv = document.getElementById('weapons-div');
    let kimonosDiv = document.getElementById('kimonos-div');
    let padsDiv = document.getElementById('pads-div');
    let accessoriesDiv = document.getElementById('accessories-div');

    if (everythingDiv || weaponsDiv || kimonosDiv || padsDiv || accessoriesDiv) {
        removeTurqoiseFromDivWeapons();
        removeTurqoiseFromDivKimonos();
        removeTurqoiseFromDivPads();
        removeTurqoiseFromDivAccessories();
    }

}

function prikaziKatanas() {
    gsap.fromTo("#right-div", { x: 500 }, { duration: 1, x: 0, ease: 'back' });

    removeTurqoiseFromDivEverything();
    removeTurqoiseFromDivKimonos();
    removeTurqoiseFromDivPads();
    removeTurqoiseFromDivAccessories();

    let robaDiv = document.getElementById('roba');
    robaDiv.innerHTML = '';

    let weaponsDiv = document.getElementById('weapons-div');
    let deca = weaponsDiv.children;

    for (let i = 0; i < deca.length; i++) {
        deca[i].classList.remove('turquoise');
    }
    deca[0].classList.add('turquoise');

    for (let i = 0; i < roba.katanas.length; i++) {
        robaDiv.appendChild(roba.katanas[i].prikaziSe());
    }
}

function prikaziKnifes() {
    gsap.fromTo("#right-div", { x: 500 }, { duration: 1, x: 0, ease: 'back' });

    removeTurqoiseFromDivEverything();
    removeTurqoiseFromDivKimonos();
    removeTurqoiseFromDivPads();
    removeTurqoiseFromDivAccessories();

    let robaDiv = document.getElementById('roba');
    robaDiv.innerHTML = '';

    let weaponsDiv = document.getElementById('weapons-div');
    let deca = weaponsDiv.children;

    for (let i = 0; i < deca.length; i++) {
        deca[i].classList.remove('turquoise');
    }
    deca[2].classList.add('turquoise');

    for (let i = 0; i < roba.knifes.length; i++) {
        robaDiv.appendChild(roba.knifes[i].prikaziSe());
    }
}

function prikaziNunchuks() {
    gsap.fromTo("#right-div", { x: 500 }, { duration: 1, x: 0, ease: 'back' });

    removeTurqoiseFromDivEverything();
    removeTurqoiseFromDivKimonos();
    removeTurqoiseFromDivPads();
    removeTurqoiseFromDivAccessories();

    let robaDiv = document.getElementById('roba');
    robaDiv.innerHTML = '';

    let weaponsDiv = document.getElementById('weapons-div');
    let deca = weaponsDiv.children;

    for (let i = 0; i < deca.length; i++) {
        deca[i].classList.remove('turquoise');
    }
    deca[4].classList.add('turquoise');

    for (let i = 0; i < roba.nunchuks.length; i++) {
        robaDiv.appendChild(roba.nunchuks[i].prikaziSe());
    }
}

function prikaziSais() {
    gsap.fromTo("#right-div", { x: 500 }, { duration: 1, x: 0, ease: 'back' });

    removeTurqoiseFromDivEverything();
    removeTurqoiseFromDivKimonos();
    removeTurqoiseFromDivPads();
    removeTurqoiseFromDivAccessories();

    let robaDiv = document.getElementById('roba');
    robaDiv.innerHTML = '';

    let weaponsDiv = document.getElementById('weapons-div');
    let deca = weaponsDiv.children;

    for (let i = 0; i < deca.length; i++) {
        deca[i].classList.remove('turquoise');
    }
    deca[6].classList.add('turquoise');

    for (let i = 0; i < roba.sais.length; i++) {
        robaDiv.appendChild(roba.sais[i].prikaziSe());
    }
}

function prikaziStaffs() {
    gsap.fromTo("#right-div", { x: 500 }, { duration: 1, x: 0, ease: 'back' });

    removeTurqoiseFromDivEverything();
    removeTurqoiseFromDivKimonos();
    removeTurqoiseFromDivPads();
    removeTurqoiseFromDivAccessories();

    let robaDiv = document.getElementById('roba');
    robaDiv.innerHTML = '';

    let weaponsDiv = document.getElementById('weapons-div');
    let deca = weaponsDiv.children;

    for (let i = 0; i < deca.length; i++) {
        deca[i].classList.remove('turquoise');
    }
    deca[8].classList.add('turquoise');

    for (let i = 0; i < roba.boStaffs.length; i++) {
        robaDiv.appendChild(roba.boStaffs[i].prikaziSe());
    }
}

function prikaziTonfas() {
    gsap.fromTo("#right-div", { x: 500 }, { duration: 1, x: 0, ease: 'back' });

    removeTurqoiseFromDivEverything();
    removeTurqoiseFromDivKimonos();
    removeTurqoiseFromDivPads();
    removeTurqoiseFromDivAccessories();

    let robaDiv = document.getElementById('roba');
    robaDiv.innerHTML = '';

    let weaponsDiv = document.getElementById('weapons-div');
    let deca = weaponsDiv.children;

    for (let i = 0; i < deca.length; i++) {
        deca[i].classList.remove('turquoise');
    }
    deca[10].classList.add('turquoise');

    for (let i = 0; i < roba.tonfas.length; i++) {
        robaDiv.appendChild(roba.tonfas[i].prikaziSe());
    }
}

function prikaziCrossbows() {
    gsap.fromTo("#right-div", { x: 500 }, { duration: 1, x: 0, ease: 'back' });

    removeTurqoiseFromDivEverything();
    removeTurqoiseFromDivKimonos();
    removeTurqoiseFromDivPads();
    removeTurqoiseFromDivAccessories();

    let robaDiv = document.getElementById('roba');
    robaDiv.innerHTML = '';

    let weaponsDiv = document.getElementById('weapons-div');
    let deca = weaponsDiv.children;

    for (let i = 0; i < deca.length; i++) {
        deca[i].classList.remove('turquoise');
    }
    deca[12].classList.add('turquoise');

    for (let i = 0; i < roba.crossbows.length; i++) {
        robaDiv.appendChild(roba.crossbows[i].prikaziSe());
    }
}

function prikaziShurinkens() {
    gsap.fromTo("#right-div", { x: 500 }, { duration: 1, x: 0, ease: 'back' });

    removeTurqoiseFromDivEverything();
    removeTurqoiseFromDivKimonos();
    removeTurqoiseFromDivPads();
    removeTurqoiseFromDivAccessories();

    let robaDiv = document.getElementById('roba');
    robaDiv.innerHTML = '';

    let weaponsDiv = document.getElementById('weapons-div');
    let deca = weaponsDiv.children;

    for (let i = 0; i < deca.length; i++) {
        deca[i].classList.remove('turquoise');
    }
    deca[14].classList.add('turquoise');

    for (let i = 0; i < roba.shurikens.length; i++) {
        robaDiv.appendChild(roba.shurikens[i].prikaziSe());
    }
}

function prikaziKimonos() {
    gsap.fromTo("#right-div", { x: 500 }, { duration: 1, x: 0, ease: 'back' });

    removeTurqoiseFromDivEverything();
    removeTurqoiseFromDivWeapons();
    removeTurqoiseFromDivPads();
    removeTurqoiseFromDivAccessories();

    let robaDiv = document.getElementById('roba');
    robaDiv.innerHTML = '';

    let kimonoDiv = document.getElementById('kimonos-div');
    let deca = kimonoDiv.children;

    for (let i = 0; i < deca.length; i++) {
        deca[i].classList.remove('turquoise');
    }
    deca[0].classList.add('turquoise');

    for (let i = 0; i < roba.kimonos.length; i++) {
        robaDiv.appendChild(roba.kimonos[i].prikaziSe());
    }
}

function prikaziTshirts() {
    gsap.fromTo("#right-div", { x: 500 }, { duration: 1, x: 0, ease: 'back' });

    removeTurqoiseFromDivEverything();
    removeTurqoiseFromDivWeapons();
    removeTurqoiseFromDivPads();
    removeTurqoiseFromDivAccessories();

    let robaDiv = document.getElementById('roba');
    robaDiv.innerHTML = '';

    let kimonoDiv = document.getElementById('kimonos-div');
    let deca = kimonoDiv.children;

    for (let i = 0; i < deca.length; i++) {
        deca[i].classList.remove('turquoise');
    }
    deca[2].classList.add('turquoise');

    for (let i = 0; i < roba.tshirts.length; i++) {
        robaDiv.appendChild(roba.tshirts[i].prikaziSe());
    }
}

function prikaziTrousers() {
    gsap.fromTo("#right-div", { x: 500 }, { duration: 1, x: 0, ease: 'back' });

    removeTurqoiseFromDivEverything();
    removeTurqoiseFromDivWeapons();
    removeTurqoiseFromDivPads();
    removeTurqoiseFromDivAccessories();

    let robaDiv = document.getElementById('roba');
    robaDiv.innerHTML = '';

    let kimonoDiv = document.getElementById('kimonos-div');
    let deca = kimonoDiv.children;

    for (let i = 0; i < deca.length; i++) {
        deca[i].classList.remove('turquoise');
    }
    deca[4].classList.add('turquoise');

    for (let i = 0; i < roba.trousers.length; i++) {
        robaDiv.appendChild(roba.trousers[i].prikaziSe());
    }
}

function prikaziHoodies() {
    gsap.fromTo("#right-div", { x: 500 }, { duration: 1, x: 0, ease: 'back' });

    removeTurqoiseFromDivEverything();
    removeTurqoiseFromDivWeapons();
    removeTurqoiseFromDivPads();
    removeTurqoiseFromDivAccessories();

    let robaDiv = document.getElementById('roba');
    robaDiv.innerHTML = '';

    let kimonoDiv = document.getElementById('kimonos-div');
    let deca = kimonoDiv.children;

    for (let i = 0; i < deca.length; i++) {
        deca[i].classList.remove('turquoise');
    }
    deca[6].classList.add('turquoise');

    for (let i = 0; i < roba.hoodies.length; i++) {
        robaDiv.appendChild(roba.hoodies[i].prikaziSe());
    }
}

function prikaziJackets() {
    gsap.fromTo("#right-div", { x: 500 }, { duration: 1, x: 0, ease: 'back' });

    removeTurqoiseFromDivEverything();
    removeTurqoiseFromDivWeapons();
    removeTurqoiseFromDivPads();
    removeTurqoiseFromDivAccessories();

    let robaDiv = document.getElementById('roba');
    robaDiv.innerHTML = '';

    let kimonoDiv = document.getElementById('kimonos-div');
    let deca = kimonoDiv.children;

    for (let i = 0; i < deca.length; i++) {
        deca[i].classList.remove('turquoise');
    }
    deca[8].classList.add('turquoise');

    for (let i = 0; i < roba.jackets.length; i++) {
        robaDiv.appendChild(roba.jackets[i].prikaziSe());
    }
}

function prikaziShorts() {
    gsap.fromTo("#right-div", { x: 500 }, { duration: 1, x: 0, ease: 'back' });

    removeTurqoiseFromDivEverything();
    removeTurqoiseFromDivWeapons();
    removeTurqoiseFromDivPads();
    removeTurqoiseFromDivAccessories();

    let robaDiv = document.getElementById('roba');
    robaDiv.innerHTML = '';

    let kimonoDiv = document.getElementById('kimonos-div');
    let deca = kimonoDiv.children;

    for (let i = 0; i < deca.length; i++) {
        deca[i].classList.remove('turquoise');
    }
    deca[10].classList.add('turquoise');

    for (let i = 0; i < roba.shorts.length; i++) {
        robaDiv.appendChild(roba.shorts[i].prikaziSe());
    }
}

function prikaziPunchingbags() {
    gsap.fromTo("#right-div", { x: 500 }, { duration: 1, x: 0, ease: 'back' });

    removeTurqoiseFromDivEverything();
    removeTurqoiseFromDivWeapons();
    removeTurqoiseFromDivKimonos();
    removeTurqoiseFromDivAccessories();

    let robaDiv = document.getElementById('roba');
    robaDiv.innerHTML = '';

    let padsDiv = document.getElementById('pads-div');
    let deca = padsDiv.children;

    for (let i = 0; i < deca.length; i++) {
        deca[i].classList.remove('turquoise');
    }
    deca[0].classList.add('turquoise');

    for (let i = 0; i < roba.punchingBags.length; i++) {
        robaDiv.appendChild(roba.punchingBags[i].prikaziSe());
    }
}

function prikaziPads() {
    gsap.fromTo("#right-div", { x: 500 }, { duration: 1, x: 0, ease: 'back' });

    removeTurqoiseFromDivEverything();
    removeTurqoiseFromDivWeapons();
    removeTurqoiseFromDivKimonos();
    removeTurqoiseFromDivAccessories();

    let robaDiv = document.getElementById('roba');
    robaDiv.innerHTML = '';

    let padsDiv = document.getElementById('pads-div');
    let deca = padsDiv.children;

    for (let i = 0; i < deca.length; i++) {
        deca[i].classList.remove('turquoise');
    }
    deca[2].classList.add('turquoise');

    for (let i = 0; i < roba.pads.length; i++) {
        robaDiv.appendChild(roba.pads[i].prikaziSe());
    }
}

function prikaziSpeedballs() {
    gsap.fromTo("#right-div", { x: 500 }, { duration: 1, x: 0, ease: 'back' });

    removeTurqoiseFromDivEverything();
    removeTurqoiseFromDivWeapons();
    removeTurqoiseFromDivKimonos();
    removeTurqoiseFromDivAccessories();

    let robaDiv = document.getElementById('roba');
    robaDiv.innerHTML = '';

    let padsDiv = document.getElementById('pads-div');
    let deca = padsDiv.children;

    for (let i = 0; i < deca.length; i++) {
        deca[i].classList.remove('turquoise');
    }
    deca[4].classList.add('turquoise');

    for (let i = 0; i < roba.speedBalls.length; i++) {
        robaDiv.appendChild(roba.speedBalls[i].prikaziSe());
    }
}

function prikaziMakiwaras() {
    gsap.fromTo("#right-div", { x: 500 }, { duration: 1, x: 0, ease: 'back' });

    removeTurqoiseFromDivEverything();
    removeTurqoiseFromDivWeapons();
    removeTurqoiseFromDivKimonos();
    removeTurqoiseFromDivAccessories();

    let robaDiv = document.getElementById('roba');
    robaDiv.innerHTML = '';

    let padsDiv = document.getElementById('pads-div');
    let deca = padsDiv.children;

    for (let i = 0; i < deca.length; i++) {
        deca[i].classList.remove('turquoise');
    }
    deca[6].classList.add('turquoise');

    for (let i = 0; i < roba.makiwaras.length; i++) {
        robaDiv.appendChild(roba.makiwaras[i].prikaziSe());
    }
}

function prikaziWoodenDummys() {
    gsap.fromTo("#right-div", { x: 500 }, { duration: 1, x: 0, ease: 'back' });

    removeTurqoiseFromDivEverything();
    removeTurqoiseFromDivWeapons();
    removeTurqoiseFromDivKimonos();
    removeTurqoiseFromDivAccessories();

    let robaDiv = document.getElementById('roba');
    robaDiv.innerHTML = '';

    let padsDiv = document.getElementById('pads-div');
    let deca = padsDiv.children;

    for (let i = 0; i < deca.length; i++) {
        deca[i].classList.remove('turquoise');
    }
    deca[8].classList.add('turquoise');

    for (let i = 0; i < roba.woodenDummy.length; i++) {
        robaDiv.appendChild(roba.woodenDummy[i].prikaziSe());
    }
}

function prikaziBreakingBoards() {
    gsap.fromTo("#right-div", { x: 500 }, { duration: 1, x: 0, ease: 'back' });

    removeTurqoiseFromDivEverything();
    removeTurqoiseFromDivWeapons();
    removeTurqoiseFromDivKimonos();
    removeTurqoiseFromDivAccessories();

    let robaDiv = document.getElementById('roba');
    robaDiv.innerHTML = '';

    let padsDiv = document.getElementById('pads-div');
    let deca = padsDiv.children;

    for (let i = 0; i < deca.length; i++) {
        deca[i].classList.remove('turquoise');
    }
    deca[10].classList.add('turquoise');

    for (let i = 0; i < roba.breakingBoards.length; i++) {
        robaDiv.appendChild(roba.breakingBoards[i].prikaziSe());
    }
}

function prikaziAccessories() {
    gsap.fromTo("#right-div", { x: 500 }, { duration: 1, x: 0, ease: 'back' });

    removeTurqoiseFromDivWeapons();
    removeTurqoiseFromDivKimonos();
    removeTurqoiseFromDivPads();
    removeTurqoiseFromDivEverything();

    let robaDiv = document.getElementById('roba');
    robaDiv.innerHTML = '';

    for (let i = 0; i < roba.accessories.length; i++) {
        robaDiv.appendChild(roba.accessories[i].prikaziSe());
    }
}

//Ako se admin uloguje moze da dodaje robu
function dodajRobu() {
    gsap.fromTo("#right-div", { x: 500 }, { duration: 1, x: 0, ease: 'back' });

    let slika = document.getElementById('dodaj-sliku').value;
    let naziv = document.getElementById('dodaj-naziv').value;
    let cena = document.getElementById('dodaj-cenu').value;
    cena = parseInt(cena);

    if (slika.trim() === '' || naziv.trim() === '' || cena === 0) {
        document.getElementById('warning').innerHTML = 'You have to fill in all three inputs, try again!';
        setTimeout(() => {
            document.getElementById('warning').innerHTML = '';
        }, 3000);
        return;
    }

    let novaRoba = new Roba(slika, naziv, cena);
    roba.everything.unshift(novaRoba);

    document.getElementById('roba').innerHTML = '';
    for (let i = 0; i < roba.everything.length; i++) {
        document.getElementById('roba').innerHTML += roba.everything[i].prikaziSe();
    }

    prikaziRobu();
}

//Ako se admin uloguje moze da brise robu
function deleteRobu(naziv) {
    gsap.fromTo("#right-div", { x: 500 }, { duration: 1, x: 0, ease: 'back' });

    let delRobu = document.getElementById('delete-robu');
    for (let i = 0; i < roba.everything.length; i++) {
        if (delRobu.value === roba.everything[i].naziv) {
            document.getElementById('warning').innerHTML = `Item ${delRobu.value} has been deleted!`;
            setTimeout(() => {
                document.getElementById('warning').innerHTML = '';
            }, 3000);
            roba.everything.splice(i, 1);
            break;
        }
        if (delRobu.value !== roba.everything[i].naziv) {
            document.getElementById('warning').innerHTML = `Item ${delRobu.value} does not exist, please try again!`;
            setTimeout(() => {
                document.getElementById('warning').innerHTML = '';
            }, 3000);
        }
    }
    delRobu.value = '';
    prikaziRobu();
}

//Dunckija sluzi da se pretrazi odredjen item i search inputu
function searchElement() {
    let search = document.getElementById('search-input').value;
    let trenRoba = document.querySelectorAll('.trenutna-roba');

    for (let i = 0; i < trenRoba.length; i++) {
        let content = trenRoba[i].innerHTML;
        if (content.indexOf(search) > -1) {
            trenRoba[i].style.display = 'block';
        }
        else {
            trenRoba[i].style.display = 'none';
        }
    }
}

//Filtrira robu iteme po zeljenoj ceni
function filterElement() {
    let slider = document.getElementById('slider').value;
    slider = parseInt(slider);

    let robaDiv = document.getElementById('roba');
    let trenRoba = document.querySelectorAll('.trenutna-roba');
    let deca = robaDiv.querySelectorAll('.cena-itema');

    for (let i = 0; i < deca.length; i++) {
        let itemPrice = deca[i].innerHTML;
        let finalPrice = itemPrice.slice(2, 10).trim();
        finalPrice = parseInt(finalPrice);
        if (slider >= finalPrice) {
            deca[i].parentElement.parentElement.style.display = 'block';
        }
        else {
            deca[i].parentElement.parentElement.style.display = 'none';
        }
    }
}



