module.exports = {
    title: 'Project Title',
    description: 'Project Description',
    themeConfig: {
        nav: [
            { text: 'Home', link: '/Home/' },
            { text: 'Guide', link: '/Guide/' },
        ],

        sidebar: [
           {
               title: 'Home',
               path: '/Home/',
           },
           {
               title: 'Submenu',
               path: '/Submenu/',
           }
        ],
    }
}

