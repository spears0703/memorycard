const word = document.querySelector('.word');
const mean = document.querySelector('.mean');
const current_idx = document.querySelector('.current_idx');
const total_cnt = document.querySelector('.total_cnt');

function show_word() {
    mean.style.display = 'none';
    word.style.display = 'flex';
}

function show_mean() {
    word.style.display = 'none';
    mean.style.display = 'flex';
}

word.addEventListener('click', show_mean);
mean.addEventListener('click', show_word);

const known = document.querySelector('.known');
const unknown = document.querySelector('.unknown');

known.addEventListener('click', () => {
    card.memorize();
    card.next();
    show_word();
    word.innerHTML = card.currentWord;
    mean.innerHTML = card.currentMean;
    current_idx.innerHTML = card.memorizedCnt;
});

unknown.addEventListener('click', () => {
    card.next();
    show_word();
    word.innerHTML = card.currentWord;
    mean.innerHTML = card.currentMean;
    current_idx.innerHTML = card.memorizedCnt;
});

var card = {
    currentIndex : 0,
    currentWord : "",
    currentMean : "",
    memorizedCnt : 0,
    words : [],
    init : function() {
        this.currentIndex = 0;
        this.memorizedCnt = 0;
        this.words.forEach(word => {
            word.memorized = false;
        });
        word.innerHTML = this.words[this.currentIndex].front;
        mean.innerHTML = this.words[this.currentIndex].back;
        current_idx.innerHTML = this.memorizedCnt;
        total_cnt.innerHTML = this.words.length;
    },
    next : function() {
        if(this.memorizedCnt == this.words.length) {
            alert("암기 끝");
            this.init();
        } else if(this.currentIndex >= this.words.length-1) {
            this.currentIndex = 0;
        } else {
            this.currentIndex += 1;
        }

        if(this.words[this.currentIndex].memorized)
            this.next();

        this.currentWord = this.words[this.currentIndex].front;
        this.currentMean = this.words[this.currentIndex].back;
    },
    memorize : function() {
        this.words[this.currentIndex].memorized = true;
        this.memorizedCnt += 1;
    }
}

const url = new URL(window.location);
const id = url.searchParams.get('id');

var httpRequest = new XMLHttpRequest();
httpRequest.open('GET', 'http://ec2-54-210-76-47.compute-1.amazonaws.com:8080/card-package/' + id);
httpRequest.responseType = "json";

httpRequest.onreadystatechange = () => {

    if (httpRequest.readyState === XMLHttpRequest.DONE) {
          if (httpRequest.status === 200) {
            var result = httpRequest.response;

            const title = document.querySelectorAll('.title');
            title.forEach(element => {
                element.innerHTML = result.name;
            });
            card.words = result.card;

            word.innerHTML = card.words[0].front;
            mean.innerHTML = card.words[0].back;
            current_idx.innerHTML = card.memorizedCnt;
            total_cnt.innerHTML = card.words.length;

          } else {
            alert('Request Error!');
          }
    }
}

httpRequest.send();