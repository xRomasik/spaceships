const INITIAL_STATE = {
    sections: [
        {
            title: 'space-X',
            imageUrl: 'https://cdn57.androidauthority.net/wp-content/uploads/2018/02/Space-X-falcon-heavy-space-rocket-Quad-HD-wallpapers-2.jpg',
            id: 1,
            linkUrl: '/hats'
        },
        {
            title: 'Nasa',
            imageUrl: 'https://hbr.org/resources/images/article_assets/2018/04/apr18-20-nasa-apollo-proj-archive-01.jpg',
            id: 2,
            linkUrl: ''
        },
        {
            title: 'Blue Origin',
            imageUrl: 'https://spacenews.com/wp-content/uploads/2017/09/newglenn-7m-large.jpg',
            id: 3,
            linkUrl: ''
        },
        {
            title: 'Virgin Galactic',
            imageUrl: 'https://media.gq-magazine.co.uk/photos/5d1399267fcc8e396881ff30/16:9/w_1920,c_limit/Virgin-Galactic-GQ-2Jun17_b.jpg',
            size: 'large',
            id: 4,
            linkUrl: ''
        },
        {
            title: 'Boeing',
            imageUrl: 'https://cdn.techexplorist.com/wp-content/uploads/2019/05/starliner.jpg',
            size: 'large',
            id: 5,
            linkUrl: ''
        },
    ]
};

const directoryReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        default:
            return state;
    }
}

export default directoryReducer;