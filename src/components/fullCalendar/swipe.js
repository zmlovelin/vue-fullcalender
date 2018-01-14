export default class swipe {
    constructor(dom) {
        this.$el = dom;
        this.bindSwipe();
    }
    bindSwipe() {
        let start = 0,
            move = 0,
            isMove = false,
            dis = '';
        this.$el.addEventListener('touchstart', e => {
            start = e.changedTouches[0].clientX;
        })
        this.$el.addEventListener('touchmove', e => {
            move = start - e.changedTouches[0].clientX;
            isMove = true;
        })
        this.$el.addEventListener('touchend', e => {
            move = start - e.changedTouches[0].clientX;
            dis = move > 0 ? 'left' : move < 0 ? 'right' : '';
            if (Math.abs(move) >= this.$el.offsetWidth / 3 && isMove) {
                if (dis === 'left' && this.left) {
                    this.left();
                } else if (dis === 'right' && this.right) {
                    this.right();
                }
            }
            dis = '';
            start = 0;
            isMove = false;
            move = 0;
        })
    }
    left(callBack) {
        this.left = callBack;
        return this;
    }
    right(callBack) {
        this.right = callBack;
        return this;
    }
}