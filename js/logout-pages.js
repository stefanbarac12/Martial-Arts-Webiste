//Funkcija koja prikazuje logout Homepage
function prikaziHomelogout() {
    korisnik = false;
    gsapLeftAndRightDiv();

    let rightDiv = document.getElementById('right-div');
    rightDiv.style.width = '470px';
    rightDiv.style.height = '617px';
    rightDiv.innerHTML = `<h1 id="login-h1">Introduction to Jutsu</h1>
        <p>- Qi (or chi) is often translated as life energy, referring to energy circulating through the body; though a
        more general definition is universal energy, including heat, light, and electromagnetic energy and
        definitions often involve breath, air, gas, or the relationship between matter, energy, and spirit.</p>
        <p>- Qigong comprises a diverse set of practices that coordinate body (調身), breath (調息), and mind (調心) based
        on Chinese philosophy.[27][28] Practices include moving and still meditation, massage, chanting, sound
        meditation, and non-contact treatments, performed in a broad array of body postures.</p>
        <p>- Qigong is commonly classified into two foundational categories: 1. dynamic or active qigong (dong gong),
        with slow flowing movement; and 2. meditative or passive qigong (jing gong), with still positions and
        inner movement of the breath. From a therapeutic perspective, qigong can be classified into two systems:
        1. internal qigong, which focuses on self-care and self-cultivation, and; 2. external qigong, which
        involves treatment by a therapist who directs or transmits qi.</p>
        <p>- Martial Arts forms are actually the most rudimentary part of this process. The highest level of ability is
        achieved when your body is in harmony and your mind can control your Qi. If either component is lacking, you
        can learn 10,000 forms, and still perform mediocre Kung Fu.</p>`;

    //Svaki page ima svoj quote i menja se kad se klikne
    let quote = document.getElementById('quote');
    quote.innerHTML = `"I fear not the man who has practiced 10,000 kicks once,<br>
        but I fear the man who had practiced one kick 10,000 times."`;


    let leftDiv = document.getElementById('left-div');
    leftDiv.innerHTML = '';
    leftDiv.style.width = '260px';
    leftDiv.style.height = '475px';
    // leftDiv.style.marginTop = '0px';

    let h1 = document.createElement('h1');
    h1.innerHTML = '- LOGIN -';
    h1.id = 'login-h1';

    let nrcw = document.createElement('p');
    nrcw.innerHTML = 'Hey, you can also continiue with:';
    nrcw.style.textAlign = 'center';

    let socialMediaDiv = document.createElement('div');
    socialMediaDiv.id = 'social-media';

    let facebookIcon = document.createElement('i');
    facebookIcon.classList = 'fab fa-facebook-square';

    let googleIcon = document.createElement('i');
    googleIcon.classList = 'fab fa-google'

    let twitterIcon = document.createElement('i');
    twitterIcon.classList = 'fas fa-envelope';

    let textBox = document.createElement('div');
    textBox.classList = 'text-box';

    let inputUser = document.createElement('input');
    inputUser.classList = 'input';
    inputUser.placeholder = 'Username';
    inputUser.id = 'user';

    let warningDiv = document.createElement('div');
    warningDiv.id = 'warning';

    let ninjaIcon = document.createElement('i');
    ninjaIcon.classList = 'fas fa-user-ninja';
    ninjaIcon.id = 'login-ninja-icon';

    let textBox2 = document.createElement('div');
    textBox2.classList = 'text-box';

    let inputPass = document.createElement('input');
    inputPass.id = 'password';
    inputPass.type = 'password';
    inputPass.classList = 'input';
    inputPass.placeholder = 'Password';

    let lockIcon = document.createElement('i');
    lockIcon.classList = 'fas fa-lock';
    lockIcon.id = 'login-lock-icon';

    let btnLogin = document.createElement('button');
    btnLogin.innerHTML = 'LOGIN';
    btnLogin.id = 'btn-login';
    btnLogin.onclick = () => {
        login();
    }

    let btnSingup = document.createElement('p');
    btnSingup.innerHTML = 'Not registered? <a onclick="singup()" href="#">Create an account</a>';

    btnSingup.onclick = () => {
        singup();
    }

    let fypText = document.createElement('p');
    fypText.innerHTML = `Forgot your password?<a href="#"> Click here!</a>`;
    fypText.style.fontSize = '15px';

    leftDiv.appendChild(h1);
    leftDiv.appendChild(nrcw);
    leftDiv.appendChild(socialMediaDiv);
    socialMediaDiv.appendChild(facebookIcon);
    socialMediaDiv.appendChild(googleIcon);
    socialMediaDiv.appendChild(twitterIcon);
    leftDiv.appendChild(textBox);
    textBox.appendChild(ninjaIcon);
    textBox.appendChild(inputUser);

    leftDiv.appendChild(textBox2);
    textBox2.appendChild(lockIcon);
    textBox2.appendChild(inputPass);
    leftDiv.appendChild(fypText);
    leftDiv.appendChild(btnLogin);
    leftDiv.appendChild(btnSingup);
    document.body.appendChild(warningDiv);
}

function prikaziAboutUs() {
    gsapLeftAndRightDiv();

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

    let nav = document.getElementById('nav-ul');
    let deca = nav.children;

    for (let i = 1; i < deca.length; i++) {
        deca[i].firstChild.classList.remove('current');
    }
    deca[2].firstChild.classList.add('current');


    leftDiv = document.getElementById('left-div');
    leftDiv.innerHTML = '';

    let rightDiv = document.getElementById('right-div');
    rightDiv.innerHTML = '';

    leftDiv.innerHTML = `<h1 id="login-h1">About us</h1>
                <h4>Who are we?</h4>
                <p>- We are a group of youngsters who share the same passion of martial arts.</p>
                <h4>How did we start?</h4>
                <p>- At the beginning, all we had was the passion for martial arts and faith to make something out of it. We started by writing articles based on our own  experiences in martial arts.</p>
                <h4>What do we want to inspire?</h4>
                <p>- We  believe bullying is a real problem in schools. We also believe that every kid has the right to learn how to defend himself or herself against bullies.</p>
                <h4>Can I join the team?</h4>
                <p>- Yes you can! We would love to welcome new members to our team, you only have to be passionate about martial arts.</p>`;
    leftDiv.style.marginTop = '30px';
    leftDiv.style.width = '350px';
    leftDiv.style.height = '580px';

    rightDiv.style.width = '380px';
    rightDiv.style.height = '625px';

    rightDiv.innerHTML = `<h1 id="login-h1">Contact us today</h1>
                <p>- Thank you for your interest in advertising on Jutsu.com, we appreciate it very much.</p>
                <p>-Our friendly staff are ready to answer any questions and assist with your enquiry.</p>
                <p style="margin-bottom: 30px;" >- We will also use this form to assess your training plan. Please complete the form below in its entirety.</p>
                <h4 style="text-align: center;">Have questions? We'd love to hear from you!</h4>
                <input type="text" class="input" placeholder="Name" style="width: 45%; margin-right: 14px;">
                <input type="text" class="input" placeholder="Lastname" style="width: 45%;">
                <input type="text" class="input" placeholder="Email" style="width: 45%; margin-right: 14px;">
                <input type="text" class="input" placeholder="Phone" style="width: 45%;">
                <textarea class="input" style="height: 50px; padding-top: 30px;">Send us a message</textarea>
                <button id="send-btn">- SEND -</button>`;

    let quote = document.getElementById('quote');
    quote.innerHTML = `“In real life, strategy is actually very straightforward.
    <br> You pick a general direction and implement like hell.”`;
}

function prikaziBlog() {
    gsapLeftAndRightDiv();

    let leftDiv = document.getElementById('left-div');
    leftDiv.innerHTML = '';
    leftDiv.style.width = '410px';
    leftDiv.style.height = '610px';
    leftDiv.style.overflowY = 'scroll';
    leftDiv.style.marginTop = '30px';

    let rightDiv = document.getElementById('right-div');
    rightDiv.innerHTML = '';
    rightDiv.style.overflowY = 'scroll';
    rightDiv.style.height = '660px';
    rightDiv.innerHTML = `<h1 id="login-h1">How To Train Kung Fu Like A Shaolin Monk</h1>
    <img src="images/Train-Kung-Fu-Like-a-shaolin-monk.png" alt="">
    <p>- Shaolin Kung Fu cuts across all borders as one of the most respected and most powerful styles of martial arts. It is widely known for promoting extraordinary skills and practices, through its tasking, body changing traditional exercises.</p>
    <p>- So how can you train shaolin Kung Fu like a true monk ? We’ll take you through it step by step.</p>
    <p>- The first process is the training. Learning shaolin kung fu like the monks is not an easy task, it goes beyond practicing punches, kicking, and blocks. It is a true test of mind and body, where physical exercises influence your mental growth and where your mental growth influences your physical exercises.</p>
    <h1 id="login-h1">The schedule Training goes like this:</h1>
    <ul>
    <li>5:00 am: Wake up from your bed.</li>
    <li>5:15 – 5:30: Meditation and Tai Chi.</li>
    <li>5:35 – 6:30: Train fundamental Kung fu drills.</li>
    <li>6:40 – 7:40: Morning Buddhist lesson.</li>
    <li> 7:45:- 8:30: Breakfast.</li>
    <li>  9:00 – 11:30: Temple chores and Buddhist class attending for young and elder monks.</li>
    <li>11:30 – 12:30: Lunch.</li>
    <li>12:40 – 14:00: Noon/Short Nap</li>
    <li>14:00 – 17:00: Kung Fu practice, combat skills and martial exercises.</li>
    <li>17:10 – 18:40: Evening Buddhist classes.</li>
    <li>18:50 – 19:30: Supper.</li>
    <li>21:00 – 23:00: Free reading, basic kung fu drills.</li>
    <li>23:10: Sleeping time</li>
    </ul>
     <p>- Isn’t it easy? I’m guessing you’re really eager to get into training? Cool, then let’s get you to know the stance, before you get kicking and punching.</p>
     <h1 id="login-h1">Stance</h1>
     <p>- One basic concept all beginners learn is the stance. Your stance is everything, it is the very foundation all kung fu moves are built upon, be it blocking or kicking. After the stance, we move on to familiarize ourselves with the kicks, blows, strikes and blocks.</p>
     <h1 id="login-h1">Horse Stance</h1>
     <p>This stance is where all beginners start from. To go into this position, you have to set your feet wider than your shoulder width, your toes are pointed forwards, then you squat. Your knees must be bent and it should be slightly higher than 90 degrees. This stance is to test your mental fortitude. You may be asked to hold the position for an hour before any formal training by the monks, it isn’t torture, well kinda, but it is done to test if you really have the mental fortitude for the training and practice of Kung fu. It is also used to train the leg to have long stamina.</p>
     <h1 id="login-h1">Cat Stance</h1>
     <p>- This stance is done by leaning on your back leg with the knee bent, then you bring one hand to your chest and the other hand above your head with the arm straight.</p>
     <h1 id="login-h1">Crane Stance</h1>
     <p>- This stance is done by standing on one leg with the other leg held in the air with the knee bent. Its emphasis is on balancing.</p>
     <h1 id="login-h1">Twist Stance</h1>
     <p>- This position is a very complex one, as you have to cross one leg over the other and squat.Now that we have a basic understanding of the stances of shaolin kung fu, let’s go into the conditioning.</p>
     <h1 id="login-h1">Conditioning</h1>
     <p>- “The fist is the source of all arts and the leg is the base, the root of the fist” Hence, shaolin monks go through thirty percent of fist training and seventy percent of leg training. The shaolin monks run up and down the ancient stone stairways of the temple on all fours every morning. Situps and knuckle push ups. Several hours are spent on practice to keep the body in excellent and prime condition.</p>`;

    let blogH1 = document.createElement('h1');
    blogH1.id = 'login-h1';
    blogH1.innerHTML = 'Welcome to Jutsu Blog';

    let blogDiv = document.createElement('div');
    blogDiv.id = 'blog-div';

    let blogContent1 = document.createElement('div');
    blogContent1.className = 'blog-content';
    blogContent1.innerHTML = `<h2>Top 14 Lesser Known Facts About Ip Man</h2>
                    <div>Ip man is a legendary figure in the world of martial arts. He is revered for his contribution to the martial art of Wing Chun and is popularly known for…</div>
                    <div class="read-more-btn" onclick="blogContent1()">Continiue reading&nbsp;&nbsp;<i class="fas fa-hand-point-right"></i></div>`;

    let blogContent2 = document.createElement('div');
    blogContent2.className = 'blog-content';
    blogContent2.innerHTML = `<h2>5 Best Calisthenic Exercises For Martial Arts</h2>
                    <div>Most martial arts schools don’t train the upper body as it should be trained. Most of them rely on exercises such as push-ups to build the upper body strength...</div>
                    <div class="read-more-btn" onclick="blogContent2()">Continiue reading&nbsp;&nbsp;<i class="fas fa-hand-point-right"></i></div>`;

    let blogContent3 = document.createElement('div');
    blogContent3.className = 'blog-content';
    blogContent3.innerHTML = `<h2>How To Train Kung Fu Like A Shaolin Monk</h2>
                    <div>The shaolin monks hold five animals in high regard and as such their technique has closely been studied and adapted into combat styles. They are the snake, crane, tiger, leopard and Dragon...</div>
                    <div class="read-more-btn" onclick="blogContent3()">Continiue reading&nbsp;&nbsp;<i class="fas fa-hand-point-right"></i></div>`;

    let blogContent4 = document.createElement('div');
    blogContent4.className = 'blog-content';
    blogContent4.innerHTML = `<h2>How to Fight like Conor McGregor – 10 MMA Strategies</h2>
                    <div>The “Notorious” Conor McGregor is undeniably one of the best fighters on the planet. His unorthodox, relaxed style has fascinated fans for years and has proven successful in some of…</div>
                    <div class="read-more-btn" onclick="blogContent4()">Continiue reading&nbsp;&nbsp;<i class="fas fa-hand-point-right"></i></div>`;

    let blogContent5 = document.createElement('div');
    blogContent5.className = 'blog-content';
    blogContent5.innerHTML = `<h2>How to Kick Faster? Improve Kicking Speed</h2>
                    <div>This blog is about helping you to learn how to kick faster with the help of several drills and techniques which will make your kick venomous…</div>
                    <div class="read-more-btn" onclick="blogContent5()">Continiue reading&nbsp;&nbsp;<i class="fas fa-hand-point-right"></i></div>`;

    let quote = document.getElementById('quote');
    quote.innerHTML = `"Good judgement is the result of experience,
    <br> and experience the result of bad judgement."`;

    let goBackBtn = document.createElement('span');
    goBackBtn.innerHTML = 'Go Back';
    goBackBtn.onclick = () => {
        prikaziHomelogin();
    }
    goBackBtn.classList = 'btn-login';
    goBackBtn.style.marginLeft = '120px';

    leftDiv.appendChild(blogH1);
    leftDiv.appendChild(blogDiv);
    blogDiv.appendChild(blogContent1);
    blogDiv.appendChild(blogContent2);
    blogDiv.appendChild(blogContent3);
    blogDiv.appendChild(blogContent4);
    blogDiv.appendChild(blogContent5);
    leftDiv.appendChild(goBackBtn);
}

//Funkcija koja prikazuje logout Shaolin Wushu page
function prikaziShaolinlogout() {
    gsapLeftAndRightDiv();

    let leftDiv = document.getElementById('left-div');
    leftDiv.style.width = '350px';
    leftDiv.style.marginTop = '50px';
    leftDiv.style.height = '540px';

    //Svaki page ima svoj quote i menja se kad se klikne
    let quote = document.getElementById('quote');
    quote.innerHTML = `"Fast as the wind, quiet as a forest, <br>
                    aggressive as fire and immovable as a mountain."`;

    leftDiv.innerHTML = `<h1 id="login-h1">Shifu Shi Yan Jun'na</h1>
    <p>- Shifu Shi Yanjun is a 34th generation Shaolin warrior monk,
    a disciple of Venerable Abbot Shi Yongxin,and a 17th generation disciple of Meihua Quan(Level 8 Duanwei).</p>
    <p>- Shifu Shi Yanjun takes the Yin-Yang approach to training his students. He believes that having a balanced
    mind and body leads to great success when training in Kung Fu.</p>
    <p>- “The purpose of Kung Fu isn’t to deplete your body of its power. Training in Kung Fu is meant to develop your
    internal and external Qi. If you wish to preserve your body’s energy and strength for years to come, you must train intelligently.” – Shifu Shi Yanjun</p><p>Shifu Yanjun adapts his training style to your age, body, health, and the seasons. At the Shaolin Temple,
    your training isn’t limited to one specific style of Kung Fu. You’ll learn a variety of styles to help you become powerful from the inside – out.</p>`;

    let rightDiv = document.getElementById('right-div');
    rightDiv.innerHTML = '';
    rightDiv.style.width = '470px';
    rightDiv.style.padding = '15px';
    rightDiv.style.paddingRight = '20px';
    rightDiv.style.height = '600px';

    let picture = document.createElement('img');
    picture.src = 'images/shaolin_master.jpg';
    picture.alt = 'Master Shifu Shi Yan Jun';
    picture.id = 'picture';
    picture.style.marginBottom = '20px'
    picture.style.border = '3px ridge rgba(0,212,255,0.4)';

    let video = document.createElement('iframe');
    video.src = 'https://www.youtube.com/embed/as-cAyqt_sQ';
    video.allowFullscreen = true;
    video.style.border = '3px ridge rgba(0,212,255,0.4)';

    rightDiv.appendChild(picture);
    rightDiv.appendChild(video);
}

//Funkcija koja prikazuje logout Karate page
function priakziKaratelogout() {
    gsapLeftAndRightDiv();

    let leftDiv = document.getElementById('left-div');
    leftDiv.style.width = '350px';
    leftDiv.style.marginTop = '50px';
    leftDiv.style.height = '540px';

    //Svaki page ima svoj quote i menja se kad se klikne
    let quote = document.getElementById('quote');
    quote.innerHTML = `"You must remember that physical training is just<br>
                    the gateway to mastery of the mind."`;

    leftDiv.innerHTML = `<h1 id="login-h1">10th dan Morio Higaonna</h1>
                <p>- Was, (born December 25, 1938) is a prominent Okinawan karate practitioner who is the founderand
                former Chief Instructor of the International Okinawan Goju-ryu Karate-do Federation (IOGKF).</p>
                <p>- He is a holder of the highest rank in Goju-ryu karate, 10th dan.Higaonna has written several books on
                Goju-ryu karate, including Traditional Karate-do: Okinawa Goju Ryu and The history of Karate: Okinawan Goju Ryu (2001).</p>
                <p>- Martial arts scholar Donn Draeger (1922–1982) reportedly once described him as "the most dangerous man in Japan in a real fight</p>
                <p>- Higaonna was awarded black belt status by Miyazato in 1957, In 1960, he moved to Tokyo to study at Takushoku
                University. On December 30 of that year, Higaonna was promoted to the rank of 3rd dan at the first all-style dan grading of the Okinawa Karate-do Renmei.</p>`;

    let rightDiv = document.getElementById('right-div');
    rightDiv.innerHTML = '';
    rightDiv.style.padding = '15px';
    rightDiv.style.width = '470px';
    rightDiv.style.paddingRight = '20px';

    let picture = document.createElement('img');
    picture.src = 'images/morio.jpg';
    picture.alt = 'Master Morio Higaonna';
    picture.id = 'picture';
    picture.style.marginBottom = '20px'
    picture.style.border = '3px ridge rgba(0,212,255,0.4)';

    let video = document.createElement('iframe');
    video.src = 'https://www.youtube.com/embed/PWvIQ3v_UI0';
    video.allowFullscreen = true;
    video.style.border = '3px ridge rgba(0,212,255,0.4)';

    rightDiv.appendChild(picture);
    rightDiv.appendChild(video);
}

//Funkcija koja prikazuje logout Jeet Kune Doo page
function prikaziJeetKuneDologout() {
    gsapLeftAndRightDiv();

    let leftDiv = document.getElementById('left-div');
    leftDiv.style.width = '350px';
    leftDiv.style.height = '520px';

    //Svaki page ima svoj quote i menja se kad se klikne
    let quote = document.getElementById('quote');
    quote.innerHTML = `"Empty your mind, be formless, shapeless, like water.<br>
                    Now, water can flow or it can crash. Be water, my friend."`;

    leftDiv.innerHTML = `<h1 id="login-h1">Siju Bruce Lee</h1>
                <p>- Lee Jun-fan (November 27, 1940 – July 20, 1973), known professionally as Bruce Lee
                , was a Hong Kong American actor, director, martial artist, martial arts instructor and philosopher.</p>
                <p>- He was the founder of Jeet Kune Do, a hybrid martial arts philosophy drawing from different combat
                disciplines that is often credited with paving the way for modern mixed martial arts (MMA).</p><p>- Lee is
                considered by commentators, critics, media, and other martial artists to be the most influential martial
                artist of all time and a pop culture icon of the 20th century, who bridged the gap between East and West.</p>
                <p>- Lee moved to the United States at the age of 18 to receive his higher education at the University of
                Washington in Seattle, and it was during this time that he began teaching martial arts to various of people.</p>`;

    let rightDiv = document.getElementById('right-div');
    rightDiv.innerHTML = '';
    rightDiv.style.padding = '15px';
    rightDiv.style.paddingRight = '20px';
    rightDiv.style.width = '470px';

    let picture = document.createElement('img');
    picture.src = 'images/bruce.jpg';
    picture.alt = 'Master Bruce Lee';
    picture.id = 'picture';
    picture.style.marginBottom = '20px'
    picture.style.border = '3px ridge rgba(0,212,255,0.4)';

    let video = document.createElement('iframe');
    video.src = 'https://www.youtube.com/embed/TKRQBl8cap4';
    video.allowFullscreen = true;
    video.style.border = '3px ridge rgba(0,212,255,0.4)';

    rightDiv.appendChild(picture);
    rightDiv.appendChild(video);
}

//Funkcija koja prikazuje logout Aikido page
function prikaziAikidologout() {
    gsapLeftAndRightDiv();

    let leftDiv = document.getElementById('left-div');
    leftDiv.style.width = '350px';
    leftDiv.style.marginTop = '50px';
    leftDiv.style.height = '540px';

    //Svaki page ima svoj quote i menja se kad se klikne
    let quote = document.getElementById('quote');
    quote.innerHTML = `"Master the divine techniques of the Art of Peace,<br>
                    And no enemy will dare to challenge you."`;

    leftDiv.innerHTML = `<h1 id="login-h1">Ōsensei Morihei Ueshiba</h1>
                <p>- Morihei Ueshiba (Ueshiba Morihei, December 14, 1883 – April 26, 1969) was a Japanese martial
                artist and founder of the martial art of aikido. He is often referred to as "the founder" Kaiso or
                Ōsensei, "Great Teacher".<p/><p>- Ueshiba studied a number of martial arts in his youth, and served in
                the Japanese Army during the Russo-Japanese War.On leaving Hokkaido in 1919, Ueshiba joined the Ōmoto-kyō movement, a Shinto sect, in
                Ayabe, where he served as a martial arts instructor and opened his first dojo.</p>
                <p>- Ueshiba moved to Tokyo in 1926, where he set up the Aikikai Hombu Dojo. By now he was comparatively
                famous in martial arts circles, and taught at this dojo and others around Japan, including in several
                military academies.</p><p>- From the end of the war until the 1960s, he worked to promote aikido throughout Japan and abroad. He died from liver cancer in 1969.</p>`;

    let rightDiv = document.getElementById('right-div');
    rightDiv.innerHTML = '';
    rightDiv.style.padding = '15px';
    rightDiv.style.paddingRight = '20px';
    rightDiv.style.width = '470px';

    let picture = document.createElement('img');
    picture.src = 'images/morihei-ueshiba.jpg';
    picture.alt = 'Master Morihei Ueshiba';
    picture.id = 'picture';
    picture.style.marginBottom = '20px'
    picture.style.border = '3px ridge rgba(0,212,255,0.4)';

    let video = document.createElement('iframe');
    video.src = 'https://www.youtube.com/embed/joc7WhUnQHk';
    video.allowFullscreen = true;
    video.style.border = '3px ridge rgba(0,212,255,0.4)';

    rightDiv.appendChild(picture);
    rightDiv.appendChild(video);
}

function blogContent1() {
    gsap.fromTo("#right-div", { x: 500 }, { duration: 1, x: 0, ease: 'back' });
    let rightDiv = document.getElementById('right-div');

    rightDiv.style.overflowY = 'scroll';
    rightDiv.style.height = '660px';
    rightDiv.innerHTML = `<h1 id="login-h1">Top 14 Lesser Known Facts About Ip Man</h1>
    <p>- Ip man is a legendary figure in the world of martial arts. He is revered for his contribution to the martial art of Wing Chun and is popularly known for being Bruce Lee’s teacher.</p>
    <p>- There’s much to his own life than just the Bruce Lee relation. Many casuals and martial arts hobbyists try their best to find materials on him.</p>
    <img src="images/ipman_blog_img1.jpg" alt="">
    <p>- I conducted my own research and reached to a conclusion that there are two sets of information – First is concrete data whose account match from every source and second is a debatable data. Thus, I accepted certain data and rejected materials based upon my own interpretation.</p>
    <p>- Without further ado, let’s get going with this Q&A style blog where I answer internet’s burning questions about Grandmaster Ip man.</p>
    <h2>1. When was Ip Man born?</h2>
    <p>- Ip Man or Yip Man was born on 1st October 1893.</p>
    <h2>2. When did Ip Man start learning Wing Chun??</h2>
    <p>- Contrary to the popular myth, Ip Man started learning Wing Chun when he was eleven years old. Many people believe it was 6 or 8 but I can state that it was 11, as clarified by Ip Man himself in an interview.</p>
    <h2>3. Who was Ip Man’s teacher?</h2>
    <p>- His teacher was Chan Wah-Shun who died three years after Ip Man joined. Thus, one can argue that Ip Man earned his crucial skills and techniques from his sifu’s second eldest disciple called Ng Chung-Sok rather than Chan Wah-Shun.</p>
    <img src="images/ipman_blog_img2.jpg" alt="">
    <h2>4. Did Ip Man quit Wing Chun after moving away to Hong Kong?</h2>
    <p>- Ip Man never stopped practicing Wing Chun. He returned to Foshan when he was 24 and kept refining his Wing Chun skills and kept passing it to others. After this return, Yuen Kay Shan, who was from a different lineage of Wing Chun trained Ip Man this time around.</p>
    <h2>5. Why is Ip Man known as the last Kung Fu son?</h2>
    <p>- Ip man trained under Wah Kung who was already 70 at that time. He was Wah Kung’s last student. According to Chinese customs, the youngest practitioner is the most beloved one and Ip Man was Wah Kung’s last Kung Fu son.</p>
    <h2>6. Was Ip Man really Bruce Lee’s teacher?</h2>
    <p>- Yes, Bruce Lee trained under Ip man for a period of two years. However, as per Ipman, Bruce wasn’t the most skillful Wing Chun practitioner. And that can be understood as Bruce wasn’t a senior student or ranking master in Wing Chun.</p>
    <img src="images/ipman_blog_img3.jpg" alt="">
    <h2>7. Was Ip Man better than Bruce Lee?</h2>
    <p>- Here’s where our opinions might differ. According to me, Yip Man was a Kung-Fu master whereas Bruce Lee was a movie star who happened to be at the right place at the right time.</p>
    <p>- Ip Man dedicated his entire life studying and teaching Wing Chun whereas Bruce Lee was an actor with only a few years of formal training in martial arts.</p>
    <h2>8. Was Ip Man a great fighter in real life?</h2>
    <p>- As per my research, he was more of a teacher than a fighter. Sure, he’s a legendary figure known as the ultimate teacher who trained the likes of Bruce Lee. However, Yip man did lose a fight in his career. </p>
    <p>- There’s also a claim that Yip man chose his opponents carefully and most of the practitioners he defeated were actually amateurs. One thing I do want to share is that he did take down a boxer called Kam Shan Mao with a single punch.</p>`;
}

function blogContent2() {
    gsap.fromTo("#right-div", { x: 500 }, { duration: 1, x: 0, ease: 'back' });
    let rightDiv = document.getElementById('right-div');

    rightDiv.style.overflowY = 'scroll';
    rightDiv.style.height = '660px';
    rightDiv.innerHTML = `<h1 id="login-h1">5 Best Calisthenic Exercises For Martial Arts</h1>
    <p>- Most martial arts schools don’t train the upper body as it should be trained. Most of them rely on exercises such as push-ups to build the upper body strength. That’s the reason why most martial artists though they have powerful legs cannot generate an impressive amount of power with their punches. And that can be accredited to poor upper body strength.</p>
    <p>- Today, we’re going to list down the 5 Best Calisthenic Exercises For Martial Arts which will help you to strengthen your upper body by working your shoulders.</p>
    <p>- But before we begin, I advise you to start with a warm-up. Since these exercises are high-intensive exercises, it’s important to get your body ready for it. Most of the injuries in the upper body happen in the scapula area and the rotator cuff. Additionally, you should also do hip rotation exercises as part of your regular warm routine before you start up with calisthenic exercises for martial arts.</p>
    <p>- Start with working on your shoulders – a body part extremely neglected in martial arts. For that reason, we’re going to start with a handstand pushup.</p>
    <h2>Handstand pushup</h2>
    <p>- To perform a handstand pushup, find someone or something to support your leg. As in the image below, you can see I’m taking the support of the push-up rod.</p>
    <img src="images/Handstand-pushup.png" alt="">
    <p>- When doing the handstand pushup, make sure to keep your glutes tight. This will support your lower back and prevent injuries. When performing the handstand, stay in a straight line and don’t arch your back. If you can’t go deep enough with your push, just try to go as far as you can.</p>
    <h2>Pull-ups</h2>
    <p>-The bread and butter of back training are pull-ups. They are one of the greatest compound exercises. They work the lats, the upper back, biceps, forearms, and even the abs.</p>
    <img src="images/pull-ups.png" alt="">
    <p>- Now, if you feel that bodyweight pull-ups are easy for you, you can add weights and try doing weighted pull-ups or weighted chin-ups. As you can see in the image below, I’m adding plates to add more resistance to my chin-ups.</p>
    <h2>Dips</h2>
    <p>- This is a great exercise for the upper body. In my opinion, a trained martial artist should be able to do at least 20 dips. If you can’t pull off 20 dips then there’s something wrong with your conditioning. Also, martial arts rely heavily on body coordination, so you should be in your full capability to manage your weight and play with it.</p>
    <img src="images/dips.png" alt="">
    <h2>Muscle-up</h2>
    <p>- Muscle-up according to me is one of the greatest exercises for the whole body. It combines pulling, pushing, core strength and explosiveness. If you are conditioned enough, you have to master this exercise. It is great for body coordination. Furthermore, this kind of strength will translate well into martial arts. In my opinion, an advanced martial artist should at least be able to pull off one muscle-up.</p>
    <img src="images/muscle-up.png" alt="">
    <h2>L-Sit</h2>
    <p>- L-Sit should be done with a 10-second hold. You can see the actual L-sit in the image below. However, if you have a hard time holding the L-Sit, you can do a variation of it in the image shown below.</p>
    <img src="images/L-Sit.png" alt="">
    <h2>Conclusion</h2>
    <p>- Once you’re done with these exercises, you’re done with the upper body workout. These 5 Calisthenic exercises are great to activate your entire upper body and provide you an additional edge over your fellow martial artists.</p>`;
}

function blogContent3() {
    gsap.fromTo("#right-div", { x: 500 }, { duration: 1, x: 0, ease: 'back' });
    let rightDiv = document.getElementById('right-div');

    rightDiv.style.overflowY = 'scroll';
    rightDiv.style.height = '660px';
    rightDiv.innerHTML = `<h1 id="login-h1">How To Train Kung Fu Like A Shaolin Monk</h1>
    <img src="images/Train-Kung-Fu-Like-a-shaolin-monk.png" alt="">
    <p>- Shaolin Kung Fu cuts across all borders as one of the most respected and most powerful styles of martial arts. It is widely known for promoting extraordinary skills and practices, through its tasking, body changing traditional exercises.</p>
    <p>- So how can you train shaolin Kung Fu like a true monk ? We’ll take you through it step by step.</p>
    <p>- The first process is the training. Learning shaolin kung fu like the monks is not an easy task, it goes beyond practicing punches, kicking, and blocks. It is a true test of mind and body, where physical exercises influence your mental growth and where your mental growth influences your physical exercises.</p>
    <h1 id="login-h1">The schedule Training goes like this:</h1>
    <ul>
    <li>5:00 am: Wake up from your bed.</li>
    <li>5:15 – 5:30: Meditation and Tai Chi.</li>
    <li>5:35 – 6:30: Train fundamental Kung fu drills.</li>
    <li>6:40 – 7:40: Morning Buddhist lesson.</li>
    <li> 7:45:- 8:30: Breakfast.</li>
    <li>  9:00 – 11:30: Temple chores and Buddhist class attending for young and elder monks.</li>
    <li>11:30 – 12:30: Lunch.</li>
    <li>12:40 – 14:00: Noon/Short Nap</li>
    <li>14:00 – 17:00: Kung Fu practice, combat skills and martial exercises.</li>
    <li>17:10 – 18:40: Evening Buddhist classes.</li>
    <li>18:50 – 19:30: Supper.</li>
    <li>21:00 – 23:00: Free reading, basic kung fu drills.</li>
    <li>23:10: Sleeping time</li>
    </ul>
     <p>- Isn’t it easy? I’m guessing you’re really eager to get into training? Cool, then let’s get you to know the stance, before you get kicking and punching.</p>
     <h1 id="login-h1">Stance</h1>
     <p>- One basic concept all beginners learn is the stance. Your stance is everything, it is the very foundation all kung fu moves are built upon, be it blocking or kicking. After the stance, we move on to familiarize ourselves with the kicks, blows, strikes and blocks.</p>
     <h1 id="login-h1">Horse Stance</h1>
     <p>This stance is where all beginners start from. To go into this position, you have to set your feet wider than your shoulder width, your toes are pointed forwards, then you squat. Your knees must be bent and it should be slightly higher than 90 degrees. This stance is to test your mental fortitude. You may be asked to hold the position for an hour before any formal training by the monks, it isn’t torture, well kinda, but it is done to test if you really have the mental fortitude for the training and practice of Kung fu. It is also used to train the leg to have long stamina.</p>
     <h1 id="login-h1">Cat Stance</h1>
     <p>- This stance is done by leaning on your back leg with the knee bent, then you bring one hand to your chest and the other hand above your head with the arm straight.</p>
     <h1 id="login-h1">Crane Stance</h1>
     <p>- This stance is done by standing on one leg with the other leg held in the air with the knee bent. Its emphasis is on balancing.</p>
     <h1 id="login-h1">Twist Stance</h1>
     <p>- This position is a very complex one, as you have to cross one leg over the other and squat.Now that we have a basic understanding of the stances of shaolin kung fu, let’s go into the conditioning.</p>
     <h1 id="login-h1">Conditioning</h1>
     <p>- “The fist is the source of all arts and the leg is the base, the root of the fist” Hence, shaolin monks go through thirty percent of fist training and seventy percent of leg training. The shaolin monks run up and down the ancient stone stairways of the temple on all fours every morning. Situps and knuckle push ups. Several hours are spent on practice to keep the body in excellent and prime condition.</p>`;
}

function blogContent4() {
    gsap.fromTo("#right-div", { x: 500 }, { duration: 1, x: 0, ease: 'back' });
    let rightDiv = document.getElementById('right-div');

    rightDiv.style.overflowY = 'scroll';
    rightDiv.style.height = '660px';
    rightDiv.innerHTML = `<h1 id="login-h1">How to Fight like Conor McGregor – 10 MMA Strategies</h1>
    <img src="images/fight-lik-conor-mcgregor.png" alt="">
    <p>- The “Notorious” Conor McGregor is undeniably one of the best fighters on the planet. His unorthodox, relaxed style has fascinated fans for years and has proven successful in some of the biggest matchups the UFC has ever seen.</p>
    <p>- His powerful left-hand shots, straight-back stance, a multitude of effective kicks, and dominance of the Octagon make him one of the most dynamic, explosive fighters out there. Plus, his huge swagger, hilarious trash talk, and massive ego make him one of the most entertaining fighters to follow.</p>
    <p>- Like any other fighter, McGregor has his personal techniques and skillset. From bolo punches to hook kicks to balance and posture, McGregor brings a fighting toolkit like no other to the Octagon and systematically destroys almost all his competition.</p>
    <p>- If you want to fight like Conor McGregor, take a look at the techniques and skills on this list. Practice them with your sparring partner and in fights and, soon, you’ll start to fight like the one and only “Notorious” Conor McGregor.</p>
    <p>- Here’s a list of the particular techniques and skills that help set Conor McGregor apart. You should try to learn them if you want to fight like the “Notorious”:</p>
    <h1 id="login-h1">1. Vertical Stance</h1>
    <img src="images/stance.jpg" alt="">
    <p>- Compared to many other fighters, McGregor often remains vertical and balanced while fighting. You see a lot of other fighters pitch a lot of weight into their front leg, often to establish a jab. This means that, in order to stabilize that position, their torso has to exert a lot of energy.</p>
    <p>- McGregor, on the other hand, remains balanced and upright. This is much more efficient and means he conserves a lot of energy. Likewise, he doesn’t tend to bob and weave too much. Again, this helps conserve energy, though it does put you in danger of your opponent’s strikes.</p>
    <p>- So, if you want to fight like Conor McGregor, one of the first things you can do is stand up straight, try to remain balanced and vertical while you fight, and think about conserving energy. Try to minimize unnecessary movement. Over the course of a few rounds, you’ll really start to see a difference.</p>
    <h1 id="login-h1">2. Kicks to Maintain Distance</h1>
    <p>- McGregor doesn’t keep his hands up like traditional boxers. This is because he doesn’t use his hands to maintain distance. Instead of pawing someone with jabs constantly to keep distance, he uses kicks like fast roundhouses.</p>
    <p>- Using long attacks to keep his opponent outside of punching range means he doesn’t have to keep his hands up. Plus, when he needs to block a strike, all he has to do is cover up as he reacts to a strike by raising a hand to whichever side the strike is being thrown.</p>
    <p>- Since his opponent is being kept at a further distance by the kicks, he has more time to see the strike coming, meaning he has plenty of time to cover up even though he keeps his hands relatively low. If you want to fight like McGregor, try using your feet, instead of your hands, to maintain distance.</p>
    <h1 id="login-h1">3. Kicks to Maintain Pressure</h1>
    <p>- McGregor tends to fire off a lot of kicks at the start of fights. You’ll see him throw plenty of unorthodox kicks, particularly in the early rounds. This tends to scare his opponents by keeping them guessing, as well as making them keep their distance and backing up.</p>
    <p>- This allows McGregor to be the aggressor. By making his opponents back into the cage, McGregor gives himself plenty of open space to work with. Plus, the middle of the ring is to his back, so when a strike is thrown by his opponent, he has open space to back into, instead of a cage.</p>
    <p>- To fight like Conor McGregor, try to maintain that pressure by moving forward. By throwing long attacks and plenty of kicks, you should be able to keep your opponent backing up into the cage while giving you plenty of open space behind you.</p>
    <h1 id="login-h1">4. Lead Leg Side Kick</h1>
    <p>- Conor Mcgregor has used this kick successfully against Eddie Alvarez, Max Holloway, and Dennis Siver. To perform this kick like McGregor, stand in a wide stance, almost sideways to your opponent.</p>
    <p>- Shuffle and replace your lead foot with your rear foot and your lead foot becomes the striking foot. While this is a great kick to maintain distance, it can also pack decent power. Try to aim for your opponents lead leg or their gut, just under the ribcage.</p>
    <h1 id="login-h1">5. Spinning Back Kick</h1>
    <p>- McGregor loves throwing spinning back kicks. He’s used them successfully against Dustin Poirier, Dennis Siver, Diego Brandao, and Chad Mendes. You’ll definitely want to practice throwing spinning back kicks if you’re going to fight like McGregor.</p>
    <p>- To execute a spinning back kick, step forward with your lead leg, pivot, and turn to launch your rear leg into your opponent’s body. Spinning back kicks are great for maintaining distance as well as effective, punishing body shots.</p>`;
}

function blogContent5() {
    gsap.fromTo("#right-div", { x: 500 }, { duration: 1, x: 0, ease: 'back' });
    let rightDiv = document.getElementById('right-div');

    rightDiv.style.overflowY = 'scroll';
    rightDiv.style.height = '660px';
    rightDiv.innerHTML = `<h1 id="login-h1">How to Kick Faster? Improve Kicking Speed</h1>
    <img src="images/how-to-kick-faster-and-improve-kicking-speed.png" alt="">
    <p>- Kicks are a thing of beauty except they’re devastating. The sound of shattered ribs and a broken jaw as your opponent tries to hold it on together after the crunching kick that you just landed  is simply a work of art.</p>
    <p>- Lot of your kicking abilities depends upon the timing, control, power and speed. While timing, control and power are usually talked about in detail, speed doesn’t get much-needed recognition.</p>
    <p>- For a kick to be devastating, it needs to be lightning quick along with being powerful and measured. If it lacks speed, your opponent will easily predict the movements and will manage to outmanoeuvre you every single time. </p>
    <p>- Thus, this blog is about helping you to learn how to kick faster with the help of several drills and techniques which will make your kick venomous. By the end of this read, you will have the basic knowledge essential to knock someone out before they even get close to you.</p>
    <h1 id="login-h1">Different types of kicks</h1>
    <p>- First, let’s start with the different types of kicks. Usually, kicks can be broadly classified into two types: Swinging and Thrusting.</p>
    <p>- Swinging kicks involves speed which comes from the rotation of the body. In this type, the core of your body plays a vital role along with hip rotation.</p>
    <p>- Thrusting kicks largely depends upon your leg strength and core stability. In this type of kick, the emphasis is on the hips and waist and not on the rotation.</p>
    <p>- As you may have noticed, hips, waist and core are vital in both these forms of kicks. Not just that, to execute any type of effective kick, these three areas needs to function at its best.</p>
    <p>- So having learnt about the kick types, we can understand that hips, waist and core are crucial in delivering a venomous kick. The question is how do you make it quick? How do you improve your kicking speed?</p>
    <p>- There are numerous drills which can help improve your kicking speed; the primary one is stretching and flexibility. There are three muscle groups that we need to work to get faster kicks. The first one is the hamstring group followed by adductor (inside portion of your leg) and your upper legs.</p>`;
}

function showLeftDivLogout() {
    gsap.fromTo("#left-div", { x: -500, }, { duration: 1, x: 0, ease: 'back' });

    let leftDiv = document.getElementById('left-div');
    leftDiv.innerHTML = '';
    leftDiv.style.width = '260px';
    leftDiv.style.height = '475px';

    let h1 = document.createElement('h1');
    h1.innerHTML = '- LOGIN -';
    h1.id = 'login-h1';

    let nrcw = document.createElement('p');
    nrcw.innerHTML = 'Hey, you can also continiue with:';
    nrcw.style.textAlign = 'center';

    let socialMediaDiv = document.createElement('div');
    socialMediaDiv.id = 'social-media';

    let facebookIcon = document.createElement('i');
    facebookIcon.classList = 'fab fa-facebook-square';

    let googleIcon = document.createElement('i');
    googleIcon.classList = 'fab fa-google'

    let twitterIcon = document.createElement('i');
    twitterIcon.classList = 'fas fa-envelope';

    let textBox = document.createElement('div');
    textBox.classList = 'text-box';

    let inputUser = document.createElement('input');
    inputUser.classList = 'input';
    inputUser.placeholder = 'Username';
    inputUser.id = 'user';

    let warningDiv = document.createElement('div');
    warningDiv.id = 'warning';

    let ninjaIcon = document.createElement('i');
    ninjaIcon.classList = 'fas fa-user-ninja';
    ninjaIcon.id = 'login-ninja-icon';

    let textBox2 = document.createElement('div');
    textBox2.classList = 'text-box';

    let inputPass = document.createElement('input');
    inputPass.id = 'password';
    inputPass.type = 'password';
    inputPass.classList = 'input';
    inputPass.placeholder = 'Password';

    let lockIcon = document.createElement('i');
    lockIcon.classList = 'fas fa-lock';
    lockIcon.id = 'login-lock-icon';

    let btnLogin = document.createElement('button');
    btnLogin.innerHTML = 'LOGIN';
    btnLogin.id = 'btn-login';
    btnLogin.onclick = () => {
        login();
    }

    let btnSingup = document.createElement('p');
    btnSingup.innerHTML = 'Not registered? <a onclick="singup()" href="#">Create an account</a>';

    btnSingup.onclick = () => {
        singup();
    }

    let fypText = document.createElement('p');
    fypText.innerHTML = `Forgot your password?<a href="#"> Click here!</a>`;
    fypText.style.fontSize = '15px';

    leftDiv.appendChild(h1);
    leftDiv.appendChild(nrcw);
    leftDiv.appendChild(socialMediaDiv);
    socialMediaDiv.appendChild(facebookIcon);
    socialMediaDiv.appendChild(googleIcon);
    socialMediaDiv.appendChild(twitterIcon);
    leftDiv.appendChild(textBox);
    textBox.appendChild(ninjaIcon);
    textBox.appendChild(inputUser);

    leftDiv.appendChild(textBox2);
    textBox2.appendChild(lockIcon);
    textBox2.appendChild(inputPass);
    leftDiv.appendChild(fypText);
    leftDiv.appendChild(btnLogin);
    leftDiv.appendChild(btnSingup);
    document.body.appendChild(warningDiv);
}

let korisnik = false;
let userLevel;

//Prikazuje Home page kad je loginovan i kad nije
function prikaziHome() {
    let nav = document.getElementById('nav-ul');
    let deca = nav.children;

    for (let i = 1; i < deca.length; i++) {
        deca[i].firstChild.classList.remove('current');
    }
    deca[1].firstChild.classList.add('current');

    if (korisnik) {
        prikaziHomelogin();
    }
    else {
        prikaziHomelogout();
    }
}

//Prikazuje Shaolin page kad je loginovan i kad nije
function prikaziShaolin() {
    let nav = document.getElementById('nav-ul');
    let deca = nav.children;

    for (let i = 1; i < deca.length; i++) {
        deca[i].firstChild.classList.remove('current');
    }
    deca[3].firstChild.classList.add('current');

    if (korisnik) {
        prikaziShaolinlogin()
    }
    else {
        prikaziShaolinlogout()
    }
}

//Prikazuje Karate page kad je loginovan i kad nije
function prikaziKarate() {
    let nav = document.getElementById('nav-ul');
    let deca = nav.children;

    for (let i = 1; i < deca.length; i++) {
        deca[i].firstChild.classList.remove('current');
    }
    deca[4].firstChild.classList.add('current');

    if (korisnik) {
        prikaziKaratelogin()
    }
    else {
        priakziKaratelogout();
    }
}

//Prikazuje JeetKuneDoo page kad je loginovan i kad nije
function prikaziJeetKuneDo() {
    let nav = document.getElementById('nav-ul');
    let deca = nav.children;

    for (let i = 1; i < deca.length; i++) {
        deca[i].firstChild.classList.remove('current');
    }
    deca[5].firstChild.classList.add('current');

    if (korisnik) {
        prikaziJeetKuneDologin();
    }
    else {
        prikaziJeetKuneDologout();
    }
}

//Prikazuje Aikido page kad je loginovan i kad nije
function prikaziAikido() {
    let nav = document.getElementById('nav-ul');
    let deca = nav.children;

    for (let i = 1; i < deca.length; i++) {
        deca[i].firstChild.classList.remove('current');
    }
    deca[6].firstChild.classList.add('current');

    if (korisnik) {
        prikaziAikidologin();
    }
    else {
        prikaziAikidologout();
    }
}

//Finkcija koja pravi div sa Singup formom
function singup() {
    gsap.fromTo("#left-div", { x: -500, }, { duration: 1, x: 0, ease: 'back' });

    let leftDiv = document.getElementById('left-div');
    leftDiv.innerHTML = '';
    leftDiv.style.width = '280px';
    leftDiv.style.height = '550px';

    let singupH1 = document.createElement('h1');
    singupH1.innerHTML = '- SING UP -';
    singupH1.id = 'sing-up-h1';

    let pftfb = document.createElement('p');
    pftfb.innerHTML = 'Are you ready to start your journey?';
    pftfb.style.textAlign = 'center';
    pftfb.style.margin = ' 30px 0';

    let textBoxSingup = document.createElement('div');
    textBoxSingup.classList = 'text-box';

    let ninjaIcon = document.createElement('i');
    ninjaIcon.classList = 'fas fa-user-ninja';
    ninjaIcon.id = 'singup-ninja-icon';

    let singupUserName = document.createElement('input');
    singupUserName.placeholder = 'Username';
    singupUserName.classList = 'input';
    singupUserName.id = 'singup-username';
    singupUserName.onfocus = () => {
        //kad je fokusiran username input uklanja eyeiconslash sa password inputa
        eyeIconSlash.style.display = 'none';
        eyeIconSlash2.style.display = 'none';
    }

    let textBoxSingup2 = document.createElement('div');
    textBoxSingup2.classList = 'text-box';
    // textBoxSingup2.style.marginBottom = '40px';

    let emailIcon = document.createElement('i');
    emailIcon.classList = 'fas fa-envelope';
    emailIcon.id = 'singup-email-icon';

    let singupEmail = document.createElement('input');
    singupEmail.placeholder = 'Email Adress';
    singupEmail.classList = 'input';
    singupEmail.id = 'singup-email';
    singupEmail.onfocus = () => {
        //kad je fokusiran punoime input uklanja eyeiconslash sa password inputa
        eyeIconSlash.style.display = 'none';
        eyeIconSlash2.style.display = 'none';
    }

    let textBoxSingup3 = document.createElement('div');
    textBoxSingup3.classList = 'text-box';

    let lockIcon = document.createElement('i');
    lockIcon.classList = 'fas fa-lock';
    lockIcon.id = 'singin-lock-icon-1';


    let singupPass = document.createElement('input');
    singupPass.placeholder = 'Password';
    singupPass.type = 'password';
    singupPass.classList = 'input';
    singupPass.id = 'singup-pass';
    singupPass.onfocus = () => {
        //kad je fokusiran passowrd input uklanja eyeiconslash sa confirmpassword inputa
        eyeIconSlash.style.display = 'block';
        eyeIconSlash2.style.display = 'none';
    }

    let textBoxSingup4 = document.createElement('div');
    textBoxSingup4.classList = 'text-box';

    let lockIcon2 = document.createElement('i');
    lockIcon2.classList = "fas fa-lock";
    lockIcon2.id = 'singin-lock-icon-2';

    let singupConfirmPass = document.createElement('input');
    singupConfirmPass.placeholder = 'Repeat Password';
    singupConfirmPass.type = 'password';
    singupConfirmPass.classList = 'input';
    singupConfirmPass.style.marginBottom = '0px';
    singupConfirmPass.id = 'singup-confirm-pass';
    singupConfirmPass.onfocus = () => {
        //kad je fokusiran confirmpassword input uklanja eyeiconslash sa password inputa
        eyeIconSlash2.style.display = 'block';
        eyeIconSlash.style.display = 'none';
    }

    let generatePassowrd = document.createElement('p');
    generatePassowrd.innerHTML = 'Generate Password? <a style="cursor: pointer;" onclick="getPassowrd();">Click here!</a>';
    generatePassowrd.style.textAlign = 'center';

    let btnSingup = document.createElement('button');
    btnSingup.id = 'btn-confirm'
    btnSingup.innerHTML = 'SING UP'
    btnSingup.id = 'singup-btn';
    btnSingup.onclick = () => {
        handleSingup();
    }

    let btnGoBack = document.createElement('p');
    btnGoBack.innerHTML = 'Already registered? <a href="#">Sing in</a>';
    btnGoBack.style.textAlign = 'center';
    btnGoBack.onclick = () => {
        showLeftDivLogout();
    }

    let eyeIcon = document.createElement('i');
    eyeIcon.classList = 'fas fa-eye';
    eyeIcon.id = 'eye-icon-1';
    eyeIcon.style.cursor = 'pointer';
    eyeIcon.style.position = 'absolute';
    eyeIcon.style.right = '10%';

    let eyeIcon2 = document.createElement('i');
    eyeIcon2.classList = 'fas fa-eye';
    eyeIcon2.style.cursor = 'pointer';
    eyeIcon2.style.position = 'absolute';
    eyeIcon2.style.right = '10%';

    let eyeIconSlash = document.createElement('i');
    eyeIconSlash.classList = 'fas fa-eye-slash';
    eyeIconSlash.id = 'eye-icon-slash-1';
    eyeIconSlash.style.display = 'none';
    eyeIconSlash.onclick = () => {
        let x = document.getElementById('singup-pass');
        if (x.type === 'password') {
            x.type = 'text';
            eyeIconSlash.classList = 'fas fa-eye';
        }
        else {
            x.type = 'password';
            eyeIconSlash.classList = 'fas fa-eye-slash';
        }
    }

    let eyeIconSlash2 = document.createElement('i');
    eyeIconSlash2.classList = 'fas fa-eye-slash';
    eyeIconSlash2.id = 'eye-icon-slash-2';
    eyeIconSlash2.style.display = 'none';
    eyeIconSlash2.onclick = () => {
        let x = document.getElementById('singup-confirm-pass');
        if (x.type === 'password') {
            x.type = 'text';
            eyeIconSlash2.classList = 'fas fa-eye';
        }
        else {
            x.type = "password";
            eyeIconSlash2.classList = 'fas fa-eye-slash';
        }
    }

    leftDiv.appendChild(singupH1);
    leftDiv.appendChild(pftfb);
    leftDiv.appendChild(textBoxSingup);
    leftDiv.appendChild(textBoxSingup2);
    leftDiv.appendChild(textBoxSingup3);
    leftDiv.appendChild(textBoxSingup4);
    leftDiv.appendChild(generatePassowrd);
    leftDiv.appendChild(btnSingup);
    leftDiv.appendChild(btnGoBack);

    textBoxSingup.appendChild(ninjaIcon);
    textBoxSingup.appendChild(singupUserName);

    textBoxSingup2.appendChild(emailIcon);
    textBoxSingup2.appendChild(singupEmail);
    textBoxSingup3.appendChild(lockIcon);
    textBoxSingup3.appendChild(singupPass);
    textBoxSingup3.appendChild(eyeIconSlash);

    textBoxSingup4.appendChild(lockIcon2);
    textBoxSingup4.appendChild(singupConfirmPass);
    textBoxSingup4.appendChild(eyeIconSlash2);
}

//Pravi random passowrd od 16 karaktera
function getPassowrd() {
    let eyeIconShow = document.getElementById('eye-icon-slash-1');
    eyeIconShow.style.display = 'block';
    eyeIconShow.classList = 'fas fa-eye';

    let changeType = document.getElementById('singup-pass');
    changeType.type = 'text';

    let chars = '0123456789qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM!@#$%^&*()_+=-[]{}><:';
    let password = '';

    for (let i = 0; i < 12; i++) {
        let r = Math.floor(Math.random() * chars.length);
        password += chars[r];
    }
    document.getElementById('singup-pass').value = password;
}

//Funkcija koja u singup formi pravi nove usere i stavlja ih u bazu
function handleSingup() {
    let userName = document.getElementById('singup-username').value;
    let email = document.getElementById('singup-email').value;
    let singupPass = document.getElementById('singup-pass').value;
    let confrimSingupPass = document.getElementById('singup-confirm-pass').value;

    //Proverava ako su sva polja prazna u singup fromi onda izbacuje text da mora sve da se popuni
    if (userName.trim() === '' || email.trim() === '' || singupPass.trim() === '' || confrimSingupPass.trim() === '') {
        document.getElementById('warning').innerHTML = 'You have to fill in all four inputs, try again!';
        setTimeout(() => {
            document.getElementById('warning').innerHTML = '';
        }, 3000);
        return;
    }

    if (singupPass.length <= 10) {
        document.getElementById('warning').innerHTML = 'Your password must be 10 chars long';
        setTimeout(() => {
            document.getElementById('warning').innerHTML = '';
        }, 3000);
        return;
    }

    //Proverava ako prvi password nije jednak sa confrim passwordom onda izbacuje tekst pa se pokusa ponovo
    if (singupPass !== confrimSingupPass) {
        document.getElementById('warning').innerHTML = 'Passwords do not match up, try again!';
        setTimeout(() => {
            document.getElementById('warning').innerHTML = '';
        }, 3000);
        return;
    }
    //U drugom slucaju kad je sve popunjeno kako treba onda je korsinik napravljen
    if (userName.trim() !== '' || email.trim() !== '' || singupPass.trim() !== '' || confrimSingupPass.trim() !== '') {
        logout();
        document.getElementById('warning').innerHTML = 'Your account has been successfully created!';
        setTimeout(() => {
            document.getElementById('warning').innerHTML = '';
        }, 3000);
    }

    axios.post('http://localhost:3000/singup',
        {
            userName: userName,
            email: email,
            singupPass: singupPass,
        }
    ).then((res) => {
        console.log(userName);
    });
}

//Funkcija koja proverava da li je korisnik koga smo uneli tacan i da se podudara sa bazon
function login() {
    let user = document.getElementById('user').value;
    let password = document.getElementById('password').value;

    //Ako user i password polje nisu uneti onda izbaciju text i ne radi nista
    if (user.trim() === '' || password.trim() === '') {
        document.getElementById('warning').innerHTML = 'You must enter username and password!';
        setTimeout(() => {
            document.getElementById('warning').innerHTML = '';
        }, 3000);
        return;
    }

    axios.post('http://localhost:3000/login',
        {
            user: user,
            pass: password
        })
        .then((res) => {
            //Provera da li smo uneli progresan username i password ako jesmo izbacuje warning
            if (!res.data.usr_id) {
                let user = document.getElementById('user').value = '';
                let password = document.getElementById('password').value = '';
                document.getElementById('warning').innerHTML = `The account u entered does not exist, try again!`;
                setTimeout(() => {
                    document.getElementById('warning').innerHTML = '';
                }, 3000);
                return;
            }
            korisnik = res.data;
            userLevel = res.data.usr_level;
            userName = res.data.usr_username;
            prikaziHome();
        });
}