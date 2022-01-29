let observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
        if (entry.isIntersecting) {
            if (include(entry, 'fadein')) {
                el('.' + entry.target.classList[0]).classList.add('fade-in')
            } else if (include(entry, 'fadeleft')) {
                el('.' + entry.target.classList[0]).classList.add('fade-in-left')
            } else if (include(entry, 'faderight')) {
                el('.' + entry.target.classList[0]).classList.add('fade-in-right')
            } else if (include(entry, 'fadedown')) {
                el('.moscow .' + entry.target.classList[0]).classList.add('fade-in-down')
                el('.' + entry.target.classList[0]).classList.add('fade-in-down')
            }

            if (include(entry, 'bl_3')) {
                setTimeout(() => {
                    outNum(percents, time, 1, document.querySelector('.w_items .item .n'))
                }, 1000)
            }
        }
    })
})

let include = (entry, text) => {
    return entry.target.classList.value.includes(text)
}

let el = (text) => {
    return document.querySelector(text)
}

let observe = (mas) => {
    mas.forEach((title) => {
        return observer.observe(el(title))
    })
}

let index = 0

const percents = [23, 25, 26, 27, 28],
    time = 700

function outNum(num, time, step, elem, n = 0) {
    num = num[index]
    let e = elem
    let t = Math.round(time / (num / step));
    let interval = setInterval(() => {
        n = n + step
        if (n == num) {
            clearInterval(interval)
            index += 1
            if (index <= document.querySelectorAll('.w_items .item .n').length) {
                time = time + 50
                outNum(percents, time, 1, document.querySelectorAll('.w_items .item .n')[index])
            }
        }
        try {
            e.innerHTML = n + '%'
        } catch {
        }
    }, t)
}

observer.observe(el('.bl_3'))

const elements = [
    '.inv_txt_1',
    '.inv_abs_txt_1',
    '.block-left-anim',
    '.block-right-anim',
    '.inv_txt_3',
    '.greenbonds',
    '.b_1',
    '.b_2',
    '.b_3',
    '.moscow .wg_1',
    '.title-animation-blog2',
    '.moscow .wg_2',
    '.moscow .wg_3',
    '.moscow .wg_4',
    '.card1',
    '.card2',
    '.title-animation-blog3',
    '.blog2-circles1',
    '.blog2-circles2',
    '.content-title-rating',
    '.content-invest-rating',
    '.h1-title-rating',
    '.h1-subtitle-rating',
    '.blog2-subtitle',
    '.blog2-title',
    '.blog2-item1',
    '.blog2-item2',
    '.blog2-item3',
    '.blog2-item4',
    '.wg2-subtitle',
    '.wg2-title',
    '.wg3-flex',
    '.wg4-img',
    '.subtitle-footer',
    '.title-footer',
    '.content-footer',
    '.items-footer',
    '.subtitle2',
    '.title2',
    '.group',
    '.block-footer'
]

observe(elements)
