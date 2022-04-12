import React from 'react';
import Drawer from '@mui/material/Drawer';
import '../styles/drawer.css';
import Divider from '@mui/material/Divider';
import { useState } from 'react';
import { GrClose } from 'react-icons/gr';
import { useNavigate } from 'react-router-dom';

export default function DrawerComponent({ drawerState, updateDrawerState }) {
  let navigate = useNavigate();

  return (
    <div>
      <Drawer open={drawerState}>
        <div className='container'>
          <GrClose onClick={updateDrawerState} size={'1em'} />
          <h1 className='title'>Yaba tables</h1>
          <div
            className='row'
            onClick={() => {
              navigate('/');
              updateDrawerState();
            }}>
            Income
          </div>
          <Divider />
          <div
            className='row'
            onClick={() => {
              navigate('/monthlysummary');
              updateDrawerState();
            }}>
            Monthly summary
          </div>
          <Divider />
        </div>
      </Drawer>
    </div>
  );
}
