【DOM object】
一份文档就是一颗节点树
节点分为不同的类型：元素节点、属性节点和文本节点
getElementById将返回一个对象，该对象对应着文档里的一个特定的元素节点
getElementsByTagName和getElementsByClassName将返回一个对象数组，他们分别对应着文档里的一组特定的元素节点
每个节点都是一个对象

【获取和设置属性】
object.getAttribute(attribute)
object.setAttribute(attribute,value)
