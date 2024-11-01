const JSONdata = `
    [
        {
            "imgsrc": "./img/i1.png",
            "heading": "ELLERY X M'O CAPSULE",
            "paragraph": "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
            "price": "$52.00"
        },
        {
            "imgsrc": "./img/i2.png",
            "heading": "ELLERY X M'O CAPSULE",
            "paragraph": "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
            "price": "$52.00"
        },
        {
            "imgsrc": "./img/i3.png",
            "heading": "ELLERY X M'O CAPSULE",
            "paragraph": "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
            "price": "$52.00"
        },
        {
            "imgsrc": "./img/i4.png",
            "heading": "ELLERY X M'O CAPSULE",
            "paragraph": "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
            "price": "$52.00"
        },
        {
            "imgsrc": "./img/i5.png",
            "heading": "ELLERY X M'O CAPSULE",
            "paragraph": "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
            "price": "$52.00"
        },
        {
            "imgsrc": "./img/i6.png",
            "heading": "ELLERY X M'O CAPSULE",
            "paragraph": "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
            "price": "$52.00"
        }
    ]

`

const menuActive = document.querySelector('.menu-active');
const burger = document.querySelector('.menubtn3');


function toggleMenu() {
    menuActive.classList.toggle('hidden');
}

burger.addEventListener('click', toggleMenu);

const data = JSON.parse(JSONdata);
console.log(data);

const productbox = document.querySelector('.boxes2');


data.forEach(element => {
    const product = document.createElement('div');
    product.classList.add('boxtype2');

    const imgDiv = document.createElement('div');
    imgDiv.className = 'imgtype2';

    const shadeDiv = document.createElement('div');
    shadeDiv.className = 'imgtype2_shade';
    
    const button = document.createElement('button');
    button.className = 'addtocartbtn';

    const icon = document.createElement('img');
    icon.src = './img/f4.png';

    const buttonTextElement = document.createElement('p');
    buttonTextElement.textContent = "add to cart";
    buttonTextElement.classList.add('addtocartbtntext');

    const description = document.createElement('div');
    description.classList.add('textboxtype2');

    const img = document.createElement('img');
    img.setAttribute('src', element.imgsrc);
    imgDiv.appendChild(img);

    const heading = document.createElement('p');
    heading.classList.add('p1');
    heading.textContent = element.heading;

    const paragraph = document.createElement('p');
    paragraph.classList.add('p2');
    paragraph.textContent = element.paragraph;

    const price = document.createElement('p');
    price.classList.add('p3');
    price.textContent = element.price;

    button.appendChild(icon);
    button.appendChild(buttonTextElement);

    shadeDiv.appendChild(button);
    imgDiv.appendChild(shadeDiv);

    product.appendChild(imgDiv);
    product.appendChild(description);
    description.appendChild(heading);
    description.appendChild(paragraph);
    description.appendChild(price);
    productbox.appendChild(product);
});