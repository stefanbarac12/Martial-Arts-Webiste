//Funkcija koja prikazuje login Homepage
function prikaziHomelogin() {
    gsapLeftAndRightDiv();

    //Prikazuje text desnog diva cim se klikne na ovaj page
    let rightDiv = document.getElementById('right-div');
    rightDiv.style.display = 'block';

    //Uklannja cart div na prethodnoj strani
    let cartDivRemove = document.getElementById('cart-div');
    if (cartDivRemove) {
        let mainDiv = document.getElementById('main-div');
        mainDiv.removeChild(cartDivRemove);
    }

    //Pikazuje left-div koji je bio sakriven
    let leftDiv = document.getElementById('left-div');
    if (leftDiv.classList.contains('hidden')) {
        leftDiv.classList.remove('hidden');
    }

    //uklanja admin panel koji je bio na prethodnoj strani
    let removeAdminPanel = document.getElementById('admin-panel-btn');
    if (removeAdminPanel) {
        let mainDiv = document.getElementById('main-div');
        mainDiv.removeChild(removeAdminPanel);
    }

    //uklanja goback btn koji je bio na prethodnoj strani
    let removeGoBackBtn2 = document.getElementById('go-back-btn2');
    if (removeGoBackBtn2) {
        let mainDiv = document.getElementById('main-div');
        mainDiv.removeChild(removeGoBackBtn2);
    }

    //Uklanja video-add div koji je bio na prethodnoj strani
    let removeYoutubeAddDiv = document.getElementById('addVideo-div');
    if (removeYoutubeAddDiv) {
        document.body.removeChild(removeYoutubeAddDiv);
    }

    rightDiv = document.getElementById('right-div');
    rightDiv.style.height = '680px';
    rightDiv.style.width = '470px';
    rightDiv.innerHTML = `<h1 id="login-h1">Master every area of your life</h1>
    <p>- Are you searching for peace, tranquility, and balance in your life? Do you have a desire to experience new things in new places? Do you want to explore the arts of Jutsu or deepen your current skills?</p>
    <img height="200px" src="images/samurai.jpg" alt="Temple">
    <p>- Modern society has become lost in daily living by keeping busy chasing after basic needs, fame, and wealth. It has forgotten the value of mind and body connection and has lost the sensitivity to feel life. It is challenging to see and understand eternity.</p>
    <p>- Jutsu Warrior Skills can help you improve your physical body, reduce psychological symptoms, obtain spiritual enlightenment, gain self-defense, enhance cognitive function, and be wiser.</p>`;

    // let leftDiv = document.getElementById('left-div');
    leftDiv.style.width = '350px';
    leftDiv.style.marginTop = '30px';
    leftDiv.style.height = '610px';
    leftDiv.innerHTML = `<h1 id="login-h1">Welcome ${userName}</h1>
    <p>- As your Jutsu progresses, you will become healthier and more confident. Martial arts training will permeate every aspect of your life, making you more relaxed and positive, and giving you the energy and focus necessary to accomplish your goals - at home, at work, and in school.</p>
    <p>- Students will be taught basic exercises, blocks, strikes, and kicks. Thereafter, students will learn kata, ippon, and kumite. A kata is a set of predefined steps against a set of imaginary opponents. Ippon is a set of contact exercises performed with a partner to reinforce the basic blocks, strikes, and kicks. Kumite is free sparring, or controlled fighting.</p>`;

    let blogBtn = document.createElement('div');
    blogBtn.innerHTML = 'Blog';
    blogBtn.id = 'blog';
    blogBtn.classList = 'btn-login';
    blogBtn.style.width = '45%';
    blogBtn.onclick = () => {
        prikaziBlog();
    }
    leftDiv.appendChild(blogBtn);

    let shopBtn = document.createElement('div');
    shopBtn.innerHTML = 'Shop';
    shopBtn.id = 'shop';
    shopBtn.classList = 'btn-login';
    shopBtn.style.width = '45%';
    shopBtn.onclick = () => {
        shop();
    }
    leftDiv.appendChild(shopBtn);

    let btnLogout = document.createElement('div');
    btnLogout.innerHTML = 'Logout';
    btnLogout.classList = 'btn-login';
    btnLogout.style.width = '330px';
    //Vraca korisinika na neulogovanu homepage stranu i korisnik tad postane false
    btnLogout.onclick = () => {
        prikaziHomelogout();
    }
    leftDiv.appendChild(btnLogout);

    let lastPara = document.createElement('p');
    lastPara.innerHTML = `- Years may let us experience a lot, but make sure to keep a clean heart. Regardless the wealth, regardless the height, the heart of kindness is the most expensive.`;
    leftDiv.appendChild(lastPara);

    //Svaki page ima svoj quote i menja se kad se klikne
    let quote = document.getElementById('quote');;
    quote.innerHTML = `"I fear not the man who has practiced 10,000 kicks once,<br>
                       but I fear the man who had practiced one kick 10, 000 times."`;
}

let prosek;

//Funkcija koja prikazuje login Shaolin Wushu page
function prikaziShaolinlogin() {
    gsapLeftAndRightDiv();

    //Prikazuje text desnog diva cim se klikne na ovaj page
    let rightDiv = document.getElementById('right-div');
    rightDiv.style.display = 'block';

    //Uklannja cart div na prethodnoj strani
    let cartDivRemove = document.getElementById('cart-div');
    if (cartDivRemove) {
        let mainDiv = document.getElementById('main-div');
        mainDiv.removeChild(cartDivRemove);
    }

    //Pikazuje left-div koji je bio sakriven
    let leftDiv = document.getElementById('left-div');
    if (leftDiv.classList.contains('hidden')) {
        leftDiv.classList.remove('hidden');
    }

    //uklanja admin panel koji je bio na prethodnoj strani
    let removeAdminPanel = document.getElementById('admin-panel-btn');
    if (removeAdminPanel) {
        let mainDiv = document.getElementById('main-div');
        mainDiv.removeChild(removeAdminPanel);
    }

    //uklanja goback btn koji je bio na prethodnoj strani
    let removeGoBackBtn2 = document.getElementById('go-back-btn2');
    if (removeGoBackBtn2) {
        let mainDiv = document.getElementById('main-div');
        mainDiv.removeChild(removeGoBackBtn2);
    }

    //Uklanja video-add div koji je bio na prethodnoj strani
    let removeYoutubeAddDiv = document.getElementById('addVideo-div');
    if (removeYoutubeAddDiv) {
        document.body.removeChild(removeYoutubeAddDiv);
    }

    let senseiData;
    axios.get('http://localhost:3000/senseis', {
        params: {
            senseiId: 1,
        }
    }).then((res) => {
        senseiData = res.data;

        let leftDiv = document.getElementById('left-div');
        leftDiv.style.width = '350px';
        leftDiv.style.marginBottom = '20px';
        leftDiv.style.height = '520px';

        axios.get('http://localhost:3000/martial_arts_types', {
            params: {
                senseiId: 1
            }
        }).then((res) => {
            leftDiv.innerHTML = `<h1 id="login-h1">About ${res.data.mat_name}</h1>`;
            leftDiv.innerHTML += res.data.mat_text;
        }).then(() => {
            rightDiv = document.getElementById('right-div');
            rightDiv.style.height = '680px';
            rightDiv.style.width = '470px';
            rightDiv.innerHTML = `<h1 id="login-h1">
            ${senseiData.sen_title} 
            ${senseiData.sen_name} 
            ${senseiData.sen_lastname}</h1>
            ${senseiData.sen_description}`;

            //Svaki page ima svoj quote i menja se kad se klikne
            let quote = document.getElementById('quote');
            quote.innerHTML = `"Never respond to an angry person with a fiery comeback, <br> even if he deserves it...Don't allow his anger to become your anger."`

            let btnShowVideos = document.createElement('div');
            btnShowVideos.innerHTML = 'Show Videos';
            btnShowVideos.classList = 'btn-login';
            leftDiv.appendChild(btnShowVideos);

            //Funkcija kad se klikne na nju priakzuje video div
            btnShowVideos.onclick = () => {
                btnShowVideos.classList.add('turquoise');
                btnShowComments.classList.remove('turquoise');
                btnAboutSensei.classList.remove('turquoise');
                showVideos(1);
            }

            let btnAboutSensei = document.createElement('div');
            btnAboutSensei.innerHTML = 'Shi Yanjun';
            btnAboutSensei.classList = 'btn-login turquoise';
            btnAboutSensei.style.width = '45%';
            leftDiv.appendChild(btnAboutSensei);

            //Funkcija kad se klikne na nju sklanja video div
            btnAboutSensei.onclick = () => {
                gsap.fromTo('#right-div', { x: 500, }, { duration: 1, x: 0, ease: 'back' });

                btnAboutSensei.classList.add('turquoise');
                btnShowComments.classList.remove('turquoise');
                btnShowVideos.classList.remove('turquoise');

                //Uklanja video-add div koji je bio na prethodnoj strani
                let removeYoutubeAddDiv = document.getElementById('addVideo-div');
                if (removeYoutubeAddDiv) {
                    document.body.removeChild(removeYoutubeAddDiv);
                }

                let rightDiv = document.getElementById('right-div');
                rightDiv.style.width = '470px';
                rightDiv.style.height = '680px';
                rightDiv.innerHTML = `<h1 id="login-h1">
                ${senseiData.sen_title} 
                ${senseiData.sen_name} 
                ${senseiData.sen_lastname}</h1>
                ${senseiData.sen_description}`;
            }

            let btnShowComments = document.createElement('div');
            btnShowComments.innerHTML = 'Show Comments';
            btnShowComments.classList = 'btn-login';
            leftDiv.appendChild(btnShowComments);

            //Funkcija kad se klikne na nju priakzuje komentar div
            btnShowComments.onclick = () => {
                btnShowComments.classList.add('turquoise');
                btnAboutSensei.classList.remove('turquoise');
                btnShowVideos.classList.remove('turquoise');
                showComments(1);
            }

            let btnTrainingPlan = document.createElement('div');
            btnTrainingPlan.innerHTML = 'Traning Plan';
            btnTrainingPlan.classList = 'btn-login';
            btnTrainingPlan.style.width = '45%';
            leftDiv.appendChild(btnTrainingPlan);

            //Funkcija kad se klikne na nju sklanja komentar div
            btnTrainingPlan.onclick = () => {
                //Vraca desni div a uklanja komentar div
                gsap.fromTo('#right-div', { x: 500, }, { duration: 1, x: 0, ease: 'back' });
                shaolinTrainingPlan();
            }
        });
    });
}

//Funkcija koja prikazuje login Karate page
function prikaziKaratelogin() {
    gsapLeftAndRightDiv();

    //Prikazuje text desnog diva cim se klikne na ovaj page
    let rightDiv = document.getElementById('right-div');
    rightDiv.style.display = 'block';

    //Uklannja cart div na prethodnoj strani
    let cartDivRemove = document.getElementById('cart-div');
    if (cartDivRemove) {
        let mainDiv = document.getElementById('main-div');
        mainDiv.removeChild(cartDivRemove);
    }

    //Pikazuje left-div koji je bio sakriven
    let leftDiv = document.getElementById('left-div');
    if (leftDiv.classList.contains('hidden')) {
        leftDiv.classList.remove('hidden');
    }

    //uklanja admin panel koji je bio na prethodnoj strani
    let removeAdminPanel = document.getElementById('admin-panel-btn');
    if (removeAdminPanel) {
        let mainDiv = document.getElementById('main-div');
        mainDiv.removeChild(removeAdminPanel);
    }

    //uklanja goback btn koji je bio na prethodnoj strani
    let removeGoBackBtn2 = document.getElementById('go-back-btn2');
    if (removeGoBackBtn2) {
        let mainDiv = document.getElementById('main-div');
        mainDiv.removeChild(removeGoBackBtn2);
    }


    //Uklanja video-add div koji je bio na prethodnoj strani
    let removeYoutubeAddDiv = document.getElementById('addVideo-div');
    if (removeYoutubeAddDiv) {
        document.body.removeChild(removeYoutubeAddDiv);
    }

    let senseiData;
    axios.get('http://localhost:3000/senseis', {
        params: {
            senseiId: 2,
        }
    }).then((res) => {
        senseiData = res.data;

        let leftDiv = document.getElementById('left-div');
        leftDiv.style.width = '350px';
        leftDiv.style.marginTop = '30px';
        leftDiv.style.height = '520px';

        axios.get('http://localhost:3000/martial_arts_types', {
            params: {
                senseiId: 2
            }
        }).then((res) => {
            leftDiv.innerHTML = `<h1 id="login-h1">About ${res.data.mat_name}</h1>`;
            leftDiv.innerHTML += res.data.mat_text;
        }).then(() => {
            rightDiv = document.getElementById('right-div');
            rightDiv.style.height = '630px';
            rightDiv.style.width = '470px';
            rightDiv.innerHTML = `<h1 id="login-h1">
            ${senseiData.sen_title} 
            ${senseiData.sen_name} 
            ${senseiData.sen_lastname}</h1>
            ${senseiData.sen_description}`;

            //Svaki page ima svoj quote i menja se kad se klikne
            let quote = document.getElementById('quote');
            quote.innerHTML = `"If you ever lack motivation to train then think <br> what happens to your mind and body when you don't."`;

            let btnShowVideos = document.createElement('div');
            btnShowVideos.innerHTML = 'Show Videos';
            btnShowVideos.classList = 'btn-login';
            leftDiv.appendChild(btnShowVideos);

            //Funkcija kad se klikne na nju priakzuje video div
            btnShowVideos.onclick = () => {
                btnShowVideos.classList.add('turquoise');
                btnShowComments.classList.remove('turquoise');
                btnAboutSensei.classList.remove('turquoise');
                showVideos(2);
            }

            let btnAboutSensei = document.createElement('div');
            btnAboutSensei.innerHTML = 'Morio Higaonna';
            btnAboutSensei.classList = 'btn-login turquoise';
            btnAboutSensei.style.width = '45%';
            leftDiv.appendChild(btnAboutSensei);

            //Funkcija kad se klikne na nju sklanja video div
            btnAboutSensei.onclick = () => {
                //Vraca desni div a uklanja video div
                gsap.fromTo('#right-div', { x: 500, }, { duration: 1, x: 0, ease: 'back' });

                btnAboutSensei.classList.add('turquoise');
                btnShowComments.classList.remove('turquoise');
                btnShowVideos.classList.remove('turquoise');

                //Uklanja video-add div koji je bio na prethodnoj strani
                let removeYoutubeAddDiv = document.getElementById('addVideo-div');
                if (removeYoutubeAddDiv) {
                    document.body.removeChild(removeYoutubeAddDiv);
                }

                let rightDiv = document.getElementById('right-div');
                rightDiv.style.width = '470px';
                rightDiv.style.height = '630px';
                rightDiv.innerHTML = `<h1 id="login-h1">
                ${senseiData.sen_title} 
                ${senseiData.sen_name} 
                ${senseiData.sen_lastname}</h1>
                ${senseiData.sen_description}`;
            }

            let btnShowComments = document.createElement('div');
            btnShowComments.innerHTML = 'Show Comments';
            btnShowComments.classList = 'btn-login';
            leftDiv.appendChild(btnShowComments);

            //Funkcija kad se klikne na nju priakzuje komentar div
            btnShowComments.onclick = () => {
                btnShowComments.classList.add('turquoise');
                btnAboutSensei.classList.remove('turquoise');
                btnShowVideos.classList.remove('turquoise');
                showComments(2);
            }

            let btnTrainingPlan = document.createElement('div');
            btnTrainingPlan.innerHTML = 'Training Plan';
            btnTrainingPlan.classList = 'btn-login';
            btnTrainingPlan.style.width = '45%';
            leftDiv.appendChild(btnTrainingPlan);

            //Funkcija kad se klikne na nju sklanja komentar div
            btnTrainingPlan.onclick = () => {
                //Vraca desni div a uklanja komentar div
                gsap.fromTo('#right-div', { x: 500, }, { duration: 1, x: 0, ease: 'back' });
                karateTrainingPlan();
            }
        });
    });
}

//Funkcija koja prikazuje login Jeet Kune Doo page
function prikaziJeetKuneDologin() {
    gsapLeftAndRightDiv();

    //Prikazuje text desnog diva cim se klikne na ovaj page
    let rightDiv = document.getElementById('right-div');
    rightDiv.style.display = 'block';

    //Uklannja cart div na prethodnoj strani
    let cartDivRemove = document.getElementById('cart-div');
    if (cartDivRemove) {
        let mainDiv = document.getElementById('main-div');
        mainDiv.removeChild(cartDivRemove);
    }

    //Pikazuje left-div koji je bio sakriven
    let leftDiv = document.getElementById('left-div');
    if (leftDiv.classList.contains('hidden')) {
        leftDiv.classList.remove('hidden');
    }

    //uklanja admin panel koji je bio na prethodnoj strani
    let removeAdminPanel = document.getElementById('admin-panel-btn');
    if (removeAdminPanel) {
        let mainDiv = document.getElementById('main-div');
        mainDiv.removeChild(removeAdminPanel);
    }

    //uklanja goback btn koji je bio na prethodnoj strani
    let removeGoBackBtn2 = document.getElementById('go-back-btn2');
    if (removeGoBackBtn2) {
        let mainDiv = document.getElementById('main-div');
        mainDiv.removeChild(removeGoBackBtn2);
    }

    //Uklanja video-add div koji je bio na prethodnoj strani
    let removeYoutubeAddDiv = document.getElementById('addVideo-div');
    if (removeYoutubeAddDiv) {
        document.body.removeChild(removeYoutubeAddDiv);
    }

    let senseiData;
    axios.get('http://localhost:3000/senseis', {
        params: {
            senseiId: 3,
        }
    }).then((res) => {
        senseiData = res.data;

        let leftDiv = document.getElementById('left-div');
        leftDiv.style.width = '350px';
        leftDiv.style.marginBottom = '30px';
        leftDiv.style.height = '540px';

        axios.get('http://localhost:3000/martial_arts_types', {
            params: {
                senseiId: 3
            }
        }).then((res) => {
            leftDiv.innerHTML = `<h1 id="login-h1">About ${res.data.mat_name}</h1>`;
            leftDiv.innerHTML += res.data.mat_text
        }).then(() => {
            rightDiv = document.getElementById('right-div');
            rightDiv.style.height = '650px';
            rightDiv.style.width = '470px';
            rightDiv.innerHTML = `<h1 id="login-h1"> 
            ${senseiData.sen_title} 
            ${senseiData.sen_name} 
            ${senseiData.sen_lastname}</h1>
            ${senseiData.sen_description}`;

            //Svaki page ima svoj quote i menja se kad se klikne
            let quote = document.getElementById('quote');
            quote.innerHTML = `"Empty your mind, be formless, shapeless, like water. <br> 
                                Water can flow or it can crash. Be water, my friend."`;

            let btnShowVideos = document.createElement('div');
            btnShowVideos.innerHTML = 'Show Videos';
            btnShowVideos.classList = 'btn-login';
            leftDiv.appendChild(btnShowVideos);

            //Funkcija kad se klikne na nju priakzuje video div
            btnShowVideos.onclick = () => {
                btnShowVideos.classList.add('turquoise');
                btnShowComments.classList.remove('turquoise');
                btnAboutSensei.classList.remove('turquoise');
                showVideos(3);
            }

            let btnAboutSensei = document.createElement('div');
            btnAboutSensei.innerHTML = 'Li Jun-Fan';
            btnAboutSensei.classList = 'btn-login turquoise';
            btnAboutSensei.style.width = '45%';
            leftDiv.appendChild(btnAboutSensei);

            //Funkcija kad se klikne na nju sklanja video div
            btnAboutSensei.onclick = () => {
                //Vraca desni div a uklanja video div
                gsap.fromTo('#right-div', { x: 500, }, { duration: 1, x: 0, ease: 'back' });

                btnAboutSensei.classList.add('turquoise');
                btnShowComments.classList.remove('turquoise');
                btnShowVideos.classList.remove('turquoise');

                //Uklanja video-add div koji je bio na prethodnoj strani
                let removeYoutubeAddDiv = document.getElementById('addVideo-div');
                if (removeYoutubeAddDiv) {
                    document.body.removeChild(removeYoutubeAddDiv);
                }

                let rightDiv = document.getElementById('right-div');
                rightDiv.style.width = '470px';
                rightDiv.style.height = '650px';
                rightDiv.innerHTML = `<h1 id="login-h1">
                ${senseiData.sen_title} 
                ${senseiData.sen_name} 
                ${senseiData.sen_lastname}</h1>
                ${senseiData.sen_description}`;
            }

            let btnShowComments = document.createElement('div');
            btnShowComments.innerHTML = 'Show Comments';
            btnShowComments.classList = 'btn-login';
            leftDiv.appendChild(btnShowComments);

            //Funkcija kad se klikne na nju priakzuje komentar div
            btnShowComments.onclick = () => {
                btnShowComments.classList.add('turquoise');
                btnAboutSensei.classList.remove('turquoise');
                btnShowVideos.classList.remove('turquoise');
                showComments(3);
            }

            let btnTrainingPlan = document.createElement('div');
            btnTrainingPlan.innerHTML = 'Training Plan';
            btnTrainingPlan.classList = 'btn-login';
            btnTrainingPlan.style.width = '45%';

            //Funkcija kad se klikne na nju sklanja komentar div
            btnTrainingPlan.onclick = () => {
                //Vraca desni div a uklanja komentar div
                gsap.fromTo('#right-div', { x: 500, }, { duration: 1, x: 0, ease: 'back' });
                jeetKuneDooTrainingPlan();
            }
            leftDiv.appendChild(btnTrainingPlan);
        });
    });
}

//Funkcija koja prikazuje login Aikido page
function prikaziAikidologin() {
    gsapLeftAndRightDiv();

    //Prikazuje text desnog diva cim se klikne na ovaj page
    let rightDiv = document.getElementById('right-div');
    rightDiv.style.display = 'block';

    //Uklannja cart div na prethodnoj strani
    let cartDivRemove = document.getElementById('cart-div');
    if (cartDivRemove) {
        let mainDiv = document.getElementById('main-div');
        mainDiv.removeChild(cartDivRemove);
    }

    //Pikazuje left-div koji je bio sakriven
    let leftDiv = document.getElementById('left-div');
    if (leftDiv.classList.contains('hidden')) {
        leftDiv.classList.remove('hidden');
    }

    //uklanja admin panel koji je bio na prethodnoj strani
    let removeAdminPanel = document.getElementById('admin-panel-btn');
    if (removeAdminPanel) {
        let mainDiv = document.getElementById('main-div');
        mainDiv.removeChild(removeAdminPanel);
    }

    //uklanja goback btn koji je bio na prethodnoj strani
    let removeGoBackBtn2 = document.getElementById('go-back-btn2');
    if (removeGoBackBtn2) {
        let mainDiv = document.getElementById('main-div');
        mainDiv.removeChild(removeGoBackBtn2);
    }

    //Uklanja video-add div koji je bio na prethodnoj strani
    let removeYoutubeAddDiv = document.getElementById('addVideo-div');
    if (removeYoutubeAddDiv) {
        document.body.removeChild(removeYoutubeAddDiv);
    }

    let senseiData;
    axios.get('http://localhost:3000/senseis', {
        params: {
            senseiId: 4,
        }
    }).then((res) => {
        senseiData = res.data;

        let leftDiv = document.getElementById('left-div');
        leftDiv.style.width = '350px';
        leftDiv.style.marginTop = '20px';
        leftDiv.style.height = '560px';

        axios.get('http://localhost:3000/martial_arts_types', {
            params: {
                senseiId: 4
            }
        }).then((res) => {
            leftDiv.innerHTML = `<h1 id="login-h1">About ${res.data.mat_name}</h1>`;
            leftDiv.innerHTML += res.data.mat_text;
        }).then(() => {
            rightDiv = document.getElementById('right-div');
            rightDiv.style.height = '695px';
            rightDiv.style.width = '470px';
            rightDiv.innerHTML = `<h1 id="login-h1">
            ${senseiData.sen_title} 
            ${senseiData.sen_name} 
            ${senseiData.sen_lastname}</h1>
            ${senseiData.sen_description}`;

            //Svaki page ima svoj quote i menja se kad se klikne
            let quote = document.getElementById('quote');
            quote.innerHTML = `"Progress comes to those who train and train <br> reliance on secret techniques will get you nowhere."`;

            let btnShowVideos = document.createElement('div');
            btnShowVideos.innerHTML = 'Show Videos';
            btnShowVideos.classList = 'btn-login';
            leftDiv.appendChild(btnShowVideos);

            //Funkcija kad se klikne na nju priakzuje video div
            btnShowVideos.onclick = () => {
                btnShowVideos.classList.add('turquoise');
                btnShowComments.classList.remove('turquoise');
                btnAboutSensei.classList.remove('turquoise');
                showVideos(4);
            }

            let btnAboutSensei = document.createElement('div');
            btnAboutSensei.innerHTML = 'Ueshiba Morihei';
            btnAboutSensei.classList = 'btn-login turquoise';
            btnAboutSensei.style.width = '45%';
            leftDiv.appendChild(btnAboutSensei);

            //Funkcija kad se klikne na nju sklanja video div
            btnAboutSensei.onclick = () => {
                gsap.fromTo('#right-div', { x: 500, }, { duration: 1, x: 0, ease: 'back' });

                btnAboutSensei.classList.add('turquoise');
                btnShowComments.classList.remove('turquoise');
                btnShowVideos.classList.remove('turquoise');

                //Uklanja video-add div koji je bio na prethodnoj strani
                let removeYoutubeAddDiv = document.getElementById('addVideo-div');
                if (removeYoutubeAddDiv) {
                    document.body.removeChild(removeYoutubeAddDiv);
                }

                let rightDiv = document.getElementById('right-div');
                rightDiv.style.width = '470px';
                rightDiv.style.height = '695px';
                rightDiv.innerHTML = `<h1 id="login-h1">
                ${senseiData.sen_title} 
                ${senseiData.sen_name} 
                ${senseiData.sen_lastname}</h1>
                ${senseiData.sen_description}`;
            }

            let btnShowComments = document.createElement('div');
            btnShowComments.innerHTML = 'Show Comments';
            btnShowComments.classList = 'btn-login';
            leftDiv.appendChild(btnShowComments);

            //Funkcija kad se klikne na nju priakzuje komentar div
            btnShowComments.onclick = () => {
                btnShowComments.classList.add('turquoise');
                btnAboutSensei.classList.remove('turquoise');
                btnShowVideos.classList.remove('turquoise');

                //Uklanja video-add div koji je bio na prethodnoj strani
                let removeYoutubeAddDiv = document.getElementById('addVideo-div');
                if (removeYoutubeAddDiv) {
                    document.body.removeChild(removeYoutubeAddDiv);
                }

                showComments(4);
            }

            let btnTrainingPlan = document.createElement('div');
            btnTrainingPlan.innerHTML = 'Training Plan';
            btnTrainingPlan.classList = 'btn-login';
            btnTrainingPlan.style.width = '45%';

            //Prikazuje Training Plan Div
            btnTrainingPlan.onclick = () => {
                gsap.fromTo('#right-div', { x: 500, }, { duration: 1, x: 0, ease: 'back' });
                aikidoTrainingPlan();

            }
            leftDiv.appendChild(btnTrainingPlan);
        });
    });
}

//Funkcija koja pravi vide-add-div za unosenje linka i dodavnje klipa i vide-div
function showAddVideoInput(senseiId) {
    gsap.fromTo('#addVideo-div', { x: 0, scale: 0 }, { scale: 1, duration: 1.5, x: 0, ease: 'power4' });

    let addVideoDiv = document.createElement('div');
    addVideoDiv.id = 'addVideo-div';

    let btnAddVideos = document.createElement('p');
    btnAddVideos.innerHTML = 'Add';
    btnAddVideos.allowFullscreen = true;
    btnAddVideos.classList = 'btn-login';
    btnAddVideos.style.margin = '0 10px';
    btnAddVideos.style.width = '50px';
    btnAddVideos.style.fontSize = '12px';
    btnAddVideos.onclick = () => {
        postYtVideos(senseiId);
    }

    let addVideoInputTitle = document.createElement('input');
    addVideoInputTitle.id = 'video-title';
    addVideoInputTitle.placeholder = 'Add youtube title here...';

    let addVideosInput = document.createElement('input');
    addVideosInput.id = 'addVideos';
    addVideosInput.placeholder = 'Add youtube links here...';

    document.body.appendChild(addVideoDiv);
    addVideoDiv.appendChild(addVideosInput);
    addVideoDiv.appendChild(btnAddVideos);
    addVideoDiv.appendChild(addVideoInputTitle);
}

//Funkcija koja prikazuje video div
function showVideos(senseiId) {
    gsap.fromTo('#right-div', { y: 500 }, { duration: 1, y: 0, ease: 'power4' });

    //Uklanja video-add div koji je bio na prethodnoj strani
    let removeYoutubeAddDiv = document.getElementById('addVideo-div');
    if (removeYoutubeAddDiv) {
        document.body.removeChild(removeYoutubeAddDiv);
    }

    axios.get('http://localhost:3000/yt_videos', {
        params: {
            senseiId: senseiId
        }
    }).then((res) => {
        // let mainDiv = document.getElementById('main-div');
        let rightDiv = document.getElementById('right-div');
        rightDiv.innerHTML = '';
        rightDiv.style.width = '316px';
        rightDiv.style.height = '664px';

        let removeYoutubeAddDiv = document.getElementById('addVideo-div');
        if (removeYoutubeAddDiv) {
            document.body.removeChild(removeYoutubeAddDiv)
        }

        if (document.getElementById('new-videos')) {
            let newVideosDiv = document.getElementById('new-videos');
            mainDiv.removeChild(newVideosDiv);
        }

        let allVideos = res.data;
        for (let i = 0; i < allVideos.length; i++) {
            let videoDiv = document.createElement('div');
            videoDiv.classList = 'videoDiv';
            let video = document.createElement('iframe');
            video.src = allVideos[i].ytv_links;
            video.allowFullscreen = true;
            video.style.border = '3px ridge rgba(0, 212, 255, 0.4)';
            rightDiv.appendChild(videoDiv);
            videoDiv.appendChild(video);
        }

        //Ako je Admin ulogovan onda on dobija posebnu funckiju da birse klipove i da ih dodaje
        if (userLevel === 1) {
            showAddVideoInput(senseiId);
            deleteVideos(allVideos, senseiId);
        }
    });
}

//Funkcija koja postavlja video klipove preko post axiosa
function postYtVideos(id) {
    let videoLink = document.getElementById('addVideos').value;
    if (videoLink.substring(0, 30) !== `https://www.youtube.com/embed/`) {
        return;
    }
    axios.post('http://localhost:3000/yt_videos', {
        title: document.getElementById('video-title').value,
        link: document.getElementById('addVideos').value,
        senseiId: id
    }).then((res) => {
        showVideos(id);
    });
}

//Funckija koja sluzi za apendovanje kantice za brisanje i brisanje video klipova
function deleteVideos(allVideos, senseiId) {
    let videoDiv = document.getElementsByClassName('videoDiv');
    for (let i = 0; i < videoDiv.length; i++) {
        let trash = document.createElement('i');
        trash.classList = 'fas fa-trash-alt';
        trash.style.color = 'rgba(0, 255, 229, 0.418)';
        trash.title = 'Delete';
        videoDiv[i].appendChild(trash);
        trash.onclick = () => {
            deleteVideosAxios(allVideos[i].ytv_id, senseiId);
        }
    }
}

//Funckija koja sluzi za brisanje klipova direktno u bazi pomocu axiosa
function deleteVideosAxios(ytv_id, senseiId) {
    axios.delete('http://localhost:3000/yt_videos', {
        params: {
            ytv_id: ytv_id
        }
    }).then((res) => {
        showVideos(senseiId);
    });
}

function shop() {
    prikaziShop();
}

let komentari = [];
let komentarId = 1;

//Funkcija konstruktor za pravljenje komentara
function Komentar(opis, id, date, kreator, senseiId) {
    this.id = id;
    this.date = new Date(date).getDate() + '-' + (new Date(date).getMonth() + 1) + '-' + new Date(date).getFullYear();
    this.time = new Date(date).getHours() + ':' + (new Date(date).getMinutes() < 10 ? '0' : '') + new Date(date).getMinutes();
    this.kreator = kreator;
    this.opis = opis;
    this.senseiId = senseiId;


    this.ispisiSeAdmin = function () {
        return `<div class="bubble">
                    <h4><i class="fas fa-user-ninja"></i> ${this.kreator}</h4>
                    <p>${this.opis}</p>
                    <span>${this.date} - ${this.time}</span>
                    <i class="fas fa-trash-alt trash" title="Delete"
                    onclick="deleteCommentsAxios(${this.id},${this.senseiId})"></i>
                </div>`;
    }

    this.ispisiSeUser = function () {
        return `<div class="bubble">
                    <h4><i class="fas fa-user-ninja"></i> ${this.kreator}</h4>
                    <p>${this.opis}</p>
                    <span>${this.date} - ${this.time}</span>
                </div>`;
    }
}

//Funkcija koja prikazuje div za komentare kad se klkine na dugme
function showComments(senseiId) {
    gsap.fromTo('#right-div', { y: 500 }, { duration: 1, y: 0, ease: 'power4' });

    //Uklanja video-add div koji je bio na prethodnoj strani
    let removeYoutubeAddDiv = document.getElementById('addVideo-div');
    if (removeYoutubeAddDiv) {
        document.body.removeChild(removeYoutubeAddDiv);
    }

    let rightDiv = document.getElementById('right-div');
    rightDiv.innerHTML = '';
    rightDiv.style.width = '400px';
    rightDiv.style.height = '680px';
    rightDiv.style.overflowY = 'scroll';

    let unosOpisKomentar = document.createElement('textarea');
    unosOpisKomentar.id = 'unos-opis';

    unosOpisKomentar.placeholder = 'Add a public comment..';
    unosOpisKomentar.autofocus = true;

    let btnDodajKomentar = document.createElement('div');
    btnDodajKomentar.innerHTML = 'Comment';
    btnDodajKomentar.id = 'btn-add-com';

    let btnCancleKomentar = document.createElement('div');
    btnCancleKomentar.innerHTML = 'Cancle';
    btnCancleKomentar.id = 'btn-cancle-com';


    btnCancleKomentar.onclick = () => {
        let opis = document.getElementById('unos-opis');
        opis.value = '';
    }

    btnDodajKomentar.onclick = () => {
        dodajKomentar(senseiId);
    }

    let divKomentar = document.createElement('div');
    divKomentar.id = 'komentar-div';

    rightDiv.appendChild(btnDodajKomentar);
    rightDiv.appendChild(unosOpisKomentar);
    rightDiv.appendChild(divKomentar);
    rightDiv.appendChild(btnCancleKomentar);

    getAllComments(senseiId);
}

//Funkcija koja dodaje komentare kad se klikne na dugme
function dodajKomentar(senseiId) {
    let opis = document.getElementById('unos-opis').value;

    if (opis === '') {
        return;
    }

    axios.post('http://localhost:3000/comments', {
        usr_id: korisnik.usr_id,
        sen_id: senseiId,
        text: opis
    }).then((res) => {
        getAllComments(senseiId);
    });
}

//Funkcija i axios koji postavlja komentare direktno iz baze
function getAllComments(senseiId) {
    axios.get('http://localhost:3000/comments', {
        params: {
            sen_id: senseiId
        }
    }).then((res) => {
        komentari = [];
        let allComments = res.data;
        document.getElementById('komentar-div').innerHTML = '';
        for (let i = 0; i < allComments.length; i++) {
            let date = allComments[i].com_date;
            let komentar = new Komentar(
                allComments[i].com_text,
                allComments[i].com_id,
                date,
                allComments[i].usr_username,
                senseiId
            );
            komentari.push(komentar);
        }

        //Ispsuje komentar div za admina a u else za usera 
        for (let i = 0; i < komentari.length; i++) {
            if (userLevel === 1) {
                document.getElementById('komentar-div').innerHTML += komentari[i].ispisiSeAdmin();
            }
            else {
                document.getElementById('komentar-div').innerHTML += komentari[i].ispisiSeUser();
            }
        }
        document.getElementById('unos-opis').value = '';
    });
}

//Funkcija koja brise komentare po ID-u
function deleteCommentsAxios(com_id, senseiId) {
    axios.delete('http://localhost:3000/comments', {
        params: {
            com_id: com_id
        }
    }).then((res) => {
        getAllComments(senseiId);
    });
}

function gsapRotate() {
    gsap.fromTo("#nav-ul", { y: -500 }, { duration: 0.5, y: 0, ease: 'rough' });

    gsap.fromTo("#left-div", { x: -500, }, { duration: 1, x: 0, ease: 'back', });

    gsap.fromTo("#right-div", { x: 500 }, { duration: 1, x: 0, ease: 'back' });

    gsap.fromTo("#right-foot i", { y: 500 }, { duration: 1, y: 0, ease: 'back', stagger: 0.2 });

    gsap.fromTo("#left-foot p", { y: 500 }, { duration: 1, y: 0, ease: 'rough', stagger: 0.2 });

    gsap.fromTo("#center-foot", { y: 500, }, { duration: 1, y: 0, ease: 'rough' });

    gsap.fromTo("#left-foot", { y: 500, }, { duration: 1, y: 0, ease: 'back' });

    gsap.fromTo("#nav-ul li", { y: -500 }, { duration: 1, y: 0, ease: 'rough', stagger: 0.2 });

    gsap.fromTo("#quote", { x: 0, scale: 0 }, { duration: 3, x: 0, scale: 1, ease: 'power4', });

}

function gsapLeftAndRightDiv() {
    gsap.fromTo("#left-div", { x: -500 }, { duration: 1, x: 0, ease: 'back', });

    gsap.fromTo("#right-div", { x: 500 }, { duration: 1, x: 0, ease: 'back' });

    gsap.fromTo("#quote", { x: 0, scale: 0, }, { duration: 3, x: 0, scale: 1, ease: 'power4', });
}

function shaolinTrainingPlan() {
    gsap.fromTo("#left-div", { x: -500, }, { duration: 1, x: 0, ease: 'back', });

    //Uklanja video-add div koji je bio na prethodnoj strani
    let removeYoutubeAddDiv = document.getElementById('addVideo-div');
    if (removeYoutubeAddDiv) {
        document.body.removeChild(removeYoutubeAddDiv);
    }

    let rightDiv = document.getElementById('right-div');
    rightDiv.innerHTML = '';
    shaolinIntroduction();

    let leftDiv = document.getElementById('left-div');
    leftDiv.style.marginTop = '35px';
    leftDiv.style.height = '610px';
    leftDiv.innerHTML = `<h1 id="login-h1">Shaolin Wushu training</h1>
    <p>- In Shaolin Wushu there are some traits of the monks which are passed into the disciples: to be considerate, courteous, brave, righteous, diligent, loyal, develop clarity and learn how to solve problems.</p>
    <p>- A true Master will teach you to be gentle, love life and be happy. The two main pillars of the Shaolin Philosophy are: WISDOM and COMPASSION.</p>
    <div class="btn-login turquoise" style="width: 93.3%"; onclick="shaolinIntroduction()">Introduction to Shaolin Wushu</div>
    <div class="btn-login" style="width: 93.3%"; onclick="shaolinHistory()">Shaolin Wushu History​</div>
    <div class="btn-login" style="width: 93.3%"; onclick="shaolinTechniques()">Shaolin Wushu Techniques</div>
    <div class="btn-login" style="width: 93.3%"; onclick="shaolinSkills()">Shaolin Wushu Skills</div>
    <div class="btn-login" style="width: 93.3%"; onclick="shaolinGallery()">Shaolin Wushu Gallery</div>
    <br>
    <br>
    <div onclick="prikaziShaolinlogin()" class="btn-login" style="width: 93.3%">Go back</div>`;
}

function shaolinIntroduction() {
    gsap.fromTo("#right-div", { x: 500 }, { duration: 1, x: 0, ease: 'back' });

    let tpDiv = document.getElementById('left-div');
    let deca = tpDiv.children;
    console.log(deca);

    for (let i = 3; i < deca.length; i++) {
        deca[i].classList.remove('turquoise');
    }
    deca[3].classList.add('turquoise');

    let senseiData;
    axios.get('http://localhost:3000/training_plan', {
        params: {
            senseiId: 1,
        }
    }).then((res) => {
        senseiData = res.data;
        let rightDiv = document.getElementById('right-div');
        rightDiv.style.overflowY = 'scroll';
        rightDiv.style.height = '660px';
        rightDiv.style.width = '470px';
        rightDiv.innerHTML = `${senseiData.tp_intro}`;
    });
}


function shaolinHistory() {
    gsap.fromTo("#right-div", { x: 500 }, { duration: 1, x: 0, ease: 'back' });

    let tpDiv = document.getElementById('left-div');
    let deca = tpDiv.children;

    for (let i = 3; i < deca.length; i++) {
        deca[i].classList.remove('turquoise');
    }
    deca[4].classList.add('turquoise');

    let senseiData;
    axios.get('http://localhost:3000/training_plan', {
        params: {
            senseiId: 1,
        }
    }).then((res) => {
        senseiData = res.data;
        let rightDiv = document.getElementById('right-div');
        rightDiv.style.overflowY = 'scroll';
        rightDiv.style.backgroundAttachment = 'fixed';
        rightDiv.style.height = '660px';
        rightDiv.style.width = '470px';
        rightDiv.innerHTML = `${senseiData.tp_history}`;
    });
}

function shaolinTechniques() {
    gsap.fromTo("#right-div", { x: 500 }, { duration: 1, x: 0, ease: 'back' });

    let tpDiv = document.getElementById('left-div');
    let deca = tpDiv.children;

    for (let i = 3; i < deca.length; i++) {
        deca[i].classList.remove('turquoise');
    }
    deca[5].classList.add('turquoise');

    let senseiData;
    axios.get('http://localhost:3000/training_plan', {
        params: {
            senseiId: 1,
        }
    }).then((res) => {
        senseiData = res.data;
        let rightDiv = document.getElementById('right-div');
        rightDiv.style.overflowY = 'scroll';
        rightDiv.style.backgroundAttachment = 'fixed';
        rightDiv.style.height = '660px';
        rightDiv.style.width = '470px';
        rightDiv.innerHTML = `${senseiData.tp_techniques}`;
    });
}

function shaolinSkills() {
    gsap.fromTo("#right-div", { x: 500 }, { duration: 1, x: 0, ease: 'back' });

    let tpDiv = document.getElementById('left-div');
    let deca = tpDiv.children;

    for (let i = 3; i < deca.length; i++) {
        deca[i].classList.remove('turquoise');
    }
    deca[6].classList.add('turquoise');

    let senseiData;
    axios.get('http://localhost:3000/training_plan', {
        params: {
            senseiId: 1,
        }
    }).then((res) => {
        senseiData = res.data;
        let rightDiv = document.getElementById('right-div');
        rightDiv.style.overflowY = 'scroll';
        rightDiv.style.backgroundAttachment = 'fixed';
        rightDiv.style.height = '660px';
        rightDiv.style.width = '470px';
        rightDiv.innerHTML = `${senseiData.tp_skills}`;
    });
}

function shaolinGallery() {
    gsap.fromTo("#right-div", { x: 500 }, { duration: 1, x: 0, ease: 'back' });

    let tpDiv = document.getElementById('left-div');
    let deca = tpDiv.children;

    for (let i = 3; i < deca.length; i++) {
        deca[i].classList.remove('turquoise');
    }
    deca[7].classList.add('turquoise');

    let senseiData;
    axios.get('http://localhost:3000/training_plan', {
        params: {
            senseiId: 1,
        }
    }).then((res) => {
        senseiData = res.data;
        let rightDiv = document.getElementById('right-div');
        rightDiv.style.overflowY = 'scroll';
        rightDiv.style.backgroundAttachment = 'fixed';
        rightDiv.style.height = '660px';
        rightDiv.style.width = '470px';
        rightDiv.innerHTML = `${senseiData.tp_gallery}`;
    });
}

function karateTrainingPlan() {
    gsap.fromTo("#left-div", { x: -500, }, { duration: 1, x: 0, ease: 'back', });

    //Uklanja video-add div koji je bio na prethodnoj strani
    let removeYoutubeAddDiv = document.getElementById('addVideo-div');
    if (removeYoutubeAddDiv) {
        document.body.removeChild(removeYoutubeAddDiv);
    }

    let rightDiv = document.getElementById('right-div');
    karateIntroduction();

    let leftDiv = document.getElementById('left-div');
    leftDiv.style.height = '630px';
    leftDiv.innerHTML = `<h1 id="login-h1">Goju-ryu Karate training</h1>
    <p>- The GK provides its members with the highest level of instruction in traditional Okinawan Goju-Ryu Karate-Do as taught by 10 dan Morio Higaonna, in a friendly democratic association.</p>
    <p>- Our principles include respect for the individual, recognition of effort and attainment, participation in the decision making process and high moral and ethical standards.</p>
    <div class="btn-login turquoise" style="width: 93.3%"; onclick="karateIntroduction()">Introduction to Goju-ryu Karate</div>
    <div class="btn-login" style="width: 93.3%"; onclick="karateHistory()">Goju-ryu Karate History​</div>
    <div class="btn-login" style="width: 93.3%"; onclick="karateTechniques()">Goju-ryu Karate Techniques</div>
    <div class="btn-login" style="width: 93.3%"; onclick="karateSkills()">Goju-ryu Karate Skills</div>
    <div class="btn-login" style="width: 93.3%"; onclick="karateGallery()">Goju-ryu Karate Gallery</div>
    <br>
    <br>
    <div onclick="prikaziKaratelogin()" class="btn-login" style="width: 93.3%">Go back</div>`;
}

function karateIntroduction() {
    gsap.fromTo("#right-div", { x: 500 }, { duration: 1, x: 0, ease: 'back' });

    let tpDiv = document.getElementById('left-div');
    let deca = tpDiv.children;

    for (let i = 1; i < deca.length; i++) {
        deca[i].classList.remove('turquoise');
    }
    deca[3].classList.add('turquoise');

    let senseiData;
    axios.get('http://localhost:3000/training_plan', {
        params: {
            senseiId: 2,
        }
    }).then((res) => {
        senseiData = res.data;
        let rightDiv = document.getElementById('right-div');
        rightDiv.style.overflowY = 'scroll';
        rightDiv.style.height = '660px';
        rightDiv.style.width = '470px';
        rightDiv.innerHTML = `${senseiData.tp_intro}`;
    });
}

function karateHistory() {
    gsap.fromTo("#right-div", { x: 500 }, { duration: 1, x: 0, ease: 'back' });

    let tpDiv = document.getElementById('left-div');
    let deca = tpDiv.children;

    for (let i = 1; i < deca.length; i++) {
        deca[i].classList.remove('turquoise');
    }
    deca[4].classList.add('turquoise');

    let senseiData;
    axios.get('http://localhost:3000/training_plan', {
        params: {
            senseiId: 2,
        }
    }).then((res) => {
        senseiData = res.data;
        let rightDiv = document.getElementById('right-div');
        rightDiv.style.overflowY = 'scroll';
        rightDiv.style.height = '660px';
        rightDiv.style.width = '470px';
        rightDiv.innerHTML = `${senseiData.tp_history}`;
    });
}

function karateTechniques() {
    gsap.fromTo("#right-div", { x: 500 }, { duration: 1, x: 0, ease: 'back' });

    let tpDiv = document.getElementById('left-div');
    let deca = tpDiv.children;

    for (let i = 1; i < deca.length; i++) {
        deca[i].classList.remove('turquoise');
    }
    deca[5].classList.add('turquoise');

    let senseiData;
    axios.get('http://localhost:3000/training_plan', {
        params: {
            senseiId: 2,
        }
    }).then((res) => {
        senseiData = res.data;
        let rightDiv = document.getElementById('right-div');
        rightDiv.style.overflowY = 'scroll';
        rightDiv.style.height = '660px';
        rightDiv.style.width = '470px';
        rightDiv.innerHTML = `${senseiData.tp_techniques}`;
    });
}

function karateSkills() {
    gsap.fromTo("#right-div", { x: 500 }, { duration: 1, x: 0, ease: 'back' });

    let tpDiv = document.getElementById('left-div');
    let deca = tpDiv.children;

    for (let i = 1; i < deca.length; i++) {
        deca[i].classList.remove('turquoise');
    }
    deca[6].classList.add('turquoise');

    let senseiData;
    axios.get('http://localhost:3000/training_plan', {
        params: {
            senseiId: 2,
        }
    }).then((res) => {
        senseiData = res.data;
        let rightDiv = document.getElementById('right-div');
        rightDiv.style.overflowY = 'scroll';
        rightDiv.style.height = '660px';
        rightDiv.style.width = '470px';
        rightDiv.innerHTML = `${senseiData.tp_skills}`;
    });
}

function karateGallery() {
    gsap.fromTo("#right-div", { x: 500 }, { duration: 1, x: 0, ease: 'back' });

    let tpDiv = document.getElementById('left-div');
    let deca = tpDiv.children;

    for (let i = 1; i < deca.length; i++) {
        deca[i].classList.remove('turquoise');
    }
    deca[7].classList.add('turquoise');

    let senseiData;
    axios.get('http://localhost:3000/training_plan', {
        params: {
            senseiId: 2,
        }
    }).then((res) => {
        senseiData = res.data;
        let rightDiv = document.getElementById('right-div');
        rightDiv.style.overflowY = 'scroll';
        rightDiv.style.height = '660px';
        rightDiv.style.width = '470px';
        rightDiv.innerHTML = `${senseiData.tp_gallery}`;
    });
}


function jeetKuneDooTrainingPlan() {
    gsap.fromTo("#left-div", { x: -500, }, { duration: 1, x: 0, ease: 'back', });

    //Uklanja video-add div koji je bio na prethodnoj strani
    let removeYoutubeAddDiv = document.getElementById('addVideo-div');
    if (removeYoutubeAddDiv) {
        document.body.removeChild(removeYoutubeAddDiv);
    }

    let rightDiv = document.getElementById('right-div');
    jeetKuneDoIntroduction();

    let leftDiv = document.getElementById('left-div');
    leftDiv.style.height = '600px';
    leftDiv.innerHTML = `<h1 id="login-h1">Jeet Kune Do Training</h1>
    <p>- Wing Chun is one of the most popular Chinese Kung Fu styles in the world. Its fame came from BRUCE LEE. He created a style called JEET KUN DO with many
    practical applications.</p>
    <p>- Recently, movies like IP MAN with the famous actor DONNIE YEN, extended the popularity of the IP MAN branch of WING CHUN.</p>
    <div class="btn-login turquoise" style="width: 93.3%"; onclick="jeetKuneDoIntroduction()">Introduction to Jeet Kune Do</div>
    <div class="btn-login" style="width: 93.3%"; onclick="jeetKuneDoHistory()">Jeet Kune Do History​</div>
    <div class="btn-login" style="width: 93.3%"; onclick="jeetKuneDoTechniques()">Jeet Kune Do Techinques</div>
    <div class="btn-login" style="width: 93.3%"; onclick="jeetKuneDoSkills()">Jeet Kune Do Skills</div>
    <div class="btn-login" style="width: 93.3%"; onclick="jeetKuneDoGallery()">Jeet Kune Do Gallery</div>
    <br>
    <br>
    <div onclick="prikaziJeetKuneDo()" class="btn-login" style="width: 93.3%">Go back</div>`;
}

function jeetKuneDoIntroduction() {
    gsap.fromTo("#right-div", { x: 500 }, { duration: 1, x: 0, ease: 'back' });

    let tpDiv = document.getElementById('left-div');
    let deca = tpDiv.children;

    for (let i = 1; i < deca.length; i++) {
        deca[i].classList.remove('turquoise');
    }
    deca[3].classList.add('turquoise');

    let senseiData;
    axios.get('http://localhost:3000/training_plan', {
        params: {
            senseiId: 3,
        }
    }).then((res) => {
        senseiData = res.data;
        let rightDiv = document.getElementById('right-div');
        rightDiv.style.overflowY = 'scroll';
        rightDiv.style.height = '660px';
        rightDiv.style.width = '470px';
        rightDiv.innerHTML = `${senseiData.tp_intro}`;
    });
}

function jeetKuneDoHistory() {
    gsap.fromTo("#right-div", { x: 500 }, { duration: 1, x: 0, ease: 'back' });

    let tpDiv = document.getElementById('left-div');
    let deca = tpDiv.children;

    for (let i = 1; i < deca.length; i++) {
        deca[i].classList.remove('turquoise');
    }
    deca[4].classList.add('turquoise');

    let senseiData;
    axios.get('http://localhost:3000/training_plan', {
        params: {
            senseiId: 3,
        }
    }).then((res) => {
        senseiData = res.data;
        let rightDiv = document.getElementById('right-div');
        rightDiv.style.overflowY = 'scroll';
        rightDiv.style.height = '660px';
        rightDiv.style.width = '470px';
        rightDiv.innerHTML = `${senseiData.tp_history}`;
    });
}



function jeetKuneDoTechniques() {
    gsap.fromTo("#right-div", { x: 500 }, { duration: 1, x: 0, ease: 'back' });

    let tpDiv = document.getElementById('left-div');
    let deca = tpDiv.children;

    for (let i = 1; i < deca.length; i++) {
        deca[i].classList.remove('turquoise');
    }
    deca[5].classList.add('turquoise');

    let senseiData;
    axios.get('http://localhost:3000/training_plan', {
        params: {
            senseiId: 3,
        }
    }).then((res) => {
        senseiData = res.data;
        let rightDiv = document.getElementById('right-div');
        rightDiv.style.overflowY = 'scroll';
        rightDiv.style.height = '660px';
        rightDiv.style.width = '470px';
        rightDiv.innerHTML = `${senseiData.tp_techniques}`;
    });
}


function jeetKuneDoSkills() {
    gsap.fromTo("#right-div", { x: 500 }, { duration: 1, x: 0, ease: 'back' });

    let tpDiv = document.getElementById('left-div');
    let deca = tpDiv.children;

    for (let i = 1; i < deca.length; i++) {
        deca[i].classList.remove('turquoise');
    }
    deca[6].classList.add('turquoise');

    let senseiData;
    axios.get('http://localhost:3000/training_plan', {
        params: {
            senseiId: 3,
        }
    }).then((res) => {
        senseiData = res.data;
        let rightDiv = document.getElementById('right-div');
        rightDiv.style.overflowY = 'scroll';
        rightDiv.style.height = '660px';
        rightDiv.style.width = '470px';
        rightDiv.innerHTML = `${senseiData.tp_skills}`;
    });
}

function jeetKuneDoGallery() {
    gsap.fromTo("#right-div", { x: 500 }, { duration: 1, x: 0, ease: 'back' });

    let tpDiv = document.getElementById('left-div');
    let deca = tpDiv.children;

    for (let i = 1; i < deca.length; i++) {
        deca[i].classList.remove('turquoise');
    }
    deca[7].classList.add('turquoise');

    let senseiData;
    axios.get('http://localhost:3000/training_plan', {
        params: {
            senseiId: 3,
        }
    }).then((res) => {
        senseiData = res.data;
        let rightDiv = document.getElementById('right-div');
        rightDiv.style.overflowY = 'scroll';
        rightDiv.style.height = '660px';
        rightDiv.style.width = '470px';
        rightDiv.innerHTML = `${senseiData.tp_gallery}`;
    });
}

function aikidoTrainingPlan() {
    gsap.fromTo("#left-div", { x: -500, }, { duration: 1, x: 0, ease: 'back', });

    //Uklanja video-add div koji je bio na prethodnoj strani
    let removeYoutubeAddDiv = document.getElementById('addVideo-div');
    if (removeYoutubeAddDiv) {
        document.body.removeChild(removeYoutubeAddDiv);
    }

    let rightDiv = document.getElementById('right-div');
    aikidoIntroduction();

    let leftDiv = document.getElementById('left-div');
    leftDiv.style.height = '600px';
    leftDiv.innerHTML = `<h1 id="login-h1">Aikido Training</h1>
    <p>- Wing Chun is one of the most popular Chinese Kung Fu styles in the world. Its fame came from BRUCE LEE. He created a style called JEET KUN DO with many
    practical applications.</p>
    <p>- Recently, movies like IP MAN with the famous actor DONNIE YEN, extended the popularity of the IP MAN branch of WING CHUN.</p>
    <div class="btn-login turquoise" style="width: 93.3%"; onclick="aikidoIntroduction()">Introduction to Aikido</div>
    <div class="btn-login" style="width: 93.3%"; onclick="aikidoHistory()">Aikido History​</div>
    <div class="btn-login" style="width: 93.3%"; onclick="aikidoTechniques()">Aikido Techinques</div>
    <div class="btn-login" style="width: 93.3%"; onclick="aikidoSkills()">Aikido Skills</div>
    <div class="btn-login" style="width: 93.3%"; onclick="aikidoGallery()">Aikido Gallery</div>
    <br>
    <br>
    <div onclick="prikaziAikido()" class="btn-login" style="width: 93.3%">Go back</div>`;
}

function aikidoIntroduction() {
    gsap.fromTo("#right-div", { x: 500 }, { duration: 1, x: 0, ease: 'back' });

    let tpDiv = document.getElementById('left-div');
    let deca = tpDiv.children;

    for (let i = 1; i < deca.length; i++) {
        deca[i].classList.remove('turquoise');
    }
    deca[3].classList.add('turquoise');

    let senseiData;
    axios.get('http://localhost:3000/training_plan', {
        params: {
            senseiId: 4,
        }
    }).then((res) => {
        senseiData = res.data;
        let rightDiv = document.getElementById('right-div');
        rightDiv.style.overflowY = 'scroll';
        rightDiv.style.height = '660px';
        rightDiv.style.width = '470px';
        rightDiv.innerHTML = `${senseiData.tp_intro}`;
    });
}

function aikidoHistory() {
    gsap.fromTo("#right-div", { x: 500 }, { duration: 1, x: 0, ease: 'back' });

    let tpDiv = document.getElementById('left-div');
    let deca = tpDiv.children;

    for (let i = 1; i < deca.length; i++) {
        deca[i].classList.remove('turquoise');
    }
    deca[4].classList.add('turquoise');

    let senseiData;
    axios.get('http://localhost:3000/training_plan', {
        params: {
            senseiId: 4,
        }
    }).then((res) => {
        senseiData = res.data;
        let rightDiv = document.getElementById('right-div');
        rightDiv.style.overflowY = 'scroll';
        rightDiv.style.height = '660px';
        rightDiv.style.width = '470px';
        rightDiv.innerHTML = `${senseiData.tp_history}`;
    });
}

function aikidoTechniques() {
    gsap.fromTo("#right-div", { x: 500 }, { duration: 1, x: 0, ease: 'back' });

    let tpDiv = document.getElementById('left-div');
    let deca = tpDiv.children;

    for (let i = 1; i < deca.length; i++) {
        deca[i].classList.remove('turquoise');
    }
    deca[5].classList.add('turquoise');

    let senseiData;
    axios.get('http://localhost:3000/training_plan', {
        params: {
            senseiId: 4,
        }
    }).then((res) => {
        senseiData = res.data;
        let rightDiv = document.getElementById('right-div');
        rightDiv.style.overflowY = 'scroll';
        rightDiv.style.height = '660px';
        rightDiv.style.width = '470px';
        rightDiv.innerHTML = `${senseiData.tp_techniques}`;
    });
}

function aikidoSkills() {
    gsap.fromTo("#right-div", { x: 500 }, { duration: 1, x: 0, ease: 'back' });

    let tpDiv = document.getElementById('left-div');
    let deca = tpDiv.children;

    for (let i = 1; i < deca.length; i++) {
        deca[i].classList.remove('turquoise');
    }
    deca[6].classList.add('turquoise');

    let senseiData;
    axios.get('http://localhost:3000/training_plan', {
        params: {
            senseiId: 4,
        }
    }).then((res) => {
        senseiData = res.data;
        let rightDiv = document.getElementById('right-div');
        rightDiv.style.overflowY = 'scroll';
        rightDiv.style.height = '660px';
        rightDiv.style.width = '470px';
        rightDiv.innerHTML = `${senseiData.tp_skills}`;
    });
}

function aikidoGallery() {
    gsap.fromTo("#right-div", { x: 500 }, { duration: 1, x: 0, ease: 'back' });

    let tpDiv = document.getElementById('left-div');
    let deca = tpDiv.children;

    for (let i = 1; i < deca.length; i++) {
        deca[i].classList.remove('turquoise');
    }
    deca[7].classList.add('turquoise');

    let senseiData;
    axios.get('http://localhost:3000/training_plan', {
        params: {
            senseiId: 4,
        }
    }).then((res) => {
        senseiData = res.data;
        let rightDiv = document.getElementById('right-div');
        rightDiv.style.overflowY = 'scroll';
        rightDiv.style.height = '660px';
        rightDiv.style.width = '470px';
        rightDiv.innerHTML = `${senseiData.tp_gallery}`;
    });
}
















