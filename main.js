const word = document.querySelector('.word');
const mean = document.querySelector('.mean');

function show_word() {
    mean.style.display = 'none';
    word.style.display = 'block';
}

function show_mean() {
    word.style.display = 'none';
    mean.style.display = 'block';
}

word.addEventListener('click', show_mean);
mean.addEventListener('click', show_word);

var card = {
    currentIndex : 0,
    currentWord : "",
    currentMean : "",
    memorizedCnt : 0,
    words : [
        {
            word : "단어1",
            mean : "뜻1",
            memorized : false
        },
        {
            word : "단어2",
            mean : "뜻2",
            memorized : false
        },
        {
            word : "단어3",
            mean : "뜻3",
            memorized : false
        },
        {
            word : "단어4",
            mean : "뜻4",
            memorized : false
        },
        {
            word : "단어5",
            mean : "뜻5",
            memorized : false
        },
        {
            word : "단어6",
            mean : "뜻6",
            memorized : false
        }
    ],
    init : function() {
        this.currentIndex = 0;
        this.memorizedCnt = 0;
        this.words.forEach(word => {
            word.memorized = false;
        });
        word.innerHTML = this.words[this.currentIndex].word;
        mean.innerHTML = this.words[this.currentIndex].mean;
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

        this.currentWord = this.words[this.currentIndex].word;
        this.currentMean = this.words[this.currentIndex].mean;
    },
    memorize : function() {
        this.words[this.currentIndex].memorized = true;
        this.memorizedCnt += 1;
    }
}

word.innerHTML = card.words[0].word;
mean.innerHTML = card.words[0].mean;

const known = document.querySelector('.known');
const unknown = document.querySelector('.unknown');

known.addEventListener('click', () => {
    card.memorize();
    card.next();
    show_word();
    word.innerHTML = card.currentWord;
    mean.innerHTML = card.currentMean;
});

unknown.addEventListener('click', () => {
    card.next();
    show_word();
    word.innerHTML = card.currentWord;
    mean.innerHTML = card.currentMean;
});