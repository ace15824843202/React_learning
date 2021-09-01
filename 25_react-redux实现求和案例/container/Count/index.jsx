//引入UI组件
import CountUI from '../../components/Count'

//引入connect用于🔗UI组件与redux
import {connect} from "react-redux";
import {creatIncrementAction, creatReduceAction,createIncrementAsyncAction} from "../../redux/count_action"

/*
* 1.mapStateToProps函数返回的是一个对象
* 2.返回的对象中的key就作为传递给UI组件的props的key，value就作为传递给UI组件的props的value
* 3.mapStateToProps用于传递状态
*
* */
function mapStateToProps(state) {
    return {
        count: state
    }
}

/*
* 1.mapDispatchToProps函数返回的是一个对象
* 2.返回的对象中的key就作为传递给UI组件的props的key，value就作为传递给UI组件的props的value
* 3.mapStateToProps用于传递操作状态的方法
*
* */
function mapDispatchToProps(dispatch) {
    return {
        jia: (number) => dispatch(creatIncrementAction(number)),
        jian: (number) => dispatch(creatReduceAction(number)),
        jiaAsync: (number,time) => dispatch(createIncrementAsyncAction(number,time)),
    }
}

//使用connect()()创建并暴露一个Count容器组件
export default connect(mapStateToProps, mapDispatchToProps)(CountUI)