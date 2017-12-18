$(document).ready(function() {
    $('#fullpage').fullpage({
        anchors: ['startseite', 'bilder', 'social', 'adresse'],
        menu: '#menu',
        navigationPosition: 'right',
        navigationTooltips: ['Startsteite', 'Bilder', 'Social', 'Adresse'],
        loopBottom: true,
        animateAnchor: true,
        showActiveTooltip: true,
        autoScrolling: false,
        scrollOverflowReset: true,
    });
});