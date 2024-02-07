export default function checkout (cart) {
    fetch("/api/checkout", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            items: cart,
            location: window.location.origin
        })
    }).then(res => {
        if (res.ok) return res.json()
        return res.json().then(json => Promise.reject(json))
    }).then(({url}) => {
        window.location = url
    }).catch(e => {
        console.error(e.error)
    })
}

function applyDiscountAndMultiplier (cart) {
    let double = 0,
    result = [];
    cart.forEach( i => {
        if (i.price == 65 && double == 1)
        {
            const n = result.findIndex(ii => ii.price == 6500);
            result = result.map((ii, iin) => n == iin ? {...ii, name: `${ii.name} & ${i.name}`, price: 100/.01} : ii);
            double = 0
        } else {
            result.push({ ...i, price: i.price/.01 })
            if (i.price == 65) double ++;
        }
    } );
    return result
}

export function listProducts () {
    return fetch("/api/products", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({})
    }).then(res => {
        if (res.ok) return res.json()
        return res.json().then(json => Promise.reject(json))
    }).then(({products}) => {
        return products
    }).catch(e => {
        console.error(e.error)
    })
}

export function disableProducts (x) {
    return fetch("/api/success", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            session_id: x,
        })
    }).then(res => {
        if (res.ok) return res.json()
        return res.json().then(json => Promise.reject(json))
    }).then(x => {
        return x
    }).catch(e => {
        console.error(e.error)
    })
}