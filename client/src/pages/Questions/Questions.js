import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import {compose} from 'redux'
import {setQuestionsThunk} from "../../redux/reducers/Questions-reducer";

const Questions = (props) => {
    useEffect(() => {
        props.setQuestionsThunk()
    }, []);
  return (
      <div className="row">
        <div className="col s4 ">
          <div className="collection">
            <a href="javascript:void(0);" className="collection-item active">Все отрасли</a>
            <a href="javascript:void(0);" className="collection-item">Гражданское право</a>
            <a href="javascript:void(0);" className="collection-item">Уголовное право</a>
            <a href="javascript:void(0);" className="collection-item">Административное право</a>
            <a href="javascript:void(0);" className="collection-item">Налоговое право</a>
          </div>
        </div>


        <div className="col s8">
          {props.customers.map(customer => (
            <div className="card #43a047 green darken-1">
              <div className="card-content white-text">
                <span className="card-title">{customer.name}</span>
                <p>{customer.description}</p>
              </div>
              <div className="card-action">
                <a href="#">Посмотреть ответ</a>
              </div>
            </div>
          ))}
        </div>
      </div>
  )
}

const mapStateToProps = state => {
  return {
    customers: state.customers.customers
  }
}


export default compose(
  connect(mapStateToProps, {setQuestionsThunk})
)(Questions)