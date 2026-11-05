:::tip 来源
本文整理自 [SegmentFault · 浏览器：一个浏览器是如何工作的？（阶段二）](https://segmentfault.com/a/1190000018920042)
:::

# 浏览器是如何工作的（二）：整体流程与 DOM 构建

## 整体流程

字符流 -> 状态机 -> 词token -> 栈 -> dom
构建 DOM 的过程是：从父到子，从先到后，一个一个节点构造，并且挂载到DOM树上

## 如何解析请求回来的 HTML 代码

把respone拿到的字符流通过状态机解析成一个个的词

- 词（token）是如何被拆分的
  - 拆分：最小有意义单元 - token(词)
  - 词的种类大约只有标签开始、属性、标签结束、注释、CDATA 节点...
  - eg:
    ```js
    <p class="a">text text text</p>
    ```
    - <p“标签开始”的开始；
    - class=“a” 属性
    - “标签开始”的结束；
    - text text text 文本；
    - /p>标签结束
- 状态机
  - 为什么使用：我们每读入一个字符，其实都要做一次决策，而且这些决定是跟“当前状态”有关的
  - 定义：把每个词的“特征字符”逐个拆开成独立状态，然后再把所有词的特征字符链合并起来，形成一个联通图结构。
  - 绝大多数语言的词法部分都是用状态机实现的,HTML 官方文档规定了 80 个状态
  - eg: 词法部分

## DOM 树又是如何构建的

- 栈来实现，当接收完所有输入，栈顶就是最后的根节点，我们 DOM 树的产出，就是这个 stack 的第一项
- Node 类，所有的节点都会是这个 Node 类的实例。不一样的 HTML 节点对应了不同的 Node 的子类，此处的实现，我们进行简化，只把 Node 分为 Element 和 Text
  ```js
  function Element(){
      this.childNodes = [];
  }
  function Text(value){
      this.value = value || "";
  }
  ```
- 规则：
  - token中tag start和tag end需要成对实现，使用的栈正是用于匹配开始和结束标签的方案(编译原理技巧)
  - Text 节点：把相邻的 Text 节点合并起来，当词（token）入栈时，检查栈顶是否是 Text 节点，果是的话就合并 Text 节点
- 构建过程： (默认：源代码完全遵循 xhtml，HTML 具有很强的容错能力，奥妙在于当 tag end 跟栈顶的 start tag 不匹配的时候如何处理，暂时不考虑）
  - 栈顶元素就是当前节点；
  - 遇到属性，就添加到当前节点；
  - 遇到文本节点，如果当前节点是文本节点，则跟文本节点合并，否则入栈成为当前节点的子节点；
  - 遇到注释节点，作为当前节点的子节点；
  - 遇到 tag start 就入栈一个节点，当前节点就是这个节点的父节点
  - 遇到 tag end 就出栈一个节点（还可以检查是否匹配）

完整的语法和词法分析代码

- 词法分析 每一个状态是一个函数，通过“if else”来区分下一个字符做状态迁移。这里所谓的状态迁移，就是当前状态函数返回下一个状态函数。
  ```js
  const EOF = void 0

  // 词法分析器接受字符的
  function HTMLLexicalParser(syntaxer) {
      let state = data
      let token = null
      let attribute = null
      let characterReference = ''

      this.receiveInput = function (char) {
          if (state == null) {
              throw new Error('there is an error')
          } else {
                // 通过 state 来处理输入的字符流
              state = state(char)
          }
      }

      this.reset = function () {
          state = data
      }

        // 状态机 c:每一个字符
      function data(c) {
          switch (c) {
              case '&':
                  return characterReferenceInData
                          // tagOpenState 是接受了一个“ < ” 字符，来判断标签类型的状态

              case '<':
                  return tagOpen

                  // perhaps will not encounter in javascript?
                  // case '\0':
                  //   error()
                  //   emitToken(c)
                  //   return data

                  //  can be handle by default case
                  // case EOF:
                  //   emitToken(EOF)
                  //   return data

              default:
                  emitToken(c)
                  return data
          }
      }

      // only handle right character reference
      function characterReferenceInData(c) {
          if (c === ';') {
              characterReference += c
              emitToken(characterReference)
              characterReference = ''
              return data
          } else {
              characterReference += c
              return characterReferenceInData
          }
      }

      function tagOpen(c) {
          if (c === '/') {
              return endTagOpen
          }
          if (/[a-zA-Z]/.test(c)) {
              token = new StartTagToken()
              token.name = c.toLowerCase()
              return tagName
          }
          // no need to handle this
          // if (c === '?') {
          //   return bogusComment
          // }
          return error(c)
      }

      function tagName(c) {
          if (c === '/') {
              return selfClosingTag
          }
          if (/[\t \f\n]/.test(c)) {
              return beforeAttributeName
          }
          if (c === '>') {
              emitToken(token)
              return data
          }
          if (/[a-zA-Z]/.test(c)) {
              token.name += c.toLowerCase()
              return tagName
          }
      }

      function beforeAttributeName(c) {
          if (/[\t \f\n]/.test(c)) {
              return beforeAttributeName
          }
          if (c === '/') {
              return selfClosingTag
          }
          if (c === '>') {
              emitToken(token)
              return data
          }
          if (/["'<]/.test(c)) {
              return error(c)
          }

          attribute = new Attribute()
          attribute.name = c.toLowerCase()
          attribute.value = ''
          return attributeName
      }

      function attributeName(c) {
          if (c === '/') {
              token[attribute.name] = attribute.value
              return selfClosingTag
          }
          if (c === '=') {
              return beforeAttributeValue
          }
          if (/[\t \f\n]/.test(c)) {
              return beforeAttributeName
          }
          attribute.name += c.toLowerCase()
          return attributeName
      }

      function beforeAttributeValue(c) {
          if (c === '"') {
              return attributeValueDoubleQuoted
          }
          if (c === "'") {
              return attributeValueSingleQuoted
          }
          if (/\t \f\n/.test(c)) {
              return beforeAttributeValue
          }
          attribute.value += c
          return attributeValueUnquoted
      }

      function attributeValueDoubleQuoted(c) {
          if (c === '"') {
              token[attribute.name] = attribute.value
              return beforeAttributeName
          }
          attribute.value += c
          return attributeValueDoubleQuoted
      }

      function attributeValueSingleQuoted(c) {
          if (c === "'") {
              token[attribute.name] = attribute.value
              return beforeAttributeName
          }
          attribute.value += c
          return attributeValueSingleQuoted
      }

      function attributeValueUnquoted(c) {
          if (/[\t \f\n]/.test(c)) {
              token[attribute.name] = attribute.value
              return beforeAttributeName
          }
          attribute.value += c
          return attributeValueUnquoted
      }

      function selfClosingTag(c) {
          if (c === '>') {
              emitToken(token)
              endToken = new EndTagToken()
              endToken.name = token.name
              emitToken(endToken)
              return data
          }
      }

      function endTagOpen(c) {
          if (/[a-zA-Z]/.test(c)) {
              token = new EndTagToken()
              token.name = c.toLowerCase()
              return tagName
          }
          if (c === '>') {
              return error(c)
          }
      }

        // 输出解析好的 token（词）
      function emitToken(token) {
          syntaxer.receiveInput(token)
      }

      function error(c) {
          console.log(`warn: unexpected char '${c}'`)
      }
  }

  class StartTagToken {}

  class EndTagToken {}

  class Attribute {}

  module.exports = {
      HTMLLexicalParser,
      StartTagToken,
      EndTagToken
  }

  // 使用

  const { HTMLLexicalParser } = require('./lexer')

  const testHTML = `<html maaa=a >
      <head>
          <title>cool</title>
      </head>
      <body>
          <img src="a" />
      </body>
  </html>`

  const dummySyntaxer = {
    receiveInput: (token) => {
      if (typeof token === 'string') {
        console.log(`String(${token.replace(/\n/, '\\n').replace(/ /, '<whitespace>')})`)
      } else {
        console.log(token)
      }
    }
  }

  const lexer = new HTMLLexicalParser(dummySyntaxer)

  for (let c of testHTML) {
    lexer.receiveInput(c)
  }

  //便于理解：状态迁移代码
  var state = data;
  var char
  while(char = getInput())
      state = state(char);
  ```
- 语法分析
  ```js
  //简单实现：伪代码
  function HTMLSyntaticalParser(){
      var stack = [new HTMLDocument];
      this.receiveInput = function(token) {
          //……
      }
      this.getOutput = function(){
          return stack[0];
      }
  }

  const { StartTagToken, EndTagToken } = require('./lexer')

  class HTMLDocument {
    constructor () {
      this.isDocument = true
      this.childNodes = []
    }
  }

  // 仅仅把 Node 分为 Element 和 Text
  class Node {}
  class Element extends Node {
    constructor (token) {
      super(token)
      for (const key in token) {
        this[key] = token[key]
      }
      this.childNodes = []
    }
    [Symbol.toStringTag] () {
      return `Element<${this.name}>`
    }
  }
  class Text extends Node {
    constructor (value) {
      super(value)
      this.value = value || ''
    }
  }

  function HTMLSyntaticalParser () {
    const stack = [new HTMLDocument]

    // receiveInput 负责接收词法部分产生的词（token），构建dom树的算法
    this.receiveInput = function (token) {
      // 检查栈顶是否是 Text 节点，如果是的话就合并 Text节点
      if (typeof token === 'string') {
        if (getTop(stack) instanceof Text) {
          getTop(stack).value += token
        } else {
          let t = new Text(token)
          getTop(stack).childNodes.push(t)
          stack.push(t)
        }
      } else if (getTop(stack) instanceof Text) {
        stack.pop()
      }

      // 匹配开始和结束标签
      if (token instanceof StartTagToken) {
        let e = new Element(token)
        getTop(stack).childNodes.push(e)
        return stack.push(e)
      }
      if (token instanceof EndTagToken) {
        return stack.pop()
      }
    }

    this.getOutput = () => stack[0]
  }

  function getTop (stack) {
    return stack[stack.length - 1]
  }

  module.exports = {
    HTMLSyntaticalParser
  }

  // 使用
  const { HTMLSyntaticalParser } = require('./syntaxer')
  const { HTMLLexicalParser } = require('./lexer')

  const syntaxer = new HTMLSyntaticalParser()
  const lexer = new HTMLLexicalParser(syntaxer)

  const testHTML = `<html maaa=a >
      <head>
          <title>cool</title>
      </head>
      <body>
          <img src="a" />
      </body>
  </html>`

  for (let c of testHTML) {
    lexer.receiveInput(c)
  }

  console.log(JSON.stringify(syntaxer.getOutput(), null, 2))
  ```

扩展阅读：从Chrome源码看浏览器如何构建DOM树
