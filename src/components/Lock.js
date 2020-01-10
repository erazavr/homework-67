import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux'
import './Lock.css'
const numbers = [7,8,9,4,5,6,1,2,3,0];
class Lock extends Component {
    render() {
        return (
            <Fragment>
                {this.props.isCorrect ?
                    <input className='field' style={{backgroundColor: 'green', border: '4px solid'}} type='text' defaultValue={this.props.code}/>:
                    <input className='field' type='password' defaultValue={this.props.code}/>
                }
                <div className='numbers'>
                    {numbers.map(num => {
                        return <button key={num} className='btn' onClick={()=>this.props.number(num)}>{num}</button>
                    })}
                    <button className='btn' onClick={this.props.remove}>X</button>
                    <button className='btn' onClick={this.props.result}>E</button>
                </div>
            </Fragment>
        );
    }
}
const mapStateProps = state => {
    return {
        code: state.code,
        isCorrect: state.isCorrect,
    }
};
const mapDispatchToProps = dispatch => {
    return {
        number: (val)=> dispatch({type: 'NUMBER', value: val}),
        remove: () => dispatch ({type: 'REMOVE'}),
        result: () => dispatch ({type: 'RESULT'})
    }
}

export default connect(mapStateProps,mapDispatchToProps)(Lock);