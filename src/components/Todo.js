import React from 'react'
import "../css/Todo.css"
import {Button} from 'reactstrap'


function Todo( {description, done, onChangeTodo, onRemoveTodo, index}) {
  
 
  return (
    done ?
    <div className="todoElement_done">
        <p className='description'>
            {description}
        </p>
        <Button
          onClick={() => onChangeTodo(index)}
        >✘
        <div></div>
        </Button>
          
        <Button
          onClick={() => onRemoveTodo(index)}
        ><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAclBMVEX///8AAABERET8/PwMDAyrq6vFxcXm5ubc3NyRkZGmpqYqKipUVFS4uLhubm7V1dW+vr5hYWHx8fGampo3NzeKioouLi5JSUmxsbH39/d8fHwhISFOTk6Dg4MlJSV6enoVFRU9PT00NDRjY2NycnLY2NjDvgQeAAAEM0lEQVR4nO3d63KiQBAFYC4qahQQRMWImpi8/ysuiZuqXVuwBw/OmDrnVyqFVH8FzkwjqOf3k8Hr6j3YzRZxfDhURVFM8r+ZDuuc/5zU/98ePuLFbBe8rV57qsTrY6frSZKVnmHKaBP3oexBWI1DU91Pss0SXg5cWGRdeeeM9uCCwMIguc9XpyywJWGF287n579JBsiaoMIC4aszRo44SOEEBPS8CEgECk8wYD3e4MrCCd/vHET/zxRWF044QgI9L0DVBRMusEAvQRUGE36Chd4JVBhKOEMDYYMNSjiHC0PQOxEk3Bu3ErcDGk5BwhgP9MaY0kBC/ElaZwUpDSSMrhQ42s6Ct+VyuRd5WZ4TBMF6tlicPqr8Wk+yhZSGEb7LniJam+0il8IhpDaM8MqSdGG6D3kUMZM+RljJQ2hlH9eCEU5FdXPjfezFPkpIJ4wRbkR1eYdSRCBdIkYoJ4vKfCey+4JclOrrGBqOpF+RQ80RUdtN4Wq3iL+uWueTfPqV4Xc235l/J01TOR2O5qbZyGOYKl52uFO4G/Ww4MQmumFsFxaQq4N9p33ebBXKKcrNtF6aaxMunT9Df9I2+7YJU9uF69PSLbcI++hq+0pLt9wiPNgu2yAt3XKLUE7j7iZs7palsIrG5zzRSVoPp+eaIzlzSCHu8xUbKX+9MKOQQudDIYXuh0IK3Q+FFLofCs/C8HmjEu6Dp45C+NtC4fOHwucPhc8fjXDgbkDCse2lWHNiCimk0HoopJBC+6GQQgrth0IKKbQfCimk0H4opJBC+3mYsEwuIl4SXm6RiGelsptbWBSK7z84Xm4hnwcVX9cjnihYuyx8uS0U93wIoeKbKCikkEIKKaSQQgoppJBCCimkkEIKKaSQQgoppJBCCimkkEIKKaSQQgoppJBCCimkkEIKKaSQQgoppJBCCimkkEIKKaSQQgoppJBC94SnXy9U/K4yhRRSSCGFFFJI4TnyR88ppJBCCimkkEIKHyicUUjhOSMKKaSQQgopvJnUWWG4ppDCzsLjbSHiu6AfJ8zSi4jBqbzcIhVXYaPLLW6vhx8ntJVQ/kh1J+HcNqQx4RuFFFJoO+ESI9zYhjSmXFGoEw5tQxpT7jHCqW1IY8pXjDC3DWlMecQIRRfgTDJF9RphZRvSGNmxdBOebEMak4CEx9K2pCk5SKi4FGUpivZQJ/ywLWmI5m2oE/qOnqYFTujmnK+ZDbXCVWZbcy2acUYrdHJZkymWbHrhwMGDONGVrhT6sW2PiGa2NxE610KFisbJTKi4X+GhUTzxZCrcK35S8nFRTYWGQn/lEFE5yhgK/cGnbdhPtgZVmwj9gRufYGSKZ/I6Cus1uAMr1FQ303cU+kfbs0akuB3xLqHvLzcW1zeJyTuwq7CeN6qRFeR4qrj1AiKsc9wdinw6fFjySRUrrm9fyx8ijK5RarUBFAAAAABJRU5ErkJggg==" height="20" alt="asd"/>
        </Button>
       <div></div>
    </div>
    :
    <div className="todoElement_false">
        <p className='description'>
            {description}
        </p>
      <Button
          onClick={() => onChangeTodo(index)}
      >✓</Button>
       <Button
          onClick={() => onRemoveTodo(index)}
       >
         <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAclBMVEX///8AAABERET8/PwMDAyrq6vFxcXm5ubc3NyRkZGmpqYqKipUVFS4uLhubm7V1dW+vr5hYWHx8fGampo3NzeKioouLi5JSUmxsbH39/d8fHwhISFOTk6Dg4MlJSV6enoVFRU9PT00NDRjY2NycnLY2NjDvgQeAAAEM0lEQVR4nO3d63KiQBAFYC4qahQQRMWImpi8/ysuiZuqXVuwBw/OmDrnVyqFVH8FzkwjqOf3k8Hr6j3YzRZxfDhURVFM8r+ZDuuc/5zU/98ePuLFbBe8rV57qsTrY6frSZKVnmHKaBP3oexBWI1DU91Pss0SXg5cWGRdeeeM9uCCwMIguc9XpyywJWGF287n579JBsiaoMIC4aszRo44SOEEBPS8CEgECk8wYD3e4MrCCd/vHET/zxRWF044QgI9L0DVBRMusEAvQRUGE36Chd4JVBhKOEMDYYMNSjiHC0PQOxEk3Bu3ErcDGk5BwhgP9MaY0kBC/ElaZwUpDSSMrhQ42s6Ct+VyuRd5WZ4TBMF6tlicPqr8Wk+yhZSGEb7LniJam+0il8IhpDaM8MqSdGG6D3kUMZM+RljJQ2hlH9eCEU5FdXPjfezFPkpIJ4wRbkR1eYdSRCBdIkYoJ4vKfCey+4JclOrrGBqOpF+RQ80RUdtN4Wq3iL+uWueTfPqV4Xc235l/J01TOR2O5qbZyGOYKl52uFO4G/Ww4MQmumFsFxaQq4N9p33ebBXKKcrNtF6aaxMunT9Df9I2+7YJU9uF69PSLbcI++hq+0pLt9wiPNgu2yAt3XKLUE7j7iZs7palsIrG5zzRSVoPp+eaIzlzSCHu8xUbKX+9MKOQQudDIYXuh0IK3Q+FFLofCs/C8HmjEu6Dp45C+NtC4fOHwucPhc8fjXDgbkDCse2lWHNiCimk0HoopJBC+6GQQgrth0IKKbQfCimk0H4opJBC+3mYsEwuIl4SXm6RiGelsptbWBSK7z84Xm4hnwcVX9cjnihYuyx8uS0U93wIoeKbKCikkEIKKaSQQgoppJBCCimkkEIKKaSQQgoppJBCCimkkEIKKaSQQgoppJBCCimkkEIKKaSQQgoppJBCCimkkEIKKaSQQgoppJBC94SnXy9U/K4yhRRSSCGFFFJI4TnyR88ppJBCCimkkEIKHyicUUjhOSMKKaSQQgopvJnUWWG4ppDCzsLjbSHiu6AfJ8zSi4jBqbzcIhVXYaPLLW6vhx8ntJVQ/kh1J+HcNqQx4RuFFFJoO+ESI9zYhjSmXFGoEw5tQxpT7jHCqW1IY8pXjDC3DWlMecQIRRfgTDJF9RphZRvSGNmxdBOebEMak4CEx9K2pCk5SKi4FGUpivZQJ/ywLWmI5m2oE/qOnqYFTujmnK+ZDbXCVWZbcy2acUYrdHJZkymWbHrhwMGDONGVrhT6sW2PiGa2NxE610KFisbJTKi4X+GhUTzxZCrcK35S8nFRTYWGQn/lEFE5yhgK/cGnbdhPtgZVmwj9gRufYGSKZ/I6Cus1uAMr1FQ303cU+kfbs0akuB3xLqHvLzcW1zeJyTuwq7CeN6qRFeR4qrj1AiKsc9wdinw6fFjySRUrrm9fyx8ijK5RarUBFAAAAABJRU5ErkJggg==" height="20" alt="asd"/>
       </Button>
       <div></div>
    </div>
  )
}


export default Todo