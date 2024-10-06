const Rtext_section_h1 = document.querySelector('.text-section h1').textContent;
const Rtext_section_h2 = document.querySelector('.text-section h2').textContent;
const Rtext_section_p = document.querySelector('.text-section p').textContent;
var Page = 0; // 0: Home; 1: About; 2: Project; 3: Experience;
var Fisrt_click_About = 0;

function click_about(){//Chuyển tới trang About
    if(Page == 0){ //Home -> About
        let h1 = document.querySelector('.text-section h1');
        let h2 = document.querySelector('.text-section h2');
        let p = document.querySelector('.text-section p');
        let name_Date = document.querySelector('.name-date');
        const img_avt = document.querySelector('.image-section');
        const btn_home = document.querySelector('.btn-home');
        
        img_avt.style.width = '120px';
        img_avt.style.height = '120px';
        img_avt.style.top = '10px';
        img_avt.style.right = '270px';
    
        h1.classList.add('hidden');
        h2.classList.add('hidden');
        p.classList.add('hidden');
        name_Date.classList.add('hidden');

        setTimeout(function() {
            //Ẩn nút
            hideElement('#line');
            hideElement('.btn#about');
            hideElement('.btn#cv');
            var homeButton = document.querySelector('.btn-home');
            homeButton.style.display = 'block';

            //Thêm button
            if(Fisrt_click_About == 0 ){
            addNewButton('btn','project','Project',1);
            addNewButton('btn','experience','Experience',2);
            Fisrt_click_About = 1;
            }
            if(Fisrt_click_About == 1) {
                showElement('#project');
                showElement('#experience');
            }

            //Đổi nội dung
            h1.textContent = 'Hang Duong Khoi';
            h2.textContent = '25/08/2005';
            btn_home.textContent = 'Home > About';
            hideElement('.text-section p'); //Ẩn thẻ text-section p
            hideElement('.name-date'); //Ẩn thẻ name-date

            showElement('#text-about1'); // Hiển thẻ text-about
            showElement('#text-about2'); // Hiển thẻ text-about
            showElement('#vertical-line'); // Hiển thị line
            showElement_flex('.box-about'); // Hiển thị div box-about(flex)

            h1.classList.remove('hidden');
            h2.classList.remove('hidden');
            name_Date.classList.remove('hidden');

        }, 200); // Thay đổi nội dung sau 0.2 giây (thời gian hiệu ứng biến mất)
        Page = 1;
    }

    if (Page==2){  // Project -> About
        let btn_home = document.querySelector('.btn-home')
        const img_avt = document.querySelector('.image-section');
        let box_project = document.querySelector('.box-project');
        let div_btn = document.querySelector('.buttons');
        let h1 = document.querySelector('.text-section h1');
        let h2 = document.querySelector('.text-section h2');
        
        img_avt.style.width = '120px';
        img_avt.style.height = '120px';
        img_avt.style.top = '10px';
        img_avt.style.right = '270px';

        //Thêm lớp hidden
        btn_home.classList.add('hidden');
        box_project.classList.add('hidden');

        showElement('#text-about1'); // Hiển thẻ text-about
        showElement('#text-about2'); // Hiển thẻ text-about
        showElement('#vertical-line'); // Hiển thị line
        showElement_flex('.box-about'); // Hiển thị div box-about(flex)
        hideElement(box_project);
        hideElement('.btn#about');
        showElement('#project');

        btn_home.textContent = 'Home > About'
        h1.classList.remove('format-project');
        h2.classList.remove('format-project');
        div_btn.classList.remove('buttons1');

        setTimeout(function() {
            box_project.classList.remove('hidden');
            btn_home.classList.remove('hidden');
            
        }, 200);

        Page = 1;
    }

    if (Page==3){ // Experience -> About\
        let btn_home = document.querySelector('.btn-home')
        const img_avt = document.querySelector('.image-section');
        let box_experience = document.querySelector('.skills-container');
        let div_btn = document.querySelector('.buttons');
        let h1 = document.querySelector('.text-section h1');
        let h2 = document.querySelector('.text-section h2');

        img_avt.style.width = '120px';
        img_avt.style.height = '120px';
        img_avt.style.top = '10px';
        img_avt.style.right = '270px';

        btn_home.classList.add('hidden');
        box_experience.classList.add('hidden');

        showElement('#text-about1'); // Hiển thẻ text-about
        showElement('#text-about2'); // Hiển thẻ text-about
        showElement('#vertical-line'); // Hiển thị line
        showElement_flex('.box-about'); // Hiển thị div box-about(flex)
        hideElement(box_experience);
        hideElement('.btn#about');
        showElement('#experience');

        btn_home.textContent = 'Home > About'
        h1.classList.remove('format-project');
        h2.classList.remove('format-project');
        div_btn.classList.remove('buttons1');

        setTimeout(function() {
            box_experience.classList.remove('hidden');
            btn_home.classList.remove('hidden');
            
        }, 200);

        Page = 1;
    }
};

function click_home(){ // Chuyển về trang home
    if(Page==1){  // About -> Home
        let h1 = document.querySelector('.text-section h1');
        let h2 = document.querySelector('.text-section h2');
        let p = document.querySelector('.text-section p');
        let text1 = document.querySelector('#text-about1');
        let text2 = document.querySelector('#text-about2');
        let box_about = document.querySelector('.box-about');
        const img_avt = document.querySelector('.image-section');

        //Thay đổi kích cỡ ảnh
        img_avt.style.width = '420px';
        img_avt.style.height = '420px';
        img_avt.style.top = '30px';
        img_avt.style.right = '110px';

        //Thêm lớp hidden
        h1.classList.add('hidden');
        h2.classList.add('hidden');
        p.classList.add('hidden');
        text1.classList.add('hidden');
        text2.classList.add('hidden');
        box_about.classList.add('hidden');
        
        //Ẩn-Hiện các element
        hideElement('#project');
        hideElement('#experience');
        showElement('.name-date');
        showElement('.btn#about');
        showElement('.btn#cv');
        hideElement('#vertical-line');
        hideElement('.box-about');

        setTimeout(function() {
            //Đổi nội dung
            h1.textContent = Rtext_section_h1;
            h2.textContent = Rtext_section_h2;
            showElement('.text-section p')
            hideElement('#text-about1');
            hideElement('#text-about2');
            showElement('#line');
    
            //Loại bỏ lớp hidden khỏi element
            h1.classList.remove('hidden');
            h2.classList.remove('hidden');
            p.classList.remove('hidden');
            text1.classList.remove('hidden');
            text2.classList.remove('hidden');
            box_about.classList.remove('hidden');
        }, 200);

        hideElement('.btn-home');
        hideElement('.btn.project');
        hideElement('.btn.experience');
        Page = 0;
    }
    if (Page==2){ // Project -> Home
        let h1 = document.querySelector('.text-section h1');
        let h2 = document.querySelector('.text-section h2');
        let p = document.querySelector('.text-section p');
        let div_btn = document.querySelector('.buttons');
        const img_avt = document.querySelector('.image-section');

        //Thay đổi kích cỡ ảnh
        img_avt.style.width = '420px';
        img_avt.style.height = '420px';
        img_avt.style.top = '30px';
        img_avt.style.right = '110px';

        //Thêm lớp hidden
        h1.classList.add('hidden');
        h2.classList.add('hidden');
        p.classList.add('hidden');
        
        //Ẩn-Hiện các element
        hideElement('#project');
        hideElement('#experience');
        showElement('.name-date');
        showElement('.btn#about');
        showElement('.btn#cv');
        hideElement('#vertical-line');
        hideElement('.box-project');

        setTimeout(function() {
            //Đổi nội dung
            h1.textContent = Rtext_section_h1;
            h2.textContent = Rtext_section_h2;
            showElement('.text-section p')
            hideElement('#text-about1');
            hideElement('#text-about2');
            showElement('#line');

            h1.classList.remove('format-project');
            h2.classList.remove('format-project');
            div_btn.classList.remove('buttons1');
    
            //Loại bỏ lớp hidden khỏi element
            h1.classList.remove('hidden');
            h2.classList.remove('hidden');
            p.classList.remove('hidden');
        }, 200);

        hideElement('.btn-home');
        hideElement('.btn.project');
        hideElement('.btn.experience');
        Page=0;
    }
    if (Page==3){ // Experience -> Home
        let h1 = document.querySelector('.text-section h1');
        let h2 = document.querySelector('.text-section h2');
        let p = document.querySelector('.text-section p');
        let div_btn = document.querySelector('.buttons');
        const img_avt = document.querySelector('.image-section');
        let box_experience = document.querySelector('.skills-container');

        //Thay đổi kích cỡ ảnh
        img_avt.style.width = '420px';
        img_avt.style.height = '420px';
        img_avt.style.top = '30px';
        img_avt.style.right = '110px';

        //Thêm lớp hidden
        h1.classList.add('hidden');
        h2.classList.add('hidden');
        p.classList.add('hidden');
        box_experience.classList.add('hidden');

        //Ẩn-Hiện các element
        hideElement('#project');
        showElement('.name-date');
        showElement('.btn#about');
        showElement('.btn#cv');
        hideElement('#vertical-line');
        hideElement(box_experience);

        setTimeout(function() {
            //Đổi nội dung
            h1.textContent = Rtext_section_h1;
            h2.textContent = Rtext_section_h2;
            showElement('.text-section p')
            hideElement('#text-about1');
            hideElement('#text-about2');
            showElement('#line');

            h1.classList.remove('format-project');
            h2.classList.remove('format-project');
            div_btn.classList.remove('buttons1');
    
            //Loại bỏ lớp hidden khỏi element
            h1.classList.remove('hidden');
            h2.classList.remove('hidden');
            p.classList.remove('hidden');
            box_experience.classList.remove('hidden');
        }, 200);

        hideElement('.btn-home');
        hideElement('.btn.project');
        hideElement('.btn.experience');

        Page=0;
    }
};

function click_project(){ // Chuyển tới trang Project
    if (Page==1){ // About -> Project
        let h1 = document.querySelector('.text-section h1');
        let h2 = document.querySelector('.text-section h2');
        let btn_home = document.querySelector('.btn-home')
        let text1 = document.querySelector('#text-about1');
        let text2 = document.querySelector('#text-about2');
        let div_btn = document.querySelector('.buttons');
        let box_about = document.querySelector('.box-about');
        const img_avt = document.querySelector('.image-section');
        
        img_avt.style.width = '100px';
        img_avt.style.height = '100px';
        img_avt.style.top = '110px';
        img_avt.style.right = '1150px';

        h1.classList.add('format-project');
        h2.classList.add('format-project');
        div_btn.classList.add('buttons1');

        box_about.classList.add('hidden');
        text1.classList.add('hidden');
        text2.classList.add('hidden');
        btn_home.textContent = 'Home > Project'

        hideElement('#text-about1');
        hideElement('#text-about2');
        hideElement('#vertical-line');
        hideElement('#project');
        showElement('.btn#about');
        
        setTimeout(function() {

            hideElement('.box-about');
            showElement_flex('.box-project');

            text1.classList.remove('hidden');
            text2.classList.remove('hidden');
            box_about.classList.remove('hidden');
        }, 200);

        Page=2;
    }
    if (Page==3){ // Experience -> Project
        let btn_home = document.querySelector('.btn-home')
        let box_experience = document.querySelector('.skills-container');

        box_experience.classList.add('hidden');
        btn_home.textContent = 'Home > Project'

        hideElement('#project');
        showElement('.btn#experience');

        setTimeout(function() {
            hideElement('.skills-container');
            showElement_flex('.box-project');

            box_experience.classList.remove('hidden');
        }, 200);
        Page = 2;
    }
}

function click_experience(){ // Chuyển tới trang Experience
    if (Page==1){ // About -> Experience
        let h1 = document.querySelector('.text-section h1');
        let h2 = document.querySelector('.text-section h2');
        let btn_home = document.querySelector('.btn-home')
        let text1 = document.querySelector('#text-about1');
        let text2 = document.querySelector('#text-about2');
        let div_btn = document.querySelector('.buttons');
        let box_about = document.querySelector('.box-about');
        const img_avt = document.querySelector('.image-section');

        img_avt.style.width = '100px';
        img_avt.style.height = '100px';
        img_avt.style.top = '110px';
        img_avt.style.right = '1150px';

        h1.classList.add('format-project');
        h2.classList.add('format-project');
        div_btn.classList.add('buttons1');

        box_about.classList.add('hidden');
        text1.classList.add('hidden');
        text2.classList.add('hidden');
        btn_home.textContent = 'Home > Experience'

        hideElement('#text-about1');
        hideElement('#text-about2');
        hideElement('#vertical-line');
        hideElement('#experience');
        showElement('.btn#about');

        setTimeout(function() {
            hideElement('.box-about');
            showElement_flex('.skills-container');

            text1.classList.remove('hidden');
            text2.classList.remove('hidden');
            box_about.classList.remove('hidden');
        }, 200);


        Page = 3;
    }
    if (Page==2){ // Project -> Experience
        let btn_home = document.querySelector('.btn-home')
        let box_project = document.querySelector('.box-project');

        box_project.classList.add('hidden');
        btn_home.textContent = 'Home > Experience'

        hideElement('#experience');
        showElement('.btn#project');

        setTimeout(function() {
            hideElement('.box-project');
            showElement_flex('.skills-container');

            box_project.classList.remove('hidden');
        }, 200);
        Page = 3;
    }
}

function hideElement(elements) { // Ẩn Element
    let element = elements;
    // Kiểm tra nếu elements là một chuỗi, query selector
    if (typeof elements === 'string') {
        element = document.querySelector(elements);
    }

    // Kiểm tra nếu element tồn tại và là một phần tử hợp lệ
    if (element) {
        element.style.display = 'none'; // Thêm thuộc tính display: none;
    }
}

function showElement(elements) { // Hiện Element
    let element = elements;
    // Kiểm tra nếu elements là một chuỗi, query selector
    if (typeof elements === 'string') {
        element = document.querySelector(elements);
    }

    // Kiểm tra nếu element tồn tại và là một phần tử hợp lệ
    if (element) {
        element.style.display = 'block'; // Đặt thuộc tính display thành block
    }
}

function showElement_flex(elements) { // Hiện Element
    let element = elements;
    // Kiểm tra nếu elements là một chuỗi, query selector
    if (typeof elements === 'string') {
        element = document.querySelector(elements);
    }

    // Kiểm tra nếu element tồn tại và là một phần tử hợp lệ
    if (element) {
        element.style.display = 'flex'; // Đặt thuộc tính display thành block
    }
}

function addNewButton(nameclass,id,name,n) { // Thêm nút(id,class,)
    // Tạo nút mới
    const newButton = document.createElement('button');
    newButton.id = id; // Gắn id mới
    newButton.className = nameclass; // Gán lớp mới
    newButton.textContent = name; // Nội dung của nút

    if(n==1){
        newButton.onclick = click_project; 
    }else{
        newButton.onclick = click_experience; 
    }

    const buttonsDiv = document.querySelector('.buttons');
    buttonsDiv.appendChild(newButton);
}