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

var card = {
    currentIndex : 0,
    currentWord : "",
    currentMean : "",
    memorizedCnt : 0,
    words : [
        {
            word : "나는 영어를 조금 할 줄 알아요.",
            mean : "I speak a little English.",
            memorized : false
        },
        {
            word : "나는 그가 무척 잘 생겼다고 생각해요.",
            mean : "I think he's very handsome.",
            memorized : false
        },
        {
            word : "나는 완두콩과 당근을 싫어해요.",
            mean : "I hate green peas and carrots.",
            memorized : false
        },
        {
            word : "우리는 히드로 공항에서 가까운 런던 서부에 살아요.",
            mean : "We live in western London near Heathrow Airport.",
            memorized : false
        },
        {
            word : "그는 지하철을 타고 출근해요.",
            mean : "He rides the subway to go to work.",
            memorized : false
        },
        {
            word : "그녀는 슈퍼마켓에 매일 아침 걸어가요.",
            mean : "She walks to the supermarket every morning.",
            memorized : false
        },
        {
            word : "우리 아빠는 보험회사에서 일해요.",
            mean : "My father works at an insurance company.",
            memorized : false
        },
        {
            word : "그는 프랑스어를 조금 할 줄 알아요.",
            mean : "He spearks a little French.",
            memorized : false
        },
        {
            word : "나는 그녀가 무척 아름답다고 생각해요.",
            mean : "I think she's very beautiful.",
            memorized : false
        },
        {
            word : "나는 치킨을 싫어해요.",
            mean : "I hate fried chicken.",
            memorized : false
        },
        {
            word : "그들은 역에서 가까운 작은 동네에 살아요.",
            mean : "They live in a small town near the station.",
            memorized : false
        },
        {
            word : "그녀는 버스를 타고 출근해요.",
            mean : "She rides the bus to go to work.",
            memorized : false
        },
        {
            word : "그는 도서관에 매일 아침 걸어가요.",
            mean : "He walks to the library every morning.",
            memorized : false
        },
        {
            word : "우리 엄마는 보험회사에서 일해요. ",
            mean : "My mother works at an insurance company.",
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
current_idx.innerHTML = card.memorizedCnt;
total_cnt.innerHTML = card.words.length;

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