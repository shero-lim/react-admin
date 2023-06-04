import { Component } from "react"
import { formateDate } from "../../utils/dateUtils"
import memoryUtils from "../../utils/memoryUtils"
import "./index.less"
import { reqWeather } from "../../api"
import { createBrowserHistory } from "history";
import { items } from "../../config/menuConfig";
import { Modal } from 'antd';
import storageUtils from "../../utils/storageUtils"
import { ExclamationCircleFilled } from '@ant-design/icons';
import LinkButton from "../link-button"

class Header extends Component {
    constructor(props){
        super(props)
    }

    state = {
        currentTime: formateDate(Date.now()),
        dayPictureUrl: "",
        weather: "晴",
    }

    getTime = () => {
        this.intervalId = setInterval(() => {
            const currentTime = formateDate(Date.now());
            this.setState({ currentTime })
        }, 1000)
    }

    getWeather = async() =>{
       const { dayPictureUrl, weather } = await reqWeather("北京")
       // 更新状态
       this.setState({ dayPictureUrl, weather })
    }

    getTitle = ()=>{
        let history = createBrowserHistory();
        const location = history.location.pathname
        let title = "首页"
        items.forEach(item=>{
            if(item.label?.props?.to == location){
                title = item.label.props.children
            }else if(item.children){
                const cItem = item.children.find(cItem => cItem.label.props.to == location)
                if(cItem){
                    title = cItem.label.props.children
                }
            }
        })
        return title
    }

    /**
     * 退出登录
     */
    logout = ()=>{
        let history = createBrowserHistory();

        Modal.confirm({
            title: '确定退出吗',
            icon: <ExclamationCircleFilled />,
            okText: 'Yes',
            okType: 'danger',
            cancelText: 'No',
            onOk() {
                storageUtils.removeUser()
                memoryUtils.user = {}
                history.go("/login")
            },
          })
    }

    /**
     * 第一次render()之后执行一次
     * 一般在此执行异步操作：发ajax请求/启动定时器
     */
    componentDidMount() {
        this.getTime()
    }

    /**
     * 当前组件卸载之前调用
     */
    componentWillUnmount(){
        clearInterval(this.intervalId)
    }

    render() {
        const { currentTime, dayPictureUrl, weather } = this.state
        const username = memoryUtils.user.username
        const title = this.getTitle()
        return (
            <div className="header">
                <div className="header-top">
                    <span>欢迎, {username}</span>
                    <LinkButton onClick={this.logout}>退出</LinkButton>
                </div>
                <div className="header-bottom">
                    <div className="header-bottom-left">{title}</div>
                    <div className="header-bottom-right">
                        <span>{currentTime}</span>
                        <img />
                        <span>{weather}</span>
                    </div>
                </div>
            </div>
        )
    }
}

export default Header