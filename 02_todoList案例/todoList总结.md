## todoList 案例相关知识点

### setState更新状态的2种写法

```
	(1).拆分组件，实现静态组件，注意：className,style的写法
					
	(2). 动态初始化列表，如何确定将数据放在那个组件的state中
	        --某个组件使用，放在七自身的state中
	        --某些组件使用，放在她们公共的父组件state中（官方撑操作为：状态提升）
    (3).关于父子通性：
            --【父组件】给【子组件】传递数据：通过prop传递
            --【子组件】给【父组件】传递数据：通过props传递，要求父提前给子传递一个函数，子把数据当作函数参数传回
    (4).注意defaultChecked和checked的区别，类是的还有：defaultValue和value的区别  
    (5).状态在哪里：操作转台的方法就写在哪里  
```



------



