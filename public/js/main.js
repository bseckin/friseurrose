$(document).ready(function() {
    $('#fullpage').fullpage({
        anchors: ['startseite', 'bilder', 'adresse'],
        menu: '#menu',
        sectionsColor: ['#C63D0F', '#1BBC9B', '#7E8F7C'],
        navigationPosition: 'right',
        navigationTooltips: ['Startsteite', 'Bilder', 'Adresse'],
        loopBottom: true,
        animateAnchor: true,
        showActiveTooltip: true,
    });
});