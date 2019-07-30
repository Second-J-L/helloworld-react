/**
 * @desc 这是一个demo组件，包括了一个组件的最基本元素
 * @author 
 * @created 2019-07-29 
 */

import React from 'react'
import './demo.less'

class Demo extends React.Component {
  /**
   * @desc 不用解释了吧，这是组件的构造函数
   * @param {*} props 
   */
  constructor(props) {
    super(props)

    this.state = {}
  }

  /**
   * @desc 不用解释了吧，render函数
   */
  render() {
    return (
      <div>demo组件</div>
    )
  }
}

export default Demo
