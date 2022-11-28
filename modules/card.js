let basket = document.querySelector('.basket-left')
////// aaaa

let detll = document.createElement('div')
let det_kor = document.createElement('div')
let tochechki = document.createElement('div')
let sale_l_r = document.createElement('div')
let sale_l = document.createElement('div')
let sale_r = document.createElement('div')
let sale_l_r2 = document.createElement('div')
let sale_l2 = document.createElement('div')
let sale_r2 = document.createElement('div')
let sale_inf = document.createElement('div')
let itogo_l_r = document.createElement('div')
let itogo_l = document.createElement('div')
let itogo_r = document.createElement('p')
let but_oform = document.createElement('button')
let but_kredit = document.createElement('button')
let anketa = document.createElement('div')
let bigblock = document.createElement('div')


////// bbbbb

detll.classList.add("detll")
det_kor.classList.add('det_kor')
tochechki.classList.add('tochechki')
det_kor.innerHTML = 'Детали  заказа '
sale_l_r.classList.add('sale_l_r')
sale_l.classList.add('sale_l')
sale_l.innerHTML = 'Скидка >  '
sale_r.classList.add('sale_r')
sale_r.innerHTML = ' - 9 999 ₽ '
sale_l_r2.classList.add('sale_l_r2')
sale_l2.classList.add('sale_l2')
sale_l2.innerHTML = 'Скидка по акции  '
sale_r2.classList.add('sale_r2')
sale_r2.innerHTML = '-9 999 ₽ '
sale_inf.classList.add('sale_inf')
sale_inf.innerHTML = 'Управлять скидками вы можете на шаге <br/>  выбора  способа  оплаты'
itogo_l_r.classList.add('itogo_l_r')
itogo_l.classList.add('itogo_l')
itogo_l.innerHTML = 'Итого '
itogo_r.classList.add('itogo_r')
but_oform.classList.add('but_oform')
but_oform.innerHTML = ' Перейти к оформлению'
but_kredit.classList.add('but_kredit')
but_kredit.innerHTML = 'В расрочку или в кредит'
anketa.classList.add('anketa')
anketa.innerHTML = 'Заполните анкету и получите одобрение в <br/> течение  несколько минут  '
//////cccccc
let data = JSON.parse(localStorage.getItem('liked')) || []
let url = "http://localhost:7777/goods";

console.log(data);

axios.get(url)
    .then(res => {
        let temp = []

        for (let item of res.data) {
            for (let id of data) {
                if (item.id === id) {
                    temp.push(item)
                }
            }
        }
        console.log(temp);
        reloadCartItems(temp, basket)
    })
    let total = 0
let allPrice = []
const reloadCartItems = (arr, place) => {
    place.innerHTML = ""

    console.log(arr, place);

    for (let item of arr) {
        let n = 1
        let basket_left = document.createElement('div')
        let left = document.createElement('div')
        let right = document.createElement('div')
        let left_img = document.createElement('img')
        let info = document.createElement('div')
        let info_p_one = document.createElement('p')
        let info_p_two = document.createElement('p')
        let cc = document.createElement('div')
        let price = document.createElement('p')
        let counter = document.createElement('div')
        let num = document.createElement('p')
        let minus = document.createElement('div')
        let plus = document.createElement('div')
        let del = document.createElement('div')
        let favorite = document.createElement('div')
        let t_l_r = document.createElement('div')
        let t_l = document.createElement('div')
        let t_r = document.createElement('div')


        basket_left.classList.add('basket_left')
        left_img.src = item.media[0]
        info.classList.add('info')
        left.classList.add('left')
        right.classList.add('right')
        info_p_one.classList.add('title')
        info_p_one.innerHTML = item.title
        info_p_two.innerHTML = 'Добавить аксессуар'
        info_p_two.classList.add('add')
        price.classList.add('price')
        counter.classList.add('counter')
        minus.classList.add('minus')
        num.classList.add('num')
        plus.classList.add('plus')
        minus.innerHTML = '-'
        num.innerHTML = 1
        plus.innerHTML = '+'
        del.classList.add('delete')
        favorite.classList.add('favorite')
        del.innerHTML = 'Удалить'
        favorite.innerHTML = 'В изображеные'
        t_l_r.classList.add('t_l_r')
        t_l.classList.add('t_l')
        t_l.innerHTML = item.title
        t_r.classList.add('t_r')
        t_r.innerHTML = item.price
        price.innerHTML = item.price
        allPrice.push(+t_r.innerHTML)

        plus.onclick = () => {
            n++
            num.innerHTML = n
            price.innerHTML = item.price * n
            t_r.innerHTML = item.price * n
            allPrice.push(+t_r.innerHTML)
        }
        del.onclick = () => {
            data = data.filter(el => el !== item.id)
            localStorage.setItem('liked', JSON.stringify(data))
            reloadCartItems(temp, basket)
        }
        minus.onclick = () => {

            if (n === 1) {
                n = 1
            } else {
                n--
                num.innerHTML = n
                price.innerHTML = item.price * n
                t_r.innerHTML = item.price * n
                allPrice.push(+t_r.innerHTML)
            }
        }
        left.append(left_img, info)
        info.append(info_p_one, info_p_two)
        right.append(cc, price)
        cc.append(counter, del, favorite)
        counter.append(minus, num, plus)
        basket_left.append(left, right)
        place.prepend(basket_left)
        t_l_r.append(t_l,t_r)
        bigblock.append(t_l_r)
        
    }
    console.log(allPrice);
    total = allPrice.reduce((a,b) => a + b)
    itogo_r.innerHTML = total + "₽"
}




let kor_block = document.querySelector('.basket_right')
console.log(kor_block);




sale_l_r.append(sale_l, sale_r)
sale_l_r2.append(sale_l2, sale_r2)
itogo_l_r.append(itogo_l, itogo_r)



detll.append(det_kor, bigblock, sale_l_r, sale_l_r2, sale_inf, itogo_l_r, but_oform, but_kredit, anketa)
kor_block.append(detll)
