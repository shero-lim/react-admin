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