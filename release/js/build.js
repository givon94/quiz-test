function _extends(){return(_extends=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t}).apply(this,arguments)}function _typeof(t){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}!function(t,e){"object"===("undefined"==typeof exports?"undefined":_typeof(exports))&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):t.LazyLoad=e()}(this,function(){"use strict";var t="undefined"!=typeof window,e=t&&!("onscroll"in window)||"undefined"!=typeof navigator&&/(gle|ing|ro)bot|crawl|spider/i.test(navigator.userAgent),n=t&&"IntersectionObserver"in window,o=t&&"classList"in document.createElement("p"),r={elements_selector:"img",container:e||t?document:null,threshold:300,thresholds:null,data_src:"src",data_srcset:"srcset",data_sizes:"sizes",data_bg:"bg",class_loading:"loading",class_loaded:"loaded",class_error:"error",load_delay:0,auto_unobserve:!0,callback_enter:null,callback_exit:null,callback_reveal:null,callback_loaded:null,callback_error:null,callback_finish:null,use_native:!1},a=function(t,e){var n,o=new t(e);try{n=new CustomEvent("LazyLoad::Initialized",{detail:{instance:o}})}catch(t){(n=document.createEvent("CustomEvent")).initCustomEvent("LazyLoad::Initialized",!1,!1,{instance:o})}window.dispatchEvent(n)};var i=function(t,e){return t.getAttribute("data-"+e)},s=function(t,e,n){var o="data-"+e;null!==n?t.setAttribute(o,n):t.removeAttribute(o)},c=function(t){return"true"===i(t,"was-processed")},l=function(t,e){return s(t,"ll-timeout",e)},u=function(t){return i(t,"ll-timeout")},d=function(t,e){t&&t(e)},f=function(t,e){t._loadingCount+=e,0===t._elements.length&&0===t._loadingCount&&d(t._settings.callback_finish)},_=function(t){for(var e,n=[],o=0;e=t.children[o];o+=1)"SOURCE"===e.tagName&&n.push(e);return n},v=function(t,e,n){n&&t.setAttribute(e,n)},g=function(t,e){v(t,"sizes",i(t,e.data_sizes)),v(t,"srcset",i(t,e.data_srcset)),v(t,"src",i(t,e.data_src))},m={IMG:function(t,e){var n=t.parentNode;n&&"PICTURE"===n.tagName&&_(n).forEach(function(t){g(t,e)});g(t,e)},IFRAME:function(t,e){v(t,"src",i(t,e.data_src))},VIDEO:function(t,e){_(t).forEach(function(t){v(t,"src",i(t,e.data_src))}),v(t,"src",i(t,e.data_src)),t.load()}},b=function(t,e){var n,o,r=e._settings,a=t.tagName,s=m[a];if(s)return s(t,r),f(e,1),void(e._elements=(n=e._elements,o=t,n.filter(function(t){return t!==o})));!function(t,e){var n=i(t,e.data_src),o=i(t,e.data_bg);n&&(t.style.backgroundImage='url("'.concat(n,'")')),o&&(t.style.backgroundImage=o)}(t,r)},h=function(t,e){o?t.classList.add(e):t.className+=(t.className?" ":"")+e},p=function(t,e,n){t.addEventListener(e,n)},y=function(t,e,n){t.removeEventListener(e,n)},E=function(t,e,n){y(t,"load",e),y(t,"loadeddata",e),y(t,"error",n)},w=function(t,e,n){var r=n._settings,a=e?r.class_loaded:r.class_error,i=e?r.callback_loaded:r.callback_error,s=t.target;!function(t,e){o?t.classList.remove(e):t.className=t.className.replace(new RegExp("(^|\\s+)"+e+"(\\s+|$)")," ").replace(/^\s+/,"").replace(/\s+$/,"")}(s,r.class_loading),h(s,a),d(i,s),f(n,-1)},I=function(t,e){var n=function n(r){w(r,!0,e),E(t,n,o)},o=function o(r){w(r,!1,e),E(t,n,o)};!function(t,e,n){p(t,"load",e),p(t,"loadeddata",e),p(t,"error",n)}(t,n,o)},k=["IMG","IFRAME","VIDEO"],A=function(t,e){var n=e._observer;z(t,e),n&&e._settings.auto_unobserve&&n.unobserve(t)},L=function(t){var e=u(t);e&&(clearTimeout(e),l(t,null))},x=function(t,e){var n=e._settings.load_delay,o=u(t);o||(o=setTimeout(function(){A(t,e),L(t)},n),l(t,o))},z=function(t,e,n){var o=e._settings;!n&&c(t)||(k.indexOf(t.tagName)>-1&&(I(t,e),h(t,o.class_loading)),b(t,e),function(t){s(t,"was-processed","true")}(t),d(o.callback_reveal,t),d(o.callback_set,t))},O=function(t){return!!n&&(t._observer=new IntersectionObserver(function(e){e.forEach(function(e){return function(t){return t.isIntersecting||t.intersectionRatio>0}(e)?function(t,e){var n=e._settings;d(n.callback_enter,t),n.load_delay?x(t,e):A(t,e)}(e.target,t):function(t,e){var n=e._settings;d(n.callback_exit,t),n.load_delay&&L(t)}(e.target,t)})},{root:(e=t._settings).container===document?null:e.container,rootMargin:e.thresholds||e.threshold+"px"}),!0);var e},N=["IMG","IFRAME"],C=function(t,e){return function(t){return t.filter(function(t){return!c(t)})}((n=t||function(t){return t.container.querySelectorAll(t.elements_selector)}(e),Array.prototype.slice.call(n)));var n},M=function(t,e){this._settings=function(t){return _extends({},r,t)}(t),this._loadingCount=0,O(this),this.update(e)};return M.prototype={update:function(t){var n,o=this,r=this._settings;(this._elements=C(t,r),!e&&this._observer)?(function(t){return t.use_native&&"loading"in HTMLImageElement.prototype}(r)&&((n=this)._elements.forEach(function(t){-1!==N.indexOf(t.tagName)&&(t.setAttribute("loading","lazy"),z(t,n))}),this._elements=C(t,r)),this._elements.forEach(function(t){o._observer.observe(t)})):this.loadAll()},destroy:function(){var t=this;this._observer&&(this._elements.forEach(function(e){t._observer.unobserve(e)}),this._observer=null),this._elements=null,this._settings=null},load:function(t,e){z(t,this,e)},loadAll:function(){var t=this;this._elements.forEach(function(e){A(e,t)})}},t&&function(t,e){if(e)if(e.length)for(var n,o=0;n=e[o];o+=1)a(t,n);else a(t,e)}(M,window.lazyLoadOptions),M});



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
