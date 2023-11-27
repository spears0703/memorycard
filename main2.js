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
            word : "로큰롤을 즐기나요?",
            mean : "Do you enjoy rock 'n' roll?",
            memorized : false
        },
        {
            word : "부모님이 근처에 사시나요?",
            mean : "Do your parents live near you?",
            memorized : false
        },
        {
            word : "고무는 어디서 나오는 거죠?",
            mean : "Where does rubber come from?",
            memorized : false
        },
        {
            word : "\"한옥\"은 무슨 뜻이에요?",
            mean : "What does \"hanok\" mean?",
            memorized : false
        },
        {
            word : "얼마나 자주 출장 가요?",
            mean : "How often do you travel on business?",
            memorized : false
        },
        {
            word : "골프를 치려면 돈이 얼마나 들어요?",
            mean : "How much does it cost to play golf?",
            memorized : false
        },
        {
            word : "무슨 일을 하시죠?",
            mean : "What do you do?",
            memorized : false
        },
        {
            word : "영어를 할 줄 알아요?",
            mean : "Do you speak English?",
            memorized : false
        },
        {
            word : "부모님 두 분 다 일하시나요?",
            mean : "Do your parents both work?",
            memorized : false
        },
        {
            word : "럭비는 어느 나라에서 온 거죠?",
            mean : "Where does rugby come from?",
            memorized : false
        },
        {
            word : "그것은 무슨 뜻이에요?",
            mean : "What does it mean?",
            memorized : false
        },
        {
            word : "그녀는 얼마나 자주 해외 여행을 가요?",
            mean : "How often does she travel abroad?",
            memorized : false
        },
        {
            word : "가입하려면 돈이 얼마나 들어요?",
            mean : "How much does it cost to join?",
            memorized : false
        },
        {
            word : "휴가 때는 무엇을 하시죠?",
            mean : "What do you do during vacations?",
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