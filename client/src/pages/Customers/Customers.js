import React from 'react'
import {connect} from 'react-redux'
import {compose} from 'redux'

const Customers = (props) => {
  console.log(props.customers)
  return (
    <div className="container">
      <div className="row">
        <div className="col s4 ">
          <div className="collection">
            <a href="javascript:void(0);" className="collection-item active">Гражданское право</a>
            <a href="javascript:void(0);" className="collection-item">Уголовное право</a>
            <a href="javascript:void(0);" className="collection-item">Административное право</a>
            <a href="javascript:void(0);" className="collection-item">Налоговое право</a>
          </div>
        </div>
        <div className="col s8 ">
          {props.customers.map(customer => (
            <div className="card">
              <div className="card-image">
                <img src="https://aforisma.ru/wp-content/uploads/2019/06/305e7d45f04e1b79-1024x682.jpg"/>
                <span className="card-title">{customer.name}</span>
              </div>
              <div className="card-content">
                <p>{customer.description}</p>
              </div>
              <div className="card-action">
                <a href="javascript:void(0);">Подробнее</a>
              </div>
            </div>
          ))}
        </div>
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
  connect(mapStateToProps, {})
)(Customers)