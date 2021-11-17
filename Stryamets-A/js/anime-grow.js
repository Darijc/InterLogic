function startgrow() {

    var elements = document.querySelectorAll('.grow input');

    for (var i = 0, len = elements.length; i < len; i++) {

        var val = elements[i].getAttribute('value');

        anime({
            targets: elements[i],
            value: [0, val],
            delay: 1000,
            duration: 3000,
            round: 1,
            easing: 'easeInOutQuad'
        });
    }
}
