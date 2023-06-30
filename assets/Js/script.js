function checkedFalse() {
    document.addEventListener(`click`, (e) => {
        const el = e.target;

        if (el.classList.contains(`mark-unchecked`)) {
            console.log(`Nice, you clicked on the invisible checkbox!`);
            function turnCheckedFalse() {
                const checkbox = document.querySelector(`#close-menu`);
                checkbox.checked = false;
            }
            turnCheckedFalse();
        }
    });
}
checkedFalse();

function asideShow() {

    function asideShow1() {
        const elementHover1 = document.querySelector(`.li-01`);
        const elementShow1 = document.querySelector(`.li-show-01`);

        elementHover1.addEventListener(`mouseover`, () => {
            elementShow1.style.display = `block`;
            setTimeout(() => {
                elementShow1.style.opacity = `1`;
            }, 10);
        });

        elementHover1.addEventListener(`mouseout`, () => {
            elementShow1.style.opacity = `0`;
            setTimeout(() => {
                elementShow1.style.display = `none`;
            }, 500);
        })
    }
    asideShow1();

    function asideShow2() {
        const elementHover1 = document.querySelector(`.li-02`);
        const elementShow1 = document.querySelector(`.li-show-02`);

        elementHover1.addEventListener(`mouseover`, () => {
            elementShow1.style.display = `block`;
            setTimeout(() => {
                elementShow1.style.opacity = `1`;
            }, 10);
        });

        elementHover1.addEventListener(`mouseout`, () => {
            elementShow1.style.opacity = `0`;
            setTimeout(() => {
                elementShow1.style.display = `none`;
            }, 500);
        })
    }
    asideShow2();

    function asideShow3() {
        const elementHover1 = document.querySelector(`.li-03`);
        const elementShow1 = document.querySelector(`.li-show-03`);

        elementHover1.addEventListener(`mouseover`, () => {
            elementShow1.style.display = `block`;
            setTimeout(() => {
                elementShow1.style.opacity = `1`;
            }, 10);
        });

        elementHover1.addEventListener(`mouseout`, () => {
            elementShow1.style.opacity = `0`;
            setTimeout(() => {
                elementShow1.style.display = `none`;
            }, 500);
        })
    }
    asideShow3();

    function asideShow4() {
        const elementHover1 = document.querySelector(`.li-04`);
        const elementShow1 = document.querySelector(`.li-show-04`);

        elementHover1.addEventListener(`mouseover`, () => {
            elementShow1.style.display = `block`;
            setTimeout(() => {
                elementShow1.style.opacity = `1`;
            }, 10);
        });

        elementHover1.addEventListener(`mouseout`, () => {
            elementShow1.style.opacity = `0`;
            setTimeout(() => {
                elementShow1.style.display = `none`;
            }, 500);
        })
    }
    asideShow4();

    function asideShow5() {
        const elementHover1 = document.querySelector(`.li-05`);
        const elementShow1 = document.querySelector(`.li-show-05`);

        elementHover1.addEventListener(`mouseover`, () => {
            elementShow1.style.display = `block`;
            setTimeout(() => {
                elementShow1.style.opacity = `1`;
            }, 10);
        });

        elementHover1.addEventListener(`mouseout`, () => {
            elementShow1.style.opacity = `0`;
            setTimeout(() => {
                elementShow1.style.display = `none`;
            }, 500);
        })
    }
    asideShow5();

    function asideShow6() {
        const elementHover1 = document.querySelector(`.li-06`);
        const elementShow1 = document.querySelector(`.li-show-06`);

        elementHover1.addEventListener(`mouseover`, () => {
            elementShow1.style.display = `block`;
            setTimeout(() => {
                elementShow1.style.opacity = `1`;
            }, 10);
        });

        elementHover1.addEventListener(`mouseout`, () => {
            elementShow1.style.opacity = `0`;
            setTimeout(() => {
                elementShow1.style.display = `none`;
            }, 500);
        })
    }
    asideShow6();

    function asideShow7() {
        const elementHover1 = document.querySelector(`.li-07`);
        const elementShow1 = document.querySelector(`.li-show-07`);

        elementHover1.addEventListener(`mouseover`, () => {
            elementShow1.style.display = `block`;
            setTimeout(() => {
                elementShow1.style.opacity = `1`;
            }, 10);
        });

        elementHover1.addEventListener(`mouseout`, () => {
            elementShow1.style.opacity = `0`;
            setTimeout(() => {
                elementShow1.style.display = `none`;
            }, 500);
        })
    }
    asideShow7();

    function asideShow8() {
        const elementHover1 = document.querySelector(`.li-08`);
        const elementShow1 = document.querySelector(`.li-show-08`);

        elementHover1.addEventListener(`mouseover`, () => {
            elementShow1.style.display = `block`;
            setTimeout(() => {
                elementShow1.style.opacity = `1`;
            }, 10);
        });

        elementHover1.addEventListener(`mouseout`, () => {
            elementShow1.style.opacity = `0`;
            setTimeout(() => {
                elementShow1.style.display = `none`;
            }, 500);
        })
    }
    asideShow8();
}
asideShow();