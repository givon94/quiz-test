


    //-LazyLoad
    let myLazyLoad = new LazyLoad({
        elements_selector: ".lazy",
        threshold: 550
    });

    //-LazyLoad Quiz
    let myLazyLoadQuiz = new LazyLoad({
        elements_selector: ".lazy-quiz",
    });



    //-Quiz
    const quiz = document.querySelector('#quiz');
    const body = document.querySelector('body');
    const btnOpenQuiz = document.querySelector('#openQuiz');
    const btnCloseQuiz = document.querySelector('#closeQuiz');
    const btnForward = document.querySelector('#quizBtnNext');
    const btnBack = document.querySelector('#quizBtnPrev');
    const quizSlider = document.querySelector('.quiz_slider');
    const quizSlides = document.querySelectorAll('.quiz__right-step');
    const doneWidth = ['17%', '29%', '40%', '52%', '64%', '76%', '88%', '100%'];
    const quizSlidesLength = quizSlides.length;
    const rotateStage = (100 / quizSlidesLength);
    let quizForm = document.querySelector('#quizForm');
    let quizTitle = document.querySelector('#quizTitle');
    let currentSlide = 0;
    let quizProgress = document.querySelector('#quizProgress');
    let quizProgressVal = document.querySelector('#quizProgressVal');
    let quizProgressBarDone = document.querySelector('#progressBarDone');
    let quizStageNum = document.querySelector('.quizStageNum');
    let quizStageLength = document.querySelector('.quizStageLength');
    let quizGiftPaginator = document.querySelector('#quizGiftPaginator');
    let quizGiftPaginatorCircle = document.querySelector('#quizGiftPaginatorCircle');
    let quizGiftPaginatorCircleBlock = document.querySelector('#quizGiftPaginatorCircleBlock');
    let quizCompleted = document.querySelector('#quizCompleted');
    let quizStepsLength = document.querySelector('#quizStepsLength');
    let quizStepsCount = document.querySelector('#quizStepsCount');
    quizStageLength.innerHTML = quizSlidesLength;



    //-Стрелки часов
    for (let i = 0; i < quizSlidesLength; i++) {
        let li = document.createElement('li');
        li.classList.add('quiz__left-gift-paginator-pie-clock');
        li.setAttribute('id',`quizClock${i}`)
        li.style.transform = 'rotate(' + ((360 / quizSlidesLength) * i) + 'deg)';
        quizGiftPaginator.appendChild(li);
    }

    function paginator() {
        let rotate = (100 - rotateStage * (currentSlide + 1));
        let rotateVal = Math.round(rotate * 3.6) - 180;
        quizGiftPaginatorCircle.style.transform = 'rotate(' + rotateVal + 'deg)';

        if (rotateVal <= 0) {
            quizGiftPaginatorCircleBlock.classList.add('hide');
        } else {
            quizGiftPaginatorCircleBlock.classList.remove('hide');
        }
    }

    paginator();

    //-Открыть квиз
    btnOpenQuiz.onclick = ()=> {
        quiz.classList.add('active');
        body.classList.add('scroll-hidden');
        myLazyLoadQuiz.loadAll();
    };


    //-Закрыть квиз
    btnCloseQuiz.onclick = ()=> {
        closedQuiz();
    };


    quiz.addEventListener('click', e=> {
        const target = e.target;
        if(target === quiz) {
            closedQuiz();
        }
    });

    //-Следующий слайд
    btnForward.addEventListener('click', e=> {
        e.preventDefault();
        if (currentSlide < quizSlides.length-1) {
            currentSlide ++;
            slider(1);
            paginator();

            //-2 слайд
            if (currentSlide === 1) {
                btnBack.style.display = 'block';
                return false;
            }

            //-Если последний слайд
            if (currentSlide === quizSlides.length-1) {
                btnForward.style.display = 'none';
                progressBar();
                return false;
            }
        }
    });


    //-Предыдущий слайд
    btnBack.addEventListener('click', e=> {
        e.preventDefault();
        if (currentSlide > 0) {
            currentSlide --;
            slider(-1);
            paginator();

            //-Если предпоследний слайд
            if (currentSlide === quizSlides.length-2) {
                btnForward.style.display = 'block';
                quizTitle.style.display = 'block';
                quizProgress.classList.remove('hide');
                quizForm.classList.remove('active');
                quizProgressVal.innerHTML = '0%';
                return false;
            }

            //-Возвращение на 1 слайд
            if (currentSlide === 0) {
                btnBack.style.display = 'none';
                return false;
            }
        }
    });

    function closedQuiz() {
        quiz.classList.remove('active');
        body.classList.remove('scroll-hidden');
    }

    function slider(numb) {
        for (let i = 0; i < quizSlides.length; i++) {
            if (i === currentSlide) {
                quizSlides[i - numb].classList.toggle('active');
                quizSlides[i].classList.toggle('active');
            }
        }
        quizStageNum.innerHTML = currentSlide + 1;
        quizProgressBarDone.style.width = doneWidth[currentSlide];
    }


    //-Прогресс бар
    function progressBar() {
        quizProgressVal.innerHTML = '0%';

        let intervalId = setInterval(function() {
            let val = parseInt(quizProgressVal.innerHTML);
            val += 5;

            if (val == 100) {
                clearInterval(intervalId);
                quizTitle.style.display='none';
                quizProgress.classList.add('hide');
                quizForm.classList.add('active');
                val = 0
            }
            quizProgressVal.innerHTML = val + '%';
        }, 100);
    }


    const quizRadioBtn = document.querySelectorAll('.radio_btn');
    quizRadioBtn.forEach((e) => {
        e.addEventListener('change', () => {
            let quizRadioBtn = e.parentNode;

            Array.prototype.filter.call(quizRadioBtn.parentNode.children, function(child){
                child !== quizRadioBtn ? child.classList.remove('active') : child.classList.add('active');
            });

        })
    });


    const quizItemCheckbox = document.querySelectorAll('.quiz__item-checkbox');
    quizItemCheckbox.forEach((e)=> {
        e.addEventListener('change', ()=> {
            let itemCheckbox = e.querySelector('.check_btn');
            itemCheckbox.checked ? e.classList.add('active') : e.classList.remove('active');
        })
    });


    const quizFormGroup = document.querySelectorAll('.quiz__form-input-group');
    quizFormGroup.forEach((e)=> {
        let itemInput = e.querySelector('.quiz__form-input');

        itemInput.addEventListener('change', ()=> {
            let itemInputVal = itemInput.value.length;
            itemInputVal > 0 ? e.classList.add('active') : e.classList.remove('active');
        })
    });
