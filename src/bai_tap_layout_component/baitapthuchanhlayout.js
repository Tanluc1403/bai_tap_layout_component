
import React, { Component } from 'react';
import Header from './header';
import Baner from './baner';
import ListItem from './listitem';
import Footer from './footer';

export default class Baitapthuchanhlayout extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className='container'>
          <Baner />
          <ListItem />
        </div>
        
        <Footer/>
      </div>
    )
  }
}

