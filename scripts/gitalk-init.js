var gitalk = new Gitalk({
    clientID: '9bc6b0142cbe94ac7b96',
    clientSecret: '8990b3be4de1a800b06f2fe055935fa16c0eb86c',
    repo: 'isoheptane.github.io',
    owner: 'Isoheptane',
    admin:  ['Isoheptane'],
    id: location.pathname,      // Ensure uniqueness and len
    distractionFreeMode: false  // Facebook-like distraction
})
gitalk.render('gitalk-container');