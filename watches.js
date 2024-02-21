class Watches {
    constructor() {
        this.render();
        this.start();
    }

    render() {
        document.querySelector(".watches").innerHTML = '<div class="digit zero" id="hour"><div class="part top"></div><div class="part bottom"></div></div><div class="digit zero" id="subhour"><div class="part top"></div><div class="part bottom"></div></div><div class="separator"><div></div></div><div class="digit zero" id="minute"><div class="part top"></div><div class="part bottom"></div></div><div class="digit zero" id="subminute"><div class="part top"></div><div class="part bottom"></div></div><div class="separator"><div></div></div><div class="digit zero" id="second"><div class="part top"></div><div class="part bottom"></div></div><div class="digit zero" id="subsecond"><div class="part top"></div><div class="part bottom"></div></div>';
        this.rerender();
    }

    rerender() {
        const digits = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];

        let hours = new String(new Date().getHours());
        let minutes = new String(new Date().getMinutes());
        let seconds = new String(new Date().getSeconds());

        let hour = hours.length > 1 ? hours[0] : 0;
        let subhour = hours.length > 1 ? hours[1] : hours[0];
        let minute = minutes.length > 1 ? minutes[0] : 0;
        let subminute = minutes.length > 1 ? minutes[1] : minutes[0];
        let second = seconds.length > 1 ? seconds[0] : 0;
        let subsecond = seconds.length > 1 ? seconds[1] : seconds[0];

        const showHour = document.querySelector("#hour");
        const showSubhour = document.querySelector("#subhour");
        const showMinute = document.querySelector("#minute");
        const showSubminute = document.querySelector("#subminute");
        const showSecond = document.querySelector("#second");
        const showSubsecond = document.querySelector("#subsecond");

        showHour.classList.remove(showHour.classList[1]);
        showSubhour.classList.remove(showSubhour.classList[1]);
        showMinute.classList.remove(showMinute.classList[1]);
        showSubminute.classList.remove(showSubminute.classList[1]);
        showSecond.classList.remove(showSecond.classList[1]);
        showSubsecond.classList.remove(showSubsecond.classList[1]);

        showHour.classList.add(digits[+hour]);
        showSubhour.classList.add(digits[+subhour]);
        showMinute.classList.add(digits[+minute]);
        showSubminute.classList.add(digits[+subminute]);
        showSecond.classList.add(digits[+second]);
        console.log(second)
        showSubsecond.classList.add(digits[+subsecond]);
        console.log(subsecond)
    }

    start () {
        setInterval(this.rerender, 1000);
    }
}

new Watches();