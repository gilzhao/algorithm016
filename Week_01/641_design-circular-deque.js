// 构造函数
var MyCircularDeque = function(k) {
    this.capacity = k + 1
    this.queue = []
    this.head = 0
    this.rear = 0

    // 辅助函数
    this.next = (n) => (n + 1) % this.capacity
    this.prev = (n) => (n - 1 + this.capacity) % this.capacity
};

// 队首插入
MyCircularDeque.prototype.insertFront = function(value) {
    if (this.isFull()) return false
    this.head = this.prev(this.head)
    this.queue[this.head] = value
    return true
};

// 队尾插入
MyCircularDeque.prototype.insertLast = function(value) {
    if (this.isFull()) return false
    this.queue[this.rear] = value
    this.rear = this.next(this.rear)
    return true
};

// 头部删除
MyCircularDeque.prototype.deleteFront = function() {
    if (this.isEmpty()) return false
    this.head = this.next(this.head)
    return true
};

// 尾部删除
MyCircularDeque.prototype.deleteLast = function() {
    if (this.isEmpty()) return false
    this.rear = this.prev(this.rear)
    return true
};

// 获取队首元素
MyCircularDeque.prototype.getFront = function() {
    if (this.isEmpty()) return -1
    return this.queue[this.head]
};

// 获取队尾元素
MyCircularDeque.prototype.getRear = function() {
    if (this.isEmpty()) return -1
    return this.queue[this.prev(this.rear)]
};

// 判断是否为空
MyCircularDeque.prototype.isEmpty = function() {
    return this.head === this.rear
};  

// 判断是否为满
MyCircularDeque.prototype.isFull = function() {
    return this.next(this.rear) === this.head
};
