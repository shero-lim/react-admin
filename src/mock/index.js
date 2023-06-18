import Mock from "mockjs"

Mock.setup({timeout: "1000"});

Mock.mock("/login", "post", {
    data: {
        "_id": "qwe",
        "status": 1,
        "username": "admin",
        "password": "admin"
    }
})

Mock.mock("/manage/category/list?parentId=0", "get", {
    data: {
        status: 0,
        data: [
            {
                parentId: '0',
                _id: '5ca9d695b49ef916541160ba',
                name: "家用电器",
                __v: 0,
            },
            {
                parentId: '0',
                _id: '5ca9d695b49ef916541160bb',
                name: "电脑",
                __v: 0,
            },
            {
                parentId: '0',
                _id: '5ca9d695b49ef916541160bc',
                name: "图书",
                __v: 0,
            },
            {
                parentId: '0',
                _id: '5ca9d695b49ef916541160bd',
                name: "玩具",
                __v: 0,
            },
            {
                parentId: '0',
                _id: '5ca9d695b49ef916541160be',
                name: "箱包",
                __v: 0,
            },
            {
                parentId: '0',
                _id: '5ca9d695b49ef916541160bf',
                name: "服装",
                __v: 0,
            },
            {
                parentId: '0',
                _id: '5ca9d695b49ef916541160bg',
                name: "食品",
                __v: 0,
            },
            {
                parentId: '0',
                _id: '5ca9d695b49ef916541160bh',
                name: "医药",
                __v: 0,
            },
            {
                parentId: '0',
                _id: '5ca9d695b49ef916541160bi',
                name: "汽车产品",
                __v: 0,
            },
            {
                parentId: '0',
                _id: '5ca9d695b49ef916541160bj',
                name: "医药",
                __v: 0,
            },
            {
                parentId: '0',
                _id: '5ca9d695b49ef916541160bk',
                name: "医药",
                __v: 0,
            },
            {
                parentId: '0',
                _id: '5ca9d695b49ef916541160bl',
                name: "医药",
                __v: 0,
            },
            {
                parentId: '0',
                _id: '5ca9d695b49ef916541160bm',
                name: "医药",
                __v: 0,
            },
        ]
    }
})

Mock.mock("/manage/category/list?parentId=5ca9d695b49ef916541160ba", "get", {
    data: {
        status: 0,
        data: [
            {
                parentId: '5ca9d695b49ef916541160ba',
                _id: '5ca9d695b49ef916541160bo',
                name: "冰箱",
                __v: 0,
            },
            {
                parentId: '5ca9d695b49ef916541160ba',
                _id: '5ca9d695b49ef916541160bp',
                name: "空调",
                __v: 0,
            },
            {
                parentId: '5ca9d695b49ef916541160ba',
                _id: '5ca9d695b49ef916541160bq',
                name: "洗衣机",
                __v: 0,
            },
            {
                parentId: '5ca9d695b49ef916541160ba',
                _id: '5ca9d695b49ef916541160br',
                name: "电视",
                __v: 0,
            },
            {
                parentId: '5ca9d695b49ef916541160ba',
                _id: '5ca9d695b49ef916541160bs',
                name: "厨卫电器",
                __v: 0,
            },
        ]
    }
})