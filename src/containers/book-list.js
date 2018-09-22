import React, {Component} from 'react';
import { connect }from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';


class BookList extends Component{

  renderList(){
    return this.props.books.map((book) =>{
      return (
        <li
        key={book.title}
        onClick ={()=>this.props.selectBook(book)}
        className="list-group-item">
        {book.title}</li>
      )
    })
  }

  render(){
    return(
      <ul className = "list-group col-sm-4">
        {this.renderList()}
    </ul>
    )
  }
}

function mapStateToProps(state){
  //whatever is retunred will show up as props inside BookList
  return{
    //state.books refers to the reducer in index.js
    books:state.books
  };
}

//anyhting returne dfrom this function will end up as props on the BookList container
function mapDispatchToProps(dispatch){
  //whenever selectBook is called, the result should be passed to all reducers
  return bindActionCreators({selectBook:selectBook}, dispatch)
}

//promote BookList from a component t a container - it needs to know about this new dispatch method, selectBook. Make it avail as a prop.
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
